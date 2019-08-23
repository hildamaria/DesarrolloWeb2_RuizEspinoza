// With strictNullChecks set to true
let azul: void = undefined; // Ok
let blanco: void = null; // Error
let coral: void = 3; // Error
let dududu: void = "apple"; // Error

// With strictNullChecks set to false
let amarillo: void = undefined; // Ok
let bruno: void = null; // Ok
let camion: void = 3; // Error
let dado: void = "apple"; // Error