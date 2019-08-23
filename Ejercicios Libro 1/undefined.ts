// With strictNullChecks set to true
let aaa: undefined = undefined; // Ok
let bbb: undefined = null; // Error
let ccc: number = undefined; // Error
let ddd: void = undefined; // Ok

// With strictNullChecks set to false
let aaaa: undefined = undefined; // Ok
let bbbb: undefined = null; // Ok
let cccc: number = undefined; // Ok
let dddd: void = undefined; // Ok