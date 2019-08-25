var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    Person.prototype.introduceSelf = function () {
        console.log("Hi, I'm " + this.name + "!");
    };
    return Person;
}());
var personA = new Person("Sally");
personA.introduceSelf();
