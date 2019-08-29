//VAR
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo); //456
//LET
var foor = 123;
if (true) {
    var foo_1 = 456;
}
console.log(foo); //123
