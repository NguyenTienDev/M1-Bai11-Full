// Tính giai thừa của một số nguyên dương

let number=parseInt(prompt("Nhập một số nguyên dương"));
let factorial=1;
for(let i=1;i<=number;i++){
    factorial*=i;
}
document.write(factorial);