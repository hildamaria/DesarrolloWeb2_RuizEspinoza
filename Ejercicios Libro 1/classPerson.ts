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