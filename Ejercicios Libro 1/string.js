// With strictNullChecks set to true
var a = undefined; // Error
var b = null; // Error
var c = "";
var d = "y";
var e = "building";
var f = 3; // Error
var g = "3";
// With strictNullChecks set to false
var a = undefined; // Ok
var b = null; // Ok
var c = "";
var d = "y";
var e = "building";
var f = 3; // Error
var g = "3";
// Output in ES5
var e = "building";
var f = 300;
var sentence = "The " + e + " in front of my office is " + f + " feet;
tall.;
";;
// Output in ES6
var e = "building";
var f = 300;
var sentence = "The " + e + " in front of my office is " + f + " feet tall.";
