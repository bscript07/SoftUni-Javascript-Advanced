function factory(library, orders) {
    const result = [];

    for (const { template, parts } of orders) {
        const order = Object.assign({}, template);

        for (const part of parts) {
            const func = library[part];
            order[part] = func.bind(order);
        }
        result.push(order);
    }
    return result
}