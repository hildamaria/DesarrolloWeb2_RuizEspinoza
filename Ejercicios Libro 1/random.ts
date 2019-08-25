function randomIntElem(theArray: number[]):number{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}
let positions: number[] = [103,458,472,458];
let randomPosition: number = randomIntElem(positions);

function randomStrElem(thaArray: string[]): string{
    let randomIndex = Math.floor(Math.random()*thaArray.length);
    return thaArray[randomIndex];
}
let colors = ['violet','indigo','blue','green'];
let randomColor: string = randomStrElem(colors);

function randomElem(theArray: any[]):any{
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
}

// This code will compile without an error.
let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
let randomColor: number = randomElem(colors);

function randomElem<T>(theArray: T[]): T {
    let randomIndex = Math.floor(Math.random()*theArray.length);
    return theArray[randomIndex];
    }
    let colors: string[] = ['violet', 'indigo', 'blue', 'green'];
    let randomColor: string = randomElem(colors);