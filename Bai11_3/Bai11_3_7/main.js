
        // Lặp từ 1 ->100  : Lặp 100 lần
        let num;
        for (num = 1; num <= 100; num++) { 
            if (num % 3 == 0 && num % 5 !== 0) {  //lặp điều kiện %3
                document.write("Fizz" + "<br>");
                continue;
            } else if (num % 5 == 0 && num % 3 !== 0) {
                document.write("Buzz" + "<br>");
                continue;
            } else if (num % 3 == 0 && num % 5 == 0) {
                document.write("FizzBuzz" + "<br>");
                continue;
            }
            document.write (num + "<br>");
        }
    