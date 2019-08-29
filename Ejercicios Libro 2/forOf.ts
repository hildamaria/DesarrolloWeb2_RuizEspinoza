//For of accediendo al valor de una variable dentro de un array
let list = ["a", "b", "c"];

for (let b of list) {
    console.log(b); // a, b, c
}

//For of accediendo al valor de una variable dentro de un string
let string = "is it me you're looking for?";

for (let char of string) {
    console.log(char); // is it me you're looking for?
}

//For of accediendo al valor de una variable dentro de un objeto, el cual nos dará error
let obj = {a: 1, b: 2, c:3};

for(let i of obj){
    console.log(i); // Error
}