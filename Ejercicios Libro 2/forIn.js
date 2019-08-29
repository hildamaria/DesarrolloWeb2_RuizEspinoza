//For in accediendo al valor de una variable dentro de un objeto
var list = { a: 1, b: 2, c: 3 };
for (var i in list) {
    console.log(list[i]);
}
//For in accediendo al índice de una variable dentro de un objeto
var lista = { a: 1, b: 2, c: 3 };
for (var i in lista) {
    console.log(i); // a, b, c
}
