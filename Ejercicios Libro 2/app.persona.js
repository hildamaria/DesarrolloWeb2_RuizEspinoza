// source/scripts/app.persona.js
var Persona = function(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    var self = this;
    return {
        saludar: function() {
            alert("Hola, mi nombre es " + self.nombre);
        },
        presentar: function() {
            alert("Tengo " + self.edad + " años.");
        }
    };
}

module.exports = Persona;

var persona = require('./app.persona');
$('h1').html('Hola Browserify');
var carlos = new persona("Carlos", 30);
carlos.saludar();
carlos.presentar();