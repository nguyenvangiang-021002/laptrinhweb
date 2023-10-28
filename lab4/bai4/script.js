
    // Lấy các phần tử giao diện bằng cách sử dụng ID
    const textA = document.getElementById('textA');
    const textB = document.getElementById('textB');
    const countButton = document.getElementById('countButton');
    const result = document.getElementById('result');

    // Định nghĩa hàm đếm số lần xuất hiện của B trong A
    function countOccurrences() {
    const inputA = textA.value.toLowerCase(); // Chuyển A thành chữ thường
    const inputB = textB.value.toLowerCase(); // Chuyển B thành chữ thường

    const count = (inputA.match(new RegExp(inputB, 'g')) || []).length;

    result.textContent = `Số lần xuất hiện của "${inputB}" trong "${inputA}" là: ${count}`;
}

    // Sử dụng sự kiện click để gọi hàm đếm khi nút được nhấn
    countButton.addEventListener('click', countOccurrences);
