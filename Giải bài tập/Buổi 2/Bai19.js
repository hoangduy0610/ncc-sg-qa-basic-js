// Mảng arr
const arr = [10, 11, 12, 13, 14, 15];
let firstEven = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        firstEven = arr[i];
        break;
    }
}
console.log(firstEven);



// Mảng arr2
const arr2 = [1, 3, 5, 7, 9];
firstEven = -1;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        firstEven = arr2[i];
        break;
    }
}
console.log(firstEven);
