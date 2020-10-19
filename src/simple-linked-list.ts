import { SimpleNode } from "./simple-node";

export class SimpleLinkedList<T> {
    private first: SimpleNode<T>;
    private last: SimpleNode<T>;
    private length: number;

    constructor(inputArray: T[]) {
        this.first = new SimpleNode<T>();
        this.last = new SimpleNode<T>();
        this.first.next = this.last;
        this.length = 0;

        if (inputArray && (inputArray.length > 0)) {
            this.length = inputArray.length;
            const nodes = inputArray.map(ndeVal => new SimpleNode(ndeVal));
            this.first.next = nodes[0];
            for(let i = 0; i < nodes.length - 1; i++) {
                nodes[i].next = nodes[i + 1];
            }
            nodes[nodes.length - 1].next = this.last;
        }
    }

    addFirst(val: T): void {
        const nde = new SimpleNode<T>(val);
        nde.next = this.first.next;
        this.length++;
        this.first.next = nde;
    }

    addLast(val: T): void {
        const nde = new SimpleNode<T>(val);
        nde.next = this.last;
        const beforeLastNode = this.getBeforeLastNode();
        beforeLastNode.next = nde;
        this.length++;
    }

    deleteFirst(): void {
        if ( this.first.next !== this.last ) {
            this.first.next = this.first.next.next;
            this.length--;
        }
    }

    deleteLast(): void {
        let beforeLast = this.getBeforeLastNode();
        let beforeBeforeLAst = this.getBeforeNode(beforeLast);
        this.length--;
        beforeBeforeLAst.next = this.last;
    }

    contains(val: T): boolean {
        return (this.indexOf(val) > -1);
    }

    indexOf(val: T): number {
        let currentVal = this.first.next;
        let index = 0;
        while(currentVal !== this.last) {
            if (currentVal.value === val) {
                return index;
            }
            index++;
            currentVal = currentVal.next;
        }
        return -1;
    }

    private getBeforeLastNode(): SimpleNode<T> {
        return this.getBeforeNode(this.last);
    }

    private getBeforeNode(nde: SimpleNode<T>): SimpleNode<T> {
        let currentNode = this.first;
        if (nde === this.first) {
            return this.first;
        }

        while (currentNode.next !== nde) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    toArray(): T[] {
        const arr: T[] = [];
        let currNode = this.first.next;
        while(currNode !== this.last) {
            arr.push(currNode.value);
            currNode = currNode.next;
        }
        return arr;
    }

    reverse(): void {
        const newLinkedList = new SimpleLinkedList([]);
        let currentNode = this.first.next;
        while(currentNode !== this.last) {
            newLinkedList.addFirst(currentNode.value);
            currentNode = currentNode.next;
        }
        this.first = newLinkedList.first;
        this.last = newLinkedList.last;
    }

    lastKth(k: number): T {
        if ( k > this.length) {
            throw new Error(`k is larger than length(${this.length})`)
        }
        let currentVal = this.first.next;
        let index = this.length - k;
        for (let i = 0; i < index; i++) {
            currentVal = currentVal.next;
        }
        return currentVal.value;
    }

    getMiddle(): T | T[] {
        let iter1 = this.first;
        let iter2 = this.first;
        if (iter1.next === this.last) {
            throw new Error('invalid size');
        }
        while (true) {
            iter1 = iter1.next;
            iter2 = iter2.next;
            if (iter2.next === this.last) {
                return iter1.value;
            }
            iter2 = iter2.next;
            if (iter2.next === this.last) {
                const val1 = iter1.value;
                iter1 = iter1.next;
                const val2 = iter1.value;
                return [val1, val2];
            }
        }
    }
}