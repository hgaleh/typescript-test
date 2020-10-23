import { differenceK } from "../src/differemnce-k";

describe('difference of k', () => {
    it('2', () => {
        const inp = [1, 7, 5, 9, 2, 12, 3];
        const diffs = differenceK(inp, 2);
        expect(diffs.length).toBe(4);
    });
});