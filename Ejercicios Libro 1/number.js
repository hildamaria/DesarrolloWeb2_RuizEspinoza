// With strictNullChecks set to true
var a = undefined; // Error
var b = null; // Error
var c = 3;
var d = 57; // Binary
var e = 286; // Octal
var f = 0xadf0d; // Hexadecimal
var g = "cat"; // Error

// With strictNullChecks set to false
var a = undefined; // Ok
var b = null; // Ok
var c = 3;
var d = 57; // Binary
var e = 286; // Octal
var f = 0xadf0d; // Hexadecimal
var g = "cat"; // Error
