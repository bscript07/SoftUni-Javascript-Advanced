function solve(integer) {

    let numToString = integer.toString();
    let firstDigit = numToString[0];
    let sum = 0;

    let allSame= true;

    for (let i = 0; i < numToString.length; i++) {
        if (numToString[i] !== firstDigit) {
            allSame = false;
        }

        sum += parseInt(numToString[i], 10);
    }

    console.log(allSame);
    console.log(sum);
}

solve(1234);