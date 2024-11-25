import React, { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./section1.css";

// import assets
import bgsection2 from "../../../assets/AboutUs/bgsection2.jpg";
import hdqt from "../../../assets/AboutUs/HĐQT.jpg";
import background from "../../../assets/AboutUs/section1.jpg";
import logo from "../../../assets/AboutUs/ViettinLogo.png";
// import react-icon
import { IoIosArrowRoundDown } from "react-icons/io";
import { ParallaxBanner } from "react-scroll-parallax";

function Section1() {
  const section2Ref = useRef(null);
  const handleScrollDown = () => {
    if (section2Ref.current) {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Section 1 */}
      <section className="relative w-full h-screen overflow-hidden">
        <LazyLoadImage
          src={background}
          alt="background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Wrapper for text content */}
        <div className="relative z-10 flex justify-start items-center h-full px-8 lg:px-20">
          <div className="text-white max-w-6xl">
            <div className="flex flex-row gap-1 pb-4 fade-in-animation">
              <a
                href="/ve-chung-toi"
                className="font-semibold text-lg lg:text-xl"
              >
                VỀ <b className="text-blue-200">VIETTIN VALUATION</b>
              </a>
              <i className="zmdi zmdi-chevron-right text-blue-200 font-semibold text-lg lg:text-xl p-[2px]"></i>
            </div>

            <div>
              <span className="text-3xl xl:ml-14 lg:text-5xl font-extrabold fade-in-slide-up">
                CÔNG TY CỔ PHẦN THẨM ĐỊNH GIÁ VIỆT TÍN
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

      {/* Section 2 - Notice from the Board */}
      <section ref={section2Ref} className="relative w-full">
        <ParallaxBanner
          layers={[
            {
              image: bgsection2,
              speed: -20,
              scale: [1, 1.6],
            },
          ]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
          <div className="absolute items-center justify-center h-auto">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              <center>Câu chuyện của chúng tôi </center>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-4">
          {/* Image of HĐQT with Chairperson Name Overlayed */}
          <div className="relative z-10 flex w-full md:w-3/5 lg:w-1/2 justify-center mb-10 md:mb-0">
            <div className="relative text-center w-full md:w-[90%] lg:w-[80%]">
              <LazyLoadImage
                src={hdqt}
                alt="Board Message"
                loading="lazy"
                className="object-cover w-full h-auto rounded-md shadow-xl hover:shadow-2xl border-gray-400 border-1"
              />
              {/* Overlayed Text on Image */}
              <span className="inset-0 flex items-center justify-center text-black pt-4 text-lg md:text-xl font-semibold">
                Nguyễn Thu Oanh, Chủ tịch Hội đồng Quản trị
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 w-full md:w-1/2 p-8 bg-[#eeeeef] rounded-lg shadow-lg text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed text-justify">
              <strong>Giá trị:</strong> đó là những lợi ích mà khách hàng nhận
              được khi sử dụng dịch vụ của chúng tôi. Chúng tôi là công ty thẩm
              định giá - luôn hướng đến sự chuyên nghiệp mặc dù có quy mô tương
              đối nhỏ. Lý do cho sự thành công của chúng tôi có thể khiến bạn
              ngạc nhiên. Chúng tôi không làm việc nhiều giờ hơn các đối thủ
              cạnh tranh. Tuy nhiên, chúng tôi tạo ra giá trị bằng cách mang lại
              giá trị lớn hơn cho các khách hàng.
              <br /> Kể từ ngày đầu thành lập, chúng tôi hiểu được tầm quan
              trọng của{" "}
              <strong>
                sự tin cậy, đảm bảo dịch vụ chất lượng cao và mối quan hệ gắn
                kết lâu dài{" "}
              </strong>{" "}
              với khách hàng. Thành công của khách hàng là mục tiêu của Việt Tín
              nên chúng tôi đặt khách hàng làm trung tâm và mọi chiến lược phát
              triển của công ty đều xoay quanh khách hàng, kết quả tư vấn của
              chúng tôi mang lại giá trị cho công việc của họ. <br />{" "}
              <strong>Khẩu vị </strong> quản trị rủi ro mà Ban điều hành đặt ra
              cho công ty, cho khách hàng thấm sâu vào tư tưởng và hành động của
              từng CBNV, giúp công ty cam kết cung cấp dịch vụ tốt nhất khi nhận
              thực hiện dịch vụ… Chúng tôi luôn lấy văn hóa tuân thủ đặt lên
              hàng đầu, lấy đạo đức nghề nghiệp là nền tảng đảm bảo lợi ích của
              tổ chức, từ đó hạn chế thấp nhất rủi ro tổn thất tài sản cho khách
              hàng. <br /> <strong>Liên tục</strong> cải tiến, không ngừng học
              hỏi để dẫn đầu - ứng dụng công nghệ vào nghiệp vụ thẩm định giá,
              cải tiến quy trình nhưng vẫn mang lại cho khách hàng chất lượng
              dịch vụ hàng đầu, với mức giá cạnh tranh, từng bước xây dựng niềm
              tin của khách hàng qua thời gian. Và chúng tôi đã làm được. <br />{" "}
              Trong suốt quá trình hoạt động, chúng tôi đã luôn nhắc nhở nhau
              duy trì tinh thần của ngày đầu khởi nghiệp và không ngừng tập
              trung đầu tư vào con người. Việc dành thời gian để phát triển đội
              ngũ có tâm, có chuyên môn giỏi là nhiệm vụ cơ bản của các cấp quản
              lý trong toàn công ty. Điều này giúp tạo nên lợi thế cạnh tranh
              vượt trội, góp phần vào thành công của chúng tôi, giúp chúng tôi
              đạt được các giá trị hữu hình lẫn vô hình. <br />{" "}
              <i>
                Tất cả khách hàng từng làm việc, từng hợp tác với chúng tôi ...
                đều thành công!
              </i>
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full pb-36 md:pb-[16rem]">
        <ParallaxBanner
          layers={[
            {
              image: bgsection2,
              speed: -20,
              scale: [1, 1.6],
            },
          ]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        <div className="flex relative z-10 items-center md:w-full md:mx-0 md:h-full md:px-10 mx-10 justify-center md:p-[15vh_0] p-[10vh_0]">
          <div className="absolute items-center justify-center h-auto">
            <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
              <center>Giới thiệu về ý nghĩa Logo Việt Tín Valuation </center>
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-4">
          {/* Image of HĐQT with Chairperson Name Overlayed */}
          <div className="relative z-10 flex w-full md:w-3/5 lg:w-1/2 justify-center mb-10 md:mb-0">
            <div className="relative text-center w-full md:w-[90%] lg:w-[80%]">
              <LazyLoadImage
                src={logo}
                alt="Board Message"
                loading="lazy"
                className="object-cover w-full h-auto rounded-md shadow-xl bg-white hover:shadow-2xl border-gray-400 border-1"
              />
              {/* Overlayed Text on Image */}
              <span className="inset-0 flex items-center justify-center text-black pt-4 text-lg md:text-xl font-semibold">
                Logo Việt Tín Valuation
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="relative z-10 w-full md:w-1/2 p-8 bg-[#eeeeef] rounded-lg shadow-lg text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed text-justify">
              Với phương châm “Chất lượng dịch vụ hàng đầu”, đội ngũ lãnh đạo
              của Việt Tín Valuation luôn làm việc bằng tâm huyết và sự chân
              thành, xây dựng niềm tin bền vững cho khách hàng trong quá trình
              hợp tác.
              <br /> Logo của Việt Tín Valuation được thiết kế dưới hình thái
              của ba chữ V – vừa đại diện cho tên công ty, vừa thể hiện hình ảnh
              “kiềng ba chân” vững chắc. Ba chữ V này còn biểu trưng cho ba giá
              trị mà doanh nghiệp hướng tới:{" "}
              <strong>Vững chắc – Vươn lên – Vượt trội.</strong> <br /> Để
              truyền tải thông điệp một cách sâu sắc, logo Việt Tín Valuation sử
              dụng ba màu chủ đạo: cam, đỏ và xanh, mỗi màu đều có ý nghĩa
              riêng: <br /> Màu cam tượng trưng cho sự sáng tạo, nhiệt huyết và
              tinh thần trẻ trung, luôn đổi mới để <strong>Vượt trội</strong>.
              Màu đỏ đại diện cho đam mê và sự quyết đoán – thể hiện sự mạnh mẽ
              và tinh thần không ngừng <strong>Vươn lên</strong>. Màu xanh gửi
              gắm sự tin cậy và chuyên nghiệp, mang đến cảm giác an tâm, đồng
              thời thể hiện trách nhiệm với môi trường và phát triển{" "}
              <strong>Vững chắc.</strong> <br /> Sự kết hợp của ba màu sắc này
              tạo nên một tổng thể hài hòa, vừa thể hiện năng lượng tích cực và
              sáng tạo, vừa truyền tải sự tin cậy và ổn định. <br /> Với nền
              tảng vững chắc và tinh thần tiên phong,{" "}
              <strong>Việt Tín Valuation </strong> mong muốn trở thành đối tác
              đáng tin cậy, đồng hành cùng khách hàng trên hành trình đánh giá
              giá trị và phát triển bền vững trong tương lai.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section1;
