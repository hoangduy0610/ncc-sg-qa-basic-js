// Nhập vào độ dài 3 cạnh của 1 tam giác, in ra loại tam giác đó
var a = 3;
var b = 4;
var c = 5;

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        console.log("Tam giac deu");
    } else if (a == b || a == c || b == c) {
        console.log("Tam giac can");
    } else if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a) {
        console.log("Tam giac vuong");
    } else {
        console.log("Tam giac thuong");
    }
} else {
    console.log("Khong phai tam giac");
}