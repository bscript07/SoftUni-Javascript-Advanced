function aggregateElements(array) {

    let inverseValue = 0;

    for (let i = 0; i < array.length; i++) {
        inverseValue += 1 / array[i];
    }

    console.log(array.reduce((a, b) => a + b));
    console.log(inverseValue);
    console.log(array.join(''));
}