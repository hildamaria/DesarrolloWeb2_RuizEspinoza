function * infiniteSequence(){
    var i = 0;
    while(true){
        yield i++;
    }
}

var iterator = infiniteSequence();
while(true){
    console.log(iterator.next());
}

function* idMaker(){
    let index = 0;
    while(index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

//*************test.ts***************
function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch(err) {
        console.log(err.message); // bar!
    }
}
var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value);
// como está comentado la excepción no se ejuta ya que no hay un 'next()'
//var foo = iterator.next();

function getFirstName() {
    setTimeout(function(){
        gen.next('alex')
    }, 1000);
}

function getSecondName() {
    setTimeout(function(){
        gen.next('perry')
    }, 1000);
}

function *sayHello() {
    var a = yield getFirstName();
    var b = yield getSecondName();
    console.log(a, b); //alex perry
}
var gen = sayHello();
gen.next();