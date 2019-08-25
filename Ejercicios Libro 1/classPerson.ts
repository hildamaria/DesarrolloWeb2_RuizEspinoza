class Person {
    private name: string;
    protected age: number;

    protected constructor(theName: string, theAge: number){
        this.name = theName;
        this.age = theAge;
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
    constructor(name: string, age: number, yearsKnown: number){
        super(name, age);
        this.yearsKnown = yearsKnown;
    }
    timeKnown(){
        console.log("We have been friends for " + this.yearsKnown + " years.")
    }
    friendsSince(){
        let firstAge = this.age - this.yearsKnown;
        console.log(`We have been friends since I was ${firstAge} years old.`)
    }
}

let friendA = new Friend("Jacob",6);
friendA.introduceSelf();
friendA.timeKnown();

let friendB = new Friend("William",19,8);
friendB.introduceSelf();
friendB.timeKnown();
friendB.friendsSince();