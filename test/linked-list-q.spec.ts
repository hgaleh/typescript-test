import { SimpleNode } from "../src/simple-linked-list";

interface ILinkedListQueue {
    enqueue(val: number): void;
    dequeue(): number;
    peek(): number;
    size(): number;
    isEmpty(): boolean;
    toArray(): number[];
}

class LinkedListQueue implements ILinkedListQueue {

    first: SimpleNode<number>;
    last: SimpleNode<number>;

    enqueue(val: number): void {
        const newNode = new SimpleNode(val);
        if( this.isEmpty() ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    dequeue(): number {
        const val = this.peek();
        this.first = (this.first === this.last) ? undefined : this.first.next
        return val;
    }

    peek(): number {
        if (this.isEmpty()) throw new Error('not value present');
        const val = this.first.value;
        return val;
    }

    size(): number {
        let counter = 0;
        this.forEach(nod => {
            counter++;
        });
        return counter;
    }

    isEmpty(): boolean {
        return this.first === undefined;
    }

    toArray(): number[] {
        const arr: number[] = [];
        this.forEach(x => {
            arr.push(x.value);
        });
        return arr;
    }

    private forEach(fn: (nd: SimpleNode<number>) => void) {
        if (this.isEmpty()) return;
        let currentNode = this.first;
        while(currentNode !== this.last) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
        fn(currentNode);
    }

}

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