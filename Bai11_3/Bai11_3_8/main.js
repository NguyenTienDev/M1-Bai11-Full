// Game đoán số
       
        // function doanso() {
            
        //     let number = +prompt("Số bạn muốn đoán trong khoảng lớn nhất là bao nhiêu?")
        //     let number_ran = Math.floor(Math.random() * number);
        //     console.log(number_ran);
        //     let number_check = +prompt ("Nhập số bạn đoán");
        //     let count = 0;
        //     while (number_check !== number_ran) {
        //         count++;
        //         if (count == 4) {
        //             alert("Bạn hết số lần đoán")
        //             break;
        //         } else if (number_check < number_ran) {
        //             alert("Số bạn đoán bé hơn");
        //         } else {
        //             alert ("Số bạn đoán lớn hơn")
        //         }
        //         number_check = prompt ("Nhập số bạn đoán");   
        //     }
        //     if (count == 4) {
        //         document.write("Bạn hết số lần đoán")
        //     } else {
        //         document.write("Bạn đã đoán đúng số. Chúc mừng bạn!")
        //     } 
        // }
    
        const playButton = document.getElementById("doanSo");

        playButton.addEventListener("click", () => {
            let min = prompt("Nhập giá trị nhỏ nhất:");
            let max = prompt("Nhập giá trị lớn nhất:");
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            let soLuot = 3;
        
            while (soLuot > 0) {
                let soDoan = prompt(`Bạn còn ${soLuot} lượt đoán. Hãy nhập một số từ ${min} đến ${max}:`);
                if (soDoan == randomNumber) {
                    alert("Chúc mừng bạn đã đoán đúng!");
                    return;
                } else if (soDoan < randomNumber) {
                    alert("Số bạn đoán nhỏ hơn số bí mật.");
                } else {
                    alert("Số bạn đoán lớn hơn số bí mật.");
                }
                soLuot--;
            }
            alert(`Rất tiếc, bạn đã hết lượt đoán. Số bí mật là ${randomNumber}.`);
        });