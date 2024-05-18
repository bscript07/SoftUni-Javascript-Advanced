function solve(a, b) {

    const input = JSON.parse(a);
    const [criteria, value] = b.split('-');

    return input
        .filter(x => x[criteria] === value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .join('\n')
}