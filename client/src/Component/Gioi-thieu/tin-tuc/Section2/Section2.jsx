import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import Section3 from "../Section3/Section3";


import anh1 from '../../../../assets/Tintuc/dinh-gia-dat-1.jpg'
import anh2 from '../../../../assets/Tintuc/giay-to-su-dung-khi-lam-so-do.jpg'
import anh4 from '../../../../assets/Tintuc/andersenglobal-1.jpg'
import anh3 from '../../../../assets/Tintuc/bds-2.jpg'
import anh5 from '../../../../assets/Tintuc/chung-thu.jpg'
import anh6 from '../../../../assets/Tintuc/tham-dinh-gia.jpg'
import anh7 from "../../../../assets/Tintuc/dinh-gia-dat.jpg"
import anh8 from '../../../../assets/Tintuc/BDS-1.png'
import anh9 from "../../../../assets/Tintuc/vang.png"
import anh10 from "../../../../assets/Tintuc/anh-10.png"
import anh11 from "../../../../assets/Tintuc/anh-11.jpg"
import anh12 from "../../../../assets/Tintuc/anh-12.jpg"
import anh13 from "../../../../assets/Tintuc/anh-13.jpg"
import anh14 from "../../../../assets/Tintuc/anh-14.jpg"
import anh15 from "../../../../assets/Tintuc/anh-15.png"
import anh16 from "../../../../assets/Tintuc/anh-16.jpg"
import anh17 from "../../../../assets/Tintuc/anh-17.jpg"
import anh18 from "../../../../assets/Tintuc/anh-18.jpg"
import anh19 from "../../../../assets/Tintuc/anh-19.jpeg"
import anh20 from "../../../../assets/Tintuc/anh-20.jpg"
import anh21 from "../../../../assets/Tintuc/anh-21.jpg"
import anh22 from "../../../../assets/Tintuc/anh-22.jpeg"
import anh23 from "../../../../assets/Tintuc/anh-23.jpg"
import anh24 from "../../../../assets/Tintuc/anh-24.jpg"
import anh25 from "../../../../assets/Tintuc/anh-25.webp"



