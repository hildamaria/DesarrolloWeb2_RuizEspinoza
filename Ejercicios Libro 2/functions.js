/*setTimeOut(function(){
    console.log(this);// Elemento Que llama a la función
},2000);*/
var _this = this;
setTimeout(function () {
    console.log(_this); // Elemento que contiene esta funció
}, 2000);
//para poder definir tipos tipos utilizaremos el 0 logico
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }
    throw new Error("Expected String or number, got '" + padding + "' ");
}
console.log(padLeft("hello", "aaa"));
console.log(padLeft("hello", 5));
console.log(padLeft("hello", true)); //NO FUNCIONA
