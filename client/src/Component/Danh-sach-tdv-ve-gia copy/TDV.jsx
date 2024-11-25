import React from "react";
import Footer from "../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator.jsx";
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import "./TDV.css";

function TDV() {
  return (
    <div className="terms-container">
      <NavBar />
      <LanguageTranslator />
      <div className="content-wrapper">
        <h1 className="page-title">Danh sách thẩm định viên về giá</h1>
        <section className="terms-section">pdf</section>
      </div>
      <Footer />
    </div>
  );
}

export default TDV;
