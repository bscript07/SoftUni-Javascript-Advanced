function calculate(arr) {
    const numbers = arr.map(Number);
    const firstEl = numbers[0];
    const lastEl = numbers.pop();

    console.log(firstEl + lastEl);
}