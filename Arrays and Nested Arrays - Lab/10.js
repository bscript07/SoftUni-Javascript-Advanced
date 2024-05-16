function diagonalSums(arr) {

    let diagonalSum1 = 0;
    let diagonalSum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        diagonalSum1 += arr[i][i];
        diagonalSum2 += arr[i][arr.length - 1 - i];
    }

    console.log(diagonalSum1, diagonalSum2);
}