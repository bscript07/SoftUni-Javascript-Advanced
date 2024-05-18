function solve(acc) {
    function sum(a) {
        acc += a;
        return sum;
    }

    sum.toString = function () {
        return acc.toString();
    }

    return sum;
}

console.log(solve(1)(6)(-3).toString());