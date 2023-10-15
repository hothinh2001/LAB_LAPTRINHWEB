const sayHello = [
    'Xin chào!',
    'Good morning!',
    'Have a nice day!',
    'Chúc bạn một ngày tốt lành!',
    'Have a good time!',
    'Have a good day!',
]

//bài 3
// const index = Math.floor(Math.random() * sayHello.length);
// alert(sayHello[index]);


const blue = document.getElementById('btnBlue');
const red = document.getElementById('btnRed');
const green = document.getElementById('btnGreen');
const yellow = document.getElementById('btnYellow');


function changeColorBlue() {
    document.body.style.backgroundColor = "blue";
}

function changeColorRed() {
    document.body.style.backgroundColor = "red";
}

function changeColorGreen() {
    document.body.style.backgroundColor = "green";
}

function changeColorYellow() {
    document.body.style.backgroundColor = "yellow";
}

document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function () {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            resultDiv.innerHTML = 'Vui lòng nhập giá trị hợp lệ cho a, b và c.';
        } else {
            const discriminant = b * b - 4 * a * c;
            if (a === 0) {
                resultDiv.innerHTML = 'a phải khác 0 để làm phương trình bậc hai.';
            } else if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                resultDiv.innerHTML = `Phương trình có hai nghiệm: x1 = ${root1.toFixed(2)}, x2 = ${root2.toFixed(2)}`;
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                resultDiv.innerHTML = `Phương trình có nghiệm kép: x = ${root.toFixed(2)}`;
            } else {
                resultDiv.innerHTML = 'Phương trình không có nghiệm thực.';
            }
        }
    });
});

//  ---------------bai 4---------------
document.addEventListener('DOMContentLoaded', function () {
    const findBtn = document.getElementById('find-btn');
    const resultDiv = document.getElementById('result_bai4');

    findBtn.addEventListener('click', function () {
        const text_one = document.getElementById('text_one').value;
        const text_two = document.getElementById('text_two').value;


        if (text_one === '' || text_two === '') {
            resultDiv.innerHTML = 'Vui lòng nhập giá trị hợp lệ cho a, b và c.';
        } else {
            if (text_one.match(text_two)) {
                const regex = new RegExp(text_two, 'gi');
                const result = text_one.match(regex);
                const count = result.length;
                resultDiv.innerHTML = `${text_two} xuất hiện ${count} lần`;
            } else {
                resultDiv.innerHTML = `Không tìm thấy kết quả`;
            }

        }
    });
});
