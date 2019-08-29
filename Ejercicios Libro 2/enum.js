//ASIGNAANDO VALORES
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = NaN] = "Down";
    Direction[Direction["Left"] = "asdasd".length] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
})(Direction || (Direction = {}));
var a = Direction.Up;
console.log(Direction.Up);
//SIN ASIGNACION DE VALORES
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c; // 1
//CON ASIGNACION DE VALORES
var Colorr;
(function (Colorr) {
    Colorr[Colorr["Red"] = 1] = "Red";
    Colorr[Colorr["Green"] = 2] = "Green";
    Colorr[Colorr["Blue"] = 4] = "Blue";
})(Colorr || (Colorr = {}));
;
var cc = Colorr.Green; // 2
console.log(cc);
//ACCEDER A LOS NOMBRES DE LOS ATRIBUTOS
var Colo1;
(function (Colo1) {
    Colo1[Colo1["Red"] = 1] = "Red";
    Colo1[Colo1["Green"] = 2] = "Green";
    Colo1[Colo1["Blue"] = 3] = "Blue";
})(Colo1 || (Colo1 = {}));
;
var colorName = Color[2];
alert(colorName);
