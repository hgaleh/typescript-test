function countWords(str) {
	return str.split(' ').join().length;
}

describe('test2', () => {
    it('test1', () => {
        expect(countWords("Just an example here move along")).toBe(6);
    });

    it('test2', () => {
        expect(countWords("This is a test")).toBe(4);
    });

    it('test3', () => {
        expect(countWords("What an easy task, right")).toBe(5);
    });
});