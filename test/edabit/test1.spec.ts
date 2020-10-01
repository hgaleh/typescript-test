function transform(arr: number[]): number[] {
    return arr.map(number => {
        if(isOdd(number)) {
            return ++number;
        } else {
            return --number;
        }
    });
}

function isOdd(num) {
    return num % 2 === 1;
}

describe('test1', () => {
    it('test1', () => {
        expect(transform([1, 2, 3, 4, 5])).toEqual([2, 1, 4, 3, 6]);
    });
});