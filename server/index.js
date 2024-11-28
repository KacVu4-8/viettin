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
  process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
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

const sendEmailNotification = (formData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "support@viettinvaluation.com",
    subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
    text: `
      Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet: https://docs.google.com/spreadsheets/d/1LgtVuyFPIeKoLPt2pae3Py-bEnzcpOi_/edit?gid=522789202#gid=522789202

      Full Name: ${formData.fullName}
      Phone Number: ${formData.phoneNumber}
      Email: ${formData.email}
      Request Details: ${formData.requestDetails || "No details provided"}
    `,
  };

  // https://docs.google.com/spreadsheets/d/1LgtVuyFPIeKoLPt2pae3Py-bEnzcpOi_/edit?gid=522789202#gid=522789202
  // https://docs.google.com/spreadsheets/d/1IUQWT6O_6KyZ2VlXPnb1i8iw1tSR9j8UnR0QR5iAvaI/edit?gid=0#gid=0

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};

app.post("/api/appraisal-request", async (req, res) => {
  const { fullName, email, phoneNumber, requestDetails } = req.body;

  try {
    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:D",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      resource: {
        values: [[fullName, phoneNumber, email, requestDetails]],
      },
    };

    await sheets.spreadsheets.values.append(request);
    sendEmailNotification({ fullName, phoneNumber, email, requestDetails });

    res.status(200).json({
      message: "Request saved successfully and email notification sent.",
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Cron job to ping server every 15 minutes
cron.schedule("*/5 * * * *", () => {
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

//-------------------------------------------------------------------------------------

// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { google } = require("googleapis");
// const nodemailer = require("nodemailer");
// const cron = require("node-cron");
// const https = require("https");
// require("dotenv").config();

// const app = express();
// app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: [
//       "https://viettinvaluation.com",
//       "https://viettin.netlify.app",
//       "http://localhost:5173",
//     ],
//   })
// );

// // Google Sheets API setup
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// const auth = new google.auth.JWT(
//   process.env.CLIENT_EMAIL,
//   null,
//   process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n") : null,
//   SCOPES
// );
// const sheets = google.sheets({ version: "v4", auth });
// const SPREADSHEET_ID = process.env.SHEET_ID;

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendEmailNotification = (formData) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "support@viettinvaluation.com",
//     subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
//     text: `
//       Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=0

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

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Cron job to ping server every 15 minutes
// cron.schedule("*/15 * * * *", () => {
//   const url = "https://viettin-server-uzq2.onrender.com";

//   https
//     .get(url, (res) => {
//       if (res.statusCode === 200) {
//         console.log("Server pinged successfully to prevent sleep.");
//       } else {
//         console.error(`Server ping failed with status code: ${res.statusCode}`);
//       }
//     })
//     .on("error", (error) => {
//       console.error("Error pinging server:", error);
//     });
// });


// ------------------------------------------------------------


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { google } = require("googleapis");
// const nodemailer = require("nodemailer");
// const cron = require("node-cron");
// const https = require("https");
// require("dotenv").config();

// const app = express();
// app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: [
//       "https://viettinvaluation.com",
//       "https://viettin.netlify.app",
//       "http://localhost:5173",
//     ],
//   })
// );

// // Google Sheets API setup
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// const auth = new google.auth.JWT(
//   process.env.CLIENT_EMAIL,
//   null,
//   process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/g, "\n") : null,
//   SCOPES
// );



// const sheets = google.sheets({ version: "v4", auth });
// const SPREADSHEET_ID = process.env.SHEET_ID;

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const sendEmailNotification = (formData) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: "support@viettinvaluation.com",
//     subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
//     text: `
//       Có một yêu cầu sử dụng dịch vụ mới được ghi nhận tại sheet: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit#gid=0

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
//     console.log("Error:", error)
//     res.status(500).json({
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// // Cron job to ping server every 15 minutes
// cron.schedule("*/15 * * * *", () => {
//   const url = "https://viettin-server-uzq2.onrender.com";

//   https
//     .get(url, (res) => {
//       if (res.statusCode === 200) {
//         console.log("Server pinged successfully to prevent sleep.");
//       } else {
//         console.error(`Server ping failed with status code: ${res.statusCode}`);
//       }
//     })
//     .on("error", (error) => {
//       console.error("Error pinging server:", error);
//     });
// });

// ------------------------------


// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { google } = require("googleapis");
// const nodemailer = require("nodemailer");
// const cron = require("node-cron");
// const https = require("https");
// require("dotenv").config();

// // App setup
// const app = express();
// app.use(bodyParser.json());
// app.use(cors({ origin: process.env.ALLOWED_ORIGINS.split(",") }));

// // Middleware for logging
// app.use((req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// });

// // Google Sheets setup
// const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
// const auth = new google.auth.JWT(
//   process.env.CLIENT_EMAIL,
//   null,
//   process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
//   SCOPES
// );
// const sheets = google.sheets({ version: "v4", auth });
// const SPREADSHEET_ID = process.env.SHEET_ID;

// // Nodemailer setup
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Helper to send emails
// const sendEmailNotification = async (formData) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: process.env.NOTIFICATION_EMAIL,
//     subject: "Yêu cầu sử dụng dịch vụ Việt Tín",
//     text: `
//       Có một yêu cầu sử dụng dịch vụ mới:
//       - Họ và Tên: ${formData.fullName}
//       - Số điện thoại: ${formData.phoneNumber}
//       - Email: ${formData.email}
//       - Chi tiết yêu cầu: ${formData.requestDetails || "Không có"}
//     `,
//   };

//   try {
//     const info = await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully:", info.response);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };

// // API endpoint
// app.post("/api/appraisal-request", async (req, res) => { // appraisal-request
//   const { fullName, email, phoneNumber, requestDetails } = req.body;

//   if (!fullName || !email || !phoneNumber) {
//     return res.status(400).json({ message: "Thiếu thông tin cần thiết." });
//   }

//   try {
//     const request = {
//       spreadsheetId: SPREADSHEET_ID,
//       range: "Sheet1!A:D",
//       valueInputOption: "RAW",
//       insertDataOption: "INSERT_ROWS",
//       resource: { values: [[fullName, phoneNumber, email, requestDetails]] },
//     };

//     await sheets.spreadsheets.values.append(request);
//     await sendEmailNotification({ fullName, email, phoneNumber, requestDetails });

//     res.status(201).json({ message: "Yêu cầu đã được ghi nhận thành công." });
//   } catch (error) {
//     console.error("Error saving request:", error);
//     res.status(500).json({ message: "Không thể xử lý yêu cầu.", error: error.message });
//   }
// });


// // Ping server to prevent sleep
// cron.schedule("*/15 * * * *", () => {
//   const url = process.env.PING_URL;

//   https
//     .get(url, (res) => {
//       if (res.statusCode === 200) {
//         console.log("Ping thành công.");
//       } else {
//         console.error(`Ping thất bại: ${res.statusCode}`);
//       }
//     })
//     .on("error", (error) => {
//       console.error("Lỗi khi ping server:", error);
//     });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server đang chạy trên cổng ${PORT}`);
// });
