function stringLength(arg1, arg2, arg3) {
    let argumentOneLength = arg1.length;
    let argumentTwoLength = arg2.length;
    let argumentThree = arg3.length;

    let sum = argumentOneLength + argumentTwoLength + argumentThree;
    let average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);
}