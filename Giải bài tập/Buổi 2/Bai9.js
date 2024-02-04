const a = 3;
const b = 5;

for (var i = 0; i < a; i++) {
    var row = '';
    for (var j = 0; j < b; j++) {
        row += '* ';
    }
    console.log(row);
}
