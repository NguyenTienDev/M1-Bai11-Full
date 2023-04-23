// Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lại con) khi biết số tiền ban đầu, số tháng cho vay và lãi xuất hàng tháng.

let tienVay=parseInt(prompt("Nhập số tiền vay"));
let thangVay=parseInt(prompt("Nhập số tháng vay"));
let laiThang=parseInt(prompt("Nhập sô lãi xuất % tháng"));
let tienLaiThang=tienVay*laiThang/100;
let tongTienLai=tienLaiThang*thangVay;

document.write("Số tiền lãi vay hàng tháng"+ tienLaiThang + " VNĐ. Tổng số tiền lãi vay 12 tháng"+ tongTienLai + "VNĐ");
