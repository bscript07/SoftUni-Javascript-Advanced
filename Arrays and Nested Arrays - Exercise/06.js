function solve(arr) {

    let sortingNames = arr.sort();
    for (let i = 1; i <= sortingNames.length; i++) {
        console.log(`${i}.${sortingNames[i - 1]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);