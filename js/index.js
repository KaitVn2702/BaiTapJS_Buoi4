// Bài Tập 1: Chương Trình Xuất 3 Số Theo Thứ Tự Tăng Dần
// B1: Xác định biến:
// Gồm 3 biến lần lượt đặt là: num1; num2; num3
// B2: Hướng xử lí:
document
    .getElementById("myForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        // B1: Khai Báo Biến;
        let num1 = +document.getElementById("num1").value;
        let num2 = +document.getElementById("num2").value;
        let num3 = +document.getElementById("num3").value;
        let arr = [num1, num2, num3];
        // B2: Hướng xử lý;
        arr.sort(function (a, b) {
            return a - b;
        });
        // B3:Xuất Kết Quả;
        document.getElementById("result").innerHTML =
            "Các Số Theo Thứ Tự Tăng Dần Là: " + arr;
    });
// ------------------------------------------------------------//
// Bài Tập 2: Chương Trình "Chào Hỏi" các thành viên trong gia đình
// B1: Xác Định Biến:
// + Gồm các biến: Bố (B), Mẹ(M), Anh Trai (A), Em Gái (E),
function greet() {
    // B1: Xác Định Biến:
    var name = document.getElementById("thanhVien").value;
    var greeting = "";
    // B2: Hướng xử lí
    switch (name) {
        case "B":
            greeting = "Xin chào Bố!";
            break;
        case "M":
            greeting = "Xin chào Mẹ!";
            break;
        case "A":
            greeting = "Xin chào Anh Trai!";
            break;
        case "E":
            greeting = "Xin chào Em gái!";
            break;
        default:
            greeting = "Xin lỗi, tôi vẫn chưa biết bạn là ai?. Vui lòng chọn lại!";
    }
    // B3: Xuất Kết Quả
    document.getElementById("greeting").innerHTML = greeting;
}
// ----------------------------------------------------------------//
// Bài Tập 3: Chương Trình xuất ra bao nhiêu số chẵn và bao nhiêu số lẻ
// B1 Xác định biến
// + Gồm các biến: number1, number2, number3, soChan, soLe
function countEvenOdd() {
    // B1: Xác định input
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var number3 = document.getElementById("number3").value;
    var evenCount = 0; //(Biến số chẵn)
    var oddCount = 0; //(Biến số lẻ)
    // B2 Hướng xử lí
    if (number1 % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (number2 % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }

    if (number3 % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }
    // B3: Xuất Kết Quảs
    document.getElementById("result3").innerHTML = `
    <P>Kết Quả Xuất Hệ Thống gồm có: </P>
        <p>Có ${evenCount} số chẵn Và ${oddCount} số lẻ</p>
        `;
}
// -----------------------------------------------------------//
// Bài Tập 4: Chương Trình Xác Định Loại Tam Giác
// B1: Xác Định Biến:
// + Gồm có 3 biến là 3 cạnh của tam giác
function phanLoaiTamGiac() {
    // B1: Xác Định input
    var side1 = +document.getElementById("side1").value;
    var side2 = +document.getElementById("side2").value;
    var side3 = +document.getElementById("side3").value;
    // B2: Hướng Xử Lý + B3: Xuất dũ liệu
    if (side1 == side2 && side2 == side3) {
        document.getElementById("result4").innerHTML = "Đây là một tam giác đều";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        document.getElementById("result4").innerHTML = "Đây là một tam giác cân";
    } else if (Math.pow(side1, 2) + Math.pow(side2, 2) == Math.pow(side3, 2) || Math.pow(side1, 2) + Math.pow(side3, 2) == Math.pow(side2, 2) || Math.pow(side2, 2) + Math.pow(side3, 2) == Math.pow(side1, 2)) {
        document.getElementById("result4").innerHTML = "Đây là một tam giác vuông";
    } else {
        document.getElementById("result4").innerHTML = "Đây là một tam giác thường";
    }
}