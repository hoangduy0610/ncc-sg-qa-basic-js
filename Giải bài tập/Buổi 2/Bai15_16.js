const arr = [10, 11, 12, 13, 14, 15];

// Bài 15: Tìm số lớn nhất trong mảng
var maxNumber = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}
console.log(maxNumber);

// Bài 16: Tìm số nhỏ nhất trong mảng
var minNumber = arr[0];
for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minNumber) {
        minNumber = arr[i];
    }
}
console.log(minNumber);
