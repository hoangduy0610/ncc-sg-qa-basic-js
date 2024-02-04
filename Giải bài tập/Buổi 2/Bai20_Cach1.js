// Cách 1: Duyệt ngược chiều mảng

// Mảng arr
const arr = [10, 11, 12, 13, 14, 15];
let lastEven = -1;
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        lastEven = arr[i];
        break;
    }
}
console.log(lastEven);

// Mảng arr2
const arr2 = [1, 3, 5, 7, 9];
lastEven = -1;
for (let i = arr2.length - 1; i >= 0; i--) {
    if (arr2[i] % 2 === 0) {
        lastEven = arr2[i];
        break;
    }
}
console.log(lastEven);
