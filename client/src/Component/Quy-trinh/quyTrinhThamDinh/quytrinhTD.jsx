import React, { useRef, useState } from "react";
import { IoIosArrowRoundDown } from "react-icons/io";
import Footer from "../../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../../Trang-chu/Navbar/navBar.jsx";
import "./quytrinhTD.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import bg from "../../../assets/Quytrình/TD/bg.jpg";
import td from "../../../assets/Quytrình/TD/quytrinhtd.png";
import diengiai from "../../../assets/Quytrình/TD/diengiai.png";

function quytrinhTD() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      {" "}
      <NavBar />
      <LanguageTranslator />
      <div className="h-full w-full">
        <section className="relative w-full h-screen overflow-hidden">
          <LazyLoadImage
            src={bg}
            alt="background"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          {/* Wrapper for text content */}
          <div className="relative z-10 flex justify-start items-center h-full px-8 lg:px-20">
            <div className="text-white max-w-6xl">
              <div className="flex flex-row gap-1 pb-4">
                <a className="font-semibold text-lg lg:text-xl">
                  <b className="text-blue-200">Quy trình Thẩm định</b>
                </a>
                <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-lg lg:text-xl p-[2px]"></i>
              </div>

              <div>
                <span className="text-3xl lg:text-5xl leading-[1.2em] font-extrabold">
                  QUY TRÌNH TƯ VẤN / THẨM ĐỊNH GIÁ
                </span>
              </div>
            </div>
          </div>

          {/* Scroll Down Button */}
          <div className="absolute bottom-10 lg:bottom-20 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleScrollDown}
              className="text-white text-sm flex flex-col items-center focus:outline-none animate-bounce"
            >
              cuộn xuống
              <IoIosArrowRoundDown className="text-3xl" />
            </button>
          </div>
        </section>

        {/* Section 2 - Property Search Card */}
        <section ref={section2Ref} className="py-10 px-4 md:px-8 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Giới thiệu & diễn giải quy trình
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <LazyLoadImage
                src={td}
                alt="Quy Trình"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <LazyLoadImage
                src={diengiai}
                alt="Diễn Giải"
                loading="lazy"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default quytrinhTD;
