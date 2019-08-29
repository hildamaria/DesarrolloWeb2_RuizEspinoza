//ASIGNAANDO VALORES
enum Direction {
    Up = 1,
    Down = NaN,
    Left = "asdasd".length,
    Right = 1 << 1
}

var a = Direction.Up;
console.log(Direction.Up);

//SIN ASIGNACION DE VALORES
enum Color {Red,Green,Blue};
let c: Color.Green;// 1

//CON ASIGNACION DE VALORES
enum Colorr {Red = 1, Green =2, Blue = 4};
let cc: Colorr = Colorr.Green // 2
console.log(cc);

//ACCEDER A LOS NOMBRES DE LOS ATRIBUTOS
enum Colo1 {Red = 1, Green, Blue};
let colorName: String = Color[2];
alert(colorName);

