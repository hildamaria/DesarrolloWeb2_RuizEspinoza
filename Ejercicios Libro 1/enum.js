var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lion"] = 1] = "lion";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["cow"] = 3] = "cow";
    Animals[Animals["monkey"] = 4] = "monkey";
})(Animals || (Animals = {}));
var c = Animals.cat;
console.log(Animals[3]); //cow
console.log(Animals.monkey); //4
var Animales;
(function (Animales) {
    Animales[Animales["cat"] = 1] = "cat";
    Animales[Animales["lion"] = 2] = "lion";
    Animales[Animales["dog"] = 11] = "dog";
    Animales[Animales["cow"] = 12] = "cow";
    Animales[Animales["monkey"] = 13] = "monkey";
})(Animales || (Animales = {}));
var cc = Animales.cat;
console.log(Animales[3]); // undefined
console.log(Animales.monkey); // 13
