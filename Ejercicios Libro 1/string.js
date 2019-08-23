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
