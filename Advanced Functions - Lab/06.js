function solve(arr) {
    let collection = [];

    for (const el of arr) {
        const [command, str] = el.split(' ');

        switch (command) {
            case 'add':
                collection.push(str);
                break;
            case 'remove':
                collection = collection.filter(x => x !== str);
                break;
            case 'print':
                console.log(collection.join(','));
                break;
        }
    }
}