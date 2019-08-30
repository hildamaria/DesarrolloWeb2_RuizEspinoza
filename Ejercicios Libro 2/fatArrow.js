var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Adder = /** @class */ (function () {
    function Adder() {
        var _this = this;
        // This function is now safe to pass around
        this.add = function (b) {
            return _this.a + b;
        };
    }
    return Adder;
}());
var ExtendedAdder = /** @class */ (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Create a copy of parent before creating our own
        _this.superAdd = _this.add;
        // Now create our override
        _this.add = function (b) {
            return _this.superAdd(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
