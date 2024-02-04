// Cách 2: Duyệt thuận chiều, nhưng không dùng break (mục đích để duyệt tới phần tử chẵn cuối cùng)

// Mảng arr
const arr = [10, 11, 12, 13, 14, 15];
let lastEven = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        lastEven = arr[i];
    }
}
console.log(lastEven);

// Mảng arr2
const arr2 = [1, 3, 5, 7, 9];
lastEven = -1;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        lastEven = arr2[i];
    }
}
console.log(lastEven);
