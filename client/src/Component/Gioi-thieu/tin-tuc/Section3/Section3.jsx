import './Section3.css'

function Section3({ description, content, onBack, img, link }) {
  return (
    <div className="terms-container">

      {/* Nội dung chính */}
      <div className="content-wrapper">
        {/* Nút quay lại */}
        <button
          onClick={onBack}
          className="text-blue-500 mb-4 cursor-pointer"
        >
          ← Quay lại
        </button>

        {/* Tiêu đề bài viết */}
        <h1 className="page-title text-2xl font-bold text-gray-800 mb-4">
          {description}
        </h1>
        {/* Hình ảnh bài viết */}
        {img && <img src={img} alt={description} className="article-image mb-4" />}

        {/* Nội dung bài viết */}
        <p className="text-gray-900 text-lg">{content}</p>

        {/* Hình ảnh bài viết */}
        <a 
          href={link}
          className="text-gray-900 text-lg cursor-pointer"
          target="_blank"
        >{link}</a>
      </div>
    </div>
  );
}

export default Section3;
