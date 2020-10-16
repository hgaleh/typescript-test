class SimpleNode<T> {
    next: SimpleNode<T>;
    value: T;

    constructor(val?: T) {
        this.value = val;
    }
}

export class SimpleLinkedList<T> {
    private first: SimpleNode<T>;
    private last: SimpleNode<T>;

    constructor(inputArray: T[]) {
        this.first = new SimpleNode<T>();
        this.last = new SimpleNode<T>();
        this.first.next = this.last;

        if (inputArray && (inputArray.length > 0)) {
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
        this.first.next = nde;
    }

    addLast(val: T): void {
        const nde = new SimpleNode<T>(val);
        nde.next = this.last;
        const beforeLastNode = this.getBeforeLastNode();
        beforeLastNode.next = nde;
    }

    deleteFirst(): void {
        if ( this.first.next !== this.last ) {
            this.first.next = this.first.next.next;
        }
    }

    deleteLast(): void {
        let beforeLast = this.getBeforeLastNode();
        let beforeBeforeLAst = this.getBeforeNode(beforeLast);
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
}