var inc = (x)=>x+1;

function Person(age){
    this.age = age
    this.growOld = function(){
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() {console.log(person.age); },2000);

//FUNCION FAT ARROW
function Person (age){
    this.age = age
    this.growOld = () =>{
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() {console.log(person.age); },2000);

//MEZCLAR LAS DOS SINTAXIS
class Person{
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
class Person {
    constructor(public age:number) {}
    growOld = () => {
    this.age++;
    }
    }
    var person = new Person(1);
    setTimeout(person.growOld,1000);
    setTimeout(function() { console.log(person.age); },2000);