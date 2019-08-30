// Ejemplos de llamada a then
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called:', res === 123); // Devuelve: true
});
promise.catch((err) => {
    // Nuca es utilizado
});

//Ejemplo de llamada a catch
const promise = new Promise((resolve, reject) => {
    reject(new Error("Algo malo a pasado"));
});
promise.then((res) => {
    // This is never called
});
promise.catch((err) => {
console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo maloa pasado'
});

//CADENAS DE PROMESAS
Promise.resolve(123)
.then((res) => {
    console.log(res); // 123
    return 456;
})
.then((res) => {
    console.log(res); // 456
    return Promise.resolve(123);
})
.then((res) => {
    console.log(res); // 123 : Notice that this `this` is called with the resolvedvalue
    return Promise.resolve(123);
})

//MANEJAR ERRORES AÑADIENDO catch A LA CADENA
Promise.reject(new Error('something bad happened'))
.then((res) => {
    console.log(res); // not called
    return 456;
})
.then((res) => {
    console.log(res); // not called
    return Promise.resolve(123);
})
.then((res) => {
    console.log(res); // not called
    return Promise.resolve(123);
})
.catch((err) => {
    console.log(err.message); // something bad happened
});

/*------------------------- */
Promise.reject(new Error('something bad happened'))
.then((res) => {
    console.log(res); // not called
    return 456;
})
.catch((err) => {
    console.log(err.message); // something bad happened
    return Promise.resolve(123);
})
.then((res) => {
    console.log(res); // 123
})