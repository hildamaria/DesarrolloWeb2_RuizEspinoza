async function foo() {
    try {
        var val = await getMeAPromise();
        console.log(val);
}
    catch(err) {
        console.log('Error: ', err.message);
    }
}