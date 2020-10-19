interface IQueue {
    add(val: number): void;
    remove(): number;
    isEmpty(): boolean;
    toArray(): number[];
}

class Queue implements IQueue {
    private arr: number[] = [];

    constructor(val: number[]) {
        val.forEach(v => this.add(v));
    }

    toArray(): number[] {
        return this.arr.slice(0);
    }

    add(val: number): void {
        this.arr.push(val);
    }

    remove(): number {
        return this.arr.splice(0, 1)[0];
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

}

function reverse(q: IQueue) {
    const arr: number[] = [];
    while(!q.isEmpty()) {
        arr.push(q.remove());
    }
    const newq = new Queue([]);
    while(arr.length > 0) {
        newq.add(arr.pop());
    }
    return newq;
}

describe('test queue', () => {
    it('reverse queue', () => {
        const q1 = new Queue([2, 4, 5, 3, 8]);
        const rev = reverse(q1);
        expect(rev.toArray()).toEqual([8, 3, 5, 4, 2]);
    });
});