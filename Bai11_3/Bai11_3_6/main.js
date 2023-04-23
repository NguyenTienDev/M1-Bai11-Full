// Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên

var count = 0;  // khởi tạo biến đếm số lượng số chia hết cho 7
var sum = 0;  // khởi tạo tổng ban đầu bằng 0
// var i = 0; // khởi tạo biến i bằng 1

// while (count < 30) {  // duyệt đến khi tìm được 30 số chia hết cho 7
//   if (i % 7 === 0) {  // nếu số i chia hết cho 7
//     sum += i;  // cộng i vào tổng
//     count++;  // tăng biến đếm lên 1
//   }
//   i++;  // tăng i lên 1 để kiểm tra số tiếp theo
// }

// document.write("Tổng của 30 số chia hết cho 7 đầu tiên là: " + sum);  // in ra tổng

for(var i=1; count<30; i++){
    if(i%7===0){   // nếu số i chia hết cho 7
        sum += i;  // cộng i vào tổng
//     count++;  // tăng biến đếm lên 1
    }
}
document.write("Tổng của 30 số chia hết cho 7 đầu tiên là: " + sum);  // in ra tổng