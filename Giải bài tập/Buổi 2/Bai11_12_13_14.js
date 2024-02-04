var arr = [10, 11, 12, -10, -11, -12];

// 11. Đếm số lượng các số dương trong mảng
var countPositiveNumbers = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        countPositiveNumbers++;
    }
}
console.log("Number of positive numbers:", countPositiveNumbers);

// 12. Đếm số lượng các số âm trong mảng
var countNegativeNumbers = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        countNegativeNumbers++;
    }
}
console.log("Number of negative numbers:", countNegativeNumbers);



// ***************************************************



arr = [10, 11, 12, 13, 14, 15];

// 13. Đếm số lượng các số chẵn trong mảng
var countEvenNumbers = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        countEvenNumbers++;
    }
}
console.log("Number of even numbers:", countEvenNumbers);

// 14. Đếm số lượng các số lẻ trong mảng
var countOddNumbers = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        countOddNumbers++;
    }
}
console.log("Number of odd numbers:", countOddNumbers);
