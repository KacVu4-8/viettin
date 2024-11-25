import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

// Import component
import Home from "./Component/Trang-chu/Home/Home";
import VeVietTin from "./Component/Gioi-thieu/Ve-Viet-Tin/VeVietTin.jsx";
import Career from "./Component/Gioi-thieu/tuyen-dung/tuyenDung.jsx";
import Tintuc from "./Component/Gioi-thieu/tin-tuc/tinTuc.jsx";
import Lienhe from "./Component/Gioi-thieu/lien-he/lienHe.jsx";
import QuytrinhKN from "./Component/Quy-trinh/quyTrinhKhieuNai/quytrinhKN.jsx";
import QuytrinhTD from "./Component/Quy-trinh/quyTrinhThamDinh/quytrinhTD.jsx";
import QuytrinhTT from "./Component/Quy-trinh/quyTrinhThanhToan/quytrinhTT.jsx";
import Dksd from "./Component/Dieu-khoan-su-dung/dksd.jsx";
import Csbm from "./Component/Chinh-sach-bao-mat/csbm.jsx";
import TDV from "./Component/Danh-sach-tdv-ve-gia/TDV.jsx";
import BieuPhi from "./Component/Bieu-phi-dich-vu/BieuPhi.jsx";
import Section3 from "./Component/Gioi-thieu/tin-tuc/Section3/Section3.jsx";

// Import component dich vu
import ThamdinhBDS from "./Component/Dich-vu/thamDinhBDS/thamdinhBDS.jsx";
import ThamdinhDS from "./Component/Dich-vu/thamDinhDS/thamdinhDS.jsx";
import ThamdinhDN from "./Component/Dich-vu/thamDinhDN/thamdinhDN.jsx";
import ThamdinhDT from "./Component/Dich-vu/thamDinhDT/thamdinhDT.jsx";
import DichvuTV from "./Component/Dich-vu/dichVuTV/dichvuTV.jsx";

//Create Router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/ve-chung-toi",
    element: (
      <div>
        <VeVietTin />
      </div>
    ),
  },
  {
    path: "/tuyen-dung",
    element: (
      <div>
        <Career />
      </div>
    ),
  },
  {
    path: "/tin-tuc",
    element: (
      <div>
        <Tintuc />
      </div>
    ),
  },
  {
    path: "/lien-he",
    element: (
      <div>
        <Lienhe />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-bds",
    element: (
      <div>
        <ThamdinhBDS />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-ds",
    element: (
      <div>
        <ThamdinhDS />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-tri-doanh-nghiep",
    element: (
      <div>
        <ThamdinhDN />
      </div>
    ),
  },
  {
    path: "/tham-dinh-gia-du-an-dau-tu",
    element: (
      <div>
        <ThamdinhDT />
      </div>
    ),
  },
  {
    path: "/dich-vu-tu-van",
    element: (
      <div>
        <DichvuTV />
      </div>
    ),
  },
  {
    path: "/quy-trinh-khieu-nai",
    element: (
      <div>
        <QuytrinhKN />
      </div>
    ),
  },
  {
    path: "/quy-trinh-tham-dinh",
    element: (
      <div>
        <QuytrinhTD />
      </div>
    ),
  },
  {
    path: "/quy-trinh-thanh-toan",
    element: (
      <div>
        <QuytrinhTT />
      </div>
    ),
  },
  {
    path: "/dieu-khoan-su-dung",
    element: (
      <div>
        <Dksd />
      </div>
    ),
  },
  {
    path: "/chinh-sach-bao-mat",
    element: (
      <div>
        <Csbm />
      </div>
    ),
  },
  {
    path: "/danh-sach-tham-dinh-vien-ve-gia",
    element: (
      <div>
        <TDV />
      </div>
    ),
  },
  {
    path: "/bieu-phi-dich-vu-tham-dinh-gia",
    element: (
      <div>
        <BieuPhi />
      </div>
    ),
  },
  {
    path: "/chi-tiet-tin-tuc",
    element: (
      <div>
        <Section3 />
      </div>
    ),
  },
]);

function App() {
  return (
    <NextUIProvider>
      <ParallaxProvider>
        <RouterProvider router={router} />
      </ParallaxProvider>
    </NextUIProvider>
  );
}

export default App;
