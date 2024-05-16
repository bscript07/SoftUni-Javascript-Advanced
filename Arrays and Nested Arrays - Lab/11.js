function equalNeighbors(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        const row = arr[i];

        for (let k = 0; k < row.length; k++) {
            const col = row[k];

            if (i !== arr.length - 1) {
                if (col === row[k + 1]) {
                    counter++;
                }

                if (col === arr[i + 1][k]) {
                    counter++;
                }
            } else if (col === row[k + 1] || col === arr[i][k + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}