import { isBalanced, reverseString } from "../src/stack";

describe('stacks', () => {
    it('use stacks to revers a string', () => {
        const str = 'itismystring';
        const res = reverseString(str);
        expect(res).toBe('gnirtsymsiti');
    });

    it('use stack to check string is balanced', () => {
        const str1 = '(hello)';
        const str2 = '(he<l>lo)';
        const str3 = 'he<l>lo)';
        const str4 = 'he[l]l(o)';
        const str5 = 'hel]l(o)';
        let res1 = isBalanced(str1);
        let res2 = isBalanced(str2);
        let res3 = isBalanced(str3);
        let res4 = isBalanced(str4);
        let res5 = isBalanced(str5);
        expect(res1).toBe(true);
        expect(res2).toBe(true);
        expect(res3).toBe(false);
        expect(res4).toBe(true);
        expect(res5).toBe(false);
    });
});