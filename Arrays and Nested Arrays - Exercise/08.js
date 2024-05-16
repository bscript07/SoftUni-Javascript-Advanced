function solve(arr) {

    arr.sort((a, b) => {

        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

    return arr.join("\n");
}

console.log(solve(['test', 'Deny', 'omen', 'Default']));