// Hiển thị ra 20 số trong dãy fibonacci đầu tiên.


let a = 0, b = 1;            // Tạo biến đầu tiên và thứ hai trong dãy

// Hiển thị 20 số đầu tiên trong dãy Fibonacci
for (let i = 0; i < 20; i++) {
  document.write(a + "<br/>");
  let temp = a + b;
  a = b;
  b = temp;
}

