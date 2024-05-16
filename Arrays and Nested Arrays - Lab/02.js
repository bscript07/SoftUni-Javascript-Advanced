function solve(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = sequence.slice(-k).reduce((acc, val) => acc + val, 0);
        sequence.push(sum);
    }

    return sequence;
}