class Person {
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    introduceSelf(){
        console.log("Hi, I'm " + this.name + "!");
    }
}

// Prints "Hi, I am Sally!"
let personA = new Person("Sally");
personA.introduceSelf();

// Prints "Hi, I am Mindy!"
personA.name = "Mindy";
personA.introduceSelf();

//HERENCIA
class Friend extends Person{
    yearsKnown: number;
    constructor(name: string, yearsKnown: number){
        super(name);
        this.yearsKnown = yearsKnown;
    }
    timeKnown(){
        console.log("We have been friends for " + this.yearsKnown + " years.")
    }
}

let friendA = new Friend("Jacob",6);
friendA.introduceSelf();
friendA.timeKnown();