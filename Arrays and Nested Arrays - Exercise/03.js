function solve(arr) {

    let result = [];
    let currentNumber = 1;

    for (const command of arr) {
        switch(command) {
            case "add":
                result.push(currentNumber);
            break;
            case "remove":
                if (result.length > 0) {
                    result.pop();
                }
            break;
        }
        currentNumber++;
    }

    if (result.length === 0) {
        console.log("Empty");
    } else {
        for (let num of result) {
            console.log(num);
        }
    }

}

solve(['add', 
'add', 
'remove', 
'add', 
'add']);