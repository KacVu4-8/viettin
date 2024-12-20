import React from "react";
import Footer from "../Trang-chu/Footer/Footer.jsx";
import LanguageTranslator from "../Trang-chu/LanguageTranslator/LanguageTranslator";
import NavBar from "../Trang-chu/Navbar/navBar.jsx";
import "./csbm.css";

function csbm() {
  return (
    <div className="terms-container">
      <NavBar />
      <LanguageTranslator />

      <div className="content-wrapper">
        <p className="last-updated">Cập nhật lần cuối: 16/3/2023</p>

        <h1 className="page-title">Chính sách bảo mật dữ liệu cá nhân</h1>

        <section className="terms-section">
          <h2 className="font-bold">1. Đối tượng và phạm vi áp dụng</h2>
          <p className="text-black">
            Chính sách này điều chỉnh cách thức mà Việt Tín thu thập và xử lý,
            lưu trữ dữ liệu cá nhân của Người dùng sử dụng hoặc tương tác với
            các sản phẩm, trang web, ứng dụng hoặc dịch vụ của Việt Tín. Để
            tránh nhầm lẫn, Chính sách bảo mật dữ liệu này chỉ áp dụng cho người
            dùng là cá nhân. Việt Tín khuyến khích người dùng đọc kỹ Chính sách
            này và thường xuyên kiểm tra trang tin điện tử để cập nhật bất kỳ
            thay đổi nào mà Việt Tín có thể thực hiện theo các điều khoản của
            Chính sách.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">2. Giải thích từ ngữ</h2>
          <h3 className="font-bold">2.1 Người dùng</h3>
          <p>
            Là cá nhân tiếp cận, tìm hiểu, đăng ký, sử dụng hoặc có liên quan
            trong quy trình hoạt động, cung cấp các sản phẩm, dịch vụ của
            Việt Tín.
          </p>
          <h3 className="font-bold">2.2 “Dữ liệu cá nhân” hay “DLCN”</h3>
          <p>
            Là thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh
            hoặc dạng tương tự trên môi trường điện tử gắn liền với một con
            người cụ thể hoặc giúp xác định một con người cụ thể. Dữ liệu cá
            nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm.
          </p>
          <h3 className="font-bold">2.3. Dữ liệu cá nhân cơ bản bao gồm:</h3>
          <p>
            (a) Họ, chữ đệm và tên khai sinh, tên gọi khác (nếu có) <br /> (b)
            Ngày, tháng, năm sinh; ngày, tháng, năm chết hoặc mất tích; <br />
            (c) Giới tính <br />
            (d) Nơi sinh, nơi đăng ký khai sinh, nơi thường trú, nơi tạm trú,
            nơi ở hiện tại, quê quán, địa chỉ liên hệ <br />
            (e) Quốc tịch <br />
            (f) Hình ảnh của cá nhân <br />
            (g) Số điện thoại, số chứng minh nhân dân, số định danh cá nhân, số
            hộ chiếu, số giấy phép lái xe, số biển số xe, số mã số thuế cá nhân,
            số bảo hiểm xã hội, số thẻ bảo hiểm y tế <br />
            (h) Tình trạng hôn nhân
            <br /> (i) Thông tin về mối quan hệ gia đình (cha mẹ, con cái)
            <br /> (j) Thông tin về tài khoản số của cá nhân; dữ liệu cá nhân
            phản ánh hoạt động, lịch sử hoạt động trên không gian mạng <br />
            (k) Các thông tin khác gắn liền với một con người cụ thể hoặc giúp
            xác định một con người cụ thể không thuộc Dữ liệu cá nhân nhạy cảm.
            <br />
            (l) Các dữ liệu khác theo quy định pháp luật hiện hành
          </p>
          <h3 className="font-bold">2.4. Dữ liệu cá nhân nhạy cảm</h3>
          <p>
            Dữ liệu cá nhân gắn liền với quyền riêng tư của cá nhân mà khi bị
            xâm phạm sẽ gây ảnh hưởng trực tiếp tới quyền và lợi ích hợp pháp
            của cá nhân gồm: (a) Quan điểm chính trị, quan điểm tôn giáo <br />
            (b) Tình trạng sức khỏe và đời tư được ghi trong hồ sơ bệnh án,
            không bao gồm thông tin về nhóm máu <br />
            (c) Thông tin liên quan đến nguồn gốc chủng tộc, nguồn gốc dân tộc
            <br />
            (d) Thông tin về đặc điểm di truyền được thừa hưởng hoặc có được của
            cá nhân <br />
            (e) Thông tin về thuộc tính vật lý, đặc điểm sinh học riêng của cá
            nhân <br />
            (f) Thông tin về đời sống tình dục, xu hướng tình dục của cá nhân
            <br />
            (g) Dữ liệu về tội phạm, hành vi phạm tội được thu thập, lưu trữ bởi
            các cơ quan thực thi pháp luật <br />
            (h) Thông tin Người dùng của tổ chức tín dụng, chi nhánh ngân hàng
            nước ngoài, tổ chức cung ứng dịch vụ trung gian thanh toán, các tổ
            chức được phép khác, gồm: thông tin định danh Người dùng theo quy
            định của pháp luật, thông tin về tài khoản, thông tin về tiền gửi,
            thông tin về tài sản gửi, thông tin về giao dịch, thông tin về tổ
            chức, cá nhân là bên bảo đảm tại tổ chức tín dụng, chi nhánh ngân
            hàng, tổ chức cung ứng dịch vụ trung gian thanh toán <br />
            (i) Dữ liệu về vị trí của cá nhân được xác định qua dịch vụ định vị
            <br />
            (j) Dữ liệu cá nhân khác được pháp luật quy định là đặc thù và cần
            có biện pháp bảo mật cần thiết.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">3. Mục đích xử lý dữ liệu cá nhân</h2>
          <p>
            3.1. Việt Tín có thể xử lý dữ liệu cá nhân của Người dùng cho một
            hoặc nhiều mục đích sau đây:
          </p>
          <p>(a) Cung cấp sản phẩm hoặc dịch vụ của Việt Tín</p>
          <p>
            (b) Điều chỉnh, cập nhật, bảo mật và cải tiến các sản phẩm, dịch vụ,
            ứng dụng mà Việt Tín đang cung cấp cho người dùng
          </p>
          <p>
            (c) Xác minh danh tính và đảm bảo tính bảo mật thông tin cá nhân của
            Người dùng;
          </p>
          <p>
            (d) Đáp ứng các yêu cầu dịch vụ và nhu cầu hỗ trợ của Người dùng
          </p>
          <p>
            (e) Thông báo cho Người dùng về những thay đổi đối với các chính
            sách, khuyến mại của các sản phẩm, dịch vụ mà Việt Tín đang cung
            cấp
          </p>
          <p>
            (f) Đo lường, phân tích dữ liệu nội bộ và các xử lý khác để cải
            thiện, nâng cao chất lượng dịch vụ/sản phẩm của Việt Tín hoặc thực
            hiện các hoạt động truyền thông tiếp thị
          </p>
          <p>
            (g) Ngăn chặn và phòng chống gian lận, đánh cắp danh tính và các
            hoạt động bất hợp pháp khác
          </p>
          <p>
            (h) Để có cơ sở thiết lập, thực thi các quyền hợp pháp hoặc bảo vệ
            các khiếu nại pháp lý của Việt Tín, Người dùng hoặc bất kỳ cá nhân
            nào. Các mục đích này có thể bao gồm việc trao đổi dữ liệu với
            Việt Tín và tổ chức khác để ngăn chặn và phát hiện gian lận, giảm
            rủi ro về tín dụng
          </p>
          <p>
            (i) Tuân thủ pháp luật hiện hành, các tiêu chuẩn ngành có liên quan
            và các chính sách hiện hành khác của Việt Tín
          </p>
          <p>
            (j) Bất kỳ mục đích nào khác dành riêng cho hoạt động vận hành của
            Việt Tín
          </p>

          <p>
            3.2. Việt Tín sẽ yêu cầu sự cho phép của Người dùng trước khi sử
            dụng dữ liệu cá nhân của Người dùng theo bất kỳ mục đích nào khác
            ngoài các mục đích đã được nêu tại Điều 3.1 trên, vào thời điểm thu
            thập dữ liệu cá nhân của Người dùng hoặc trước khi bắt đầu xử lý
            liên quan hoặc theo yêu cầu khác hoặc được pháp luật hiện hành cho
            phép.
          </p>
        </section>

        {/* New content on data protection */}
        <section className="terms-section">
          <h2 className="font-bold">4. Bảo mật Dữ liệu cá nhân Người dùng</h2>
          <p>
            4.1. Dữ liệu cá nhân của Người dùng được cam kết bảo mật tối đa theo
            quy định của Việt Tín và quy định của pháp luật. Việc xử lý Dữ liệu
            cá nhân của mỗi Người dùng chỉ được thực hiện khi có sự đồng ý của
            Người dùng, trừ trường hợp pháp luật có quy định khác.
          </p>
          <p>
            4.2. Việt Tín không sử dụng, chuyển giao, cung cấp hay chia sẻ cho
            bên thứ ba nào về Dữ liệu cá nhân của Người dùng khi không có sự
            đồng ý của Người dùng, trừ trường hợp pháp luật có quy định khác.
          </p>
          <p>
            4.3. Việt Tín sẽ tuân thủ các nguyên tắc bảo mật dữ liệu cá nhân
            khác theo quy định pháp luật hiện hành.
          </p>
          <p>
            4.4. Việt Tín sử dụng nhiều công nghệ bảo mật thông tin khác nhau
            nhằm bảo vệ Dữ liệu cá nhân của Người dùng không bị truy lục, sử
            dụng hoặc chia sẻ ngoài ý muốn. Tuy nhiên, không một dữ liệu nào có
            thể được bảo mật 100%. Do vậy, Việt Tín cam kết sẽ bảo mật một cách
            tối đa Dữ liệu cá nhân của Người dùng. Một số hậu quả, thiệt hại
            không mong muốn có thể xảy ra bao gồm nhưng không giới hạn:
          </p>
          <p>
            (a) Lỗi phần cứng, phần mềm trong quá trình xử lý dữ liệu làm mất dữ
            liệu của Người dùng
          </p>
          <p>
            (b) Lỗ hổng bảo mật nằm ngoài khả năng kiểm soát của Việt Tín, hệ
            thống có liên quan bị hacker tấn công gây lộ dữ liệu
          </p>
          <p>
            (c) Người dùng tự làm lộ dữ liệu cá nhân do: bất cẩn hoặc bị lừa
            đảo; truy cập các website/tải các ứng dụng có chứa phần mềm độc
            hại...
          </p>
          <p>
            4.5. Người dùng nên bảo quản thiết bị điện tử trong quá trình sử
            dụng; Người dùng nên khóa, đăng xuất, hoặc thoát khỏi tài khoản trên
            website hoặc ứng dụng của Việt Tín khi không sử dụng.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">
            5. Các loại dữ liệu cá nhân mà Việt Tín thu thập, xử lý
          </h2>
          <p>
            Để Việt Tín có thể cung cấp các sản phẩm, dịch vụ cho Người dùng
            và/hoặc xử lý các yêu cầu của Người dùng, Việt Tín có thể cần phải
            và/hoặc được yêu cầu phải thu thập dữ liệu cá nhân, bao gồm:
          </p>
          <p>
            (a) Dữ liệu cá nhân cơ bản của Người dùng và các cá nhân có liên
            quan của Người dùng
          </p>
          <p>
            (b) Dữ liệu cá nhân nhạy cảm của Người dùng và các cá nhân có liên
            quan của Người dùng
          </p>
          <p>
            (c) Dữ liệu liên quan đến các trang tin điện tử hoặc ứng dụng: dữ
            liệu kỹ thuật (như đã nêu ở trên, bao gồm loại thiết bị, hệ điều
            hành, loại trình duyệt, cài đặt trình duyệt, địa chỉ IP, cài đặt
            ngôn ngữ, ngày và giờ kết nối với trang tin điện tử, thống kê sử
            dụng ứng dụng, cài đặt ứng dụng, ngày và giờ kết nối với ứng dụng,
            dữ liệu vị trí và thông tin liên lạc kỹ thuật khác); chi tiết đăng
            nhập bảo mật; dữ liệu sử dụng, ...
          </p>
          <p>
            (d) Dữ liệu tiếp thị: các mối quan tâm đối với quảng cáo; dữ liệu
            cookie; dữ liệu clickstream; lịch sử duyệt web; phản ứng với tiếp
            thị trực tiếp; và lựa chọn không tham gia tiếp thị trực tiếp.
          </p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">6. Cách thức thu thập dữ liệu cá nhân</h2>
          <p>
            Việt Tín thực hiện thu thập dữ liệu cá nhân từ Người dùng theo các
            phương thức sau:
          </p>
          <h3 className="font-bold">
            6.1. Trực tiếp từ Người dùng bằng các phương tiện khác nhau
          </h3>
          <p>
            (a) Khi Người dùng gửi yêu cầu đăng ký hoặc bất kỳ biểu mẫu nào khác
            liên quan tới các sản phẩm và dịch vụ của Việt Tín; <br />
            (b) Khi Người dùng tương tác với nhân viên dịch vụ Người dùng của
            Việt Tín, ví dụ như thông qua các cuộc gọi điện thoại, thư từ, gặp
            mặt trực tiếp, gửi thư điện tử hoặc tương tác trên mạng xã hội
            <br />
            (c) Khi Người dùng sử dụng các trang web và ứng dụng của Việt Tín{" "}
            <br />
            (d) Khi Người dùng được liên hệ và phản hồi lại các đại diện tiếp
            thị và các nhân viên dịch vụ Người dùng của Việt Tín
            <br />
            (e) Khi Người dùng gửi thông tin cá nhân của mình cho Việt Tín vì
            bất kỳ lý do nào khác, bao gồm cả khi Người dùng đăng ký sử dụng thử
            miễn phí bất kỳ sản phẩm và dịch vụ nào hoặc khi Người dùng thể hiện
            quan tâm đến bất kỳ sản phẩm và dịch vụ nào của Việt Tín
            {/* Add more detailed points from your content */}
          </p>
          <h3 className="font-bold">6.2. Từ các bên thứ ba khác</h3>
          <p>
            (a) Nếu Người dùng tương tác với nội dung hoặc quảng cáo của bên thứ
            ba trên trang tin điện tử hoặc trong ứng dụng, Việt Tín có thể nhận
            được thông tin cá nhân của Người dùng từ bên thứ ba có liên quan,
            theo chính sách bảo mật hiện hành hợp pháp của bên thứ ba đó. <br />
            (b) Nếu Người dùng chọn thanh toán điện tử trực tiếp tới Việt Tín
            hoặc thông qua trang tin điện tử hoặc ứng dụng, Việt Tín có thể
            nhận được dữ liệu cá nhân của Người dùng từ các bên thứ ba, chẳng
            hạn như nhà cung cấp dịch vụ thanh toán, cho mục đích thanh toán đó.
            <br />
            (c) Để tuân thủ các nghĩa vụ của mình theo luật hiện hành, Việt Tín
            có thể tiếp nhận dữ liệu cá nhân về Người dùng từ các cơ quan pháp
            luật và cơ quan công quyền theo quy định pháp luật.
            <br />
            (d) Việt Tín có thể tiếp nhận được dữ liệu cá nhân về Người dùng từ
            các nguồn công khai (như danh bạ điện thoại, thông tin quảng cáo/tờ
            rơi, các thông tin được công khai trên các trang tin điện tử).
            <br />
            Bất cứ khi nào thu thập dữ liệu cá nhân như vậy, Việt Tín sẽ đảm
            bảo việc nhận dữ liệu từ các bên thứ ba có liên quan theo những cách
            hợp pháp, đồng thời yêu cầu các bên thứ ba đó chịu trách nhiệm tuân
            thủ quy định của pháp luật về bảo vệ dữ liệu cá nhân.
            {/* Continue with the remaining points */}
          </p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">7. Tổ Chức Được Xử Lý Dữ Liệu Cá Nhân</h2>
          <p>
            7.1. Việt Tín sẽ thực hiện việc chia sẻ hoặc cùng xử lý dữ liệu cá
            nhân với các tổ chức, cá nhân sau:
          </p>
          <p>
            (a) Các nhà thầu, đại lý, đối tác, các nhà cung cấp dịch vụ vận hành
            của Việt Tín.
          </p>
          <p>
            (b) Các chi nhánh, đơn vị kinh doanh và các cán bộ nhân viên làm
            việc tại các chi nhánh, đơn vị kinh doanh, đại lý của Việt Tín.
          </p>
          <p>
            (c) Các doanh nghiệp kinh doanh viễn thông trong trường hợp Người
            dùng vi phạm nghĩa vụ thanh toán cước dịch vụ.
          </p>
          <p>
            (d) Các cố vấn chuyên nghiệp của Việt Tín như kiểm toán, luật sư,…
            theo quy định của pháp luật.
          </p>
          <p>
            (e) Tòa án, các cơ quan nhà nước có thẩm quyền phù hợp với quy định
            của pháp luật và/hoặc khi được yêu cầu và pháp luật cho phép.
          </p>
          <p>
            7.2. Việt Tín cam kết việc chia sẻ hoặc cùng xử lý dữ liệu cá nhân
            chỉ thực hiện trong trường hợp cần thiết để thực hiện các Mục Đích
            Xử Lý được nêu tại Chính sách này hoặc theo quy định của pháp luật.
            Các tổ chức, cá nhân nhận được dữ liệu cá nhân của Người dùng sẽ
            phải tuân thủ theo nội dung quy định tại Chính sách này và quy định
            của pháp luật về bảo vệ dữ liệu cá nhân liên quan.
          </p>
          <p>
            Mặc dù Việt Tín sẽ thực hiện mọi nỗ lực để đảm bảo rằng các thông
            tin Người dùng được ẩn danh/mã hóa, nhưng không thể loại trừ hoàn
            toàn rủi ro các dữ liệu này có thể bị tiết lộ trong những trường hợp
            bất khả kháng.
          </p>
          <p>
            7.3. Trong trường hợp có sự tham gia của các tổ chức xử lý dữ liệu
            cá nhân khác được nêu tại Điều này, Người dùng đồng ý Việt Tín sẽ
            thông báo cho Người dùng trước khi Việt Tín thực hiện.
          </p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">
            8. Xử lý dữ liệu cá nhân trong một số trường hợp đặc biệt
          </h2>
          <p>
            Việt Tín đảm bảo thực hiện xử lý dữ liệu cá nhân của Người dùng đáp
            ứng đầy đủ các yêu cầu của Pháp luật trong các trường hợp đặc biệt
            nêu sau:
          </p>
          <p>
            8.1. Việt Tín luôn tôn trọng và bảo vệ dữ liệu cá nhân của trẻ em.
            Ngoài các biện pháp bảo vệ dữ liệu cá nhân được quy định theo pháp
            luật, trước khi xử lý dữ liệu cá nhân của trẻ em, Việt Tín sẽ thực
            hiện xác minh tuổi của trẻ em và yêu cầu sự đồng ý của (i) trẻ em
            và/hoặc (ii) cha, mẹ hoặc người giám hộ của trẻ em theo quy định của
            pháp luật.
          </p>
          <p>
            8.2. Bên cạnh tuân thủ theo các quy định pháp luật có liên quan
            khác, đối với việc xử lý dữ liệu cá nhân liên quan đến dữ liệu cá
            nhân của người bị tuyên bố mất tích/ người đã chết, Việt Tín sẽ
            phải được sự đồng ý của một trong số những người có liên quan theo
            quy định của pháp luật hiện hành.
          </p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">
            9. Quyền và Nghĩa Vụ Của Người Dùng Liên Quan Đến Dữ Liệu Cá Nhân
            Cung Cấp Cho Việt Tín
          </h2>

          <h3 className="font-semibold">9.1. Quyền của Người Dùng</h3>

          <p>
            (a) Người dùng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu
            cá nhân của mình, trừ trường hợp luật có quy định khác.
          </p>

          <p>
            (b) Người dùng được quyền truy cập để xem, chỉnh sửa hoặc yêu cầu
            chỉnh sửa Dữ liệu cá nhân của mình bằng văn bản gửi đến Việt Tín,
            trừ trường hợp luật có quy định khác.
          </p>

          <p>
            (c) Người dùng có quyền rút lại sự đồng ý của mình bằng văn bản gửi
            đến Việt Tín, trừ trường hợp pháp luật có quy định khác. Việc rút
            lại sự đồng ý không ảnh hưởng đến tính hợp pháp của việc xử lý dữ
            liệu đã được Người dùng đồng ý với Việt Tín trước khi rút lại sự
            đồng ý.
          </p>

          <p>
            (d) Người dùng được quyền xóa hoặc yêu cầu xóa dữ liệu cá nhân của
            mình bằng văn bản gửi đến Việt Tín, trừ trường hợp luật có quy định
            khác.
          </p>

          <p>
            (e) Người dùng được quyền yêu cầu hạn chế xử lý Dữ liệu cá nhân của
            mình bằng văn bản gửi đến Việt Tín, trừ trường hợp luật có quy định
            khác. Việc hạn chế xử lý dữ liệu sẽ được Việt Tín thực hiện trong
            72 giờ sau khi có yêu cầu của Người dùng, với toàn bộ Dữ liệu cá
            nhân mà Người dùng yêu cầu hạn chế, trừ trường hợp pháp luật có quy
            định khác.
          </p>

          <p>
            (f) Người dùng được quyền yêu cầu Việt Tín cung cấp cho bản thân Dữ
            liệu cá nhân của mình bằng văn bản gửi đến Việt Tín, trừ trường hợp
            luật có quy định khác.
          </p>

          <p>
            (g) Người dùng được quyền phản đối Việt Tín, Tổ Chức Được Xử Lý Dữ
            Liệu Cá Nhân quy định tại Chính sách này xử lý dữ liệu cá nhân của
            mình bằng văn bản gửi đến Việt Tín nhằm ngăn chặn hoặc hạn chế việc
            tiết lộ DLCN hoặc sử dụng DLCN cho mục đích quảng cáo, tiếp thị, trừ
            trường hợp pháp luật có quy định khác. Việt Tín sẽ thực hiện yêu
            cầu của Người dùng trong 72 giờ sau khi nhận được yêu cầu, trừ
            trường hợp luật có quy định khác.
          </p>

          <p>
            (h) Người dùng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy
            định của pháp luật.
          </p>

          <p>
            (i) Người dùng có quyền yêu cầu bồi thường đối với thiệt hại thực tế
            theo quy định của pháp luật nếu Việt Tín có hành vi vi phạm quy
            định về bảo vệ Dữ liệu cá nhân của mình, trừ trường hợp các bên có
            thỏa thuận khác hoặc luật có quy định khác.
          </p>

          <p>
            (j) Người dùng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự,
            luật khác có liên quan, hoặc yêu cầu cơ quan, tổ chức có thẩm quyền
            thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại Điều
            11 Bộ luật Dân sự.
          </p>

          <p>(k) Các quyền khác theo quy định của pháp luật hiện hành.</p>

          <h3 className="font-semibold">9.2. Nghĩa Vụ của Người Dùng</h3>

          <p>
            (a) Tuân thủ các quy định của pháp luật, quy định, hướng dẫn của
            Việt Tín liên quan đến xử lý Dữ liệu cá nhân của Người dùng.
          </p>

          <p>
            (b) Cung cấp đầy đủ, trung thực, chính xác Dữ liệu cá nhân, các
            thông tin khác theo yêu cầu của Việt Tín khi đăng ký và sử dụng
            dịch vụ của Việt Tín và khi có thay đổi về các thông tin này.
            Việt Tín sẽ tiến hành bảo mật Dữ liệu cá nhân của Người dùng căn cứ
            trên thông tin Người dùng đã đăng ký, do đó nếu có bất kỳ thông tin
            sai lệch nào Việt Tín sẽ không chịu trách nhiệm trong trường hợp
            thông tin đó làm ảnh hưởng hoặc hạn chế quyền lợi của Người dùng.
          </p>

          <p>
            (c) Phối hợp với Việt Tín, cơ quan nhà nước có thẩm quyền hoặc bên
            thứ ba trong trường hợp phát sinh các vấn đề ảnh hưởng đến tính bảo
            mật Dữ liệu cá nhân của Người dùng.
          </p>

          <p>
            (d) Tự bảo vệ dữ liệu cá nhân của mình; chủ động áp dụng các biện
            pháp nhằm bảo vệ Dữ liệu cá nhân của mình trong quá trình sử dụng
            dịch vụ của Việt Tín; thông báo kịp thời cho Việt Tín khi phát
            hiện thấy có sai sót, nhầm lẫn về Dữ liệu cá nhân của mình hoặc nghi
            ngờ Dữ liệu cá nhân của mình đang bị xâm phạm.
          </p>

          <p>
            (e) Tự chịu trách nhiệm đối với những thông tin, dữ liệu, chấp thuận
            mà mình tạo lập, cung cấp trên môi trường mạng.
          </p>

          <p>
            (f) Thường xuyên cập nhật các Quy định, Chính sách của Việt Tín
            trong từng thời kỳ được thông báo tới Người dùng hoặc đăng tải trên
            các website và hoặc các kênh giao dịch khác của Việt Tín từng thời
            kỳ.
          </p>

          <p>(g) Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>

          <p>(h) Các trách nhiệm khác theo quy định của pháp luật.</p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">10. Lưu Trữ Dữ Liệu Cá Nhân</h2>
          <p>
            Việt Tín cam kết sẽ chỉ lưu trữ dữ liệu cá nhân của Người dùng
            trong trường hợp liên quan đến các mục đích được nêu trong Chính
            sách này. Việt Tín cũng có thể cần lưu trữ dữ liệu cá nhân của quý
            khách trong một giai đoạn thời gian, chẳng hạn như khi pháp luật
            hiện hành yêu cầu.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">
            11. Xử Lý Dữ Liệu Cá Nhân Có Yếu Tố Nước Ngoài
          </h2>
          <p>
            11.1. Nhằm thực hiện mục đích xử lý dữ liệu cá nhân tại Chính sách
            này, Việt Tín có thể phải cung cấp/chia sẻ dữ liệu cá nhân của
            Người dùng đến các bên thứ ba liên quan của Việt Tín và các bên thứ
            ba này có thể tại Việt Nam hoặc bất cứ địa điểm nào khác nằm ngoài
            lãnh thổ Việt Nam.
          </p>
          <p>
            11.2. Khi thực hiện việc cung cấp/chia sẻ dữ liệu cá nhân ra nước
            ngoài, Việt Tín sẽ yêu cầu bên tiếp nhận đảm bảo rằng dữ liệu cá
            nhân của Người dùng được chuyển giao cho họ sẽ bảo mật và an toàn.
            Việt Tín đảm bảo tuân thủ các nghĩa vụ pháp lý và quy định liên
            quan đến việc chuyển giao dữ liệu cá nhân của Người dùng.
          </p>
          <p>
            11.3. Người dùng tại Liên Minh Châu Âu (EU): Dữ liệu cá nhân của
            Người dùng có thể được truy cập, chuyển giao và/hoặc lưu trữ bên
            ngoài Khu vực Kinh tế Châu Âu (EEA), bao gồm cả các quốc gia có thể
            có mức độ bảo vệ dữ liệu thấp hơn theo luật bảo vệ dữ liệu của EU.
            Việt Tín phải tuân thủ các quy tắc cụ thể khi chuyển Dữ liệu Cá
            nhân từ bên trong EEA ra bên ngoài EEA. Khi đó, Việt Tín sẽ sử dụng
            các biện pháp bảo vệ thích hợp để bảo vệ mọi Dữ liệu Cá nhân được
            chuyển giao.
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">12. Cookies</h2>
          <p>
            12.1. Khi Người dùng sử dụng hoặc truy cập các website, trang tin
            trực tuyến (sau đây gọi chung là “trang tin điện tử”) của Việt Tín,
            Việt Tín có thể đặt một hoặc nhiều cookie trên thiết bị của Người
            dùng. “Cookie” là một tệp nhỏ được đặt trên thiết bị của Người dùng
            khi Người dùng truy cập một trang tin điện tử, nó ghi lại thông tin
            về thiết bị, trình duyệt của Người dùng và trong một số trường hợp,
            sở thích và thói quen duyệt tin điện tử của Người dùng.
          </p>
          <p>
            Việt Tín có thể sử dụng thông tin này để nhận diện Người dùng khi
            Người dùng quay lại các trang tin điện tử của Việt Tín, để cung cấp
            các dịch vụ được cá nhân hóa trên các trang tin điện tử của
            Việt Tín, để biên soạn số liệu phân tích nhằm hiểu rõ hơn về hoạt
            động của trang tin điện tử và để cải thiện các trang tin điện tử của
            Việt Tín. Người dùng có thể sử dụng cài đặt trình duyệt của mình để
            xóa hoặc chặn cookie trên thiết bị của mình. Tuy nhiên, nếu Người
            dùng quyết định không chấp nhận hoặc chặn cookie từ các trang tin
            điện tử của Việt Tín, Người dùng có thể không tận dụng hết tất cả
            các tính năng của các trang tin điện tử của Việt Tín.
          </p>
          <p>
            12.2. Việt Tín có thể xử lý thông tin cá nhân của Người dùng thông
            qua công nghệ cookie, theo các quy định của Điều khoản này.
            Việt Tín cũng có thể sử dụng biện pháp tiếp thị lại để phân phát
            quảng cáo cho những cá nhân mà Việt Tín biết trước đây đã truy cập
            trang tin điện tử của mình.
          </p>
          <p>
            12.3. Trong phạm vi các bên thứ ba đã gán nội dung lên trên các
            trang tin điện tử của Việt Tín (ví dụ: các tính năng truyền thông
            xã hội), các bên thứ ba đó có thể thu thập thông tin cá nhân của
            Người dùng (ví dụ: dữ liệu cookie) nếu Người dùng chọn tương tác với
            nội dung của bên thứ ba đó hoặc sử dụng các dịch vụ của bên thứ ba.
          </p>
        </section>
        <section className="terms-section">
          <h2 className="font-bold">
            13. Thông Tin Liên Hệ Xử Lý Dữ Liệu Cá Nhân
          </h2>
          <p>
            Trường hợp Người dùng có bất kỳ câu hỏi nào liên quan đến Chính sách
            này hoặc các vấn đề liên quan đến quyền của chủ thể dữ liệu hoặc xử
            lý dữ liệu cá nhân của Người dùng, Người dùng hàng có thể sử dụng
            các hình thức liên hệ nêu sau:
          </p>
          <p>
            Gửi thư về Việt Tín theo địa chỉ:{" "}
            <a href="mailto:support@viettinvaluation.com">support@viettinvaluation.com</a>
          </p>
        </section>

        <section className="terms-section">
          <h2 className="font-bold">14. Điều Khoản Chung</h2>
          <p>
            14.1. Chính sách này có hiệu lực từ ngày 01/08/2023. Người dùng hiểu
            và đồng ý rằng, Chính sách này có thể được sửa đổi theo từng thời kỳ
            và được thông báo tới Người dùng thông qua các Kênh giao dịch của
            Việt Tín trước khi áp dụng. Những thay đổi và thời điểm có hiệu lực
            sẽ được cập nhật và công bố tại các Kênh giao dịch và các kênh khác
            của Việt Tín. Việc Người dùng tiếp tục sử dụng dịch vụ sau thời hạn
            thông báo về các nội dung sửa đổi, bổ sung trong từng thời kỳ đồng
            nghĩa với việc Người dùng đã chấp nhận các nội dung sửa đổi, bổ sung
            đó.
          </p>

          <p>
            14.2. Người dùng đã biết rõ và đồng ý bản Chính sách này cũng là
            Thông báo xử lý dữ liệu cá nhân quy định tại Điều 13 Nghị định
            13/NĐ-CP/2023 và được sửa đổi, bổ sung trong từng thời kỳ trước khi
            Việt Tín tiến hành Xử lý dữ liệu cá nhân. Theo đó, Việt Tín không
            cần thực hiện thêm bất kỳ biện pháp nào khác nằm mục đích thông báo
            việc Xử lý dữ liệu cá nhân cho Người dùng.
          </p>

          <p>
            14.3. Người dùng cam kết thực hiện nghiêm túc các quy định tại Chính
            sách này. Các vấn đề chưa được quy định, các Bên thống nhất thực
            hiện theo quy định của pháp luật, hướng dẫn của cơ quan Nhà nước có
            thẩm quyền và/hoặc các sửa đổi, bổ sung Chính sách này được
            Việt Tín thông báo cho Người dùng trong từng thời kỳ.
          </p>

          <p>
            14.4. Người dùng có thể thấy quảng cáo hoặc nội dung khác trên bất
            kỳ trang tin điện tử, ứng dụng hoặc thiết bị nào có thể liên kết đến
            các trang tin điện tử hoặc dịch vụ của các đối tác, nhà quảng cáo,
            nhà tài trợ hoặc các bên thứ ba khác. Việt Tín không kiểm soát nội
            dung hoặc các liên kết xuất hiện trên các trang tin điện tử hoặc
            dịch vụ của bên thứ ba và không chịu trách nhiệm hoặc/và trách nhiệm
            pháp lý đối với các hoạt động được sử dụng bởi các trang tin điện tử
            hoặc dịch vụ của bên thứ ba được liên kết đến hoặc từ bất kỳ trang
            tin điện tử, ứng dụng hoặc thiết bị nào. Các trang tin điện tử và
            dịch vụ này có thể tuân theo các chính sách bảo mật và điều khoản sử
            dụng của riêng của bên thứ ba.
          </p>

          <p>
            14.5. Chính sách này được giao kết trên cơ sở thiện chí giữa
            Việt Tín và Người dùng. Trong quá trình thực hiện nếu phát sinh
            tranh chấp, các Bên sẽ chủ động giải quyết thông qua thương lượng,
            hòa giải. Trường hợp hòa giải không thành, tranh chấp sẽ được đưa ra
            Tòa án nhân dân có thẩm quyền để giải quyết theo quy định của pháp
            luật.
          </p>
        </section>

        {/* Continue with additional sections as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default csbm;
