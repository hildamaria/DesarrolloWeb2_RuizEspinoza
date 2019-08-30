function echo(arg) {
    return arg;
}
var a = echo(1);
var b = echo("Hola Mundo");
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
