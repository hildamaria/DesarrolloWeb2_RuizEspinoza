var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I'm " + this.name + "!");
    };
    return Person;
}());
// Prints "Hi, I am Sally!"
var personA = new Person("Sally");
personA.introduceSelf();
// Prints "Hi, I am Mindy!"
personA.name = "Mindy";
personA.introduceSelf();
