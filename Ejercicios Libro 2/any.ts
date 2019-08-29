//ANY puede ser cualquier tipo de objeto de javascript
let norSure: any = 4;
notSure = "maybe a string instead";
notSUre = false;

let notSure: any = 4;
notSure.ifItExists();
notSure.toFixed();
let prettySure: Object = 4;
prettySure.toFixed();

let list: any[] = [1, true, "free"];
list[1] = 100;