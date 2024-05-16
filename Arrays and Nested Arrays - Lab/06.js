function biggerHalf(arr) {
    let sorting = arr.slice().sort((a, b) => a - b);
    let firstHalf = Math.floor(arr.length / 2);
    let secondHalf = sorting.slice(firstHalf);

    return secondHalf;
}