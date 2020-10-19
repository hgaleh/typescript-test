function reverseString(str: string): string {
    const stacked = str.split('');
    let out = [];
    while(stacked.length > 0) {
        out.push(stacked.pop());
    }
    return out.join('');
}

function isBalanced(str: string): boolean {
    const arr = str.split('');
    const stack:string[] = [];

    for (const val of arr) {
        switch(val) {
            case '(':
            case '[':
            case '<':
                stack.push(val);
            break;
            case ')':
                let last = stack.pop();
                if (last !== '(') {
                    return false;
                }
                break;
            case ']':
                last = stack.pop();
                if (last !== '[') {
                    return false;
                }
                break;
            case '>':
                last = stack.pop();
                if (last !== '<') {
                    return false;
                }
                break;
        }
    };
    return true;
}

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