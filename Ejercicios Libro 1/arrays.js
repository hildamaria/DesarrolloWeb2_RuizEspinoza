//ARRAYS
// With strictNullChecks set to false
var a = [1, 12, 93, 5];
var b = ["a", "apricot", "mango"];
var c = [1, "apple", "potato"]; // Error
var d = [null, undefined, 10, 15];
var e = ["pie", null, ""];
// With strictNullChecks set to true
var a = [1, 12, 93, 5];
var b = ["a", "apricot", "mango"];
var c = [1, "apple", "potato"]; // Error
var d = [null, undefined, 10, 15]; // Error
var e = ["pie", null, ""]; // Error
//TUPLAS
var a = [11, "monday"];
var b = ["monday", 11]; // Error
var c = ["a", "monkey"]; // Error
var d = [105, "owl", 129, 45, "cat"];
var e = [13, "bat", "spiderman", 2];
e[13] = "elephant";
e[15] = false; // Error
