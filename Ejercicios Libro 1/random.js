function randomIntElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomIntElem(positions);
function randomStrElem(thaArray) {
    var randomIndex = Math.floor(Math.random() * thaArray.length);
    return thaArray[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomStrElem(colors);
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
// This code will compile without an error.
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomElem(colors);
