function removeVietnameseTones(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Xóa dấu tiếng Việt
    .replace(/đ/g, "d").replace(/Đ/g, "d") // Chuẩn hóa chữ 'đ'
    .replace(/[^\w\s-]/g, "") // Xóa ký tự đặc biệt
    .trim() // Xóa khoảng trắng đầu cuối
    .replace(/\s+/g, "-") // Thay khoảng trắng bằng dấu '-'
    .toLowerCase(); // Chuyển thành chữ thường
}

export default removeVietnameseTones;
