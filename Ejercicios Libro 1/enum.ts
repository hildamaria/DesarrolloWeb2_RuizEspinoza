enum Animals {cat, lion, dog, cow, monkey}
let c: Animals = Animals.cat;

console.log(Animals[3]); //cow
console.log(Animals.monkey); //4

enum Animales {cat = 1, lion, dog = 11, cow, monkey}
let cc: Animales = Animales.cat;

console.log(Animales[3]); // undefined
console.log(Animales.monkey); // 13