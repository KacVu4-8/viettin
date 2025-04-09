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

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    requestDetails: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.open(article.link, "_blank");

    setValidationErrors({
      fullName: "",
      phoneNumber: "",
      email: "",
    });

    let isValid = true;

    if (!formData.fullName) {
      setValidationErrors((prev) => ({
        ...prev,
        fullName: "Vui lòng nhập họ và tên",
      }));
      isValid = false;
    }

    const phoneNumberRegex = /^\d+$/;
    if (!formData.phoneNumber) {
      setValidationErrors((prev) => ({
        ...prev,
        phoneNumber: "Vui lòng nhập số điện thoại",
      }));
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phoneNumber)) {
      setValidationErrors((prev) => ({
        ...prev,
        phoneNumber: "Số điện thoại chỉ được bao gồm các chữ số",
      }));
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Vui lòng nhập email",
      }));
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setValidationErrors((prev) => ({
        ...prev,
        email: "Địa chỉ email không hợp lệ",
      }));
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await fetch(
        "https://viettin-server-uzq2.onrender.com/api/appraisal-request",
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
          "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
        );
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          requestDetails: "",
        });
        onClose();
      } else {
        alert(
          "Chúng tôi đã nhận thông tin và sẽ liên hệ bạn trong thời gian sớm nhất!"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const pathSegments = location.pathname.split("/tin-tuc/");
    const slugFromUrl = decodeURIComponent(pathSegments[1]);
    const matchedArticle = articles.find(
      (item) => `${removeVietnameseTones(item.description)}` === slugFromUrl
    );

    if (matchedArticle) {
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
                onClick={onOpen}
              >
                Tải file đính kèm
              </Button>

              <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={onClose}
                className="max-h-[90vh] overflow-y-auto"
              >
                <ModalContent>
                  {() => (
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
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            errorMessage={validationErrors.fullName}
                          />
                          <Input
                            label="Số điện thoại *"
                            fullWidth
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            errorMessage={validationErrors.email}
                          />
                          <Input
                            label="Nội dung yêu cầu"
                            fullWidth
                            name="requestDetails"
                            value={formData.requestDetails}
                            onChange={handleChange}
                          />
                          <Button
                            color="primary"
                            className="mt-4 font-['Quicksand'] w-full text-bold text-white"
                            type="submit"
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
