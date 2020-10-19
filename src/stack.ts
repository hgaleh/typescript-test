export function reverseString(str: string): string {
    const stacked = str.split('');
    let out = [];
    while(stacked.length > 0) {
        out.push(stacked.pop());
    }
    return out.join('');
}

export function isBalanced(str: string): boolean {
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
