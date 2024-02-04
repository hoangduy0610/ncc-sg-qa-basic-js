const h = 3;

for (var i = 0; i < h; i++) {
    var row = '';
    for (var j = 0; j < h - i - 1; j++) {
        row += ' ';
    }
    for (var k = 0; k <= i; k++) {
        row += '* ';
    }
    console.log(row);
}
