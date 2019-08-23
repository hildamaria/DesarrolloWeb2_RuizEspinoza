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