function sum() {
    const tableRows = document.querySelectorAll('table tr');

    let sum = 0;
    for (let i = 1; i < tableRows.length - 1; i++) {
        const cols = tableRows[i].children;

        sum += Number(cols[1].textContent);
    }
    document.getElementById('sum').innerText = sum;
}