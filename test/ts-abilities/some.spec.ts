describe('use some to findout if any occurance occured', () => {
    it('an array with some occurance', () => {
        const arr = [2, 4, 0, 'ali', true, 'ali'];
        expect(arr.some(el => el === 'ali')).toBeTrue();
    });

    it('an array with one occurance', () => {
        const arr = [2, 4, 0, 'ali', true, 'mahmud'];
        expect(arr.some(el => el === 'ali')).toBeTrue();
    });

    it('an array with no occurance', () => {
        const arr = [2, 4, 0, true, 'mahmud'];
        expect(arr.some(el => el === 'ali')).toBeFalse();
    });

    it('use find instead', () => {
        const arrWithAli = [2, 4, 0, 'ali', true, 'ali'];
        const arrWithoutAli = [2, 4, 0, true, 'mohammad'];
        expect(!!arrWithAli.find(el => el === 'ali')).toBeTrue();
        expect(!!arrWithoutAli.find(el => el === 'ali')).toBeFalse();
    });
});