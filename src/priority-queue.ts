export class PriorityQueue {
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