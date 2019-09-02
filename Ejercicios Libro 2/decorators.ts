function log(constructor: Function): void{
    console.log('Registered Class: ' + constructor['name'] + ' at ' + Date.now());
}

function logm<T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>): void{
    console.log('Registered Method: ' + propertyKey.toString() + ' at ' + Date.now());
}

function logparam(target: Object, propertyKey: string | symbol, parameterIndex: number): void {
    console.log('Registered Parameter: ' + propertyKey.toString() + ' - ' + parameterIndex + ' at ' + Date.now());
}
//Asi se utiliza el decorador
@log
class MyClass {
    public name: string = 'name';
    
    constructor(){
        console.log('constructor');
    }

    @logm
    public myMethod() {
        console.log('method')
    }

    @logm
    public myMethod2(param1: number, @logparam param2: boolean){
        console.log('method2')
    }
}

var myClass = new MyClass();
myClass.myMethod();
myClass.myMethod2(1, false);

//CLASS DECORATOR
function ClassDecoratorParms(param1: number, param2: string){
    return function(
        target: Function //The class the decorator is declared on 
    ) {
        console.log("ClassDecoratorParams(" + param1 + ", '" + param2) + "') called on :", target);
    }
}
@ClassDecoratorParms(1,"a")
@ClassDecoratorParms(2,"b")
class ClassDecoratorParamsExample{
}

ClassDecoratorParams(2, 'b') called on: function ClassDecoratorParamsExample() {
}
ClassDecoratorParams(1, 'a') called on: function ClassDecoratorParamsExample() {
}

//PROPERTY DECORATOR
function PropertyDecorator(
    target: Object, //The prototype of the class
    propertyKey: string | symbol //The name of the property
    ) {
    console.log("PropertyDecorator called on: ", target, propertyKey);
}

class PropertyDecoratorExample {
    @PropertyDecorator
    name: string;
}

//METHOD DECORATOR
function MethodDecorator(
    target: Object, //The protoype of the class
    propertyKey: string, //The name of the method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("MethodDecorator called on: ",target, propertyKey,descriptor);
}

class MethodDecoratorExample{
    @MethodDecorator
    method(){
    }
}

MethodDecorator called on: { method: [Function] } method { value: [Function],
    writable: true,
    enumerable: true,
    configurable: true
}

//STATUC METHOD DECORATOR
function StaticMethodDecorator(
    target: Function, //the function itself and not the prototype
    propertyKey: string | symbol, //the name of the static method
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}

class StaticMethodDecoratorExample{
    @StaticMethodDecorator
    static staticMethod(){
    }
}

StaticMethodDecorator called on: function StaticMethodDecoratorExample() {
}