import { LinkedListQueue } from "../src/linked-list-queue";

describe('linkedlist q', () => {
    it('add to queue', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(4);
        expect(q.toArray()).toEqual([10, 5, 7, 4]);
    });

    it('add to queue one element', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        expect(q.toArray()).toEqual([10]);
    });

    it('add to queue no element', () => {
        const q = new LinkedListQueue();
        expect(q.toArray()).toEqual([]);
    });

    it('deque', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(4);

        const out1 = q.dequeue();
        expect(out1).toBe(10);
    });

    it('deque one element', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        const out1 = q.dequeue();
        expect(out1).toBe(10);
    });

    it('deque no element', () => {
        const q = new LinkedListQueue();
        const error = () => { q.dequeue() };
        expect(error).toThrow();
    });

    it('size', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(4);

        const actual = q.size();

        expect(actual).toBe(4);
    });

    it('size 1', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);

        const actual = q.size();

        expect(actual).toBe(1);
    });

    it('size 0', () => {
        const q = new LinkedListQueue();

        const actual = q.size();

        expect(actual).toBe(0);
    });

    it('isEmpty', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(4);

        const actual = q.isEmpty();

        expect(actual).toBeFalse();
    });

    it('isEmpty one', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);

        const actual = q.isEmpty();

        expect(actual).toBeFalse();
    });

    it('isEmpty empty', () => {
        const q = new LinkedListQueue();

        const actual = q.isEmpty();

        expect(actual).toBeTrue();
    });

    it('isEmpty by dequeue', () => {
        const q = new LinkedListQueue();
        q.enqueue(10);
        q.enqueue(5);
        q.enqueue(7);
        q.enqueue(4);

        q.dequeue();
        q.dequeue();
        q.dequeue();
        q.dequeue();

        const actual = q.isEmpty();

        expect(actual).toBeTrue();
    });
});