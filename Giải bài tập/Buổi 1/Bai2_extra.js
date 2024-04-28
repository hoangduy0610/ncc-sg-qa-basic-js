// Giải PT ax^2 + bx + c = 0
var a = 1;
var b = 2;
var c = 1;

var delta = b*b - 4*a*c;
if (delta < 0) {
    console.log("PT vo nghiem");
} else if (delta == 0) {
    var x = -b/(2*a);
    console.log("PT co 1 nghiem x =", x);
} else {
    var x1 = (-b + Math.sqrt(delta))/(2*a);
    var x2 = (-b - Math.sqrt(delta))/(2*a);
    console.log("PT co 2 nghiem x1 =", x1, "x2 =", x2);
}