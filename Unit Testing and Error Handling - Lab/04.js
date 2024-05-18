describe('sum(arr)', () => {
    it('array of numbers as an argument', () => {
        expect(() => sum([1, 2, 3, 4, 5])).not.to.throw;
    }),

    it('return the sum of the values of all elements inside the array', () => {
        expect(sum([5, 5, 5, 5, 5])).to.equal(25);
    })
})