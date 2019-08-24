//ARRAYS
// With strictNullChecks set to false
let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "apple", "potato"]; // Error
let d: Array<number> = [null, undefined, 10, 15];
let e: Array<string> = ["pie", null, ""];
// With strictNullChecks set to true
let a: number[] = [1, 12, 93, 5];
let b: string[] = ["a", "apricot", "mango"];
let c: number[] = [1, "apple", "potato"]; // Error
let d: Array<number> = [null, undefined, 10, 15]; // Error
let e: Array<string> = ["pie", null, ""]; // Error

//TUPLAS
let a: [number, string] = [11, "monday"];
let b: [number, string] = ["monday", 11]; // Error
let c: [number, string] = ["a", "monkey"]; // Error
let d: [number, string] = [105, "owl", 129, 45, "cat"];
let e: [number, string] = [13, "bat", "spiderman", 2];
e[13] = "elephant";
e[15] = false; // Error