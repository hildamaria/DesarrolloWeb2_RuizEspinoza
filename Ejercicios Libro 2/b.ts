var b = a; // Permitido

var b = a; // NO permitido - no encontraria el valor de a

import {a} from "./a";
var b = a; // Permitido, ahora si encontraria el valor

import var a = require("./a");
var b = a;