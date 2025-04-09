import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import articles from "../Section2/articlesData.js";

function Section2() {
  const navigate = useNavigate();
  const [selectedTitle, setSelectedTitle] = useState("Home");
  const categories = [
    "Home",
    "Bất Động Sản",
    "Thẩm Định Giá",
    "Tài Chính - Ngân Hàng",
    "Báo cáo thị trường BĐS",
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Hàm chuyển đổi description thành slug URL
  function removeVietnameseTones(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .toLowerCase();
  }

  const filteredArticles =
    selectedTitle === "Home"
      ? articles
      : articles.filter((article) => article.title === selectedTitle);

  // Xử lý điều hướng khi nhấp vào bài viết
  const handleArticleClick = (article) => {
    if (!article) return;

    const slug = removeVietnameseTones(article.description);
    navigate(`/tin-tuc/${slug}`, {
      state: { article },
    });
  };

  return (
    <div>
      {/* Menu chọn danh mục */}

      <div className="flex justify-center space-x-4 p-4 bg-gray-200">
        <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          <center>Tin tức</center>
        </h1>
      </div>
      <div className="flex justify-center space-x-4 p-4 bg-gray-200">
        {categories.map((title) => (
          <button
            key={title}
            className={`px-4 py-2 rounded-md font-semibold ${
              selectedTitle === title ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            onClick={() => setSelectedTitle(title)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Danh sách bài viết */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <Card
                  className="shadow-lg border border-gray-300 transition-transform transform hover:scale-105"
                  isHoverable
                  isPressable
                >
                  <div className="flex">
                    {/* 1/3 ảnh */}
                    <div className="w-1/3">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-[120px] h-[120px] object-cover rounded-[20px] shadow-lg cursor-pointer"
                        onClick={() => handleArticleClick(article)}
                      />
                    </div>
                    {/* 2/3 title + description */}
                    <div className="w-2/3 p-4 flex flex-col justify-center">
                      {/* <CardHeader className="p-0">
                        <h3 className="text-lg font-semibold cursor-pointer" onClick={() => handleArticleClick(article)}>
                          {article.title}
                        </h3>
                      </CardHeader> */}
                      <CardBody className="p-0">
                        <p
                          className="line-clamp-3 text-gray-700 cursor-pointer font-bold"
                          onClick={() => handleArticleClick(article)}
                        >
                          {article.description}
                        </p>
                      </CardBody>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section2;
