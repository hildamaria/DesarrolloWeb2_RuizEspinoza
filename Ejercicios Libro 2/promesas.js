// Ejemplos de llamada a then
var promise = new Promise(function (resolve, reject) {
    resolve(123);
});
promise.then(function (res) {
    console.log('I get called:', res === 123); // Devuelve: true
});
promise["catch"](function (err) {
    // Nuca es utilizado
});
//Ejemplo de llamada a catch
var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo a pasado"));
});
promise.then(function (res) {
    // This is never called
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message); // Tengo una llamada: 'Algo maloa pasado'
});
//CADENAS DE PROMESAS
Promise.resolve(123)
    .then(function (res) {
    console.log(res); // 123
    return 456;
})
    .then(function (res) {
    console.log(res); // 456
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); // 123 : Notice that this `this` is called with the resolvedvalue
    return Promise.resolve(123);
});
//MANEJAR ERRORES AÑADIENDO catch A LA CADENA
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res); // not called
    return 456;
})
    .then(function (res) {
    console.log(res); // not called
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); // not called
    return Promise.resolve(123);
})["catch"](function (err) {
    console.log(err.message); // something bad happened
});
/*------------------------- */
Promise.reject(new Error('something bad happened'))
    .then(function (res) {
    console.log(res); // not called
    return 456;
})["catch"](function (err) {
    console.log(err.message); // something bad happened
    return Promise.resolve(123);
})
    .then(function (res) {
    console.log(res); // 123
});
//PROMESAS EN PARALELO
function loadItem(id) {
    return new Promise(function (resolve) {
        console.log('loading item', id);
        setTimeout(function () {
            resolve({ id: id });
        }, 1000);
    });
}
var item1, item2;
loadItem(1)
    .then(function (res) {
    item1 = res;
    return loadItem(2);
})
    .then(function (res) {
    item2 = res;
    console.log('done');
});
//Paralelo
Promise.all([loadItem(1), loadItem(2)])
    .then(function (res) {
    item1.item2 = res[0];
    console.log('done');
});
