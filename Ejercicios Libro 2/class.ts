class Startup{
    private text: String;
    constructor(texto: String){
        this.text = texto;
    }

    public main(): number{
        console.log(this.text);
        return 0;
    }
}
let s = new Startup("Hola Mundo");
s.main();

class Startup{
    public static main(): number{
        console.log('Hola Mundo');
        return 0;
    }
}
Startup.main();

class Calculo {
    //variables de clase declaradas y asignadas
    private x: number = 0;
    private y: number = 0;

    //constructor
    constructor (x: number, y: number){
        //metodos del constructor
        this.setX(x);
        this.setY(y);
    }

    //Setters
    public setX(x: number): void{
        this.x = x;
    }

    public setY(y: number):void{
        this.y = y;
    }

    //Getters
    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public sumar(): number{
        return (this.getX() - this.getY());
    }

    public restar(): number{
        return (this.mayor() - this.menor() );
    }

    public menor(): number{
        if(this.getX() >= this.getY()){
            return this.getY();
        }
        return this.getX();
    }

    public mayor(): number{
        if(this.getX() >= this.getY()){
            return this.getX();
        }
        return this.getY();
    }
}

let calculo = new Calculo(30,10);
console.log(calculo.restar());

//*********************************
class Greeter{
    greeting: string;
    constructor(message: string){
        this.greeting = message;
    }
    greet(){
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('buton');
button.textContent = "Say Hello";
button.onclick = function(){
    alert(greeter.greet());
}

document.body.appendChild(button);

/************************************ */

class Something{
    static instances = 0;
    constructor(){
        Something.instances++;
    }
}
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);//2