const arr = [10, 11, 12, -10, -11, -12];

// Bài 17: Tính tổng các số âm trong mảng
let sumNegative = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        sumNegative += arr[i];
    }
}
console.log("Tổng các số âm trong mảng:", sumNegative);


// Bài 18: Tính tổng các số dương trong mảng
var sumPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sumPositive += arr[i];
    }
}
console.log("Tổng các số dương trong mảng:", sumPositive);