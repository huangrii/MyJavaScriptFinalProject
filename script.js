function upDate(previewPic) {
  console.log("Sự kiện upDate đang chạy!");
  console.log("Alt:", previewPic.alt);
  console.log("Src:", previewPic.src);
  
  document.getElementById('image').innerHTML = previewPic.alt;
  document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  document.getElementById('image').style.backgroundImage = "url('')";
  document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function addTabIndex() {
    // 9a. In ra thông báo để xác nhận sự kiện onload đã kích hoạt
    console.log("Trang web đã tải xong. Bắt đầu gán tabindex cho ảnh...");

    // Lấy tất cả các thẻ img có class là 'preview'
    let images = document.querySelectorAll('.preview');

    // 9b. Viết vòng lặp for chạy qua từng bức ảnh
    for (let i = 0; i < images.length; i++) {
        // 9c. Thêm thuộc tính tabindex = "0" để ảnh có thể nhận focus từ bàn phím
        images[i].setAttribute("tabindex", "0");
        console.log("Đã gán tabindex cho ảnh thứ: " + (i + 1));
    }
}