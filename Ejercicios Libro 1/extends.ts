interface People{
    name:string
}

interface Family{
    name: string,
    age: number,
    relation: string
}

interface Celebrity extends People{
    profession: string
}

function printName<T extends People>(theInput: T): void{
    console.log(`My name is ${theInput.name}`);
}

let serena: Celebrity = {
    name: 'Serena Williams',
    profession: 'Tennis Player'
}

printName(serena);