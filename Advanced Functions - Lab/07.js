function solve(arr) {
    const storage = {};

    const instructions = {
        create: (name, child, name2) => {
            storage[name] = {};
            if (name2) {
                Object.setPrototypeOf(storage[name], storage[name2]);
            }
        },
        set: (a, b, c) => {
            if (storage[a]) {
                storage[a][b] = c;
            }
        },
        print: (a) => {
            const entry = [];
            if (storage[a] && typeof storage[a] === 'object') {
                for (const key in storage[a]) {
                    entry.push(`${key}:${storage[a][key]}`);
                }
            }
            console.log(entry.join(','));
        },
    };

    arr.forEach((x) => {
        const [d, a, b, c] = x.split(' ');
        instructions[d](a, b, c);
    });
}