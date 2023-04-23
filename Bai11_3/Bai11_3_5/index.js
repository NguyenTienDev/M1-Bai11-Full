// Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// c1:
// Tính tổng 20 số đầu tiên trong dãy Fibonacci
let a = 0, b = 1, total = 0;
for (let i = 0; i < 20; i++) {
  total += a;
  [a, b] = [b, a + b];
}
document.write("Tổng 20 số đầu tiên trong dãy Fibonacci là, bắt đầu từ 0: " + total);

// // c2
// // Tính tổng 20 số đầu tiên trong dãy Fibonacci
// let a = 0, b = 1, total = 0, i = 0;
// while (i < 20) {
//   total += a;
//   [a, b] = [b, a + b];
//   i++;
// }
// console.log("Tổng 20 số đầu tiên trong dãy Fibonacci là: " + total);


// let value;
// let start=1;
// let end=1;
// let sum=[start,end];
// let result=0;
// for(let i=2;i<20;i++){
//     value=start+end;
//     sum.push(start+end);
//     start=end;
//     end=value;
// }
// for(let i=0;i<sum.length;i++){
//     result+=sum[i];
// }
// document.write(result);