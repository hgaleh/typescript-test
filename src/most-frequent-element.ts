import { LinkedListHash } from "./linked-list-hash";

export function getMostFrequentElement(arr: number[]): number {
    const map = new LinkedListHash<number, number>();

    arr.forEach(x => {
        let intOccurance = map.get(x);
        intOccurance = intOccurance ? intOccurance + 1 : 1;
        map.put(x, intOccurance)
    });

    let maxOccurance = 0;
    let max;

    map.forEach(entry => {
        if (entry.value > maxOccurance) {
            maxOccurance = entry.value;
            max = entry.key;
        }
    });

    return max;
}