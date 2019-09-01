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
var Startup = /** @class */ (function () {
    function Startup(texto) {
        this.text = texto;
    }
    Startup.prototype.main = function () {
        console.log(this.text);
        return 0;
    };
    return Startup;
}());
var s = new Startup("Hola Mundo");
s.main();
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hola Mundo');
        return 0;
    };
    return Startup;
}());
Startup.main();
var Calculo = /** @class */ (function () {
    //constructor
    function Calculo(x, y) {
        //variables de clase declaradas y asignadas
        this.x = 0;
        this.y = 0;
        //metodos del constructor
        this.setX(x);
        this.setY(y);
    }
    //Setters
    Calculo.prototype.setX = function (x) {
        this.x = x;
    };
    Calculo.prototype.setY = function (y) {
        this.y = y;
    };
    //Getters
    Calculo.prototype.getX = function () {
        return this.x;
    };
    Calculo.prototype.getY = function () {
        return this.y;
    };
    Calculo.prototype.sumar = function () {
        return (this.getX() - this.getY());
    };
    Calculo.prototype.restar = function () {
        return (this.mayor() - this.menor());
    };
    Calculo.prototype.menor = function () {
        if (this.getX() >= this.getY()) {
            return this.getY();
        }
        return this.getX();
    };
    Calculo.prototype.mayor = function () {
        if (this.getX() >= this.getY()) {
            return this.getX();
        }
        return this.getY();
    };
    return Calculo;
}());
var calculo = new Calculo(30, 10);
console.log(calculo.restar());
//*********************************
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var button = document.createElement('buton');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
/************************************ */
var Something = /** @class */ (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances); //2
//********* MODIFICADORES DE CLASES **********/
var FooBase = /** @class */ (function () {
    function FooBase() {
    }
    return FooBase;
}());
//EFECTOS DE UNA INSTANCIA
var foo = new FooBase();
foo.x; //OK
foo.y; //ERROR : private
foo.z; //ERROR : protected
//EFECTOS EN UNA CLASE HIJA
var FooChild = /** @class */ (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x; //OK
        _this.y; //ERROR: private
        _this.z; //OKAY
        return _this;
    }
    return FooChild;
}(FooBase));
