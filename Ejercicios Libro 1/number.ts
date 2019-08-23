// With strictNullChecks set to true
let a: number = undefined; // Error
let b: number = null; // Error
let c: number = 3;
let d: number = 0b111001; // Binary
let e: number = 0o436; // Octal
let f: number = 0xadf0d; // Hexadecimal
let g: number = "cat"; // Error

// With strictNullChecks set to false
let a: number = undefined; // Ok
let b: number = null; // Ok
let c: number = 3;
let d: number = 0b111001; // Binary
let e: number = 0o436; // Octal
let f: number = 0xadf0d; // Hexadecimal
let g: number = "cat"; // Error