// 5. Dùng vòng lặp while, in ra tất cả số nguyên dương lẻ < 100
var x = 1;
while (x < 100) {
    if (x % 2 != 0) {
        console.log(x);
    }
    x++;
}

// 6. Dùng vòng lặp while, in ra tất cả số nguyên dương chẵn < 100
var i = 2;
while (i < 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

// 7. Dùng vòng lặp while, in ra tất cả số nguyên âm lẻ > -100
var j = -1;
while (j > -100) {
    if (j % 2 != 0) {
        console.log(j);
    }
    j--;
}

// 8. Dùng vòng lặp while, in ra tất cả số nguyên âm chẵn > -100
var k = -2;
while (k > -100) {
    if (k % 2 == 0) {
        console.log(k);
    }
    k--;
}
