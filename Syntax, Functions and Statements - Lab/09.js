function squareOfStars(size = 5) {
    for (let rows = 0; rows < size; rows++) {
        let line = '';
        for (let col = 0; col < size; col++) {
            line += '* ';
        }
        console.log(line);
    }
}