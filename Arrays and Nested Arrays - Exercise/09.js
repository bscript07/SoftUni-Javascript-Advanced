function solve(matrix) {

    const refferenceSum = matrix[0].reduce((a, b) => a + b, 0);
    
    for (let i = 1; i < matrix.length; i++) {
        const rowsSum = matrix[i].reduce((a, b) => a + b, 0);
        if (rowsSum !== refferenceSum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        const colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum !== refferenceSum) {
            return false;
        }
    }

    return true;
}

console.log(solve([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));