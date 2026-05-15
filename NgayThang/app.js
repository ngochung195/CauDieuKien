let thang = document.getElementById('thang');
let btn = document.getElementById('submit');
let ngay = document.getElementById('result');
let message = "";

btn.addEventListener("click", function () {
    if (thang.value === "") {
        message = "Vui lòng nhập tháng!"
    } else {
        switch (thang.value) {
            case "1":
            case "3":
            case "5":
            case "7":
            case "8":
            case "10":
            case "12":
                message = `Tháng ${thang.value} có 31 ngày`;
                break;
            case "4":
            case "6":
            case "9":
            case "11":
                message = `Tháng ${thang.value} có 30 ngày`;
                break;
            case "2":
                message = "Tháng 2 có 28 hoặc 29 ngày";
                break;
            default:
                message = "Vui lòng nhập tháng từ 1 - 12";
        }
    }
    ngay.innerText = message;
});