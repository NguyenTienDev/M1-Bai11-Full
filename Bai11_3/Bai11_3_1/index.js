// Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.

for (let i = 1; i <=100; i++) {
    if (i === 99) {
            alert("Đã hoàn thành!");
            console.log(i); // thêm đk hiển thị số 99 trên console
    } else {
      console.log(i); // hiển thị các số khác trên console
    }
  }