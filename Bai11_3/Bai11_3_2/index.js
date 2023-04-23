// Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

let nhietDo = parseInt(prompt("Nhập nhiệt độ hiện tại:"));

if (nhietDo > 100) {
  alert("Hãy giảm nhiệt độ!");
} else if (nhietDo < 20) {
  alert("Hãy tăng nhiệt độ!");
} else {
  alert("Nhiệt độ ở mức bình thường.");
}