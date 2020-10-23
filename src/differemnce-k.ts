interface NumberPair {
    number1: number;
    number2: number;
}

export function differenceK(arr: number[], k: number): NumberPair[]  {
    const pairs: NumberPair[] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            const diff = Math.abs(arr[i] - arr[j]);
            if(diff === k) {
                pairs.push({number1: arr[i], number2: arr[j]});
            }
        }
    }
    return pairs;
}