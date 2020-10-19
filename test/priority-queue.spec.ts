import { PriorityQueue } from "../src/priority-queue";

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