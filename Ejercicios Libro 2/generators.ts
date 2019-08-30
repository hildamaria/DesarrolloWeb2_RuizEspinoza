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

//****************************
function* generator() {
    var bar = yield 'Console log';
    console.log(bar); // 'Un testo inyectado' -> asignado por nextThing = iterator.next('bar')
    yield 1;
}.
const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // Console log
// Resume execution injecting bar
const nextThing = iterator.next('Un texto inyectado'); // Aqui se le asigna el value al foo.value
console.log(nextThing);

Console log
Un texto inyectado
{ value: 1, done: false }
