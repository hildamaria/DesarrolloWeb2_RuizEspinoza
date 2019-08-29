/*setTimeOut(function(){
    console.log(this);// Elemento Que llama a la función
},2000);*/

setTimeout(() => {
    console.log(this);// Elemento que contiene esta funció
},2000);

//para poder definir tipos tipos utilizaremos el 0 logico
function padLeft(value: string, padding: string | number){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string"){
        return Array(padding.length + 1).join(" ") + value;
    }

    throw new Error(`Expected String or number, got '${padding}' `);       
}

console.log(padLeft("hello","aaa"));
console.log(padLeft("hello",5));
console.log(padLeft("hello",true)); //NO FUNCIONA

//COMPLIANDO CON stricNullChecks
function validateEntity(e: Entity?){
    //
}

function processEntity(e: Entity?){
    validateEntity(e);
    let s = e!.name;
}

//IGUALACION DE FUNCIONES
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x; //OK
x = y; //Error

let xx = () => ({name: 'Alice'});
let yy = ()=> ({name: 'Alice', location: 'Seattle'});

xx = yy; //OK
yy = xx; //Error porque xx no tiene la propiedad location

