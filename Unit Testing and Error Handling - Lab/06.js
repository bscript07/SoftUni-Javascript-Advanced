describe('rgbToHexColor(red, green, blue)', () => {

    it('should return a valid hexadecimal color for valid input', () => {
        expect(rgbToHexColor(255, 99, 71)).to.equal('#FF6347');
        expect(rgbToHexColor(0, 128, 0)).to.equal('#008000');
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });

    it('should return undefined for invalid input types', () => {
        expect(rgbToHexColor('255', 99, 71)).to.be.undefined;
        expect(rgbToHexColor(255, '99', 71)).to.be.undefined;
        expect(rgbToHexColor(255, 99, '71')).to.be.undefined;
    });

    it('should return undefined for out-of-range values', () => {
        expect(rgbToHexColor(-1, 99, 71)).to.be.undefined;
        expect(rgbToHexColor(256, 99, 71)).to.be.undefined;
        expect(rgbToHexColor(255, 256, 71)).to.be.undefined;
        expect(rgbToHexColor(255, 99, -1)).to.be.undefined;
    });
})