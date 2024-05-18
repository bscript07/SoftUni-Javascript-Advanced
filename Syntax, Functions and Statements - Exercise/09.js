function solve(str) {
    return str.match(/\w+/g).join(", ").toUpperCase();
}