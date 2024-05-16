function piece(arr, target1, target2) {

    let startIndex = arr.indexOf(target1);
    let endIndex = arr.indexOf(target2);

    if (startIndex === -1 || endIndex === -1) {
        return [];
    }

    if (startIndex > endIndex) {
        [startIndex, endIndex] = [endIndex, startIndex];
    }

    return arr.slice(startIndex, endIndex + 1);
}