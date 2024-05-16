function solve(arr, rotations) {

    let arrayLength = arr.length;
    let effectiveRotations = rotations % arrayLength;

    if (effectiveRotations === 0) {
        return arr;
    }

    let part1 = arr.slice(-effectiveRotations); // last "k" elements
    let part2 = arr.slice(0, arrayLength - effectiveRotations); // first "k" elements

    return part1.concat(part2).join(' ');
}

console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));