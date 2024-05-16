function solve(arr) {

    let result = [];
    let currentBiggest = -Infinity;

    for (let num of arr) {
        if (num >= currentBiggest) {
            result.push(num);
            currentBiggest = num;
        }
    }
    return result;
}

console.log(solve([1, 2, 3, 4])); 
