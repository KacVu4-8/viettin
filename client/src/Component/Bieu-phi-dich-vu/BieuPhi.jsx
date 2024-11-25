import { Image, Link } from "@nextui-org/react";
import React from "react";
import Footer from "../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator.jsx";
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import "./BieuPhi.css";

import bieuphi from "../../assets/AboutUs/bieuphi.png";

function BieuPhi() {
  return (
    <div className="terms-container">
      <NavBar />
      <LanguageTranslator />
      <div className="content-wrapper">
        <h1 className="page-title">
          Biểu phí dịch vụ thẩm định giá <br /> (Thi hành án dân sự){" "}
        </h1>
        <section className="terms-section md:pl-52">
          <Link
            href="https://drive.google.com/file/d/1l2a5lQx3wQnLSYrqPDO2VcWeJGzfIGK3/view?usp=sharing"
            target="_blank"
          >
            <Image
              src={bieuphi}
              loading="lazy"
              className="responsive-image items-center justify-center md:h-[32rem] border-gray-400 border rounded-lg shadow-xl mt-4"
            />
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default BieuPhi;
