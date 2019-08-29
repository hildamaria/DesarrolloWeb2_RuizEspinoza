//VAR
var foo = 123;
if(true){
    var foo = 456;
}
console.log(foo); //456

//LET
let foor = 123;
if(true){
    let foo = 456;
}
console.log(foo); //123