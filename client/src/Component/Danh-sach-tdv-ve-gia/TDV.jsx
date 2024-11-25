import React from 'react';
import Footer from "../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import './TDV.css';
import {
  Image,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import tdv from "../../assets/AboutUs/ds_TDV.png"

function TDV() {
  return (
    <div className="terms-container">
      <NavBar />
      <LanguageTranslator />
      <div className="content-wrapper">
        <h1 className="page-title">Danh sách thẩm định viên về giá</h1>
        <section className="terms-section md:pl-52">
          <Link
            href="https://drive.google.com/file/d/1xlMj15S2OiWfV4R1yq04ZoPlVkf34gV9/view?usp=sharing"
            target="_blank"
          >
            <Image
              src={tdv}
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

export default TDV