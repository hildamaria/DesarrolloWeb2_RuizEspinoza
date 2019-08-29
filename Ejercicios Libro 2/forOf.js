//For of accediendo al valor de una variable dentro de un array
var list = ["a", "b", "c"];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var b = list_1[_i];
    console.log(b); // a, b, c
}
//For of accediendo al valor de una variable dentro de un string
var string = "is it me you're looking for?";
for (var _a = 0, string_1 = string; _a < string_1.length; _a++) {
    var char = string_1[_a];
    console.log(char); // is it me you're looking for?
}
//For of accediendo al valor de una variable dentro de un objeto, el cual nos dará error
var obj = { a: 1, b: 2, c: 3 };
for (var _b = 0, obj_1 = obj; _b < obj_1.length; _b++) {
    var i = obj_1[_b];
    console.log(i); // Error
}
