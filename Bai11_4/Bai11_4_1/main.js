// In dãy Fibonaci

let a = 0, b = 1;            // Tạo biến đầu tiên và thứ hai trong dãy

for (let i = 0; i <1000 ; i++) {
  document.write(a + "<br/>");
  let temp = a + b;
  a = b;
  b = temp;
}

