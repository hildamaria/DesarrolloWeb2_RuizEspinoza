let a: any = "apple";
let b: any = 14;
let c: any = false;

let aa: never; //Ok
let bb: never = false; //Error
let cc: never = null; //Error
let dd: never = "monday"; //Error

function stuck(): never {
    while (true){
    }
}