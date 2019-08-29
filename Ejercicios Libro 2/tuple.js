// Declaración de tuplas
var x;
// Inicialización correcta
x = ["hello", 10]; // OK
// Inicialización incorrecta
x = [10, "hello"]; // Error
//Para acceder a los datos dentro de una tupla
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, Un tipo 'number' no tiene la función 'substr'
//Acceder a un elemento que sin conocer el mapa de contenido
x[3] = "world"; // OK, Un tipo 'string' puede ser asignado a una tupla que contenga 'string | number'
console.log(x[5].toString()); // OK, Un tipo 'string' y un tipo 'number' tienen la función 'toString'
x[6] = true; // Error,El tipo 'boolean' no es 'string | number'Tuple / Tuplas
