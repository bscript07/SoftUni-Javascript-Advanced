function townPopulation(arr) {

    const obj = {};

    for (let el of arr) {
        let [town, population] = el.split(' <-> ');
        population = parseInt(population);

        if (obj.hasOwnProperty(town)) {
            obj[town] += population;
        } else {
            obj[town] = population;
        }
    }

    for (const property in obj) {
        console.log(`${property} : ${obj[property]}`);
    }
}