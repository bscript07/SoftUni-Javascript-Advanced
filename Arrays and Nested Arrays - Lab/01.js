function evenPosition(arr) {

    let evenIndex = [];

    for (let i = 0; i < arr.length; i += 2) {
        evenIndex.push(arr[i]);
    }

    console.log(evenIndex.join(' '));
}