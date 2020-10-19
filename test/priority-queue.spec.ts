class PriorityQueue {
    private q: number[] = [];

    constructor(arr: number[]) {
        arr.forEach(s => {
            this.add(s);
        });
    }

    add(val: number) {
        this.q.push(val);
        for(let i = this.q.length - 1; i >= 0; i--) {
            if (this.q[i - 1] < this.q[i]) {
                [this.q[i - 1], this.q[i]] = [this.q[i], this.q[i - 1]];
            }
        }
    }

    remove(): number {
        if (this.q.length === 0) throw new Error('empty queue');
        return this.q.splice(0, 1)[0];
    }
}

describe('priority queue', () => {
    it('add to priority queue with bubble sort', () => {
        const q = new PriorityQueue([2, 4, 2, 5, 7]);
        const out1 = q.remove();
        const out2 = q.remove();
        const out3 = q.remove();
        const out4 = q.remove();
        expect(out1).toBe(7);
        expect(out2).toBe(5);
        expect(out3).toBe(4);
        expect(out4).toBe(2);
    });
});