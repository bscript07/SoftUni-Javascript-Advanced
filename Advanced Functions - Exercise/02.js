function solve(...args) {
    const types = {}
    args.forEach(arg => {
        const argType = typeof (arg);
        console.log(`${argType}: ${arg}`);
        if (!types.hasOwnProperty(argType)) {
            types[argType] = 0;
        }
        types[argType]++;
    })

   console.log(Object.entries(types)
       .sort((a, b) => b[1] - a[1])
       .map(e =>e.join(' = '))
       .join('\n'));
}

solve('cat', 42, function () { console.log('Hello world!'); });
console.log('--------------------------');
solve({ name: 'bob'}, 3.333, 9.999);