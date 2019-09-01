//HERENCIA
class Animal{
    name: string;
    constructor(theName: string){ this.name = theName; }
        move(distanceInMeters: number = 0){
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
}

class Snake extends Animal{
    constructor(name: string) { super(name); }
        move(distanceInMeters = 5){
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
}

class Rhino extends Animal{
    constructor(name: string) {super(name);}
        move(distanceInMeters = 10){
            console.log("Slithering");
            super.move(distanceInMeters);
        }
}

class Elephant extends Animal{
    constructor(name: string) {super(name);}
        move(distanceInMeters = 20){
            console.log("Slithering");
            super.move(distanceInMeters);
        }
}
// Para poder Crear un array con este typo de objetos tenemos que utilizar la clase Padre Ej:
let array: Animal[] = [ new Rhino('Rinocerator'), new Snake("Serpentina"), new Elephant("Elefanton")];

// El acceso a este ejemplo sería muchisimo más sencillo
let ej2 = {Rhino: new Rhino('Rinocerator'), Snake: new Snake("Serpentina"), Elephant: new Elephant("Elefanton")};

console.log(array);

//SUPER
//super sin fat arrow
class Base{
    log() { console.log('hello world'); }
}
class Child extends Base{
    log() {super.log};
}

//This con fat arrow
class Base2{
    //realizamos una funcion mediante el uso de fat arrow
    log = () => {console.log('hello world');}
}
class Child2 extends Base2{
    logWorld() {this.log()};
}