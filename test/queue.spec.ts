import { IQueue, Queue } from "../src/queue";

function reverse(q: IQueue): IQueue {
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

function reverseFirstK(q: IQueue, k: number): IQueue {
    const q2 = new Queue([]);
    const stk: number[] = [];
    let counter = 0;
    while(!q.isEmpty()) {
        counter++;
        stk.push(q.remove());
        if (counter === k) {
            break;
        }
    }
    while(stk.length > 0) {
        q2.add(stk.pop());
    }
    while(!q.isEmpty()) {
        q2.add(q.remove());
    }
    return q2;
}

describe('test queue', () => {
    it('reverse queue', () => {
        const q1 = new Queue([2, 4, 5, 3, 8]);
        const rev = reverse(q1);
        expect(rev.toArray()).toEqual([8, 3, 5, 4, 2]);
    });

    it('reverse to kth element', () => {
        const q1 = new Queue([2, 4, 5, 3, 8]);
        const q2 = reverseFirstK(q1, 3);
        expect(q2.toArray()).toEqual([5, 4, 2, 3, 8]);
    });
});