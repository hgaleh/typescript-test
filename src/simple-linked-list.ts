import { SimpleNode } from "./simple-node";

export class SimpleLinkedList<T> {
    private first: SimpleNode<T>;
    private last: SimpleNode<T>;
    private length: number = 0;

    constructor(arrayInput?: T[]) {
        if (arrayInput) {
            arrayInput.forEach(val => {
                this.addLast(val);
            });
        }
    }

    addFirst(val: T): void {
        const newNode = new SimpleNode(val);
        if( this.isEmpty() ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        this.length++;
    }

    addLast(val: T): void {
        if (this.isEmpty()) {
            return this.addFirst(val);
        }

        const nde = new SimpleNode<T>(val);
        this.last.next = nde;
        this.last = nde;
        this.length++;
    }

    deleteFirst(): void {
        if (!this.isEmpty()) {
            this.first = this.first.next;
            this.length--;
        }
    }

    deleteLast(): void {
        if (!this.isEmpty()) {
            const beforeLast = this.find(x => x.next === this.last);
            beforeLast.next = undefined;
            this.last = beforeLast;
            this.length--;
        }
    }

    contains(val: T): boolean {
        return this.find(x => x.value === val) !== null;
    }

    indexOf(val: T): number {
        let counter = 0;
        let found: number;
        this.forEach(x => {
            if ((x.value === val) && (found === undefined)) {
                found = counter;
            }
            counter++;
        });
        return (found !== undefined) ? found : -1;
    }

    reverse(): void {
        const newLinkedList = new SimpleLinkedList<T>();
        this.forEach(x => {
            newLinkedList.addFirst(x.value);
        });
        this.first = newLinkedList.first;
        this.last = newLinkedList.last;
    }

    lastKth(k: number): T {
        let index = this.length - k;
        let counter = 0;
        let found: T;

        this.forEach(x => {
            if (counter === index) {
                found = x.value;
            }
            counter++;
        });

        if (found !== undefined) {
            return found;
        }

        throw new Error(`k is larger than length(${this.length})`);
    }

    getMiddle(): T | T[] {
        let iter1 = this.first;
        let iter2 = this.first;
        if (this.isEmpty()) {
            throw new Error('invalid size');
        }
        while (true) {
            if (iter2 === this.last) {
                return iter1.value;
            }

            iter2 = iter2.next;

            if (iter2 === this.last) {
                const val1 = iter1.value;
                iter1 = iter1.next;
                const val2 = iter1.value;
                return [val1, val2];
            }

            iter1 = iter1.next;
            iter2 = iter2.next;
        }
    }

    isEmpty(): boolean {
        return this.first === undefined;
    }

    toArray(): T[] {
        const arr: T[] = [];
        this.forEach(x => {
            arr.push(x.value);
        });
        return arr;
    }

    private forEach(fn: (nd: SimpleNode<T>) => void) {
        if (this.isEmpty()) return;
        let currentNode = this.first;
        while(currentNode !== this.last) {
            fn(currentNode);
            currentNode = currentNode.next;
        }
        fn(currentNode);
    }

    private find(fn: (nd: SimpleNode<T>) => boolean): SimpleNode<T> {
        if (this.isEmpty()) return null;
        let currentNode = this.first;
        while(currentNode.next !== undefined) {
            if(fn(currentNode)) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}