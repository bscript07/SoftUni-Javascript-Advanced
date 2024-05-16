function solve(arr) {
    let biggestEl = arr[0][0];

    for (let row of arr) {
        for (let el of row) {
            if (el > biggestEl) {
                biggestEl = el;
            }
        }
    }

    return biggestEl;
}