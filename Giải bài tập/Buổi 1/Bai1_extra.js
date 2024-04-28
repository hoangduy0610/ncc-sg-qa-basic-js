// Giải PT ax + b = 0
var a = 1;
var b = 2;

if (a == 0 && b == 0) {
    console.log("PT Vo so nghiem");
} else if (a == 0 && b != 0) {
    console.log("PT vo nghiem");
} else {
    var x = -b/a;
    console.log("PT co 1 nghiem x =", x);
}