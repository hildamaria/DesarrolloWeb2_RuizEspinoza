// With strictNullChecks set to true
let a: string = undefined; // Error
let b: string = null; // Error
let c: string = "";
let d: string = "y";
let e: string = "building";
let f: string = 3; // Error
let g: string = "3";

// With strictNullChecks set to false
let a: string = undefined; // Ok
let b: string = null; // Ok
let c: string = "";
let d: string = "y";
let e: string = "building";
let f: string = 3; // Error
let g: string = "3";

// Output in ES5
var e = "building";
var f = 300;
var sentence = "The " + e + " in front of my office is " + f + " feet
tall.";
// Output in ES6
let e = "building";
let f = 300;
let sentence = `The ${e} in front of my office is ${f} feet tall.`;