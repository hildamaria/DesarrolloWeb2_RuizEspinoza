//BOOLEAN
let isDone: boolean = false;

//NUMBER
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number =  0b1010;
let octal: number = 0o744;

//STRING
let color: string = "blue"; //
color = 'red';

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello my name is ${ fullName }. I'll be ${ age + 1} years old next month.`

//PLANTILLAS DE STRING
var lyrics = 'Never gonna give you up'; //entre comillas simples
var html = `<div>${lyrics}</div>`; // entre tilde inversa

//STRING LITERAL TYPE
let literalString = 'Hello';
literalString = 'Bye'; // Error: "Bye" is not assignable to type "Hello"

//ARRAYS: Si no se les especifica tipo son ANY
let list: number[] = [1,2,3];
//Sintaxis para definir que tipo de datos debe tener el array
let lista: Array<number> = [1,2,3];

