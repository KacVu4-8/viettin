import "./Section3.css";
import NavBar from "../../../Trang-chu/Navbar/navBar.jsx";
import Footer from "../../../Trang-chu/Footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import articles from "../Section2/articlesData.js";
import removeVietnameseTones from "../Section3/utils.js";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Section3() {
  const location = useLocation();
  const [article, setArticle] = useState(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Updated formData state to include new fields
  const [formData, setFormData] = useState({
    fullName: "", // "Họ và tên"
    phoneNumber: "", // "Số điện thoại"
    email: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  // Handle form submission with validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset validation errors before new submission
    setValidationErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
    });

    window.open(article.link, "_blank");

    let isValid = true; // Flag to track overall form validity

    // Check if required fields are filled
    if (!formData.fullName) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Vui lòng nhập họ và tên",
      }));
      isValid = false;
    }

    // Validate phone number format
    const phoneNumberRegex = /^\d+$/;
    if (!formData.phoneNumber) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Vui lòng nhập số điện thoại",
      }));
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
      }));
      isValid = false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Vui lòng nhập email",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Địa chỉ email không hợp lệ",
      }));
      isValid = false;
    }

    if (!isValid) {
      return; // Stop submission if validation fails
    }

    try {
      // Updated API call to save to Google Sheets via Node.js backend
      const response = await fetch(
        "https://viettin-server-uzq2.onrender.com/api/appraisal-request", // Update with your backend API URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert(
          "Chúng tôi đã nhận thông tin và liên hệ bạn trong thời gian sớm nhất!"
        );
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
        });
        onOpenChange(); // Close the modal after successful submission
      } else {
        alert(
          "Chúng tôi đã nhận thông tin và liên hệ bạn trong thời gian sớm nhất!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Cuộn lên đầu trang khi render
    window.scrollTo(0, 0);

    // Truy xuất bài viết từ URL
    const pathSegments = location.pathname.split("/tin-tuc/");

    // Lấy slug từ URL
    const slugFromUrl = decodeURIComponent(pathSegments[1]);

    // Tìm bài viết khớp với slug
    const matchedArticle = articles.find(
      (item) => `${removeVietnameseTones(item.description)}` === slugFromUrl
    );

    if (matchedArticle) {
      console.log("✅ Bài viết tìm thấy:", matchedArticle);
      setArticle(matchedArticle);
    } else {
      console.warn("⚠️ Không tìm thấy bài viết phù hợp!");
    }
  }, [location.state, location.pathname]);

  if (!article) {
    return (
      <div>
        <NavBar />
        <div className="terms-container">
          <p>Bài viết không tồn tại hoặc đã bị xóa.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <div className="terms-container">
        <div className="content-wrapper">
          <h1 className="page-title text-2xl font-bold text-gray-800 mb-4">
            {article.description}
          </h1>
          <p className="text-gray-900 text-lg">{article.content5}</p>
          {article.img && (
            <img
              src={article.img}
              alt={article.description}
              className="article-image mb-4 mx-auto block"
            />
          )}
          <p className="text-gray-900 text-lg">{article.content}</p>
          {article.img1 && (
            <img
              src={article.img1}
              alt={article.description}
              className="article-image mb-4 mx-auto block"
            />
          )}
          <p className="text-gray-900 text-lg font-bold">
            {article.description1}
          </p>
          <p className="text-gray-900 text-lg">{article.content1}</p>
          {article.img2 && (
            <img
              src={article.img2}
              alt={article.description}
              className="article-image mb-4 mx-auto block"
            />
          )}
          <p className="text-gray-900 text-lg font-bold">
            {article.description2}
          </p>
          <p className="text-gray-900 text-lg">{article.content2}</p>
          {article.img3 && (
            <img
              src={article.img3}
              alt={article.description}
              className="article-image mb-4 mx-auto block"
            />
          )}
          <p className="text-gray-900 text-lg font-bold">
            {article.description3}
          </p>
          <p className="text-gray-900 text-lg">{article.content3}</p>
          <p className="text-gray-900 text-lg font-bold">
            {article.description4}
          </p>
          <p className="text-gray-900 text-lg">{article.content4}</p>
          {article.title === "Báo cáo thị trường BĐS" ? (
            <>
              <Button
                color="primary"
                endContent={<IoArrowForwardCircleOutline />}
                className="font-['Quicksand'] mt-4"
                onClick={onOpen} // Show form on button click
              >
                Tải file đính kèm
              </Button>

              <Modal
                className="max-h-[90vh]"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
              >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="font-['Quicksand'] text-xl font-semibold">
                        Nhập thông tin để tải file
                      </ModalHeader>
                      <ModalBody>
                        <form
                          onSubmit={handleSubmit}
                          className="flex flex-col gap-4"
                        >
                          <Input
                            label="Họ và tên *"
                            fullWidth
                            required
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            errorMessage={validationErrors.fullName}
                          />
                          <Input
                            label="Số điện thoại *"
                            fullWidth
                            required
                            name="phoneNumber"
                            inputMode="numeric"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            errorMessage={validationErrors.phoneNumber}
                          />
                          <Input
                            label="Email *"
                            type="email"
                            fullWidth
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            errorMessage={validationErrors.email}
                          />
                          <Button
                            color="primary"
                            className="mt-4 font-['Quicksand'] w-full text-bold text-white"
                            type="submit"
                            target="_blank"
                          >
                            Gửi & Tải file
                          </Button>
                        </form>
                      </ModalBody>
                    </>
                  )}
                </ModalContent>
              </Modal>
            </>
          ) : (
            <a
              href={article.link}
              className="text-gray-900 text-lg cursor-pointer underline font-bold"
              target="_blank"
            >
              {article.linktext}
            </a>
          )}

          <br />
          <a
            href={article.link1}
            className="text-gray-900 text-lg cursor-pointer underline"
            target="_blank"
          >
            {article.link1}
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Section3;
