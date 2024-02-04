var n = 100; // n mẫu = 100
var sum = 0;
for (var i = 1; i <= n; i++) { // i chạy từ 1 đến n
    sum += Math.pow(i, 3); // sum = sum + i^3
    // Hoặc:
    // sum += (i * i * i);
}
console.log(sum);
