const foo = 123;
foo2 = 456; // NO permitido

const foo = { bar: 123 };
foo = { bar: 456 }; // ERROR no se permite la modificación de objeto

const foo = { bar: 123 };
foo.bar = 456; // Permitido
console.log(foo); // { bar: 456 }