function Section2() {
  const [articles] = useState([
    {
      title: "Thẩm Định Giá",
      description:
        "VIETTIN VALUATION TRỞ THÀNH COLLABORATING FIRM CỦA ANDERSEN GLOBAL",
      content:
        `Andersen, công ty dịch vụ chuyên nghiệp đa ngành, độc lập và phát triển nhanh nhất thế giới, tiếp tục mở rộng hoạt động định giá toàn cầu và củng cố quan hệ tại Châu Á - Thái Bình Dương thông qua việc bổ sung các công ty hợp tác tại Việt Nam, Thái Lan, Đài Loan, Hàn Quốc, Singapore, Philippines, Malaysia, Trung Quốc, Úc.

        Andersen Global là một hiệp hội quốc tế gồm các công ty thành viên độc lập, tách biệt về mặt pháp lý, bao gồm các chuyên gia về thuế, pháp lý và định giá trên khắp thế giới. Được thành lập vào năm 2013 bởi công ty thành viên Hoa Kỳ Andersen Tax LLC, Andersen Global hiện có hơn 18.000 chuyên gia trên toàn thế giới và hiện diện tại hơn 500 địa điểm thông qua các công ty thành viên và công ty hợp tác của mình.

        "Chúng tôi đã bổ sung một cách chiến lược các nhóm định giá trong năm qua và khu vực Châu Á - Thái Bình Dương mang đến những cơ hội đáng kinh ngạc cho tăng trưởng và đổi mới," Mark L. Vorsatz, Chủ tịch toàn cầu và Giám đốc điều hành của Andersen cho biết. "Việc bổ sung các công ty mới này là minh chứng cho cam kết không ngừng của chúng tôi trong việc cung cấp cho khách hàng quyền truy cập vào các giải pháp liền mạch, tích hợp trên một nền tảng toàn cầu không gì sánh kịp."

        Việc bổ sung các nhóm này mang lại chiều sâu và bề rộng hơn nữa cho hoạt động thẩm định giá của VietTin Valuation, đáp ứng nhu cầu thẩm định giá ngày càng phức tạp, đón đầu các thương vụ lớn vào Việt Nam. Các chuyên gia định giá của VietTin Valuation và Andersen có chung niềm đam mê quản lý và tận dụng hiểu biết thị trường để cung cấp các giải pháp tích hợp cho khách hàng.
      
        Thông cáo từ Andersen Global:
        `,
        img: anh4,
        link: 'https://global.andersen.com/news/andersen-advances-global-valuation-practice-in-10-asia-pacific-countries',
        
    },
    {
      title: "Thẩm Định Giá",
      description:
        "VietTin Valuation trở thành công ty hợp tác với Andersen Global",
      content:
        `Andersen Global và Công ty Cổ phần Thẩm định giá Việt Tín (VietTin Valuation) vừa ký kết hợp đồng hợp tác chiến lược ngày 21/10/2024.

        Thỏa thuận hợp tác này là cơ sở để hai bên đẩy mạnh đầu tư xây dựng các nền tảng mới, phát triển các giải pháp có tính liên kết cao nhằm hỗ trợ khách hàng tối ưu hóa lợi ích trong chiến lược ngắn và dài hạn khi sử dụng dịch vụ thẩm định giá tài sản tại VietTin Valuation. Đây là bước tiến quan trọng nhằm thúc đẩy quá trình chuyển đổi số trong ngành thẩm định giá, hướng tới minh bạch hóa giá trị tài sản trên thị trường.

        Tập khách hàng của VietTin Valuation sẽ có cơ hội mở rộng hơn, đa dạng hơn và vươn tầm ra khỏi lãnh thổ Việt Nam. Ngược lại, khách hàng của Andersen tại Việt Nam và khu vực Châu Á sẽ được cung cấp một chất lượng dịch vụ hàng đầu, giúp tối ưu hóa mục tiêu và tăng năng lực cạnh tranh.

        Mục tiêu của VietTin Valuation và Andersen là tạo nên hệ sinh thái dựa trên thế mạnh của cả hai bên. Đây là một tham vọng lớn, thể hiện tầm nhìn chiến lược của cả hai doanh nghiệp trong việc thúc đẩy chuyển đổi số và cải thiện hiệu quả kinh doanh cho khách hàng. Hiện tại một số chiến lược kinh doanh của VietTin Valuation vẫn còn sớm để chia sẻ, nhưng hứa hẹn một sự đột phá và chứng minh đây là sự lựa chọn đáng tin cậy khi khách hàng cần tư vấn giải pháp trong các thương vụ mua bán tài sản, M&A tại Việt Nam.

        Công ty Cổ phần Thẩm định giá Việt Tín đạt nhiều thành công trong mảng thẩm định giá bất động sản và giá trị doanh nghiệp. Sau gần 15 năm phát triển, VietTin Valuation đang hướng tới trở thành một trong số các công ty thẩm định giá tiên phong khi ứng dụng công nghệ trong thực hiện quy trình thẩm định giá tại Việt Nam. VietTin Valuation với tầm nhìn trở thành công ty thẩm định giá uy tín được ưa thích nhất tại Việt Nam và vươn tầm ra khu vực Châu Á, tạo nên vị thế khác biệt trong nền kinh tế phát triển nhanh và nhiều biến động. Trong năm 2024 vừa qua, VietTin Valuation đã tập trung vào việc phát triển nguồn lực: đầu tư vào đào tạo cho cấp quản lý lãnh đạo và cả nhân viên, xây dựng văn hóa tổ chức, cơ cấu, sắp xếp lại bộ máy tổ chức của công ty để chuẩn bị cho bước chuyển mình sắp tới.

        Sự kết hợp này được kỳ vọng sẽ tạo nên những đột phá, thúc đẩy sự phát triển mạnh mẽ của mảng thẩm định giá doanh nghiệp tại Việt Nam trong tương lai.

        Việc hợp tác chiến lược giữa Andersen và VietTin Valuation không chỉ giúp cung cấp cho khách hàng quyền truy cập vào các giải pháp liền mạch, tích hợp trên một nền tảng toàn cầu mà còn kiến tạo một nét khởi sắc mới về sự chuyên nghiệp cho cộng đồng thẩm định giá tại Việt Nam.

        Cafef :
        `,
        img: anh25,
        link: 'https://cafef.vn/viettin-valuation-tro-thanh-cong-ty-hop-tac-voi-andersen-global-188241122131904768.chn'
    },
    {
      title: "Bất Động Sản",
      description: "Các loại giấy tờ cần thiết sử dụng đất khi làm Sổ đỏ 2024",
      content:
        `Giấy tờ sử dụng đất khi làm Sổ đỏ là những giấy tờ có trong hồ sơ đề nghị cấp Sổ đỏ cho đất có giấy tờ và không có giấy tờ về quyền sử dụng đất. Để được cấp Sổ đỏ thì trước tiên cần chuẩn bị đầy đủ hồ sơ và nộp đúng nơi quy định.
        Giải thích:

        - Đất có giấy tờ về quyền sử dụng đất là trường hợp có một trong các loại giấy tờ quy định tại Điều 137 Luật Đất đai 2024
        
        - Sổ đỏ, Sổ hồng là cách gọi phổ biến của người dân, theo pháp luật đất đai từ ngày 10/12/2009 đến nay khi đủ điều kiện thì người dân được cấp Giấy chứng nhận theo mẫu chung của Bộ Tài nguyên và Môi trường với tên gọi pháp lý là Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở và tài sản khác gắn liền với đất (gọi tắt là Giấy chứng nhận).

        Hồ sơ đề nghị cấp Sổ đỏ cho đất có giấy tờ
        Theo quy định tại khoản 1 Điều 28 của Nghị định Nghị định 101/2024/NĐ-CP đến cơ quan tiếp nhận hồ sơ quy định tại điểm a khoản 1 Điều 21 của Nghị định 101/2024/NĐ-CP, hồ sơ nộp khi thực hiện thủ tục đăng ký, cấp Giấy chứng nhận lần đầu gồm có:

        - Đơn đăng ký, cấp Giấy chứng nhận theo Mẫu số 04/ĐK.

        - Một trong các loại giấy tờ quy định tại Điều 137 Luật Đất đai 2024, khoản 1, khoản 5 Điều 148 Luật Đất đai 2024, khoản 1, khoản 5 Điều 149 Luật Đất đai 2024, sơ đồ nhà ở, công trình xây dựng (nếu có).

        -Trường hợp thửa đất gốc có giấy tờ về quyền sử dụng đất quy định tại Điều 137 Luật Đất đai 2024 mà có phần diện tích đất tăng thêm đã được cấp Giấy chứng nhận thì nộp giấy tờ về việc chuyển quyền sử dụng đất và Giấy chứng nhận đã cấp cho phần diện tích tăng thêm;

        - Giấy tờ về việc nhận thừa kế quyền sử dụng đất theo quy định của pháp luật về dân sự đối với trường hợp nhận thừa kế quyền sử dụng đất chưa được cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất theo quy định pháp luật về đất đai;

        - Giấy tờ về việc nhận thừa kế quyền sử dụng đất theo quy định của pháp luật về dân sự và giấy tờ về việc chuyển quyền sử dụng đất đối với trường hợp quy định tại khoản 4 Điều 45 Luật Đất đai 2024;

        - Giấy tờ về giao đất không đúng thẩm quyền hoặc giấy tờ về việc mua, nhận thanh lý, hóa giá, phân phối nhà ở, công trình xây dựng gắn liền với đất theo quy định tại Điều 140 Luật Đất đai 2024 (nếu có);

        - Giấy tờ liên quan đến xử phạt vi phạm hành chính trong lĩnh vực đất đai đối với trường hợp có vi phạm hành chính trong lĩnh vực đất đai;

        - Hợp đồng hoặc văn bản thỏa thuận hoặc quyết định của Tòa án nhân dân về việc xác lập quyền đối với thửa đất liền kề kèm theo sơ đồ thể hiện vị trí, kích thước phần diện tích thửa đất liền kề được quyền sử dụng hạn chế đối với trường hợp có đăng ký quyền đối với thửa đất liền kề;

        - Văn bản xác định các thành viên có chung quyền sử dụng đất của hộ gia đình đang sử dụng đất đối với trường hợp hộ gia đình đang sử dụng đất;

        - Mảnh trích đo bản đồ địa chính thửa đất (nếu có);

        - Hồ sơ thiết kế xây dựng công trình đã được cơ quan chuyên môn về xây dựng thẩm định hoặc đã có văn bản chấp thuận kết quả nghiệm thu hoàn thành hạng mục công trình, công trình xây dựng theo quy định của pháp luật về xây dựng đối với trường hợp chứng nhận quyền sở hữu công trình xây dựng trên đất nông nghiệp mà chủ sở hữu công trình không có một trong các loại giấy tờ quy định tại Điều 149 Luật Đất đai 2024 hoặc công trình được miễn giấy phép xây dựng theo quy định của pháp luật về xây dựng;

        - Trường hợp quy định tại điểm a khoản 6 Điều 25 Nghị định 101/2024/NĐ-CP thì nộp Quyết định xử phạt vi phạm hành chính trong lĩnh vực đất đai, trong đó có thể hiện biện pháp khắc phục hậu quả là buộc đăng ký đất đai; chứng từ nộp phạt của người sử dụng đất;

        - Chứng từ đã thực hiện nghĩa vụ tài chính, giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có);

        - Trường hợp nhận chuyển quyền sử dụng đất, quyền sở hữu nhà ở, công trình xây dựng mà chưa thực hiện thủ tục chuyển quyền theo quy định của pháp luật thì nộp giấy tờ về việc chuyển quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất có chữ ký của bên chuyển quyền và bên nhận chuyển quyền;

        - Trường hợp hộ gia đình, cá nhân có nhu cầu cấp Giấy chứng nhận quyền sử dụng đất, quyền sở hữu tài sản gắn liền với đất đối với nhà ở, công trình xây dựng thuộc trường hợp phải xin phép xây dựng quy định tại khoản 3 Điều 148 Luật Đất đai 2024, khoản 3 Điều 149 Luật Đất đai 2024 thì nộp giấy xác nhận của cơ quan có chức năng quản lý về xây dựng cấp huyện về đủ điều kiện tồn tại nhà ở, công trình xây dựng đó theo quy định của pháp luật về xây dựng (nếu có).
        
        Hồ sơ đề nghị cấp Sổ đỏ cho đất không có giấy tờ
        Căn cứ, đối với đất không có giấy tờ về quyền sử dụng đất thì hộ gia đình, cá nhân cần chuẩn bị 01 bộ hồ sơ như sau:

        1. Đơn đăng ký, cấp Giấy chứng nhận theo Mẫu số 04/ĐK.

        2. Chứng từ thực hiện nghĩa vụ tài chính; giấy tờ liên quan đến việc miễn, giảm nghĩa vụ tài chính về đất đai, tài sản gắn liền với đất (nếu có).

        3. Trong từng trường hợp cụ thể phải có xác nhận của UBND cấp xã về việc đất không có tranh chấp, sử dụng ổn định lâu dài theo quy định tại khoản 38 Điều 3 của Luật Đất đai và khoản 4, khoản 5 Điều 34 của Nghị định 101/2024/NĐ-CP.

        Lưu ý: Ngoài các giấy tờ trên nếu đi làm thay người đang sử dụng đất, nhà ở thì phải có giấy hoặc hợp đồng ủy quyền.

        Kết luận: Có thể thấy giấy tờ sử dụng đất khi làm Sổ đỏ (thành phần hồ sơ) được chia thành 02 trường hợp; nếu thành phần hồ sơ không đầy đủ thì bộ phận tiếp nhận hồ sơ sẽ từ chối và hướng dẫn bổ sung hồ sơ theo quy định.`,
        img: anh2,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Một số lưu ý khi xác định chi phí phân bổ đối với dự án có đất giao, đất thuê trả tiền một lần và đất thuê trả tiền hàng năm",
      content:
        `Các hội đồng định giá đất cần lưu ý để định giá đất phù đối với dự án gồm cả đất giao, đất thuê trả tiền hàng năm, đất thuê trả tiền 1 lần với bản chất của phương pháp Thặng dư. 

        Theo khoản 7, điều 6 Nghị định 71/2024/NĐ-CP qui định về giá đất thì trường hợp khu đất có diện tích giao đất có thu tiền sử dụng đất (sau đây gọi là giao đất), có diện tích cho thuê đất trả tiền thuê đất một lần cho cả thời gian thuê (sau đây gọi là cho thuê đất) thì giá đất của thửa đất cần định giá quy định tại khoản 6 Điều này được xác định theo tổng doanh thu phát triển và tổng chi phí phát triển của từng phần diện tích giao đất, cho thuê đất.Trong đó, tổng chi phí xây dựng kết cấu hạ tầng kỹ thuật của dự án được xác định trong chi phí đầu tư xây dựng quy định tại khoản 3 Điều này được thực hiện theo quy định của pháp luật về xây dựng. Việc qui định nêu trên chỉ đề cập đến dự án giao đất và (hoặc) cho thuê đất trả tiền 1 lần mà chưa đề cập đến dự án có cả hình thức cho thuê đất theo hình thức trả tiền thuê đất hàng năm. Theo qui định tại Điều 159 Luật đất đai 2024 thì đất thuê trả tiền hàng năm tính bằng Bảng giá đất.
        
        Trong đó, tổng chi phí xây dựng kết cấu hạ tầng kỹ thuật của dự án được xác định trong chi phí đầu tư xây dựng quy định tại khoản 3 Điều này được thực hiện theo quy định của pháp luật về xây dựng.
        
        Việc qui định nêu trên chỉ đề cập đến dự án giao đất và (hoặc) cho thuê đất trả tiền 1 lần mà chưa đề cập đến dự án có cả hình thức cho thuê đất theo hình thức trả tiền thuê đất hàng năm.
        
        Theo qui định tại Điều 159 Luật đất đai 2024 thì đất thuê trả tiền hàng năm tính bằng Bảng giá đất.
        
        Như vậy, với qui định tại khoản 7, điều 6 nêu trên thì nếu như có cả diện tích thuê đất trả tiền hàng năm thì sẽ có ý kiến cho rằng tổng chi phí xây dựng kết cấu hạ tầng (sau đây viết tắt là chi phí HTKT) của dự án bao gồm cả chi phí hạ tầng xây dựng của diện tích đất thuê trả tiền hàng năm sẽ chỉ phân bổ cho diện tích giao đất và diện tích cho thuê đất trả tiền một lần.
        
        Đối với dự án giao đất và (hoặc) cho thuê đất trả tiền 1 lần và cho thuê đất trả tiền thuê đất hàng năm thì tổng chi phí xây dựng kết cấu HTKT sẽ phải được phân bổ cho từng loại diện tích giao đất/cho thuê đất trả tiền 1 lần và cho thuê đất trả tiền hàng năm để tính chi phí HTKT cho từng loại diện tích giao đất, cho thuê đất trả tiền và cho thuê đất trả tiền hàng năm bởi vì phần diện tích đất thuê trả tiền hàng năm đã được xác định giá bằng bảng giá đất thì điều đó không có nghĩa là chủ đầu tư đươc phân bổ chi phí HTKT vào diện tích đất khác vì chủ đầu tư phải đầu tư chi phí HTKT cho phần diện tích đất thuê trả tiền hàng năm để được hưởng giá đất thuê bằng bảng giá đất.
        
        Nhà nước thu tiền thuê đất đối với đất không có hạ tầng dự án và chủ đầu tư sẽ đầu tư hạ tầng để khai thác theo mục đích sử dụng mà nhà nước cho phép. Nếu chi phí hạ tầng của phần đất thuê trả tiền hàng năm được phân bổ vào phần diện tích đất được giao và hoặc được thuê trả tiền 1 lần thì có nghĩa là nhà nước đầu tư hạ tầng và cho chủ đầu tư vào thuê đất đã có hạ tầng đối với phần diện tích đất thuê trả tiền hàng năm. Và đất thuê trả tiền hàng năm này chủ đầu tư được sử dụng và khai thác lợi ích kinh tế chứ không phải như trường hợp chủ đầu tư đầu tư hạ tầng xong bàn giao lại cho chính quyền địa phương quản lý (nếu chủ đầu tư bàn giao lại diện tích đất đó cho chính quyền địa phương quản lý thì chi phí đầu tư HTKT đó sẽ được phân bổ cho phần diện tích mà chủ đầu tư được giao/cho thuê đất trả tiền 1 lần).
        
        Ví dụ, thửa đất có diện tích 10.000 m2 gồm 3.000 m2 đất ở, 2.000 m2 đất TMDV thuê trả tiền 1 lần và 5.000 m2 đất thuê trả tiền hàng năm . Tổng chi phí đầu tư HTKT của cả dự án là 10 tỷ đồng. Như vậy chi phí HTKT phân bổ cho đất ở sẽ là 10 tỷ/10.000m2 * 3.000m2 = 3 tỷ đồng, tương tự cách tính thì chi phí HTKT phân bổ cho đất TMDV là 2 tỷ đồng và đất thuê trả tiền hàng năm là 5 tỷ đồng chứ không phải 10 tỷ đồng chi phí đầu tư HTKT phân bổ cho 3.000 m2 đất ở (là 10.000 tỷ/5.000m2 (gồm 3.000m2 đất ở + 2.000m2 đất thuê trả tiền một lần) * 3.000m2 đất ở = 6 tỷ đồng)) và cho 2.000 m2 đất thuê trả tiền 1 lần (là 4 tỷ đồng)
        
        Do vậy, khi thực hiện định giá đất đối với dự án gồm cả đất giao và (hoặc) đất thuê trả tiền hàng năm và đất thuê trả tiền 1 lần thì các hội đồng định giá đất cần lưu ý nội dung này để định giá đất phù hợp với bản chất của phương pháp Thặng dư.`,
        img: anh1,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Ban hành Chuẩn mực thẩm định giá BĐS mới, làm rõ phương pháp thặng dư",
      content:
        `Bộ Tài chính vừa ban hành Thông tư 42/2024 quy định Chuẩn mực thẩm định giá Việt Nam về Thẩm định giá BĐS với trọng tâm là phương pháp thặng dư. Thông tư có hiệu lực từ 5/8. 

        Theo đó, Chuẩn mực thẩm định giá Việt Nam về Thẩm định giá BĐS ban hành kèm Thông tư 42/2024 quy định và hướng dẫn về thẩm định giá bất động sản khi thẩm định giá theo quy định của pháp luật về giá.
        
        Tuy nhiên, chuẩn mực này không áp dụng đối với trường hợp định giá đất theo quy định của pháp luật về đất đai.

        Theo đó, thẩm định viên về giá, doanh nghiệp thẩm định giá thực hiện hoạt động cung cấp dịch vụ thẩm định giá theo quy định của pháp luật về giá; tổ chức, cá nhân thực hiện hoạt động thẩm định giá của Nhà nước và các tổ chức, cá nhân yêu cầu thẩm định giá, bên thứ ba sử dụng báo cáo thẩm định giá theo hợp đồng thẩm định giá (nếu có) là những đối tượng áp dụng chuẩn mực.

        Theo Thông tư 42, các cách tiếp cận áp dụng trong thẩm định giá bất động sản bao gồm cách tiếp cận từ thị trường, cách tiếp cận từ chi phí và cách tiếp cận từ thu nhập theo quy định tại Chuẩn mực thẩm định giá Việt Nam hoặc sử dụng kết hợp các cách tiếp cận.

        Phương pháp thẩm định giá sử dụng trong thẩm định giá bất động sản bao gồm các phương pháp thẩm định giá thuộc các cách tiếp cận hoặc kết hợp các cách tiếp cận từ thị trường, chi phí và thu nhập (như phương pháp thặng dư).

        Căn cứ vào đặc điểm của bất động sản cần thẩm định giá, mục đích thẩm định giá, thời điểm thẩm định giá, cơ sở giá trị thẩm định giá, các thông tin và số liệu về bất động sản cần thẩm định giá có thể thu thập được để lựa chọn cách tiếp cận và phương pháp thẩm định giá phù hợp.

        Đáng chú ý, Chuẩn mực thẩm định giá Việt Nam về Thẩm định giá bất động sản dành hẳn một chương II để quy định rõ về phương pháp thặng dư. Theo đó, Giá trị tài sản thẩm định giá sẽ được tính bằng việc lấy Tổng doanh thu phát triển trừ đi Tổng chi phí phát triển.

        Trong chương này, việc xác định Tổng doanh thu phát triển của bất động sản được xác định là tổng doanh thu dự kiến có được của bất động sản thầm dịnh giá phù hợp với mục đích sử dụng tốt nhất và có hiệu quả nhất của bất động sản.

        Tổng doanh thu phát triển của bất động sản được xác định trên cơ sở điều tra khảo sát, thu thập các thông tin về giá chuyển nhượng, giá cho thuê và các yếu tố khác hình thành doanh thu (như thời gian bán hàng, thời điểm bắt đầu bán hàng, tỷ lệ bán hàng, tỷ lệ lấp đầy) của tối thiểu 03 bất động sản có đặc điểm tương tự với dự án dự kiến đầu tư xây dựng tại khu vực có bất động sản thẩm định giá hoặc khu vực có khả năng sinh lợi, điều kiện kết cấu hạ tầng kỹ thuật và hạ tầng xâ hội tương đương có tính đến xu hướng và mức độ biến động của giá chuyển nhượng, giá cho thuê và các yếu tố khác hình thành doanh thu của dự án dự kiến đầu tư xây dựng trong tương lai. Khi xác định tổng doanh thu phát triển cần phân tích và đánh giá về khả năng thực hiện, hoàn thành và đưa vào vận hành, khai thác dự án theo tiến độ đầu tư đà cam kết và theo các quy định hiện hành về bất động sản.

        Việc xác định mức biến động của giá chuyển nhượng, giá cho thuê và các yếu tố khác hình thành doanh thu căn cứ vào kết quả điều tra, khảo sát thị trường hoặc số liệu công bố của cơ quan thống kê hoặc cơ quan quản lý thị trường bất động sản, đảm bảo phù hợp mức biến động của thị trường bất động sản qua các năm.

        Tổng doanh thu phát triển được xác định thông qua cách tiếp cận từ thị trường hoặc cách tiếp cận từ thu nhập.

        Trong trường hợp tổng doanh thu phát triển chi phát sinh trong cùng 01 năm, doanh thu phát triển được tính toán theo mặt bằng giá tại thời điểm thẩm định giá đối với bất động sản sau khi đầu tư xây dựng bán lại toàn bộ sản phầm tại thời điểm thẩm định giá.

        Trong trường hợp quá trình phát triển kéo dài nhiều năm, sau khi xây dựng cho thuê để kinh doanh hoặc cho thuê một phần để kinh doanh hoặc bán từng phần bất động sản qua nhiều năm, việc chuyển đồi tổng doanh thu phát triền của bất động sản về thời điểm thẩm định giá được thực hiện theo công thức được quy định tại Chuẩn mực ban hành kèm Thông tư 42.

        Về Tổng chi phí phát triền của bất động sản, Chuẩn mực ban hành kèm Thông tư 42 quy định toàn bộ các chi phí phát triển cần thiết dự kiến đầu tư vào bất động sản thẩm định giá, phù hợp với quy định của pháp luật (về các định mức kinh tế - kỹ thuật, tiêu hao nguyên nhiên vật liệu và hạch toán chi phí sản xuất, đầu tư) và đáp ứng được mục đích sử dụng tốt nhất và có hiệu quả nhất của bất động sàn thẩm định giá.

        Kiến nghị áp dụng sớm phương pháp Thặng dư khi ban hành Nghị định Chính phủ về giá đất

        Liên quan đến các quy định về định giá đất, đặc biệt là phương pháp thặng dư, mới đây tại cuộc họp rà soát, hoàn thiện dự thảo Nghị định của Chính phủ quy định về giá đất, ông Nguyễn Tiến Thỏa, Chủ tịch Hội Thẩm định giá Việt Nam (VVA) cho biết VVA đồng tình và thống nhất cao với những tiếp thu của Bộ TN&MT là cơ quan chủ trì soạn thảo Dự thảo Nghị định về giá đất.

        Theo đó, Chủ tịch VVA Nguyễn Tiến Thỏa cho rằng, các cập nhật liên quan đến 3 nội dung quy định gắn với việc xác định giá đất theo phương pháp thặng dư là phù hợp và đảm bảo các yêu cầu của thực tiễn.

        Cụ thể, cập nhật Dự thảo Nghị định về giá đất đã đưa chi phí trượt giá vào chi phí phát triển cũng như bổ sung các chi phí khác theo quy định của pháp luật về xây dựng vào chi phí phát triển.

        Bên cạnh đó, Dự thảo Nghị định về giá đất hiện cũng cập nhật quan điểm về việc lợi nhuận của nhà đầu tư phải đảm bảo tính trên các chi phí bỏ ra để xây đựng dự án, không được loại lợi nhuận của các chủ thầu, nhà thầu.

        Từ những tiếp thu tích cực của Dự thảo Nghị định về giá đất, đặc biệt là các quy định liên quan đến phương pháp thặng dư cũng như yêu cầu đặt ra từ thực tiễn, Chủ tịch VVA Nguyễn Tiến Thỏa đề xuất cho thực hiện phương pháp thặng dư từ ngày ký để tháo gỡ ách tắc hiện tại của không ít dự án bị dừng lại do đang phải chờ hướng dẫn trong công tác xác định giá đất hiện nay trên cả nước.
        `,
        img: anh3,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Hồ sơ thẩm định giá phải được lưu trữ tối thiểu 10 năm",
      content:
        `Bộ Tài chính vừa ban hành Thông tư số 30/2024/TT-BTC ban hành các chuẩn mực thẩm định giá Việt Nam về quy tắc đạo đức nghề nghiệp thẩm định giá, phạm vi công việc thẩm định giá, cơ sở giá trị thẩm định giá, hồ sơ thẩm định giá.

        Thông tư quy định rõ chuẩn mực thẩm định giá Việt Nam về hồ sơ thẩm định giá.

        Theo đó, người thực hiện hoạt động thẩm định giá có trách nhiệm lập hồ sơ thẩm định giá để chứng minh quá trình thẩm định giá đã được thực hiện theo đúng các Chuẩn mực thẩm định giá Việt Nam.

        Hồ sơ thẩm định giá bao gồm toàn bộ những thông tin, tài liệu cần thiết, phục vụ cho quá trình thẩm định giá tài sản để hình thành kết quả thẩm định giá cuối cùng.

        Tài liệu trong hồ sơ thẩm định giá phải được phân loại, sắp xếp theo thứ tự và được thể hiện trên giấy, phim ảnh hay những vật mang tin khác theo quy định của pháp luật hiện hành.

        Thành phần của từng hồ sơ thẩm định giá có thể khác biệt căn cứ vào mục đích thẩm định giá và loại tài sản cần thẩm định giá.

        Hồ sơ thẩm định giá được khai thác, sử dụng theo quy định của pháp luật về giá và pháp luật về lưu trữ. Việc khai thác Hồ sơ thẩm định giá phải đảm bảo tính bảo mật theo quy định của pháp luật.

        Hồ sơ thẩm định giá được đưa vào lưu trữ bằng giấy và/hoặc dữ liệu điện tử, thời hạn lưu trữ tối thiểu là 10 năm kể từ ngày phát hành Chứng thư thẩm định giá tại doanh nghiệp thẩm định giá hoặc chi nhánh doanh nghiệp thẩm định giá phát hành Chứng thư thẩm định giá.

        Hồ sơ thẩm định giá đưa vào lưu trữ cần có:

        a) Bản gốc Báo cáo thẩm định giá;

        b) Bản gốc Chứng thư thẩm định giá;

        c) Bản gốc hoặc sao y bản chính hợp đồng thẩm định giá và biên bản thanh lý hợp đồng thẩm định giá (nếu có), hoặc bản gốc văn bản đề nghị/yêu cầu thẩm định giá (nếu có);

        d) Thông tin, tài liệu về tài sản thẩm định giá (hoặc doanh nghiệp cần thẩm định giá khi xác định giá trị doanh nghiệp), các tài sản so sánh (nếu có);

        e) Báo cáo của chuyên gia được mời cung cấp ý kiến chuyên môn (nếu có);

        g) Biên bản khảo sát, thông tin thu thập được để hình thành kết quả thẩm định giá: ảnh chụp, các tài liệu, thông tin cần thiết khác (nếu có);

        h) Những tài liệu phân tích, đánh giá của thẩm định viên (nếu có).

        Doanh nghiệp thẩm định giá phải có biện pháp để duy trì tính bảo mật, an toàn, toàn vẹn, có khả năng tiếp cận và phục hồi được của hồ sơ thẩm định giá trong thời hạn lưu trữ. Đối với hồ sơ thẩm định giá đã hết thời hạn lưu trữ, được tiêu hủy theo quy định của pháp luật.

        Chứng thư thẩm định giá

        Theo Thông tư, chứng thư thẩm định giá có thể được phát hành dưới dạng điện tử với chữ ký điện tử theo quy định của pháp luật về giao dịch điện tử trên cơ sở hợp đồng thẩm định giá hoặc yêu cầu thẩm định giá.

        Mẫu chứng thư thẩm định giá được quy định tại Phụ lục I ban hành kèm theo Chuẩn mực thẩm định giá Việt Nam về hồ sơ thẩm định giá.

        Chứng thư thẩm định giá bao gồm các nội dung cơ bản sau: Số hợp đồng thẩm định giá và/hoặc văn bản yêu cầu/đề nghị thẩm định giá; Tên và địa chỉ của doanh nghiệp thẩm định giá, hoặc chi nhánh doanh nghiệp thẩm định giá; Thông tin về khách hàng thẩm định giá; Thông tin chính về tài sản thẩm định giá (tên và chủng loại tài sản, đặc điểm cơ bản về mặt pháp lý và kinh tế - kỹ thuật...); Mục đích thẩm định giá; Thời điểm thẩm định giá; Cơ sở giá trị thẩm định giá; Tên cách tiếp cận và tên phương pháp thẩm định giá; Giá trị tài sản thẩm định giá; Họ tên, số thẻ thẩm định viên về giá và chữ ký của thẩm định viên được giao chịu trách nhiệm thực hiện thẩm định giá đã ký Báo cáo thẩm định giá; Thời hạn có hiệu lực của chứng thư thẩm định giá.

        Thời gian có hiệu lực của chứng thư thẩm định giá được xác định trên cơ sở đặc điểm pháp lý, kinh tế - kỹ thuật của tài sản thẩm định giá; biến động về pháp lý, thị trường liên quan đến tài sản thẩm định giá và mục đích thẩm định giá nhưng tối đa không quá 6 tháng kể từ thời điểm phát hành chứng thư thẩm định giá.

        Thông tư này có hiệu lực thi hành kể từ ngày 01/7/2024.
        `,
        img: anh5,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Để hành nghề tư vấn giá đất, các cá nhân cần đáp ứng điều kiện gì?",
      content:
        `Chính phủ vừa ban hành Nghị định 71/2024/NĐ-CP quy định về giá đất, trong đó có quy định về các điều kiện để cá nhân hành nghề tư vấn xác định giá đất.

        Theo đó, tại Điều 36 Nghị định số 71/2024/NĐ-CP quy định cá nhân được hành nghề tư vấn xác định giá đất trong tổ chức tư vấn xác định giá đất khi có đủ các điều kiện sau:

        Cá nhân có bằng tốt nghiệp đại học trở lên thuộc các ngành hoặc chuyên ngành về quản lý đất đai, địa chính, bất động sản, thẩm định giá, kinh tế, tài chính, kế toán, kiểm toán, ngân hàng.

        Cá nhân có thời gian công tác thực tế theo ngành hoặc chuyên ngành đào tạo từ 36 tháng trở lên sau khi có bằng tốt nghiệp ngành hoặc chuyên ngành quy định tại điểm a khoản này tính đến ngày đăng ký danh sách định giá viên, thay đổi, bổ sung danh sách định giá viên.

        Có Giấy chứng nhận đã hoàn thành khóa đào tạo, bồi dưỡng nghiệp vụ về giá đất do các cơ sở đào tạo, bồi dưỡng nghiệp vụ về giá đất quy định tại khoản 3 Điều này.

        Trường hợp cá nhân đã được cấp Thẻ thẩm định viên về giá theo quy định của pháp luật về giá thì không cần đáp ứng các điều kiện quy định trên (khoản 1 Điều 36).

        Về phía các cơ sở đào tạo, bồi dưỡng nghiệp vụ về giá đất, cần đảm bảo điều kiện là cơ sở giáo dục đại học, cơ sở giáo dục nghề nghiệp, cơ sở đào tạo bồi dưỡng cán bộ công chức, viên chức hoặc các tổ chức đào tạo khác do Nhà nước thành lập, cho phép hoạt động theo quy định của pháp luật.

        Đồng thời, cơ sở đào tạo, bồi dưỡng nghiệp vụ về giá đất phải có ít nhất 03 giảng viên cơ hữu, người được mời thỉnh giảng đạt tiêu chuẩn, trình độ chuyên môn, nghiệp vụ theo quy định của pháp luật, có trình độ thạc sĩ trở lên thuộc các ngành, chuyên ngành về quản lý đất đai, địa chính, bất động sản, thẩm định giá, kinh tế, tài chính, kế toán, kiểm toán, ngân hàng và có kinh nghiệm công tác từ 10 năm trở lên liên quan trực tiếp đến chuyên đề giảng dạy.

        Ngoài ra, các cơ sở đào tạo, bồi dưỡng nghiệp vụ về giá đất cần xây dựng kế hoạch đào tạo, bồi dưỡng nghiệp vụ về giá đất báo cáo Bộ Tài nguyên và Môi trường để theo dõi, kiểm tra trong quá trình hoạt động.

        Kế hoạch đào tạo, bồi dưỡng nghiệp vụ về giá đất bao gồm các nội dung:

        - Thời gian, hình thức đào tạo, bồi dưỡng trong đó thời gian học trực tiếp tập trung đảm bảo tối thiểu là 60% tổng thời lượng khóa đào tạo.

        - Hồ sơ năng lực của đội ngũ giảng viên dự kiến giảng dạy (bao gồm giảng viên cơ hữu và người được mời thỉnh giảng).

        - Giáo trình và tài liệu dự kiến giảng dạy được xây dựng trên cơ sở khung chương trình đào tạo, bồi dưỡng nghiệp vụ về giá đất do Bộ Tài nguyên và Môi trường ban hành.

        - Bộ câu hỏi thi sát hạch hoàn thành khóa đào tạo, bồi dưỡng nghiệp vụ về giá đất.

        Cơ sở đào tạo, bồi dưỡng nghiệp vụ về giá đất phải tiến hành đánh giá quá trình tham gia đào tạo của người học, tổ chức sát hạch hoàn thành khóa đào tạo, bồi dưỡng nghiệp vụ về giá đất, cấp Giấy chứng nhận hoàn thành khóa đào tạo, bồi dưỡng nghiệp vụ về giá đất và thực hiện lưu trữ thông tin trong vòng 10 năm trở lên.
        `,
        img: anh6,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Nhiều khó khăn trong việc định giá tài sản trong tố tụng hình sự",
      content:
        `Do nhiều nguyên nhân khác nhau, quá trình thực hiện định giá tài sản trong tố tụng hình sự, Hội đồng thẩm định giá tài sản thường xuyên trong tố tụng hình sự ở các cấp vẫn gặp phải nhiều khó khăn khi thực hiện các đề nghị định giá tài sản của cơ quan điều tra.
        
        Căn cứ Bộ luật Tố tụng hình sự năm 2015, Chính phủ ban hành Nghị định số 30/2018/NĐ-CP ngày 07/3/2018 và Nghị định số 97/2019/NĐ-CP ngày 23/12/2019 sửa đổi, bổ sung một số điều của Nghị định số 30/2018/NĐ-CP ngày 7/3/2018 quy định chi tiết việc thành lập và hoạt động của Hội đồng định giá tài sản; trình tự, thủ tục định giá tài sản trong TTHS theo yêu cầu của cơ quan có thẩm quyền tiến hành tố tụng khi cần xác định giá của tài sản để giải quyết vụ án hình sự.

        Bộ Tài chính đã ban hành Thông tư 43/2018/TT-BTC ngày 07/5/2018, sau đó ban hành Thông tư 30/2020/TT-BTC hướng dẫn Nghị định số 30/2018/NĐ-CP; Nghị định số 97/2019/NĐ-CP quy định chi tiết về hoạt động chuyên môn cũng như tổ chức kinh phí hoạt động của Hội đồng thẩm định giá tài sản thường xuyên trong tố tụng hình sự (sau đây viết tắt là Hội đồng thẩm định giá hoặc Hội đồng).

        Mặc dù các quy định tương đối chi tiết, tuy nhiên, do nhiều nguyên nhân khác nhau, trong quá trình thực hiện, Hội đồng thẩm định giá các cấp vẫn gặp phải nhiều khó khăn khi thực hiện các đề nghị định giá tài sản của cơ quan điều tra.

        Qua quá trình thực tế cung cấp dịch vụ thẩm định giá, ông Ngô Gia Cường, Giám đốc Công ty TNHH Thẩm định giá và Giám định Việt Nam (VAI) đưa ra một số vướng mắc điển hình thường gặp phải và kiến nghị phương hướng giải quyết như sau:

        Nhân lực, điều kiện hoạt động của Hội đồng định giá

        Theo quy định, thành phần Hội đồng thẩm định giá đều là công nhân viên chức tại các cơ quan hành chính theo đề nghị của cơ quan chuyên môn về lĩnh vực tài chính cùng cấp để định giá các loại tài sản khi có yêu cầu giám định tài chính (định giá tài sản) của cơ quan có thẩm quyền tiến hành tố tụng (cơ quan cảnh sát điều tra).

        Đây là khối lượng công việc kiêm nhiệm thêm, ngoài chức năng nhiệm vụ thường xuyên được giao, do đó các thành viên Hội đồng có hạn chế về thời gian cũng như về kiến thức chuyên môn về định giá, thẩm định giá trong khi Nghị định số 30/2018/NĐ-CP quy định công việc phải tiến hành khi định giá tài sản theo đúng nguyên tắc, trình tự, thủ tục định giá tài sản bao gồm: xác định căn cứ định giá tài sản; Khảo sát tài sản cần định giá; khảo sát giá; thu thập thông tin liên quan đến tài sản cần định giá; xác định Phương pháp định giá tài sản và tổ chức phiên họp định giá tài sản để thống nhất ban hành Biên bản họp và kết luận định giá.

        Các quy định hướng dẫn chi tiết trình tự thực hiện định giá tài sản do thành viên Hội đồng trực tiếp thực hiện đã được rút ngắn hơn nhiều so với công việc của thẩm định viên độc lập theo Luật giá 2013, nhưng theo Luật Giá 2023 quy định về thẩm định giá Nhà nước cũng phải thực hiện đầy đủ quy trình như của thẩm định giá độc lập dẫn đến là khối lượng công việc rất lớn đối với cá nhân thành viên Hội đồng trong khi cơ sở dữ liệu phục vụ định giá vẫn phải thu thập trên thị trường, yêu cầu nhiều kiến thức, kinh nghiệm chuyên ngành … dẫn đến các thành viên Hội đồng không thể trực tiếp thực hiện công tác định giá mà thường thuê tổ chức có chức năng thẩm định giá thực hiện theo Luật Giá, sau khi ban hành kết quả tư vấn sẽ họp Hội đồng để quyết định giá tài sản theo yêu cầu của cơ quan điều tra.

        Xác định tài sản cần định giá

        Tài sản cần định giá trong tố tụng hình sự rất đa dạng, phức tạp do các điều kiện tiếp cận với hiện trạng chất lượng của loại tài sản trong tố tụng hình sự đều xảy ra trong quá khứ, ngoại trừ tài sản mới chưa sử dụng, các tài sản đã qua sử dụng rất khó xác nguyên trạng chất lượng ngay trước thời điểm định giá (thời điểm xảy ra hành vi phạm tội) do tài sản có thể đã thất lạc hoặc đã bị hủy hoại; Đối với trường hợp này, việc định giá tài sản chỉ được thực hiện theo hồ sơ của tài sản trên cơ sở các thông tin, tài liệu thu thập được về tài sản cần định giá do cơ quan điều tra cung cấp (Điều 219 Bộ luật Tố tụng hình sự 2015) trong khi thông tin về chất lượng của tài sản trong quá khứ rất hạn chế khó thu thập, cơ quan điều tra cũng khó chứng minh.

        Xác định thị trường của tài sản

        Đối với tài sản là hàng cấm như: động vật hoang dã, chế phẩm từ động vật hoang dã, vũ khí, vật liệu nổ, ma túy … không xác định được thị trường chính thức trong nước, việc thu thập thông tin thị trường phải thu thập từ nguồn tin không chính thức (do nguồn thông tin không hợp pháp) hoặc phải thu thập thông tin từ nước ngoài rồi giả định được chuyển về Việt Nam (phải đặt giả thiết đặc biệt) theo giá trị ước tính tăng thêm không có căn cứ bao gồm: chi phí vận chuyển, lưu thông, lợi nhuận bán hàng phổ biến trên thông tin cơ sở thị trường.

        Đối với tài sản là hàng giả việc thu thập thông tin thị trường cũng dựa trên thị trường không chính thức, việc thu thập thông tin chỉ có thể thực hiện qua khảo sát, phỏng vấn thông qua phiếu điều tra chứ không thể chứng minh bằng báo giá, hóa đơn cụ thể của người bán, thiếu mức độ tin cậy, khó chứng minh; Đối với Tài sản là hàng nhái, hàng giả hiện quy định rất phức tạp, do quy định xác định giá tài sản theo giá của hàng thật hoặc giá của tài sản tương tự (điểm đ, khoản 2 Điều 17 Nghị định 30/2028/NĐ-CP) dẫn đến việc xác định giá theo thị trường hàng thật sẽ cho kết quả định giá rất cao và ngược lại, việc sử dụng thông tin là hàng tương tự (hàng giả) là sẽ giảm giá trị tài sản định giá rất lớn dẫn đến xác định khung phạm tội cũng sẽ thay đổi.

        Xác định thời điểm định giá

        Theo Điều 10 của Nghị quyết số: 03/2020/NQ-HĐTP ngày 30/12/2020 của Hội đồng Thẩm phán Tòa án nhân dân Tối cao hướng dẫn áp dụng một số quy định của bộ luật hình sự trong xét xử tội phạm tham nhũng và tội phạm khác về chức vụ quy định về Xác định trị giá tài sản bị chiếm đoạt, thiệt hại do tội phạm tham nhũng, tội phạm khác về chức vụ gây ra như sau:

        “1. Trị giá tài sản bị chiếm đoạt làm căn cứ xử lý hình sự được xác định tại thời điểm thực hiện hành vi phạm tội. Trường hợp tội phạm thực hiện liên tục, kéo dài thì trị giá tài sản bị chiếm đoạt được xác định tại thời điểm kết thúc hành vi phạm tội. Đối với trường hợp hành vi phạm tội đang diễn ra nhưng bị phát hiện, ngăn chặn thì trị giá tài sản bị chiếm đoạt được xác định tại thời điểm hành vi phạm tội bị phát hiện, ngăn chặn.

        2. Thiệt hại tài sản làm căn cứ để xử lý hình sự tùy từng trường hợp cụ thể được xác định như sau:

        a) Trường hợp thiệt hại xảy ra tại thời điểm tội phạm được thực hiện thì thiệt hại được xác định tại thời điểm này; đối với tội phạm liên tục, kéo dài thì thiệt hại được xác định tại thời điểm tội phạm được phát hiện ngăn chặn hoặc tội phạm kết thúc.

        b) Trường hợp thiệt hại xảy ra hoặc kéo dài sau khi tội phạm được thực hiện hoặc sau khi tội phạm đã kết thúc thì thiệt hại được xác định tại thời điểm thiệt hại được ngăn chặn.

        c) Trường hợp không thể xác định được thiệt hại theo hướng dẫn tại điểm a, điểm b khoản 2 Điều này thì thiệt hại được xác định tại thời điểm khởi tố vụ án.”

        Như vậy, thời điểm trung cầu định giá trong tố tụng hình sự chỉ xác định 1 thời điểm duy nhất, thời điểm định giá chỉ xác định tại thời điểm phạm tội hoặc thời điểm khởi tố vụ án (nếu không xác định tại thời điểm phạm tội). Tuy nhiên, khi tiếp cận với thông tin đề nghị thẩm định giá, cơ quan cảnh điều tra vẫn thường yêu cầu 2 thời điểm trong quá khứ bao gồm thời điểm phạm tội và thời điểm khởi tố là chưa phù hợp với Nghị quyết số: 03/2020/NQ-HĐTP.

        Khó khăn về thu thập thông tin thị trường trong quá khứ

        Việc thu thập thông tin chuyển nhượng hay rao mua, rao bán trên thị trường trong các thời điểm trong quá khứ là rất khó khăn, xuất phát từ việc đăng tin là thỏa thuận dân sự và lo ngại về trách nhiệm, nghĩa vụ của người cung cấp thông tin hoặc của các bên tham gia chuyển nhượng tài sản khi giá chuyển nhượng thực tế khác với giá ghi trên hợp đồng.

        Theo quy định của Tiêu chuẩn thẩm định giá (nay là Chuẩn mực thẩm định giá) theo Luật Giá 2023 và quy định của Luật Đất đai 2024 về định giá đất, việc thu thập thông tin thị trường làm căn cứ thẩm định giá, định giá (sau đây viết chung là thẩm định giá) chỉ được thực hiện trước 24 tháng tính đến thời điểm định giá. Trong tố tụng hình sự, để đến được giai đoạn yêu cầu định giá thường kéo dài trên 6 tháng tính từ thời điểm phạm tội hoặc khởi tố nên việc thu thập thông tin thị trường rất khó khăn, ví dụ như sau:

        Đối với bất động sản: Các thông tin rao mua, rao bán trên các trang thương mại điện tử chỉ lưu trên không gian mạng trong thời hạn nhất định, sau đấy sẽ chỉ còn lưu giữ trong cơ sở dữ liệu nội bộ của chủ sở hữu trang điện tử. Các thông tin này hầu hết do trung gian (môi giới) đăng tin thường có điều khoản cam kết bảo mật thông tin người bán hoặc thông tin về địa chỉ không rõ ràng, chính xác để bắt buộc người cần sử dụng thông tin phải liên hệ với trung gian để được dẫn đi xem tài sản (có tính phí xem tài sản hoặc phí môi giới nếu giao dịch thành công) dẫn đến thẩm định viên về giá, định giá viên (sau đây viết chung là thẩm định viên) không thể tiếp cận với các thông tin đăng trong quá khứ này đúng theo quy định (xác định địa chỉ, khảo sát thực tế, thu thập thông tin về các yếu tố tác động đến giá) nếu nói rõ mục đích thu thập thông tin hoặc không nói rõ mục đích khác hợp lý, thuyết phục được cũng không thể thu thập được thông tin.

        Đối với động sản: thường là ô tô, xe máy có thông tin đặc điểm kỹ thuật rõ ràng, có quy định về đăng ký sở hữu cũng gặp tình trạng tương tự, các thông tin rao mua rao bán trong quá khứ cũng không còn tồn tại trên không gian mạng quá 6 tháng; việc liên hệ với các showroom, gara, cửa hàng bán xe cũng gặp phải khó khăn hơn vì phải tìm được nơi bán của tối thiểu 03 thông tin chuyển nhượng trong khoảng 24 tháng trong quá khứ của đúng loại tài sản thẩm định giá mới có thể sử dụng được; Các yêu cầu này dẫn đến thẩm định viên hầu như không thể tiếp cận được nguồn thông tin thị trường, đấy là chưa kể đến các loại tài sản khác không yêu cầu đăng ký sở hữu và thông tin kỹ thuật đa dạng, phức tạp thì hầu như không thể tìm được nguồn cung cấp được thông tin trên thị trường.

        Chúng tôi đã trực tiếp làm việc với một số tổ chức sở hữu website mua bán bất động sản, ô tô - xe máy để đặt vấn đề mua thông tin trong quá khứ, nhưng đều bị từ chối với lý do có ràng buộc điều khoản bảo mật thông tin với người đăng tin và nhất là việc phải tiết lộ mục đích sử dụng thông tin vào thẩm định giá trong tố tụng hình sự càng làm cho người cung cấp thông tin lo ngại bị ảnh hưởng đến trách nhiệm, quyền lợi của người đăng tin và trách nhiệm của người cung cấp thông tin nên không thể thu thập được.

        Hiện nay, các nguồn thông tin chuyển nhượng của bất động sản hoặc ô tô, xe máy còn được lưu giữ tại các Văn phòng đăng ký đất đai hoặc Tổ chức công chứng, tuy nhiên qua khảo sát thực tế giá ghi trong các hợp đồng chuyển nhượng không chính xác, thường thấp hơn rất nhiều giá trị giao dịch thực tế để hạn chế phải nộp các khoản thuế chuyển nhượng (thuế TNCN) nên giá ghi trong hợp đồng cũng không có mức độ tin cậy để sử dụng. Đặc biệt, theo điểm b, khoản 3 Điều 158 Luật Đất đai 2024 quy định giá đất chuyển nhượng trên thị trường phải được ghi nhận theo giá trên hợp đồng chuyển nhượng thành công trong khi quy định này chưa tính đến tập quán giao dịch 2 giá như hiện nay sẽ có mức độ tin cậy rất thấp.

        Việc chỉ được thu thập các thông tin trước thời điểm định giá gây ra rất nhiều hạn chế về thông tin thị trường như đối với các tài sản là hàng hóa tại thời điểm định giá mới đưa ra lưu thông trên thị trường chủ yếu thông tin giao dịch của tài sản so sánh sẽ có sau thời điểm định giá nhưng không được sử dụng.

        Chính sách quy định hỗ trợ cung cấp thông tin trong hoạt động định giá trong tố tụng hình sự hiện nay.

        Theo khoản 3 Điều 5 của Nghị định số 30/2018/NĐ-CP quy định trách nhiệm của cơ quan, tổ chức, cá nhân đối với hoạt động định giá tài sản trong tố tụng hình sự như sau:

        “3. Cơ quan, tổ chức, cá nhân liên quan khác có trách nhiệm cung cấp tài liệu, thông tin liên quan đến tài sản cần định giá; tạo điều kiện để Hội đồng định giá thực hiện việc khảo sát giá, thu thập thông tin liên quan đến tài sản cần định giá, phục vụ cho việc định giá của Hội đồng theo quy định của Nghị định này.”

        Tuy nhiên, quy định này chỉ yêu cầu hỗ trợ đối với Hội đồng định giá, tức là thành viên Hội đồng trực tiếp thực hiện; Tổ chức thẩm định giá không thuộc đối tượng Cơ quan, tổ chức, cá nhân liên quan bắt buộc phải cung cấp thông tin nên việc thu thập thông tin trên thị trường của tổ chức thẩm định giá là vô cùng khó khăn, dẫn đến không thể cung cấp dịch vụ thẩm định giá cho Hội đồng đảm bảo đúng chất lượng, yêu cầu của pháp luật về thẩm định giá.

        Giải pháp nào cho định giá tài sản trong tố tụng hình sự?

        Được biết, Bộ Tài chính đang chủ trì lấy ý kiến góp ý vào Dự thảo Nghị định Quy định chi tiết việc thành lập và hoạt động của Hội đồng định giá tài sản; trình tự, thủ tục định giá tài sản trong tố tụng hình sự, tôi xin có một số đề xuất góp ý vào Dự thảo như sau:

        Thứ nhất: Sớm hoàn thiện cơ sở dữ liệu về giá Quốc gia

        Điều 38 Luật Giá 2023 quy định về Cơ sở dữ liệu về giá quy định như sau:

        Cơ sở dữ liệu quốc gia về giá được xây dựng phục vụ công tác quản lý nhà nước về giá, thẩm định giá và các nhu cầu của xã hội, do Bộ Tài chính thống nhất quản lý. Thông tin được cung cấp từ Cơ sở dữ liệu quốc gia về giá là một trong các nguồn thông tin phục vụ công tác quản lý nhà nước và nhu cầu của xã hội. Tổ chức, cá nhân có nhu cầu được cung cấp thông tin từ Cơ sở dữ liệu quốc gia về giá và phải trả giá dịch vụ theo quy định của Bộ Tài chính.

        Khoản 1 Điều 23 Nghị định 85/2024/NĐ-CP quy định về xây dựng cơ sở dữ liệu về giá như sau:

        “1. Cơ sở dữ liệu về giá là tập hợp thông tin, dữ liệu về giá của hàng hóa, dịch vụ dưới dạng điện tử, được chuẩn hóa, số hóa, lưu trữ, quản lý, sắp xếp, tổ chức, truy cập, khai thác thông qua phương tiện điện tử theo quy định tại Luật Giá, Nghị định này và các văn bản quy phạm pháp luật khác có liên quan.”

        Với các quy định này, Chính phủ có thể ban hành quy định cụ thể về việc yêu cầu cung cấp thông tin từ các website thương mại điện tử, các chủ đầu tư, tổ chức môi giới bất động sản sở hữu các thông tin rao mua - rao bán của khách hàng; Các thông tin bán hàng (niêm yết công khai giá bán theo Luật Giá) phải cung cấp thông tin cho cơ sở dữ liệu về giá Quốc gia theo quy định đã có để hoạt động thẩm định giá, định giá có đầy đủ thông tin thị trường nhắm đáp ứng không chỉ nhu cầu định giá của các thành phần kinh tế trong xã hội mà còn của các các yêu cầu định giá của Nhà nước theo đúng quy định của pháp luật .

        Thứ hai: cần có quy định trong trường hợp cần thiết hoặc theo yêu cầu của tổ chức thẩm định giá yêu cầu cơ quan cảnh sát điều tra (đơn vị trưng cầu định giá tài sản trong Tố tụng hình sự) hoặc Hội đồng định giá cử người trực tiếp hỗ trợ, giám sát hoạt động khảo sát, thu thập thông tin thị trường (thông tin TSSS) theo hình thức phỏng vấn, ghi nhận qua phiếu khảo sát, để nâng cao chất lượng, mức độ tin cậy của thông tin

        Thứ ba: cho phép thu thập thông tin thị trường của tài sản sau thời điểm thẩm định giá, trong đó ưu tiên gần nhất về thời điểm, khoảng cách của thông tin tài sản của tài sản so sánh có thể thu thập được so với thời điểm, vị trí tài sản định giá hoặc cho phép thu thập thông tin thị trường tại thời điểm thực hiện thẩm định giá và được điều chỉnh về thời điểm thẩm định giá nếu thị trường tài sản thẩm định giá có các chỉ số có thể quy đổi và hoặc thu thập ý kiến của người cung cấp thông tin về biến động giá tại thời điểm định giá so với thời điểm thực hiện thẩm định giá.

        Để đảm bảo công bằng với các trường hợp có liên quan đến kết quả thẩm định giá, định giá có liên quan trong vụ án, việc thu thập, sử dụng thông tin thị trường sau thời điểm thẩm định giá không áp dụng đối với các trường hợp tài sản cần định giá trong tố tụng hình sự có liên quan đến kết quả thẩm định giá đã ban hành liên quan đến vụ án

        Thứ tư: Cho phép thông tin thị trường đối với các tài sản là hàng cấm được sử dụng thông tin phỏng vấn thể hiện trên phiếu thu thập thông tin và người cung cấp thông tin với nội dung đảm bảo khách quan, trung thực; Không phải chịu trách nhiệm về thông tin được cung cấp, không cần ký vào phiếu khảo sát; Không sử dụng thông tin thu thập được trong chứng thư thẩm định giá để xác định trách nhiệm của người cung cấp thông tin

        Thứ năm: Cơ quan cảnh sát điều tra chỉ yêu cầu định giá tài sản tại một thời điểm theo đúng nội dung của Nghị quyết 03/2020/NQ-HĐTP

        Thứ sáu: Tổ chức thẩm định giá căn cứ vào các quy định của hệ thống chuẩn mực thẩm định giá và căn cứ định giá tài sản quy định tại Nghị định này để thu thập thông tin thị trường
        `,
        img: anh7,
    },
    {
      title: "Bất Động Sản",
      description: "Cam Ranh - Chương mới của du lịch chủ động và ngắn ngày",
      content:
        `Với sự phát triển mạnh mẽ của các tuyến cao tốc kết nối với các thành phố lớn, Cam Ranh đang dần trở thành điểm đến lý tưởng cho những chuyên du lịch ngắn ngày, chỉ trong 2-4 giờ di chuyển, mở ra chương mới cho du lịch ngắn ngày. Đây là một trong những xu hướng du lịch mới đang nổi bật tại Việt Nam và trên thế giới: du lịch chủ động, nhanh chóng và dễ dàng.

        Xu hướng du lịch chủ động: Nhanh, Gọn, Gần

        Theo dữ liệu từ nền tảng Klook công bố hồi giữa năm: đi nhiều, nhanh, gọn, gần thay vì những kỳ nghỉ dài hơi là xu hướng mới của người Việt với 58% lượt bình chọn. Tỷ lệ này ở Châu Á- Thái Bình Dương là 68%.

        Trong đó, các điểm đến có sự kết nối vượt trội về hạ tầng, dễ dàng di chuyển bằng xe cá nhân qua cao tốc và nền tảng thiên nhiên trù phú là lựa chọn hàng đầu. Đặc biệt, càng gần trung tâm kinh tế lớn càng có nhiều lợi thế vì tập trung dân số đông, nhu cầu du lịch lớn.

        Ưu thế của chuyến đi ngắn ngày là chủ động thời gian, tận dụng những ngày nghỉ cuối tuần, ngày nghỉ phép, lễ ngắn. Chi phí thấp do tiết kiệm được vé máy bay song lại tạo ra tác động tích cực trong tâm lý vì du khách thường xuyên được thư giãn, trải nghiệm, cân bằng cuộc sống

        Cam Ranh - chương mới của du lịch chủ động nhìn từ thành phố 2 giờ kết nối

        Trước đây, Cam Ranh dù là vùng đất nổi tiếng với khách Quốc tế, còn du lịch thường dành cho chuyến đi dài ngày do phải di chuyển bằng máy bay, chi phí tốn kém, khó chủ động lịch trình.

        Tuy nhiên, tuyến cao tốc TP.HCM - Cam Lâm vừa thông xe đã mở ra chương mới cho du lịch ngắn ngày tại Cam Ranh. Giờ đây, từ TP.HCM, chỉ gần 4 tiếng lái xe đã tới thành phố biển giúp tần suất du lịch gia tăng bằng lần, từ vài ba năm mới ghé tới thành điểm đến định kỳ hàng tháng. Sở hữu Bãi Dài - top 10 bãi biển đẹp nhất hành tinh cùng thiên nhiên đa dạng từ vịnh - biển - đảo - đầm - núi non - sông nước đến ẩm thực, văn hóa đặc sắc, Cam Ranh đang cạnh tranh mạnh mẽ với các điểm đến quen thuộc ở phía Nam, nhờ vào cơ sở hạ tầng hiện đại và trải nghiệm du lịch phong phú.

        Lợi thế càng lớn hơn khi TP.HCM và Đông Nam Bộ là vùng kinh tế lớn nhất cả nước. Riêng TP.HCM đang có 13 triệu dân lưu trú và tập trung giới trung - thương lưu nhiều nhất Việt Nam. Do đó, việc nối gần TP.HCM giúp Cam Ranh nắm giữ trái tim du lịch nội địa then chốt, đồng thời là đón đầu thị phần second home được đánh giá "màu mỡ". 

        Thời gian di chuyển từ TP.HCM sẽ rút ngắn xuống còn 2 giờ khi tuyến đường sắt cao tốc TP.HCM - Nha Trang khởi công 2027.  Thêm vào đó, các tuyến cao tốc Tây Nguyên (cao tốc Buôn Mê Thuột - Khánh Hòa, Lâm Đồng - Khánh Hòa) kết nối với Cam Ranh ( 2026-2030) lần lượt khởi công và các chuyến bay nội địa  không quá  2 giờ, sẽ giúp Cam Ranh trở thành “cổng đón” lý tưởng cho du lịch ngắn ngày.

        Ngôi nhà thứ hai thân thuộc của người Việt

        Các điểm đến ngắn ngày đang là sự lựa chọn của giới nhà giàu khi tìm kiếm second home. Đơn cử, Hamptons (Mỹ) gần NewYork hay Hua Hin (Thái Lan), cách BangKok trên dưới 3 giờ lái xe là những thiên đường second home nổi bật. Trong đó, các bất động sản biển sở hữu lâu dài chiếm ưu thế vì tạo ra sự an tâm và phù hợp với tính ổn định mà second home hướng tới.

        Còn Savills nhận định, tiêu chí để lựa chọn một second home đúng chuẩn là chủ đầu tư uy tín; dự án có vị trí đắc lợi toạ lạc tại ven biển, yên tĩnh, nơi có khí hậu trong lành, bờ biển sạch, khả năng kết nối đến các tuyến đường chính, sân bay cũng như cự li gần trung tâm thành phố chính; thời hạn sở hữu lâu dài, giá trị có tăng đều đặn qua thời gian; không gian sống không chỉ xanh, sạch, đẹp mà còn phải tiện nghi và đẳng cấp.

        Tại Cam Ranh, CaraWorld là dự án đáp ứng được đầy đủ các tiêu chí second home lý tưởng nhờ có quỹ đất sở hữu lâu dài hiếm hoi trên dải nghỉ dưỡng Việt Nam. Dự án nổi bật với  sân golf 90ha đã hoạt động và được bình chọn là sân golf tốt nhất châu Á, một tiện ích đẳng cấp mà giới nhà giàu rất ưu chuộng.

        Không dừng lại ở đó, nhờ quy mô siêu đô thị 800ha, CaraWorld được kỳ vọng sẽ trở thành “hub” du lịch, đưa Cam Ranh vươn lên bản đồ thế giới. Điều này hoàn toàn có cơ sở bởi CaraWorld sở hữu hệ giá ích đáng mơ ước: 4.7km mặt biển (1/3 Bãi Dài), liền kề với sân bay quốc tế, quy hoạch 38 đại tiện ích. Ngoài golf đã vận hành, còn có tổ hợp bãi biển, công viên nước, quảng trường sự kiện, nhà ánh sáng, cung điện mùa hè, CLB thể thao biển, bảo tàng Yến, chuỗi shophouse, trung tâm thương mại, nhà hàng, khu kinh tế đêm,.... Các loại hình dịch vụ 360 độ đủ để bù đắp mọi khoảng trống ăn chơi – mua sắm – giải trí mà Cam Ranh đang thiếu hụt và đưa CaraWorld trở thành “một điểm đến – trọn thế giới”.
        `,
        img: anh8,
    },
    {
      title: "Bất Động Sản",
      description:
        "Thị trường ngày 21/11: Giá vàng tiếp tục tăng, dầu giảm, đậu tương thấp nhất 2 tuần",
      content:
        `Giá dầu giảm trong phiên thứ Tư trong khi vàng, đồng, quặng sắt, cao su tiếp tục tăng.

        Dầu giảm nhẹ

        Giá dầu giảm vào thứ Tư do số liệu cho thấy dự trữ dầu thô và xăng của Mỹ vào tuần trước tăng nhiều hơn dự kiến​​, nhưng đà giảm được hạn chế bởi lo ngại về cuộc chiến đang leo thang giữa Nga và Ukraine.

        Giá dầu thô Brent kỳ hạn tháng 1 giảm 50 cent, hay 0,68%, xuống 72,81 USD. Giá dầu thô WTI kỳ hạn tháng 12 giảm 52 cent, hay 0,75%, xuống 68,87 USD, trong khi hợp đồng WTI kỳ hạn tháng 1 giảm 49 cent, hay 0,71% xuống 68,75 USD.

        Theo dữ liệu từ Cơ quan Thông tin Năng lượng, dự trữ dầu thô và xăng của Mỹ tuần trước tăng nhiều hơn dự kiến, điều này đã gây áp lực lên giá.

        Về nguồn cung, Equinor của Na Uy cho biết họ đã khôi phục toàn bộ công suất đầu ra tại mỏ dầu Johan Sverdrup ở Biển Bắc sau sự cố mất điện.

        Mặc dù vậy, xung đột gia tăng giữa Nga và Ukraine và lo ngại về tình trạng gián đoạn nguồn cung dầu trong tương lai đã giúp giá không giảm mạnh. 

        Vàng tăng 

        Giá vàng tăng phiên thứ ba liên tiếp và đạt mức cao nhất một tuần khi các nhà đầu tư tìm nơi trú ẩn an toàn trong bối cảnh bất ổn địa chính trị gia tăng do căng thẳng Nga-Ukraine leo thang.

        Vàng giao ngay tăng 0,6% lên 2.647,43 USD/ounce vào cuối phiên, sau khi đạt mức cao nhất kể từ ngày 11/11 vào đầu phiên. Vàng giao tháng 12/2024 tăng 0,8% lên 2.651,70 USD.

        Sự chú ý của các nhà đầu tư cũng đổ dồn vào một số quan chức của Cục Dự trữ Liên bang Mỹ, những người sẽ phát biểu trong tuần này. Kỳ vọng của thị trường về việc cắt giảm lãi suất vào tháng 12 đã giảm đáng kể, với tỷ lệ cược hiện ở mức 55,7%, giảm so với mức 82,5% chỉ một tuần trước. 

        Quặng sắt tăng 

        Giá quặng sắt trên thị trường Trung Quốc tăng phiên thứ ba liên tiếp bởi nhu cầu thép phục hồi và thị trường tiếp tục hy vọng về các biện pháp kích thích kinh tế hơn nữa tại quốc gia tiêu thụ hàng đầu thế giới - Trung Quốc.

        Tuy nhiên, tồn trữ quặng sắt tại các cảng duy trì ở mức cao đã hạn chế giá tăng mạnh. 

        Hợp đồng quặng sắt kỳ hạn tháng 1 trên Sàn giao dịch hàng hóa Đại Liên (DCE) của Trung Quốc đã kết thúc phiên tăng 1,11% ở mức 774,5 nhân dân tệ (106,96 USD)/tấn.

        Đồng tăng

        Giá đồng tăng cao vào thứ Tư do căng thẳng Nga – Ukraine gia tăng, mặc dù đồng USD mạnh hơn đã hạn chế mức tăng.

        Đồng giao sau ba tháng trên Sàn giao dịch kim loại London (LME) tăng 0,1% lên 9.092 USD/tấn.

        Một số nhà đầu tư đã tham gia thị trường sau khi giá đồng ổn định trở lại trong những ngày gần đây sau đợt giảm trước đó. 

        Cao su tăng 

        Giá cao su kỳ hạn tương lai tại Nhật Bản tăng vào thứ Tư do đồng yên yếu. 

        Hợp đồng cao su giao tháng 4 của Sàn giao dịch Osaka (OSE) đóng cửa tăng 9,8 yên, hay 2,76%, lên 364,3 yên (2,34 USD)/kg.

        Hợp đồng cao su giao tháng 1/2025 của Sàn giao dịch tương lai Thượng Hải (SHFE) đóng cửa tăng 335 nhân dân tệ, hay 1,92%, lên 17.765 nhân dân tệ (2.453,73 USD)/tấn.

        Đồng USD tăng 0,39% lên 154,84 yên do lợi suất trái phiếu kho bạc Mỹ tăng. Đồng tiền yếu khiến tài sản được định giá bằng yên trở nên dễ mua hơn đối với người mua ở nước ngoài. 

        Cà phê tăng

        Giá cà phê arabica kỳ hạn tháng 3 tăng 11,2 US cent, hay 4%, lên 2,925 USD/lb, mức cao nhất kể từ tháng 5 năm 2011.

        Các đại lý địa phương tại Brazil, quốc gia sản xuất arabica hàng đầu thế giới, cho biết thị trường đang tập trung vào vụ mùa năm sau và vẫn lo ngại về đợt hạn hán hồi đầu năm nay. 

        Cà phê robusta kỳ hạn tháng 1 tăng 142 USD, hay 3%, lên 4.798 USD/tấn.

        Đậu tương thấp nhất 2 tuần, ngô và lúa mì tăng

        Giá đậu tương giảm xuống mức thấp nhất trong hai tuần trong khi dầu đậu tương giảm hơn 3% do dự đoán sản lượng vụ mùa ở Nam Mỹ năm nay bội thu và không chắc chắn về nhu cầu nhiên liệu sinh học sản xuất từ đậu tương. 

        Giá đậu tương kỳ hạn tháng 1 trên Sàn giao dịch Chicago (CBOT) giảm 8 cent, tương đương 0,8%, xuống mức 9,90-1/2 USD/bushel, sau khi giảm xuống 9,85-1/4 USD, mức thấp nhất kể từ ngày 6 tháng 11. Giá dầu đậu tương giao tháng 12 trên sàn Chicago giảm 1,56 cent, tương đương 3,5%, đóng cửa ở mức 43,28 cen/lb.

        Giá lúa mì và ngô tăng do lo ngại về sự gia tăng căng thẳng trong cuộc chiến giữa Ukraine -Nga gây rủi ro đối với hoạt động buôn bán ngũ cốc Biển Đen.

        Giá lúa mì kỳ hạn tháng 3 tăng 4-1/2 cent, tương đương 0,8%, lên 5,72-1/4 USD/bushel, trong khi ngô kỳ hạn tháng 12 tăng 3 cent, hay 0,7%, lên 4,30-1/4 USD/bushel. 

        Đường giảm giá 

        Giá đường thô kỳ hạn tháng 3 giảm 0,37 cent, hay 1,7%, xuống còn 21,65 cent/lb.

        Tổ chức Đường quốc tế (ISO) hôm thứ Tư đã cắt giảm dự báo về mức thâm hụt đường toàn cầu dự kiến ​​trong mùa vụ 2024/25 sắp tới xuống còn 2,51 triệu tấn từ mức 3,58 triệu tấn, chủ yếu là do mức tiêu thụ được điều chỉnh giảm.

        Đường trắng giao tháng giảm 9,40 USD, hay 1,7%, xuống còn 559,30 USD/tấn.

        Dầu cọ giảm hơn 2% 

        Giá dầu cọ Malaysia giảm hơn 2% vào thứ Tư do nhu cầu xuất khẩu chậm chạp và giá dầu đậu tương trên sàn Chicago giảm. 

        Hợp đồng dầu cọ giao tháng 2/2025 trên Sàn giao dịch Malaysia giảm 107 ringgit, tương đương 2,17%, xuống còn 4.817 ringgit (1.077,87 đô la)/tấn.

        Các nhà khảo sát hàng hóa ước tính rằng xuất khẩu dầu cọ của Malaysia trong giai đoạn từ ngày 1 đến ngày 20 tháng 11 đã giảm từ 1,4% đến 5,3%.`,
        img: anh9,
    },
    {
      title: "Bất Động Sản",
      description:
        "Điều chỉnh quy hoạch chung Tp.Biên Hoà (Đồng Nai), nhiều dự án được gỡ vướng: Thị trường bất động sản có tín hiệu mới?",
      content:
        `Mới đây, Chủ tịch UBND tỉnh Đồng Nai Võ Tấn Đức ký Quyết định số 3479 phê duyệt điều chỉnh cục bộ quy hoạch chung tỷ lệ 1/10.000 Tp.Biên Hòa đến năm 2030, tầm nhìn đến năm 2050.

        Đồng Nai điều chỉnh quy hoạch chung TP. Biên Hòa

        Theo đó, nội dung điều chỉnh tập trung vào quy mô dân số và chỉ tiêu đất đai tại phân khu C4, thuộc một phần khu đô thị phía Tây đường cao tốc Biên Hòa - Vũng Tàu. Hàng loạt dự án bất động sản gặp vướng tại phân khu C4 (Tp. Biên Hòa, tỉnh Đồng Nai) do sự không đồng nhất giữa quy hoạch của các cấp đã chính thức được tháo gỡ.

        Theo quy hoạch, quy mô dân số toàn khu đô thị phía Tây từ 420.000 người điều chỉnh thành 434.000 người. Trong đó, quy mô dân số tại phạm vi điều chỉnh quy hoạch phân khu C4 từ 126.000 người điều chỉnh thành 140.000 người.

        Về chỉ tiêu sử dụng đất, đất ở đô thị từ 45 - 55 m2/người; Đất công cộng dịch vụ đô thị từ 4 - 5 m2/người; Đất cây xanh công viên đô thị từ 8 - 10 m2/người; Đất giao thông đô thị từ 17 - 20 m2/người.

        Quy hoạch sẽ khoanh vùng khu vực 90 ha chưa hoàn thành công tác bồi thường, giải phóng mặt bằng tách ra khỏi ranh thực hiện các dự án; điều chỉnh hành lang cây xanh ven sông, công viên hồ điều hòa. Đồng thời bổ sung một số khu công viên cây xanh tập trung tại các khu đô thị.

        Về giao thông, tuyến đường Hương lộ 2, Long Hưng - Phước Tân có lộ giới 60m. Mạng lưới đường đô thị có lộ giới 20,5m đến 45m, đảm bảo kết nối hợp lý giữa giao thông đối ngoại và mạng lưới đường đô thị.

        Điều chỉnh phân tán vị trí hệ thống khu trung tâm công cộng - thương mại dịch vụ theo hướng cập nhật lại hệ thống công trình công cộng theo quy hoạch chi tiết 1/500 được duyệt, đồng thời bổ sung một số khu công trình công cộng cho phù hợp định hướng phát triển mới của Tp.Biên Hòa.

        Đối với việc điều chỉnh cơ cấu, chức năng sử dụng đất. Các nội dung điều chỉnh quy hoạch nêu trên sẽ khiến quy hoạch đất khu ở đô thị tăng khoảng 166,8 ha và quy hoạch đất hành lang cây xanh ven sông giảm khoảng 251,3 ha, do cập nhật bổ sung quy hoạch từ đất hành lang cây xanh ven sông sang quy hoạch đất khu ở đô thị.

        Việc giảm diện tích quy hoạch hành lang cây xanh ven sông để bổ sung cập nhật chức năng theo quy hoạch chi tiết 1/500 các khu đô thị đã được phê duyệt và cập nhật bổ sung giảm chiều rộng quy hoạch đất hành lang ven sông tại khu vực Cù lao Phước Hưng trên cơ sở tuân thủ các quy định hiện hành về quy hoạch hành lang bảo vệ nguồn nước.
        Ngoài ra, quy hoạch đất khu công viên cây xanh - không gian mở tăng khoảng 35,6 ha do cập nhật bổ sung quy hoạch đất khu công viên cây xanh - không gian mở trên cơ sở cập nhật bổ sung chức năng quy hoạch theo quy hoạch chi tiết xây dựng tỷ lệ 1/500 các khu đô thị đã được phê duyệt đối với các khu công viên cây xanh đô thị và bổ sung đất khu công viên cây xanh - không gian mở trong các khu đô thị đảm bảo chỉ tiêu và bán kính phục vụ theo quy định.

        Quy hoạch đất khu trung tâm công cộng - thương mại dịch vụ đô thị tăng khoảng 1,5 ha do tổ chức lại quy hoạch tập trung sang quy hoạch phân tán hệ thống trung tâm công cộng - thương mại dịch vụ đô thị đảm bảo quy mô diện tích, bán kính phục vụ và phù hợp quy hoạch chi tiết xây dựng tỷ lệ 1/500 và quyền sử dụng đất được cấp tại các khu đô thị….

        ﻿Dự án nào được gỡ vướng?

        Việc điều chỉnh cục bộ quy hoạch chung Tp.Biên Hòa đã tháo gỡ khó khăn, vướng mắc cho nhiều dự án bất động sản. Phân khu C4 quy hoạch chung Tp.Biên Hòa có diện tích khoảng 1.500 ha. Thời gian qua, trên phân khu này các chủ đầu tư đã triển khai các dự án khu đô thị, khu dân cư như: Khu dân cư Long Hưng (227ha) và khu đô thị dịch vụ thương mại cù lao Phước Hưng (286ha) do Liên hiệp Hợp tác xã Dịch vụ Nông nghiệp Tổng hợp Đồng Nai (DonaCoop) làm chủ đầu tư; khu đô thị Đồng Nai Waterfront (170ha) của CTCP Đầu tư Nam Long (mã: NLG); và khu đô thị Aqua City (305ha) của CTCP Tập đoàn Đầu tư Địa ốc No Va (Novaland, mã: NVL).﻿

        Trong đó, dự án Izumi City quy mô 170ha do Nam Long và Hankyu Hanshin Properties (Nhật Bản) phát triển trải dài theo 5,5km mặt tiền sông Đồng Nai, ngay giao lộ Hương lộ 2 và đường Nam Cao. Đây là khu đô thị sinh thái hiện hữu phía Đông Tp.HCM hội tụ đủ đầy các tiện ích từ vui chơi, giải trí đến học tập, làm việc. Giai đoạn 1 dự án với 275 sản phẩm đa dạng loại hình: nhà phố thương mại, nhà phố vườn, biệt thự song lập đã hoàn thiện cùng tiện ích chỉn chu, hiện đang giao dịch giá từ 7 tỉ đồng/căn. Khách mua và nhận nhà quý 4/2024 hưởng ưu đãi lên đến 1,8 tỷ đồng.

        Việc Đồng Nai phê duyệt điều chỉnh cục bộ quy hoạch chung Tp.Biên Hoà cũng tháo gỡ pháp lý cho dự án Aqua City quy mô 1.000ha của Novaland. Đây là dự án “trầy trật” suốt thời gian dài, đã nhiều lần đề xuất và kiến nghị đến các bộ, ban, ngành trung ương và địa phương, Tổ Công tác đặc biệt của Chính phủ tháo gỡ. Hiện các ngân hàng đã giải ngân các gói tín dụng 3.250 tỷ đồng để triển khai xây dựng các phân khu trong dự án.

        Được biết, ﻿tại thời điểm phê duyệt quy hoạch chung và quy hoạch phân khu C4 đã chưa cập nhật đầy đủ hồ sơ quy hoạch chi tiết 1/500 của các dự án được phê duyệt trước đó nên dẫn đến sự không đồng bộ, khác biệt giữa quy hoạch các cấp. Do có sự khác biệt đó nên nhiều dự án phải tạm dừng triển khai xây dựng và kinh doanh.

        Điều chỉnh quy hoạch lần này là bệ phóng cho các dự án, khẳng định niềm tin của cộng đồng doanh nghiệp vào chủ trương tháo gỡ pháp lý của Chính phủ, giúp thúc đẩy thị trường bất động sản phục hồi sau giai đoạn nhiều thách thức.

        Theo ghi nhận, thời gian qua, thị trường bất động sản Đồng Nai nói chung, Tp.Biên Hoà nói riêng ﻿chủ yếu diễn tiến ở dòng sản phẩm bất động sản đô thị. Nguồn cung nhà phố, biệt thự có phần lấn lướt Tp.HCM khi quỹ đất còn nhiều và giá thành thấp hơn. Báo cáo tháng 10/2024 của DKRA Group mới đây chỉ ra, nguồn cung sơ cấp nhà phố, biệt thự Tp.HCM và vùng phụ cận ghi nhận mức tăng 6% so với tháng 10/2023. Bên cạnh đó, nguồn cung mới có những cải thiện tích cực với khoảng 109 căn mở bán, tăng 52% so với cùng kỳ. 

        Đáng nói, thanh khoản thị trường ghi nhận sự cải thiện đáng kể, lượng tiêu thụ sơ cấp và lượng tiêu thụ mới lần lượt gấp 6,3 lần và 4,4 lần so với cùng kỳ năm 2023. Đồng Nai và Tp.HCM dẫn dắt thị trường với khoảng 3,650 căn hiện đang mở bán, chiếm hơn 74% nguồn cung sơ cấp toàn thị trường. 

        Trong tháng 10, theo DKRA Group, lượng giao dịch phân bổ chủ yếu ở nhóm dự án an toàn pháp lý, đảm bảo tiến độ thi công, được triển khai bởi các chủ đầu tư có uy tín/thương hiệu trên thị trường.  Mặt bằng giá sơ cấp không có nhiều biến động so với quý trước và vẫn neo ở mức cao do áp lực của các loại chi phí đầu vào. Cùng với đó, các chính sách chiết khấu cho khách hàng giữ chỗ trước ngày mở bán, cam kết thuê lại, kéo giãn tiến độ thanh toán,… được áp dụng rộng rãi nhằm tăng thanh khoản.
        `,
        img: anh10,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Hội thẩm định giá Việt Nam mở lớp ôn thi cấp thẻ thẩm định viên về giá lần thứ XVI theo hình thức trực tuyến",
      content:
        `Hội thẩm định giá Việt Nam thông báo sẽ mở thêm lớp ôn thi cấp thẻ thẩm định viên về giá lần thứ XVI theo hình thức trực tuyến từ ngày 22/11/2024 – 25/11/2024.

        Nhằm đáp ứng nhu cầu của học viên ở các địa phương ở xa không thể tham dự các lớp ôn thi cấp thẻ thẩm định viên về giá lần thứ XVI (Bộ Tài chính tổ chức) trực tiếp tại Hà Nội và TP. Hồ Chí Mính, Hội Thẩm định giá Việt Nam thông báo sẽ tổ chức thêm 01 lớp ôn thi theo hình thức trực tuyến (Online).

        Tại lớp học trực tuyến, học viên sẽ được giảng dạy bởi các Phó giáo sư, tiến sĩ,có năng lực,trình độ kiến thức chuyên sâu về lĩnh vực thẩm định giá và nhiều kinh nghiệm giảng dạy. Đội ngũ giảng viên tham gia giảng dạy tại lớp trực tuyến là những người đã trực tiếp tham gia ôn tập cho các học viên ôn tại TP. Hà Nội và TP. Hồ Chí Minh, được học viên đánh giá cao.

        Theo đó, lớp ôn thi cấp thẻ thẩm định viên về giá lần thứ XVI theo hình thức trực tuyến sẽ được tổ chức từ ngày 22/11/2024 – 25/11/2024 với các nội dung như sau:

        Môn 1:

        - Pháp luật áp dụng trong lĩnh vực thẩm định giá

        - Nguyên lý hình thành giá cả thị trường

        -Nguyên lý căn bản về thẩm định giá

        Môn 2: Thẩm định giá bất động sản

        Môn 3: Thẩm định giá động sản bao gồm các nội dung sau:

        - Thẩm định giá máy móc, thiết bị

        - Thẩm định giá tài sản vô hình

        Môn 4:

        - Thẩm định giá trị doanh nghiệp

        Môn 5:

        - Phân tích tài chính doanh nghiệp.

        Để đăng ký ôn thi, học viên đăng ký với Văn phòng Hội Thẩm định giá Việt Nam tại Phòng 101, Tòa nhà dự án, số 4 ngõ Hàng chuối 1, Hai Bà Trưng, Hà Nội.

        Ngoài ra, học viên có thể liên hệ qua số điện thoại:

        -Văn phòng: 024.3641.0056

        Hoặc một trong các cán bộ của Văn phòng sau:

        -Chị Tô Thị Tươi: 0987.079.468

        -Chị Phạm Thị Huệ: 0989.288.345

        -Anh Nguyễn Anh Tài: 0982.286.768

        -Chị Lê Thị Thu: 0985.710.462

        Email: hoithamdinhgiavn@vva.org.vn

        Website: hoithamdinhgia.vn
        `,
        img: anh11,
    },
    {
      title: "Bất Động Sản",
      description:
        "Cơ hội cho Novaland khi nút thắt pháp lý Aqua City vừa được tháo gỡ",
      content:
        `Ngày 19/11/2024, UBND tỉnh Đồng Nai đã chính thức phê duyệt điều chỉnh cục bộ Quy hoạch chung 1/10.000, quyết định giúp tháo gỡ pháp lý cho dự án Aqua City của Tập đoàn Novaland, vốn đã bị vướng mắc hơn 2 năm qua. Đồng thời là bệ phóng cho Novaland phục hồi và tăng tốc sau thời kỳ đầy thách thức.

        Đây là kết quả của sự chỉ đạo tháo gỡ từ Chính phủ và các bộ, ban, ngành, là cú hích về pháp lý, tạo niềm tin cho cộng đồng doanh nghiệp về chủ trương chung của Chính phủ trong việc chỉ đạo quyết liệt tháo gỡ pháp lý cho các dự án còn vướng mắc;

        Điều chỉnh quan trọng về quy hoạch, tháo gỡ chung cho các dự án tại Đồng Nai

        Nội dung điều chỉnh vừa được công bố tập trung vào quy mô dân số và chỉ tiêu đất đai tại phân khu C4, thuộc một phần khu đô thị phía Tây đường cao tốc Biên Hòa - Vũng Tàu.

        Đây là bước pháp lý quan trọng tháo gỡ cho nhiều dự án của nhiều Doanh nghiệp; đảm bảo sự đồng bộ các cấp quy hoạch tiếp theo, mở đường cho việc hoàn tất điều chỉnh quy hoạch phân khu C4 và quy hoạch chi tiết 1/500 của dự án Aqua City, dự kiến hoàn tất vào đầu năm 2025.

        Quy hoạch mới này sẽ là nền tảng pháp lý vững chắc giúp siêu dự án Aqua City sớm trở thành đô thị vệ tinh phía Đông TP. Hồ Chí Minh, một trong những dự án then chốt của Tập đoàn Novaland.

        Điều chỉnh lần này là thành quả của hơn hai năm nỗ lực không ngừng nghỉ từ Novaland và sự hỗ trợ từ các cơ quan chức năng. Tập đoàn đã nhiều lần đề xuất và kiến nghị đến các bộ, ban, ngành trung ương và địa phương, đặc biệt là Tổ Công tác đặc biệt của Chính phủ, để tháo gỡ pháp lý cho dự án Aqua City tại Đồng Nai.

        Điều này không chỉ nhằm tăng doanh thu cho tập đoàn mà còn giải quyết các vấn đề pháp lý để tiến hành xây dựng, bàn giao hàng ngàn căn nhà, giúp khách hàng yên tâm về sản phẩm đã mua và khôi phục niềm tin vào sự cam kết của Novaland.

        Sự hỗ trợ tài chính mạnh mẽ

        Hiện tại, các ngân hàng đã giải ngân các gói tín dụng lên đến 3.250 tỷ đồng để triển khai xây dựng các phân khu trong Aqua City. Đồng thời, một số tổ chức tài chính cam kết cung cấp thêm các gói vay với tổng giá trị trên 10.000 tỷ đồng để Novaland tiếp tục triển khai hạ tầng, xây dựng và bàn giao nhà cho khách hàng trong năm 2025-2026.

        Điều này thể hiện sự tin tưởng mạnh mẽ từ các tổ chức tài chính đối với khả năng phát triển của dự án Aqua City và Novaland.

        Với các vướng mắc pháp lý đã được tháo gỡ và sự ủng hộ từ các tổ chức tài chính, Aqua City đã sẵn sàng bước vào giai đoạn phát triển đột phá.

        Hiện tại, hơn 700 căn biệt thự và nhà phố đã được bàn giao, hình thành cộng đồng cư dân văn minh. Các phân khu như River Park 2, Sun Harbor 2, Ever Green… đang đẩy nhanh tiến độ thi công, song song với việc hoàn thiện hàng loạt tiện ích như Quảng trường rộng lớn, bến du thuyền Aqua Marina, trung tâm an ninh, trung tâm mua sắm, trường học, bệnh viện, khách sạn 5 sao, trung tâm thể thao Aqua Sport Center, chuỗi clubhouse sang trọng và các tổ hợp ẩm thực - giải trí độc đáo.

        Aqua City với diện tích gần 1.000 ha, được quy hoạch trở thành khu đô thị Vệ tinh phía Đông của TP. Hồ Chí Minh, với hơn 70% diện tích dành cho không gian xanh và các tiện ích hiện đại. Dự án sở hữu vị trí đắc địa khi chỉ cách trung tâm TP. Hồ Chí Minh và sân bay Long Thành khoảng 20 phút di chuyển. Đây không chỉ là nơi để ở mà còn là không gian lý tưởng để tận hưởng cuộc sống.
        `,
        img: anh12,
    },
    {
      title: "Bất Động Sản",
      description:
        "Chung cư đắt tiền dự kiến vẫn áp đảo thị trường Hà Nội",
      content:
        `OneHousing dự báo năm 2025, Hà Nội đón thêm hơn 30.000 căn hộ mới, trong đó chung cư cao cấp chiếm 64%, hạng sang 36%.

        Thông tin này được nêu trong báo cáo thị trường mới phát hành của OneHousing - đơn vị dịch vụ bất động sản do Masterise Homes và Techcombank hậu thuẫn.

        Công ty này cho biết năm sau thị trường Hà Nội sẽ có thêm hơn 30.000 căn hộ mới. Con số này tương đương giai đoạn cao điểm 2016 - 2019. Trong đó, khoảng 48% căn hộ mới đến từ khu vực phía Đông tại các đại dự án Vinhomes Ocean Park 1,2.

        Khu vực phía Tây gần như không có dự án mới, chỉ còn các dự án ra hàng đợt cuối. Trong khi khu phía Bắc với Vinhomes Global Gates có thể đóng góp 19% nguồn cung, chủ yếu gồm các sản phẩm hạng sang.

        Theo OneHousing, toàn bộ căn hộ mới năm 2025 sẽ thuộc phân khúc cao cấp (50-80 triệu đồng một m2) và hạng sạng (80-230 triệu đồng một m2), trong đó căn hộ hạng sang chiếm 36%. Bình quân giá bán căn hộ sơ cấp năm tới có thể đạt 72 triệu đồng mỗi m2 (chưa gồm thuế VAT, phí bảo trì), tăng 75% so với đầu năm 2022.

        Đơn vị này lý giải với sự thay đổi của luật mới, chi phí đầu vào tăng, các chủ đầu tư không còn ưu tiên cho phân khúc trung cấp. Thay vào đó, họ phát triển phân khúc cao cấp và hạng sang để đạt kỳ vọng về lợi nhuận, cũng như đáp ứng nhu cầu của tầng lớp trung lưu ngày càng tăng. "Hà Nội sẽ tiếp tục đón nhận những dòng sản phẩm đặc biệt, không dành cho số đông", OneHousing cho hay.

        Thực tế, hai năm qua, căn hộ bình dân mới đã gần như biến mất ở Hà Nội, còn nguồn cung sản phẩm trung cấp ngày càng suy giảm. Theo dữ liệu của hãng nghiên cứu thị trường CBRE, nửa đầu năm nay, chung cư cao cấp chiếm gần 70% nguồn cung mới ra thị trường. Căn hộ trung cấp chỉ chiếm hơn 30%, trong khi đó năm 2022, loại sản phẩm này đóng góp tới trên 80% tổng nguồn cung căn hộ ra thị trường.

        Trước đây, thị trường chung cư Hà Nội có sự tham gia của hàng loạt chủ đầu tư từ doanh nghiệp nhà nước đến công ty tư nhân quy mô nhỏ hoặc tầm trung. Hiện nay, thị trường thủ đô chỉ còn lại một số doanh nghiệp lớn, giàu tiềm lực hoặc chủ đầu tư nước ngoài. OneHousing cho biết Masterise Homes dự kiến chiếm gần một phần ba nguồn cung căn hộ mới ở Hà Nội năm sau. MIK Group có thể đóng góp 13%, tiếp sau đó là các chủ đầu tư như Vinhomes, Capitaland, Daewoo.
        `,
        img: anh13,
    },
    {
      title: "Tài Chính - Ngân Hàng",
      description:
        "Nhà đầu tư đồng tiền ảo dưới đây cần liên hệ ngay với cơ quan công an",
      content:
        `Người đã đầu tư đồng tiền GCA Coin trên sàn GCACoin.io cần liên hệ ngay với Cơ quan CSĐT CATP Hà Nội để được tiếp nhận giải quyết theo quy định pháp luật.

        Cơ quan Cảnh sát Điều tra Công an TP Hà Nội cho biết đang điều tra vụ án hình sự Cưỡng đoạt tài sản, xảy ra tháng 7/2020 tại Phòng 1004, tầng 10, khách sạn Thể Thao (số 15 Lê Văn Thiêm, phường Nhân Chính, quận Thanh Xuân, Hà Nội).

        Cơ quan CSĐT CATP Hà Nội đề nghị ai là người đã đầu tư đồng tiền GCA Coin được giao dịch trên trang web: GCACoin.io liên quan đến Công ty Cổ phần Kết nối Thanh toán Toàn cầu (tên viết tắt là GPC, địa chỉ tại tầng 5, chung cư Diamond, số 1, Hoàng Đạo Thúy, phường Nhân Chính, quận Thanh Xuân, Hà Nội) liên hệ ngay với Cơ quan CSĐT CATP Hà Nội để được tiếp nhận giải quyết theo quy định pháp luật.

        Địa chỉ Cơ quan CSĐT CATP Hà Nội: số 55 Lý Thường Kiệt, phường Trần Hưng Đạo, quận Hoàn Kiếm, TP Hà Nội) hoặc liên hệ với Điều tra viên thụ lý vụ án Trần Công - số điện thoại 0948.200.988 .﻿
        `,
        img: anh14,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Bộ Tài chính điều chỉnh thông tin thẩm định viên về giá tại 2 doanh nghiệp thẩm định giá",
      content:
        `Theo thông báo số 945/TB-BTC và 951/TB-BTC, Bộ Tài chính đã điều chỉnh thông tin của thẩm định viên tại 2 doanh nghiệp thẩm định giá.

        Mới đây, Bộ Tài chính đã ra thông báo số 945/TB-BTC và 951/TB-BTC về việc điều chỉnh thông tin về thẩm định viên đăng ký hành nghề năm 2024 tại các ﻿doanh nghiệp thẩm định giá được cấp Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định giá.

        Việc điều chỉnh dựa trên cở sở đề nghị của các doanh nghiệp thẩm định giá và việc rà soát, điều chỉnh danh sách thẩm định viên về giá hành nghề tại doanh nghiệp.

        Theo đó, thẩm định viên tại Công ty CP Giám định và Thẩm định giá Thăng Long (174/TĐG) và Công ty CP Thẩm định giá Vietory (104/TĐG) 

        Bộ Tài chính yêu cầu trong quá trình hoạt động thẩm định giá, các doanh nghiệp thẩm định giá và các thẩm định viên về giá có trách nhiệm thực hiện đúng những quy định tại Luật Giá, các văn bản hướng dẫn có liên quan và các nội dung ghi trên Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ thẩm định giá.
        `,
        img: anh15,
    },
    {
      title: "Bất Động Sản",
      description:
        "Nhà ở xã hội chờ cơ hội khơi dậy ‘sứ mệnh’ an cư cho thị dân",
      content:
        `Nhiều cơ chế, chính sách đã được ban hành thời gian qua nhằm tháo gỡ khó khăn cho nhà ở xã hội. Để tạo dựng nguồn cung phân khúc này đáp ứng nhu cầu của số đông, giới chuyên gia đề xuất nhiều giải pháp từ phía Nhà nước, ngân hàng, nhà đầu tư và người mua sản phẩm.

        Nhu cầu mua nhà tăng, nhà ở bình dân vắng bóng

        Tại các khu đô thị lớn như Hà Nội hoặc TPHCM, thị trường bất động sản diễn ra tình trạng cơ cấu sản phẩm chưa hợp lý, thiếu nhà ở giá rẻ, nhà ở vừa túi tiền. Người dân có nhu cầu về nhà ở nhưng lại khó tiếp cận với những phân khúc phù hợp thu nhập.

        Ông Bạch Dương – Tổng giám đốc Batdongsan.com.vn - nói trong tháng 10, nhu cầu tìm mua bất động sản tại Việt Nam tăng 22% so với cùng kỳ năm trước, nguồn cung cũng tăng 13%, tại sự kiện Lễ trao giải thưởng Bất động sản Việt Nam PropertyGuru 2024.

        Cũng theo ông Dương, đối tượng tiềm năng tìm mua bất động sản trong thời gian tới là các gia đình trẻ, đặc biệt là những cặp đôi vợ chồng son. Nửa cuối năm 2024, khảo sát cho thấy 73% những người đã kết hôn nhưng chưa có con dự định mua nhà trong 1 năm tới.

        Trong khi người độc thân ưu tiên không gian làm việc khi lựa chọn bất động sản thì những người đã lập gia đình quan tâm nhất đến tiện ích về trường học và trung tâm, cửa hàng mua sắm. Xu hướng tìm mua bất động sản thứ cấp đang tăng lên do nguồn cung sơ cấp thấp trong khi giá mở bán các dự án sơ cấp neo cao.

        Người dân có nhu cầu sở hữu nhà ở, nhưng thị trường bất động sản nhiều năm rơi vào tình trạng lệch pha cung cầu. Ông Lê Hoàng Châu - Chủ tịch Hiệp hội Bất động sản TPHCM (HoREA) nói riêng tại TPHCM, từ năm 2021 đến nay, nhà ở dưới 3 tỉ đồng hoàn toàn vắng bóng trên thị trường. Nhà ở xã hội càng lúc càng ít dự án, giai đoạn 2021 -  2023 chỉ có 2 dự án hoàn thành.

        Trong khi đó, dù Chính phủ đã có đề án thực hiện 1 triệu căn nhà ở xã hội đến năm 2030 nhưng đến nay, kết quả còn hạn chế, chưa đáp ứng được phần lớn nhu cầu của người dân. Số liệu của Bộ Xây dựng chỉ ra năm 2021 có 16 doanh nghiệp đã đăng ký thực hiện hơn 1 triệu căn nhà ở xã hội, nhưng đến nay mới triển khai được 10%, số lượng dự án hoàn thành đạt 4% kế hoạch.

        Giai đoạn 2021 - 2025, cả nước dự kiến cần 1,1 triệu căn nhưng khả năng đáp ứng chỉ 0,4 triệu căn (được 36%). Giai đoạn 2026 - 2030, nhu cầu là hơn 1,3 triệu căn và khả năng đáp ứng dự kiến khoảng 0,6 triệu căn (được 46%).

        Tình hình triển khai gói 120.000 tỉ đồng cho vay nhà ở xã hội cũng chỉ mới giải ngân 1.783 tỉ đồng (tương đương 1,5% quy mô), trong đó dư nợ từ người mua nhà đi vay chỉ 150 tỉ đồng.

        Nhiều điểm nghẽn trong việc thực hiện nhà ở xã hội được chỉ ra, như quỹ đất, thủ tục, cơ chế, lãi suất và đầu ra thị trường. Thậm chí, tại một sự kiện gần đây, ông Phan Đức Hiếu, Ủy viên Thường trực Ủy ban Kinh tế Quốc hội, nhận định làm nhà ở xã hội khó hơn là nhà thương mại, bởi nguồn vốn hỗ trợ chủ yếu là các gói tín dụng ngắn và trung hạn, mang tính thời điểm, không bền vững. Cơ chế triển khai vẫn là doanh nghiệp tự bỏ vốn đầu tư nhưng bị giới hạn lợi nhuận tối đa 10% trong khi thủ tục, quy chế khó hơn làm nhà thương mại. Vì thế, nhiều chủ đầu tư không mặn mà, chọn phân khúc này phần nhiều là sự san sẻ với xã hội.

        Tháo gỡ khúc mắc, đưa nhà ở xã hội quay trở lại

        Chưa bao giờ, nhà ở xã hội được đề cập một cách thường xuyên và nhận sự quan tâm rất lớn của xã hội như hiện nay. Nhiều chính sách pháp lý liên quan đến phân khúc này cũng được liên tiếp ban hành trong thời gian gần đây, nhằm "cởi trói" các khúc mắc.

        Tháng 8/2022, Thủ tướng chủ trì hội nghị nhà ở xã hội toàn quốc, trong đó doanh nghiệp đăng ký thực hiện hơn 1 triệu căn nhà ở xã hội. Chính phủ có đề án phát triển 1 triệu căn nhà ở xã hội đến năm 2030. Năm 2024, Thủ tướng giao các địa phương hoàn thành 130.000 căn. Các luật mới liên quan đến thị trường bất động sản như Luật Đất đai, Luật Nhà ở, Luật kinh doanh Bất động sản mới có hiệu lực cũng đã dần cởi bỏ những nút thắt cho các đơn vị phát triển nhà ở xã hội.

        Ông Nguyễn Văn Đính, Chủ tịch Hội Môi giới BĐS Việt Nam, cho rằng 5 yếu tố quan trọng để phát triển nhà ở xã hội thành công là quỹ đất, thủ tục, vốn, cơ chế và đầu ra. Hiện nay, cơ chế đã mở, quy trình thủ tục cắt giảm mạnh, không còn chồng chéo như trước. Vốn cũng đã được Nhà nước vào cuộc với gói 140.000 tỉ đồng và nhiều ngân hàng tham gia.

        Nhưng để nhà ở xã hội quay trở lại thị trường, doanh nghiệp cần có động lực triển khai. Tiến sĩ Cấn Văn Lực, Chuyên gia Kinh tế, Thành viên Hội đồng Tư vấn Chính sách Tài chính - tiền tệ Quốc gia, cho rằng để mục tiêu 1 triệu căn nhà ở xã hội sớm hoàn thành thì cần có sự chung tay góp sức của "4 nhà", gồm nhà nước, nhà băng, nhà phát triển và nhà dân.

        Trong đó nhà nước giữ vai trò là đầu tàu, các địa phương chủ động xây dựng rà soát, thực hiện quy hoạch quỹ đất cho nhà ở xã hội. Đồng thời, cần sớm nghiên cứu ban hành các chính sách hỗ trợ phù hợp với đặc thù của địa phương.

        Về phía nhà băng, ông Lực nói nên xem xét lại câu chuyện lãi suất vay ưu đãi sao cho thực sự ưu đãi với nhóm thu nhập thấp. Nguồn vốn này rất khó khăn, cần bổ sung thêm các nguồn khác từ quỹ đầu tư, vốn từ địa phương.

        Về nhà phát triển dự án, ông Lực kiến nghị nên bố trí nguồn vốn, quan tâm phát triển hệ sinh thái nhà ở xã hội và chất lượng công trình, phối hợp với các địa phương, xác định ngay từ đầu là làm dự án cho thuê hay để bán, hay cả 2. Còn với người dân dân, bên cạnh sự hỗ trợ của các ban ngành, người dân cần chủ động trong tích lũy, lập kế hoạch tài chính cho việc mua, hiện thực hóa giấc mơ an cư trong bối cảnh thị trường đang chuyển đổi.

        Nhiều chuyên gia cũng đưa ra các đề xuất cởi mở hơn đối với cơ chế quỹ đất, lãi suất mua nhà ở xã hội. Ông Lê Hoàng Châu tiếp tục kiến nghị lãi suất chỉ nên ở mức 3-4,8%/năm, thay vì 6,6%/năm quá cao như hiện tại.

        Trong khi đó, ông Nguyễn Văn Đính cũng cảm thấy "lấn cấn" với lãi suất hiện nay, đặc biệt là với người mua nhà trong khi thu nhập của họ còn hạn hẹp. Vị này cho rằng cần xem xét việc thành lập Quỹ phát triển nhà ở xã hội để có nguồn vốn ổn định, lâu dài cho phân khúc này chứ không thể chỉ trông chờ vào ngân hàng thương mại.

        Ông Đính cũng nói thêm quỹ đất là vấn đề quan trọng khi triển khai nhà ở xã hội. Cơ chế, chính sách - tất cả mọi thứ đều tốt mà không có quỹ đất thì cũng không thể triển khai nhà ở xã hội. Một số chuyên gia khác cho biết đã kiến nghị Bộ Xây dựng, Tài nguyên và Môi trường sớm giúp các địa phương triển khai quy chuẩn về nhà ở xã hội, đưa hoạt động phát triển loại hình này vào kế hoạch trong năm tới.
        `,
        img: anh16,
    },
    {
      title: "Bất Động Sản",
      description:
        "4 giải pháp phát triển bền vững thị trường bất động sản",
      content:
        `Với sự phát triển mạnh mẽ của nền kinh tế và sự thay đổi trong môi trường pháp lý, thị trường bất động sản Việt Nam hiện đang đứng trước những cơ hội lớn.

        Cơ hội lớn từ hệ thống pháp lý và động lực kinh tế

        Chia sẻ mới đây, bà Nguyễn Thị Phương Hoa - Thứ trưởng Bộ Tài Nguyên và Môi trường đã nhấn mạnh những điểm mới quan trọng trong Luật Đất đai 2024, khẳng định rằng việc sửa đổi, bổ sung các quy định sẽ tạo hành lang pháp lý rõ ràng, minh bạch và đồng bộ hơn. Điều này sẽ giúp giải phóng nguồn lực đất đai, đồng thời thúc đẩy phát triển thị trường bất động sản theo hướng lành mạnh hơn.

        Cùng với Luật Nhà ở 2023 và Luật Kinh doanh bất động sản 2023, ba bộ luật này có hiệu lực từ ngày 1/8/2024 đã tạo nên một môi trường pháp lý hoàn chỉnh hơn, giúp thị trường bất động sản vận hành hiệu quả và đáp ứng tốt hơn nhu cầu nhà ở của người dân, đặc biệt là nhà ở xã hội và phân khúc nhà ở trung bình phù hợp với thu nhập của đa số người dân.

        Đồng quan điểm, TS Nguyễn Văn Khôi, Chủ tịch Hiệp hội Bất động sản Việt Nam cũng dự báo thị trường bất động sản sẽ có nhiều cơ hội, với nền kinh tế vĩ mô ổn định, lạm phát kiểm soát được và sự quan tâm đặc biệt của Đảng và Nhà nước đối với vấn đề nhà ở. Những yếu tố này sẽ tạo động lực thúc đẩy sự phục hồi mạnh mẽ cho thị trường bất động sản trong thời gian tới. Đặc biệt, nhu cầu về nhà ở, từ nhà ở xã hội đến các dự án nhà ở chất lượng cao, đang ngày càng gia tăng khi đời sống người dân được cải thiện và tầng lớp trung lưu mở rộng.

        Tuy nhiên, bên cạnh cơ hội, thị trường bất động sản vẫn đang đối diện với không ít thách thức. Theo TS. Nguyễn Văn Khôi, "dự án treo" và các thủ tục pháp lý chưa được giải quyết triệt để là một trong những yếu tố khiến thị trường thiếu tính minh bạch và giảm lòng tin của người dân. Việc này cũng khiến nguồn cung nhà ở chưa được đáp ứng kịp thời, đặc biệt là ở phân khúc nhà ở giá rẻ và nhà ở xã hội.

        Bên cạnh đó, mức giá đất đang tăng cao khiến người dân gặp khó khăn trong việc tiếp cận nhà ở, đặc biệt là các gia đình thu nhập thấp. Việc tăng giá đất và hiện tượng đầu cơ đất đai cũng đã làm tăng chi phí nhà ở, tạo ra sự mất cân đối giữa cung và cầu, đặc biệt ở các khu vực đô thị lớn như Hà Nội và TP. Hồ Chí Minh.

        Ngoài ra, tình trạng "sốt đất" ảo ở các khu vực vùng ven đã đẩy giá đất lên mức quá cao, vượt quá khả năng chi trả của người dân, làm gia tăng nguy cơ hình thành "bong bóng" bất động sản. Việc này có thể gây ra những hậu quả nghiêm trọng cho nền kinh tế và xã hội nếu không được kiểm soát và xử lý kịp thời.

        4 giải pháp để tạo môi trường phát triển lành mạnh

        Để thị trường bất động sản phát triển lành mạnh và đáp ứng được nhu cầu nhà ở cho đại đa số người dân, các chuyên gia cho rằng cần có các giải pháp đồng bộ và hiệu quả từ cả phía chính quyền và doanh nghiệp.

        Nhấn mạnh giải pháp về tăng cường minh bạch thông tin và quản lý giá trị đất đai, GS TS Hoàng Văn Cường, Ủy viên Ủy ban Tài chính - Ngân sách của Quốc hội, nhấn mạnh rằng cần phải xây dựng một hệ thống thông tin rõ ràng và minh bạch hơn về thị trường bất động sản. Điều này sẽ giúp nhà đầu tư và người mua nhà có thể tiếp cận thông tin chính xác và kịp thời, tránh tình trạng "thổi giá" hay đầu cơ đất đai.

        Trong khi đó, theo PGS. TS. Ngô Trí Long - Chuyên gia kinh tế, cần giải pháp phân biệt rõ ràng giữa đầu tư và đầu cơ. Chuyên gia kinh tế cho biết trong cơ chế thị trường, đầu tư và đầu cơ đều là các yếu tố bình thường. Tuy nhiên, cần có chính sách thuế hợp lý để hạn chế tình trạng đầu cơ, đảm bảo thị trường phát triển bền vững. Đồng thời, cần làm rõ các quy định liên quan đến giá đất và giá trị thực của bất động sản để tránh tình trạng giá đất ảo.

        Các chuyên gia cũng đồng quan điểm, cải cách thủ tục hành chính và tạo thuận lợi cho doanh nghiệp là rất cấp thiết. Các thủ tục hành chính liên quan đến đầu tư bất động sản cần được cải cách mạnh mẽ, giảm bớt sự phức tạp và thời gian chờ đợi. Điều này sẽ giúp các doanh nghiệp bất động sản nhanh chóng triển khai các dự án, đồng thời tăng cường nguồn cung nhà ở, đặc biệt là nhà ở xã hội và nhà ở giá rẻ.

        Và cuối cùng là cải thiện chính sách tài khóa và hỗ trợ người mua nhà. Theo TS. Cấn Văn Lực, chuyên gia kinh tế, chính sách tài khóa và tiền tệ cần được điều chỉnh sao cho phù hợp với nhu cầu thực tế của thị trường. Cần có các gói hỗ trợ tài chính, giảm lãi suất vay mua nhà, đặc biệt là với các đối tượng thu nhập thấp, giúp họ có thể tiếp cận nhà ở một cách dễ dàng hơn.
        `,
        img: anh17,
    },
    {
      title: "Bất Động Sản",
      description:
        "TS. Vũ Đình Ánh: Bất động sản là một loại tài sản, hàng hóa đặc biệt, đầu tư hay đầu cơ là hết sức bình thường",
      content:
        `Chuyên gia kinh tế TS. Vũ Đình Ánh cho rằng, đầu tư hay đầu cơ bất động sản là hết sức bình thường. Chúng ta chỉ có thể "hạn chế" đầu cơ chứ không thể "chống lại" đầu cơ.

        Tại Diễn đàn "Để thị trường bất động sản trở lại lành mạnh và phát triển" do Đài Phát thanh và truyền hình Hà Nội tổ chức ngày 16/11, một số chuyên gia bất động sản đã cùng nhau bàn luận về thực trạng giá nhà tăng cao trong bối cảnh hiện nay và đưa ra một số giải pháp nhằm hạn chế tình trạng đầu cơ. 

        Theo PGS. TS Ngô Trí Long, Nguyên Viện trưởng Viện Nghiên cứu đánh giá, Bộ Tài chính, cần phân biệt rõ đầu tư và đầu cơ là khác nhau. Ông cho rằng, đầu cơ là mua sản phẩm để hưởng chênh lệch giá trong thời gian ngắn. Vì vậy, thị trường không lành mạnh, không hẳn là do đầu cơ. 

        Mặt khác, trong kinh tế thị trường, đầu tư cần có đầu cơ. Nhà nước cần phải sử dụng công cụ thuế để điều tiết thị trường. Còn muốn để hạn chế và điều tiết cần phải dùng đến thuế tài sản. Có nên đánh thuế ngôi nhà thứ hai hay không? Xu thế thế giới là có! Tuy nhiên, đánh thuế bất động sản không đồng nghĩa với đánh thuế ngôi nhà thứ hai. 

        GS.TS Hoàng Văn Cường, Uỷ viên Uỷ ban Tài chính - Ngân sách của Quốc hội cũng nêu quan điểm: Thuế liên quan đến đất và nhà là phải có. Thuế điều tiết giá trị tăng lên của nhà và đất là phải có càng sớm càng tốt. Tuy nhiên cần xem xét kỹ tính thời điểm bởi hiện nay, doanh nghiệp và thị trường đang gặp khó khăn, nếu như đánh thuế sẽ gặp khó khăn hơn.

        Còn theo chuyên gia kinh tế TS. Vũ Đình Ánh: "Chúng ta hay quan niệm đầu cơ bất động sản sẽ làm méo mó thị trường, không phản ánh đúng thực tế trên thị trường. Tuy nhiên, theo quan điểm của tôi, bất động sản là một loại tài sản, hàng hóa đặc biệt. Đầu tư hay đầu cơ bất động sản là hết sức bình thường.

        Do đó, chúng ta phải ứng xử với đầu cơ một cách bình thường chứ không phải cứ thấy đầu cơ là cấm đoán hoặc trừng trị. Hơn nữa, thuế cũng chỉ là một trong rất nhiều công cụ để hạn chế đầu cơ, mà không thể hoàn toàn "chống lại" được hành vi đầu cơ bất động sản". 

        Theo vị chuyên gia, giải pháp then chốt nhất để hạn chế tình trạng đầu cơ đó là liên quan đến vấn đề định giá đất. Nếu chúng ta không xác định được phương pháp định giá nhà, giá đất nói riêng và giá bất động sản nói chung thì tất cả các công cụ đưa ra đều là vô nghĩa, chỉ mang tính chất hình thức. Cùng với đó, phải xác định được giá đất thì mới có cơ sở áp dụng các công cụ thuế.

        "Và theo quan điểm của tôi, hiện nay trên thị trường có 4 loại giá bất động sản. Cái giá đất mà chúng ta thường xuyên đề cập đến, mong muốn hạn chế đầu cơ chỉ là 1 trong 4 loại giá đất đó. Như vậy, có đến tận 4 loại giá bất động sản như thế này thì rất khó để nói đến câu chuyện phát triển thị trường bất động sản một cách lành mạnh, TS. Ánh đặt vấn đề.

        Cũng liên quan đến vấn đề thuế bất động sản, ông Vương Duy Dũng, Phó Cục trưởng Cục Quản lý Nhà và Thị trường bất động sản nhấn mạnh, thuế bất động sản đề xuất nằm trong báo cáo của Bộ Xây dựng liên quan đến chính sách thuế bất động sản. Nhưng không phải Bộ Xây dựng đề xuất đánh thuế ngôi nhà thứ hai - cần phải hiểu lại một cách đúng đắn quan điểm và nội dung đề xuất này.
        `,
        img: anh18,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "Hà Nội chấp thuận nguyên tắc xác định giá đất làm căn cứ giải quyết hồ sơ nghĩa vụ tài chính, thuế",
      content:
        `Thực hiện Luật Đất đai 2024, Phó Chủ tịch UBND thành phố Hà Nội Nguyễn Trọng Đông vừa ký Văn bản số 3845/UBND-KTTH ngày 19/11/2024 về việc xác định nghĩa vụ tài chính thuế thu nhập cá nhân và các khoản thu từ đất.

        Theo đó, để giải quyết hồ sơ nghĩa vụ tài chính, thuế về đất đai theo quy định tại khoản 1 Điều 159 Luật Đất đai 2024 được kịp thời, thống nhất trong thời gian UBND thành phố chưa ban hành Quyết định điều chỉnh bảng giá đất quy định tại khoản 1 Điều 257 Luật Đất đai 2024, Sở Tài nguyên và Môi trường Hà Nội phải khẩn trương rà soát, tham mưu UBND thành phố ban hành Quyết định điều chỉnh bảng giá đất theo khoản 1 Điều 257 Luật Đất đai 2024.

        Thời điểm hiện tại, UBND thành phố Hà Nội chấp thuận nguyên tắc xác định giá đất làm căn cứ giải quyết hồ sơ nghĩa vụ tài chính, thuế về đất đai theo quy định tại khoản 1 Điều 159 Luật Đất đai 2024 là: Giá đất tại Bảng giá đất ban hành kèm theo Quyết định số 30/2019/QĐ-UBND ngày 31/12/2019, Quyết định số 20/2023/QĐ-UBND ngày 7/9/2023 sửa đổi, bổ sung, điều chỉnh Quyết định số 30/2019/QĐ-UBND ngày 31/12/2019 nhân với hệ số điều chỉnh giá đất quy định tại Quyết định số 45/2024/QĐ-UBND (đối với tiền thuê đất), Quyết định số 46/2024/QĐ-UBND (đối với tiền sử dụng đất và thuế thu nhập cá nhân) ngày 18/7/2024 của UBND thành phố. 

        Trường hợp giá chuyển nhượng ghi trên hợp đồng chuyển nhượng bất động sản, quyền sử dụng đất hoặc hồ sơ khai thuế cao hơn giá đất theo nguyên tắc xác định nêu trên thì thu nhập tính thuế được xác định theo giá chuyển nhượng ghi trên hợp đồng hoặc hồ sơ khai thuế.

        Theo Bảng giá đất áp dụng từ ngày 1/1/2020 đến ngày 31/12/2024 tại Quyết định số 30/2019/QĐ-UBND ngày 31/12/2019 của UBND thành phố Hà Nội, giá đất ở được áp dụng tùy theo từng quận, huyện, tuyến đường, vị trí. Trong đó, giá đất tại một số khu vực nội thành cao nhất là 162 triệu đồng/m2. Giá đất nông nghiệp cao nhất là 252.000 đồng/m2…

        Căn cứ các Luật mới được áp dụng như: Luật Đất đai, Luật Nhà ở, Luật Kinh doanh bất động sản và Luật Các tổ chức tín dụng, UBND thành phố Hà Nội đã ký Quyết định số 6032/QĐ-UBND ngày 19/11/2024 về việc bãi bỏ Quyết định số 2681/QĐ-UBND ngày 22/5/2024 của UBND thành phố về việc ủy quyền quyết định giá đất cụ thể ở Hà Nội. Quyết định có hiệu lực từ ngày 19/11/2024.

        Chủ tịch UBND các quận, huyện, thị xã quyết định giá đất cụ thể theo quy định tại Luật Đất đai 2024. Trong quá trình thực hiện phát sinh vướng mắc, các đơn vị kịp thời có văn bản gửi Sở Tài nguyên và Môi trường Hà Nội để được hướng dẫn.
        `,
        img: anh19,
    },
    {
      title: "Bất Động Sản",
      description:
        "Dự báo diễn biến thị trường bất động sản khi có bảng giá đất mới",
      content:
        `Thời gian tới, nhiều địa phương sẽ ban hành bảng giá đất mới. Thông tin này không chỉ riêng doanh nghiệp mà ngay cả người dân cũng chờ đợi sự thay đổi về mức giá đất được điều chỉnh mới.

        Dù mức giá của mỗi địa phương sẽ có biên độ điều chỉnh khác nhau nhưng các chuyên gia cho rằng thị trường bất động sản sẽ chịu nhiều tác động, nhất là các doanh nghiệp hoạt động trong lĩnh vực này.

        Yêu cầu thực tiễn đòi hỏi bảng giá đất điều chỉnh mới sẽ phải tuân theo Luật Đất đai 2024 và giúp thị trường minh bạch hơn, hướng tới sự công bằng về cách tính giá đất, giải quyết được những khúc mắc của người có đất bị thu hồi, góp phần đẩy nhanh tiến độ giải phóng mặt bằng tại nhiều dự án, nhất là với nhóm công trình trọng điểm…

        Tuy nhiên, nhiều doanh nghiệp chia sẻ họ rất hồi hộp, thậm chí “nín thở” đợi bảng giá đất mới được ban hành bởi dự báo chi phí dự án sẽ bị đội lên hay việc gia tăng các khoản chi phí liên quan đến tiền sử dụng đất mà trước đấy đang “tạm tính” theo giá cũ. Còn về phía người mua nhà vẫn là lo lắng, trăn trở bởi mức giá nhà ở đã tăng tốc quá nhanh suốt thời gian qua và có thể chưa dừng lại…    

        Ông Lê Đình Chung - Tổng Giám đốc SGO Homes - thành viên Tổ công tác nghiên cứu thị trường Hội môi giới Bất động sản Việt Nam (VARS) cho rằng, thị trường đang tồn tại một số vấn đề về nghĩa vụ tài chính liên quan đến đất đai của dự án gồm tiền sử dụng đất, tiền thuê đất, thuế, phí, lệ phí liên quan đến đất đai.

        Một số thị trường bất động sản chưa hồi phục. Việc sử dụng dữ liệu đầu vào để xác định giá đất trong khoảng 2 năm gần đây có thể trùng với thời điểm thị trường bất động sản còn đang trong giai đoạn “nóng sốt” là bất hợp lý sẽ dễ dẫn đến việc xác định giá đất không phù hợp với tình hình thực tế hiện tại.

        Đặc biệt, những sai phạm trong việc thẩm định giá làm thất thu ngân sách Nhà nước thời gian qua đã khiến nhiều địa phương “né” trách nhiệm, e ngại rủi ro pháp lý. Thậm chí, thường lựa chọn duyệt giá đất ở mức cao hoặc chậm trễ trong việc phê duyệt để “an toàn”.

        Do đó, những dự án đã được phê duyệt mức giá xác định nghĩa vụ tài chính liên quan đến đất đai sớm thường cao hơn so với mặt bằng, khiến hiệu quả kinh doanh thấp, thậm chí có nguy cơ thua lỗ. Trong khi, những dự án chưa được xác định giá đất thì bị đình trệ, chậm tiến độ - ông Chung nêu vấn đề.

        Đồng quan điểm, ông Nguyễn Văn Lợi - Giám đốc Công ty cổ phần Bất động sản Đất vàng nhận xét, thời gian trước, nhiều dự án có mức giá trúng thầu tăng cao là do hành vi trả giá cao hơn rồi bỏ tiền đặt cọc, không nộp tiền trúng đấu giá, thậm chí sẵn sàng bất chấp rủi ro, hoàn thành nghĩa vụ trong cuộc đấu giá để hợp thức hóa mức giá trúng. Mục đích là "thổi giá", tạo mặt bằng giá "ảo" nhằm “đẩy giá” của các lô đất trong khu vực để trục lợi.

        Mặc dù cơ quan chức năng đã vào cuộc kiểm tra, nhưng hành động này chủ yếu nhằm đảm bảo tính minh bạch và hợp pháp của quá trình đấu giá chứ khó có thể can thiệp vào mức giá thị trường. Bởi trong nền kinh tế thị trường, các bên tham gia giao dịch mua bán theo nguyên tắc thuận mua, vừa bán, họ hoàn toàn có thể bỏ cọc mà không cần chứng minh. Nhất là khi Việt Nam chưa có văn bản luật nào xác định rõ hành vi đầu cơ, thổi giá hiện nay để làm căn cứ xử lý - ông Lợi phân tích.

        Trước việc các địa phương sẽ ban hành bảng giá đất mới, các chuyên gia cũng như doanh nghiệp mong muốn cân nhắc thời điểm cũng như tính toán kỹ lưỡng, tránh “tác động ngược”.

        Ông Ngô Quang Phúc - Tổng giám đốc Phú Đông Group cho rằng, khi bảng giá đất mới được ban hành, ít nhiều cũng sẽ ảnh hưởng đến thị trường bất động sản. Nhưng giải pháp tốt nhất để hạn chế tăng giá bất động sản là Nhà nước cần hỗ trợ doanh nghiệp trong việc rút ngắn các quy trình thủ tục pháp lý làm dự án, tăng cường nguồn cung nhà ở bình dân, vừa túi tiền, nhà ở xã hội... từ đó giá bán sẽ được bình ổn. Đây cũng là giải pháp hiệu quả giúp bình ổn và đưa thị trường phát triển bền vững – ông Phúc kỳ vọng.

        Đánh giá thị trường bất động sản năm 2025, các chuyên gia cho rằng, đất nền và chung cư sẽ là 2 phân khúc hứa hẹn thanh khoản cao với tiềm năng gia tăng lợi nhuận tốt. Tuy nhiên, các chuyên gia cũng cảnh báo, mặc được đánh giá cao về tiềm năng nhưng đầu tư đất nền cũng chứa đựng những rủi ro.

        Hiện nay, đất nền tại nhiều khu vực đang tăng giá vô căn cứ. Giai đoạn 2018 - 2022, giá đất tại quận Hà Đông (Hà Nội) tăng 2,25 lần, từ 40 triệu đồng lên 90 triệu đồng/m2 và bây giờ vượt xa mốc 100 triệu đồng/m2. Tại Hà Nội, đất nền ở các khu vực vùng ven như Vành đai 4 đang trở thành tâm điểm. Lượng nhà đầu tư tìm kiếm đất nền tăng đến 30% so với các quý trước, hầu hết tập trung tại Sóc Sơn, Mê Linh, Thanh Oai, Đan Phượng… Nhiều nhà đầu tư “rủ” nhau mua vì kỳ vọng đất tăng bằng lần khi hạ tầng hoàn thiện.

        Không riêng đất nền được dự báo sẽ “tạo sóng”, phân khúc chung cư cũng vẫn duy trì sức hấp dẫn với bước nhảy vọt xa về giá như thời gian qua. Theo dự báo của One Housing – nhà phân phối bất động sản cao cấp, nguồn cung chung cư sẽ tăng gần gấp 3 vào năm 2025 - 2026 so với năm 2023. Cụ thể, dự kiến sẽ có khoảng 23.000 căn hộ ra mắt trong năm 2025. Tuy nhiên, đa phần chung cư vẫn thuộc phân khúc trung và cao cấp. Do đó, “cơn khát” về nhà ở bình dân vẫn chưa thể được đáp ứng.

        Giám đốc CBRE Hà Nội Nguyễn Hoài An dự báo, giá chung cư sẽ không giảm, chỉ tăng với mức khoảng từ từ 5-8%. Trong bối cảnh nguồn cung tập trung nhiều vào phân khúc cao cấp thì người có nhu cầu mua nhà ở thật với mức thu nhập trung bình vẫn phải tiếp tục “mơ”. Đáng chú ý, sự mất cân đối giữa các phân khúc sẽ tác động đến quyết định đầu tư và thanh khoản của thị trường.
        `,
        img: anh20,
    },
    {
      title: "Thẩm Định Giá",
      description:
        "TPHCM cho phép ngành y tế thành lập Hội đồng thẩm định giá khám chữa bệnh mới",
      content:
        `Ngày 21/11, UBND TPHCM đã có công văn trả lời đề nghị của Sở Y tế xin chỉ đạo thực hiện công tác xây dựng phương án giá dịch vụ khám bệnh, chữa bệnh theo Thông tư số 21/2024/TT-BYT ngày 17/10/2024 của Bộ Y tế hướng dẫn các quy định mới liên quan phương pháp định giá dịch vụ khám chữa bệnh.

        Chủ tịch UBND TPHCM Phan Văn Mãi chỉ đạo chấp thuận theo đề xuất của Sở Y tế và giao sở này quyết định lựa chọn đơn vị trực thuộc nhằm khẩn trương lập hồ sơ phương án giá dịch vụ khám chữa bệnh. Sở Y tế là cơ quan thẩm định phương án giá.

        Lãnh đạo thành phố cũng cho phép Sở Y tế thành lập Hội đồng thẩm định phương án giá với thành viên là đại diện Sở Y tế, Sở Tài chính, Bảo hiểm xã hội thành phố, đại diện một số cơ sở y tế thuộc các quận, huyện, TP Thủ Đức và các đơn vị có liên quan.

        Quyết định trên của UBND TPHCM được đưa ra nhằm đảm bảo tiến độ xây dựng nghị quyết quy định giá dịch vụ khám bệnh, chữa bệnh do BHYT thanh toán, giá do ngân sách Nhà nước thanh toán, giá dịch vụ không thuộc danh mục do BHYT thanh toán mà không phải là dịch vụ khám bệnh, chữa bệnh theo yêu cầu tại các cơ sở y tế Nhà nước của thành phố. Dự thảo nghị quyết dự kiến sẽ trình HĐND thành phố thông qua vào kỳ họp thường kỳ cuối năm 2024.
        `,
        img: anh21,
    },
    {
      title: "Bất Động Sản",
      description:
        "Bộ Tài nguyên và Môi trường đề xuất công khai trường hợp trúng đấu giá đất nhưng bỏ cọc",
      content:
        `Bộ trưởng Bộ Tài nguyên và Môi trường Đỗ Đức Duy đề xuất sáu giải pháp giải quyết bất cập trong hoạt động đấu giá đất ở các địa phương thời gian qua, trong đó công khai tên những trường hợp trúng đấu giá nhưng bỏ cọc.

        Ngày 24-11, Hội Nông dân Việt Nam phối hợp với Bộ Tài nguyên và Môi trường tổ chức Diễn đàn “Chủ tịch Hội nông dân Việt Nam - Bộ trưởng Bộ Tài nguyên và Môi trường lắng nghe nông dân nói”, baochinhphu.vn đưa tin.

        Theo ông Đỗ Đức Duy, Bộ trưởng Bộ Tài nguyên và Môi trường, Bộ đã kiến nghị Chính phủ, Thủ tướng Chính phủ chỉ đạo các địa phương thực hiện các giải pháp nhằm khắc phục bất cập, vướng mắc, trong đó có các trường hợp trục lợi từ đấu giá đất.

        Về giải pháp thứ nhất, các địa phương cần thực hiện nghiêm các quy định về Luật đấu giá tài sản của Nhà nước, Luật giá, Luật đất đai năm 2024. Thứ hai là công khai minh bạch, kế hoạch sử dụng đất, quy hoạch xây dựng, quy hoạch đô thị, nhất là tại khu vực đấu giá.

        Thứ ba là điều chỉnh hợp lý giá đất trong bảng giá đất làm cơ sở để định giá khởi điểm khi đấu giá đất.

        Thứ tư, các địa phương cần tăng cường các giải pháp về nguồn cung đất ở, nhà ở phù hợp với nhu cầu của đại đa số người dân, có giá cả hợp lý để bà con có thể chi trả và mua sử dụng, tránh tình trạng mất cân đối cung cầu về đất ở, nhà ở... Vì khi cung cầu không gặp nhau thì giá bị đẩy lên cao.

        Thứ năm, quy chế đấu giá có thể quy định rút ngắn thời gian nộp tiền trúng đấu giá; đồng thời bổ sung quy định công khai các trường hợp trúng giá cao bỏ cọc để hạn chế trường hợp lợi dụng đấu giá trục lợi.

        Cuối cùng, Bộ trưởng Bộ Tài nguyên và Môi trường Đỗ Đức Duy cho rằng cần tăng cường thanh tra, kiểm tra và xử lý nghiêm các tổ chức cá nhân có vi phạm pháp luật trong đấu giá quyền sử dụng đất. Nếu thực hiện đồng bộ những giải pháp nêu trên, có thể sẽ khắc phục được bất cập trong hoạt động đấu giá đất xảy ra trong thời gian vừa qua, nhất là các huyện vùng ven Hà Nội.
        `,
        img: anh22,
    },
    {
      title: "Bất Động Sản",
      description:
        "Nghị quyết về tăng cường quản lý thị trường bất động sản được thông qua",
      content:
        `Chiều 23-11, tiếp tục chương trình Kỳ họp thứ 8, Quốc hội đã biểu quyết thông qua nghị quyết về “Tiếp tục nâng cao hiệu lực, hiệu quả việc thực hiện chính sách, pháp luật về quản lý thị trường bất động sản và phát triển nhà ở xã hội” với 421/423 đại biểu Quốc hội tham gia biểu quyết tán thành.

        Nghị quyết đánh giá, trong giai đoạn 2015-2021, thị trường bất động sản chứng kiến sự tăng trưởng mạnh mẽ, tuy nhiên, cơ cấu sản phẩm lại không đồng đều, tập trung chủ yếu vào phân khúc cao cấp và đầu tư, khiến cho nhu cầu nhà ở của đại đa số người dân không được đáp ứng đầy đủ, TTXVN đưa tin.

        Giai đoạn cuối, thị trường bất động sản du lịch, lưu trú gặp phải nhiều rào cản pháp lý, khiến hoạt động kinh doanh gặp khó khăn. Tình hình càng trở nên phức tạp hơn khi dịch COVID-19 bùng phát.

        Đến năm 2022-2023, thị trường chứng kiến sự sụt giảm mạnh về nguồn cung, đi kèm với đó là sự tăng giá chóng mặt., khiến nhiều người dân khó tiếp cận được với nhà ở, trong khi các nhà đầu tư đối mặt với rủi ro cao. Hàng loạt dự án "đắp chiếu" không chỉ gây lãng phí nguồn lực mà còn làm gia tăng chi phí cho người mua nhà.

        Theo đó, nghị quyết của Quốc hội về “Tiếp tục nâng cao hiệu lực, hiệu quả việc thực hiện chính sách, pháp luật về quản lý thị trường bất động sản và phát triển nhà ở xã hội” quyết nghị giao Chính phủ thực hiện các nhiệm vụ và giải pháp.

        Để triển khai hiệu quả Luật Kinh doanh bất động sản, Luật Nhà ở, Luật Đấu thầu và Luật Đất đai, các bộ, ngành, địa phương cần tập trung hoàn thiện hệ thống văn bản hướng dẫn thi hành, nhằm khắc phục những hạn chế, tạo lập môi trường pháp lý minh bạch, ổn định, thúc đẩy hoạt động đầu tư và đảm bảo quyền lợi của người dân.

        Quốc hội yêu cầu Chính phủ tăng cường công tác theo dõi, nghiên cứu và dự báo để kịp thời đưa ra các giải pháp điều tiết, góp phần ổn định và lành mạnh hóa thị trường bất động sản.

        Trong quá trình điều tiết thị trường bất động sản, cần tôn trọng quy luật thị trường, song song đó, phải đảm bảo sự phát triển bền vững, tránh tình trạng thị trường phát triển nóng hoặc đóng băng.

        Mục tiêu là tạo ra một thị trường đa dạng về sản phẩm, cân đối cung cầu, đặc biệt ưu tiên cung cấp nhà ở cho người dân có thu nhập thấp và trung bình, góp phần đảm bảo an sinh xã hội. Đồng thời, cần có các giải pháp căn cơ để ổn định giá cả, ngăn chặn các hành vi thao túng thị trường.

        Trước mắt, để tháo gỡ khó khăn cho thị trường bất động sản, Quốc hội giao Chính phủ tập trung giải quyết dứt điểm các dự án gặp vướng mắc pháp lý. Các giải pháp cần dựa trên cơ sở pháp lý rõ ràng, bảo đảm quyền lợi của Nhà nước, người dân và doanh nghiệp. Đồng thời, cần tạo điều kiện thuận lợi để các dự án được triển khai trở lại, góp phần thúc đẩy kinh tế - xã hội.
        `,
        img: anh23,
    },
    {
      title: "Bất Động Sản",
      description:
        "Đề xuất ưu tiên mở rộng loại đất làm nhà ở bình dân",
      content:
        `HoREA đề nghị ưu tiên thí điểm mở rộng đất làm dự án nhà thương mại với chủ đầu tư làm phân khúc bình dân để thị trường phát triển cân bằng.

        Theo Luật Nhà ở 2014, từ 1/7/2015, nhà đầu tư được làm dự án nhà ở thương mại khi có quyền sử dụng với đất ở. Cơ chế này, theo Chính phủ, làm bó hẹp các trường hợp thực hiện dự án nhà ở thương mại dưới quy mô khu đô thị, nhất là tại các khu vực mới, chưa có đất ở.

        Do đó, Chính phủ đề xuất Quốc hội xem xét dự thảo Nghị quyết, trong đó cho thí điểm trong 5 năm việc nhà đầu tư thỏa thuận nhận quyền sử dụng với đất nông nghiệp, phi nông nghiệp không phải đất ở, đất khác trong cùng thửa để làm dự án nhà ở thương mại.

        Ông Lê Hoàng Châu, Chủ tịch Hiệp hội bất động sản TP HCM (HoREA) góp ý ưu tiên thí điểm với doanh nghiệp nhận chuyển quyền sử dụng hoặc đang có quỹ đất để làm dự án nhà ở thương mại vừa túi tiền, phù hợp tình hình kinh tế của địa phương.

        Việc này theo ông sẽ thúc đẩy cấu trúc lại sản phẩm nhà ở đang lệch pha về phân khúc cao cấp, giúp thị trường phát triển an toàn, bền vững.

        Tại phiên thảo luận quốc hội tuần trước, nhiều đại biểu Quốc hội băn khoăn khi thí điểm mở rộng đất làm dự án nhà ở thương mại trong khi không ít nơi xây xong không ai ở, còn phát triển nhà ở xã hội, nhà ở vừa túi tiền người dân vẫn gặp khó. Theo họ, nhà ở xã hội, nhà giá bình dân là phân khúc có nhu cầu thực của người dân tại nhiều địa phương.

        Cũng theo dự thảo nghị quyết trình Quốc hội, dự án được chọn thí điểm phải được thực hiện tại khu vực đô thị, không thuộc công trình phải thu hồi. Dự án thí điểm cần có tối đa 30% diện tích đất ở tăng thêm trong kỳ quy hoạch (so với hiện trạng sử dụng đất) theo phương án phân bổ và khoanh vùng đất đai của quy hoạch tỉnh đến 2030.

        Chủ tịch HoREA cho biết tiêu chí trên sẽ giúp hạn chế tình trạng nhà đầu tư lợi dụng nghị quyết thí điểm để "mua gom" đất nông nghiệp tràn lan hoặc lấy đất trồng lúa làm dự án nhà ở thương mại. Bởi Luật Đất đai 2024 quy định chặt chẽ về quy hoạch đất trồng, cơ chế bảo vệ đất lúa, nhằm bảo đảm an ninh lương thực quốc gia.

        Việc thí điểm này là bước tháo gỡ khó khăn về nguồn cung của các dự án bất động sản trong bối cảnh giá tăng cao do một phần nguyên nhân từ khó khăn tiếp cận đất đai.

        Danh mục khu đất được chọn thí điểm mở rộng loại đất chuyển đổi sẽ do UBND cấp tỉnh trình HĐND cùng cấp phê duyệt. Ngoài đề xuất từ cấp có thẩm quyền, ông Lê Hoàng Châu kiến nghị bổ sung thêm tiêu chí nhà đầu tư được đề xuất bổ sung khu đất vào danh mục này.

        Thời gian qua, nhiều huyện ven Hà Nội nóng về đấu giá đất với giá trúng lên tới 100 triệu đồng một m2, như tại Thanh Oai, Hoài Đức. Các mức giá này gấp vài lần tới chục lần giá khởi điểm. Gần đây các phiên đấu giá ở huyện ven giảm nhiệt sau các động thái siết lại từ cơ quan quản lý, song giá trúng vẫn ở mức cao 55-75 triệu đồng một m2.

        Dự kiến Quốc hội biểu quyết thông qua nghị quyết này vào ngày 30/11.
        `,
        img: anh24,
    },

    // {
    //   title: "",
    //   description:
    //     "",
    //   content:
    //     `
    //     `,
    //     img: ,
    // },
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return selectedArticle ? (
    <Section3
      description={selectedArticle.description}
      content={selectedArticle.content}
      img={selectedArticle.img}
      link={selectedArticle.link}
      onBack={() => setSelectedArticle(null)}
    />
  ) : (
    <div>
      <section className="relative">
        <div className="relative z-10 flex flex-col items-center justify-center md:p-[10vh_0] p-[10vh_0]">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
            <center>Tin tức</center>
          </h1>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="cursor-pointer"
              >
                <Card
                  className="shadow-lg border border-gray-300 transition-transform transform hover:scale-105"
                  isHoverable
                  isPressable
                  css={{
                    mw: "400px",
                    mb: "20px", 
                    p: "1rem",
                    borderRadius: "12px",
                  }}
                >
                  <CardHeader>
                    <div className="text-black">
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                    </div>
                  </CardHeader>
                  <CardBody>
                    {/* Thêm sự kiện onClick vào mô tả */}
                    <p
                      className="line-clamp-3 text-gray-700 cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      {article.description}
                    </p>
                  </CardBody>
                  <CardFooter>
                    <p 
                      className="text-blue-500 font-bold"
                      onClick={() => setSelectedArticle(article)}
                      >Xem thêm</p>
                  </CardFooter>
                </Card>
              </motion.div>

            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
