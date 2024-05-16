function extract(elementId) {
    const params = document.getElementById(elementId).textContent;
    const pattern = /\(([^)]+)\)/g;
    let result = params.matchAll(pattern);

    let matches = [];

    for (const text of result) {
        matches.push(text[1]);
    }
    return matches.join('; ');
}