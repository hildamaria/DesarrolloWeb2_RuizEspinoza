// With strictNullChecks set to true
let a: null = null; //ok
let b: undefined = null; //Error
let c: number = null; //Error
let d: void = null; //Error

// With strictNullChecks set to false
let aa: null = null; // Ok
let bb: undefined = null; // Ok
let cc: number = null; // Ok
let dd: void = null; // Ok