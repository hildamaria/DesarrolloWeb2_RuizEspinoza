var a = 123;

export var a = 123;

// Se puede realizar un módulo sin emplear declare
declare module "a" {
    // Contenido de la clase
    export var a:number; /*sample*/
}
declare var hello = 'Hello world';