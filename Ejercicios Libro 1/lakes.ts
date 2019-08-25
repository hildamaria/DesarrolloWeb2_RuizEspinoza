interface Lakes{
    name: string,
    area: number,
    length: number,
    depth: number,
    isFreshwater: boolean,
    countries: string[]
}

let firstlake: Lakes = {
    name: "Caspian Sea",
    length: 1119,
    depth: 1025,
    area: 371000,
    isFreshwater: false,
    countries: ['Kazakhstan', 'Russia', 'Turkmenistan', "Azerbeijan", 'Iran']
}

let secondLake: Lakes = {
    name: 'Superior',
    length: 616,
    area: 82100,
    isFreshwater: true,
    countries: ['Canada', 'United States']
    }

    