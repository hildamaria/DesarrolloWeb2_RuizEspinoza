var inc = function (x) { return x + 1; };
function Person(age) {
    this.age = age;
    this.growOld = function () {
        this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
//FUNCION FAT ARROW
function Person(age) {
    var _this = this;
    this.age = age;
    this.growOld = function () {
        _this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
//MEZCLAR LAS DOS SINTAXIS
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
