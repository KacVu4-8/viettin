import React from "react";
import Footer from "../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import "./dksd.css";

function dksd() {
  return (
    <div className="terms-container">
      <NavBar />
      <LanguageTranslator />

      <div className="content-wrapper">
        <p className="last-updated">Cập nhật lần cuối: 16/3/2023</p>

        <h1 className="page-title">Điều Khoản Sử Dụng</h1>

        <section className="terms-section">
          <h2 className="font-bold">1. Chính sách bảo mật</h2>
          <p className="text-black">
            Chính sách bảo mật này giải thích cách chúng tôi sử dụng và bảo mật
            dữ liệu cá nhân với các dịch vụ được cung cấp trên Việt Tín. Dữ liệu
            cá nhân là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh,
            âm thanh hoặc tương tự trên môi trường điện tử gắn liền với một con
            người cụ thể hoặc giúp xác định một con người cụ thể.
          </p>
          <h3 className="font-bold">1.1. Thu thập dữ liệu</h3>
          <p className="text-black">
            Dữ liệu cá nhân được thu thập là những thông tin bạn đã công khai
            hoặc chủ động cung cấp cho chúng tôi. Việc thu thập dữ liệu đảm bảo
            tuân thủ quy định của pháp luật hiện hành.
          </p>
          <h3 className="font-bold">1.2. Sử dụng dữ liệu</h3>
          <p className="text-black">
            Chúng tôi có thể sử dụng dữ liệu được phép thu thập với mục đích tối
            ưu hóa trải nghiệm người dùng, phân phối quảng cáo hiển thị và gửi
            email giới thiệu thông tin về sự kiện của Việt Tín.
          </p>
          <h3 className="font-bold">1.3. Bảo mật dữ liệu</h3>
          <p className="text-black">
            Mọi thông tin cá nhân được thu thập sẽ được bảo mật bằng các biện
            pháp cần thiết và sẽ không được cung cấp cho bất kỳ bên thứ ba nào,
            ngoại trừ các trường hợp theo quy định của pháp luật.
          </p>
          <h3 className="font-bold">1.4. Cập nhật/sửa chữa và xóa dữ liệu</h3>
          <p className="text-black">
            Bạn có quyền cập nhật/sửa chữa và xóa dữ liệu cá nhân của bạn; gửi
            yêu cầu xử lý dữ liệu cá nhân của bạn, bằng cách liên hệ đến địa chỉ
            email:{" "}
            <a href="mailto:support@viettinvaluation.com">
              support@viettinvaluation.com
            </a>
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">2. Bản quyền và thương hiệu</h2>
          <p className="text-black">
            Tất cả nội dung, hình ảnh hiển thị trên trang web và ứng dụng của
            Việt Tín đều thuộc quyền sở hữu của Việt Tín và được bảo hộ theo
            quy định của Luật Sở hữu trí tuệ và các văn bản liên quan khác.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">3. Miễn trừ trách nhiệm</h2>
          <p className="text-black">
            Các trang web, ứng dụng Việt Tín có thể liên kết tới nhiều website
            khác. Chúng tôi không chịu trách nhiệm về nội dung thông tin cũng
            như mọi vấn đề xảy ra liên quan đến việc sử dụng các địa chỉ liên
            kết này.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">4. Nội dung người dùng cung cấp</h2>
          <p className="text-black">
            Khi bạn gửi bài viết, bình luận hoặc bất kỳ nội dung nào cho chúng
            tôi đồng nghĩa bạn cho phép chúng tôi sử dụng chúng vô điều kiện,
            miễn phí bản quyền, có thể chuyển nhượng hoàn toàn, vĩnh viễn trên
            toàn thế giới để sử dụng, xuất bản và/hoặc truyền tải.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">5. Ứng dụng</h2>
          <p className="text-black">
            Nội dung "Điều khoản sử dụng" này sẽ được áp dụng với mọi ứng dụng
            của Việt Tín.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">
            6. Thay đổi các điều khoản và điều kiện sử dụng này
          </h2>
          <p className="text-black">
            Việt Tín có quyền sửa đổi, bổ sung, thay thế và/hoặc cắt bỏ một
            phần các quy định này mà không cần báo trước. Vui lòng theo dõi
            thường xuyên vì mọi sửa đổi sẽ có hiệu lực sau khi được đăng tải
            trên các trang web và ứng dụng của chúng tôi.
          </p>
        </section>

        <p className="text-black">
          Mọi ý kiến đóng góp xin gửi về địa chỉ email:{" "}
          <a href="mailto:support@viettinvaluation.com">
            support@viettinvaluation.com
          </a>
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default dksd;
