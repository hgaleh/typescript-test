import { getMostFrequentElement } from '../src/most-frequent-element';

describe('find most frequent in an integer list', () => {
    it('there are 10 elements and one element has maximum occurance', () => {
        const inputArray = [2, 4, 3, 1, 5, 8, 9, 6, 2, 9]
        const actual = getMostFrequentElement(inputArray);
        expect(actual).toBe(2);
    });
});