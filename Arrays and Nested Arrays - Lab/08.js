function oddPositions(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            result.push(arr[i] * 2);
        }
    }

    result = result.reverse();
    console.log(result.join(' '));
}