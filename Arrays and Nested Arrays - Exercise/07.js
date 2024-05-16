function solve(arr) {

    arr.sort((a, b) => a - b);
    let result = [];

    let left = 0;
    let right = arr.length - 1;

    let toogle = true;
    while(left <= right) {

        if(toogle) {
            result.push(arr[left]);
            left++;
        } else {
            result.push(arr[right]);
            right--;
        }

        toogle = !toogle;
    }

    return result;

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));