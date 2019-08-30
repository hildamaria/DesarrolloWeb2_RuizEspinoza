var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Pajaro");
    };
    Bird.prototype.layEggs = function () {
        console.log("Pone huevos");
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    return Fish;
}());
(function () {
    constructor();
    {
        //solo para el ejemplo
    }
    swim();
    {
        console.log("PEZ");
    }
    layEggs();
    {
        console.log("Pone huevos");
    }
});
function getAnimal() {
    var a = new Fish();
    return a;
}
var pet = getAnimal();
console.log(getAnimal());
pet.layEggs();
// ASERCIÓN
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
