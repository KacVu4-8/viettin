const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const https = require("https");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: [
      "https://viettinvaluation.com",
      "https://viettin.netlify.app",
      "http://localhost:5173",
    ],
  })
);


// Google Sheets API setup
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  (process.env.PRIVATE_KEY || "").replace(/\\n/g, "\n"), // Đảm bảo định dạng khóa đúng
  SCOPES
);

const sheets = google.sheets({ version: "v4", auth });
const SPREADSHEET_ID = process.env.SHEET_ID;

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// const sendEmailNotification = (formData) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "support@viettinvaluation.com",
//     subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
//     text: `
//       Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet: https://docs.google.com/spreadsheets/d/1LgtVuyFPIeKoLPt2pae3Py-bEnzcpOi_/edit?gid=522789202#gid=522789202

//       Full Name: ${formData.fullName}
//       Phone Number: ${formData.phoneNumber}
//       Email: ${formData.email}
//       Request Details: ${formData.requestDetails || "No details provided"}
//     `,
//   };


//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log("Error sending email:", error);
//     } else {
//       console.log("Email sent successfully:", info.response);
//     }
//   });
// };

const sendEmailNotification = (formData) => {
  const { fullName, phoneNumber, email, requestDetails } = formData;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Gửi đến email của bạn
    subject: "Yêu cầu thẩm định giá mới",
    text: `
      Bạn vừa nhận được một yêu cầu thẩm định giá mới từ người dùng:
      - Họ và tên: ${fullName}
      - Số điện thoại: ${phoneNumber}
      - Email: ${email}
      - Nội dung yêu cầu: ${requestDetails || "Không có nội dung cụ thể"}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Lỗi gửi email:", error);
    } else {
      console.log("Email đã được gửi:", info.response);
    }
  });
};


// app.post("/api/appraisal-request", async (req, res) => {
//   const { fullName, email, phoneNumber, requestDetails } = req.body;

//   try {
//     const request = {
//       spreadsheetId: SPREADSHEET_ID,
//       range: "Sheet1!A:D",
//       valueInputOption: "RAW",
//       insertDataOption: "INSERT_ROWS",
//       resource: {
//         values: [[fullName, phoneNumber, email, requestDetails]],
//       },
//     };

//     await sheets.spreadsheets.values.append(request);
//     sendEmailNotification({ fullName, phoneNumber, email, requestDetails });

//     res.status(200).json({
//       message: "Request saved successfully and email notification sent.",
//     });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// });

app.post("/api/send-request", async (req, res) => {
  const formData = req.body;
  console.log(formData)

  try {
    // Ghi dữ liệu vào Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:D", // Cập nhật theo đúng sheet và cột
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [
          [
            formData.fullName,
            formData.phoneNumber,
            formData.email,
            formData.requestDetails || "",
          ],
        ],
      },
    });

    // Gửi thông báo qua email
    sendEmailNotification(formData);

    res.status(200).json({ message: "Yêu cầu đã được gửi thành công!" });
  } catch (error) {
    console.error("Lỗi xử lý yêu cầu:", error);
    res.status(500).json({ message: "Đã xảy ra lỗi khi xử lý yêu cầu." });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Cron job to ping server every 15 minutes
cron.schedule("*/5 * * * *", () => {
  // const url = "https://viettin-be.onrender.com";
  const url = "https://viettin-server-uzq2.onrender.com";

  https
    .get(url, (res) => {
      if (res.statusCode === 200) {
        console.log("Server pinged successfully to prevent sleep.");
      } else {
        console.error(`Server ping failed with status code: ${res.statusCode}`);
      }
    })
    .on("error", (error) => {
      console.error("Error pinging server:", error);
    });
});

