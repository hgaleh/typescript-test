import { SimpleNode } from "./simple-node";

export interface ILinkedListQueue {
    enqueue(val: number): void;
    dequeue(): number;
    peek(): number;
    size(): number;
    isEmpty(): boolean;
    toArray(): number[];
}

export class LinkedListQueue implements ILinkedListQueue {

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
