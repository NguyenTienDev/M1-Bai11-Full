// Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

let a = 0, b = 1, c;

while (true) {
  c = a + b; // tính số tiếp theo trong dãy Fibonacci
  if (c % 5 === 0) { // kiểm tra nếu số này chia hết cho 5
    document.write(c);
    break; // dừng vòng lặp
  }
  a = b;
  b = c;
}