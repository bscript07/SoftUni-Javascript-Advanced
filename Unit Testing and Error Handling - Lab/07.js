describe('createCalculator()', () => {
    it('return a module (object), containing the functions add(), subtract() and get() as properties', () => {
        const calculator = createCalculator();
        expect(calculator).to.be.an('object');
        expect(calculator).to.have.property('add').that.is.a('function');
        expect(calculator).to.have.property('subtract').that.is.a('function');
        expect(calculator).to.have.property('get').that.is.a('function');
    }),

    it('keep an internal sum that cant be modified from the outside', () => {
        const calculator = createCalculator();
        calculator.add(5);
        calculator.subtract(3);
        expect(calculator.get()).to.equal(2);
    }),

    it('The functions add() and subtract() take a parameter that can be parsed as a number (either a number or a string containing a number) that is added or subtracted from the internal sum', () => {
        const calculator = createCalculator();
        calculator.add(5);
        calculator.add("10"); // Adding a string that can be parsed as a number
        calculator.subtract("3"); // Subtracting a string that can be parsed as a number
        expect(calculator.get()).to.equal(12);
    }),

    it('the function get() returns the value of the internal sum', () => {
        const calculator = createCalculator();
        calculator.add(5);
        calculator.subtract(3);
        const result = calculator.get();
        expect(result).to.equal(2);
    })
})