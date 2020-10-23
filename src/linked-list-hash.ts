import { SimpleLinkedList } from "./simple-linked-list";

const hashtableSize = 10;

interface Entry {
    key: number;
    value: string
}

export class LinkedListHash {
    private storrage = new Array<SimpleLinkedList<Entry>>(hashtableSize);

    constructor() {
        for(let i = 0; i < hashtableSize; i++) {
            this.storrage[i] = new SimpleLinkedList<Entry>();
        }
    }

    put(key: number, value: string): void {
        const searchRes = this.getByKey(key);
        const ll = this.getLinkedList(key);
        if (searchRes) {
            searchRes.value = value;
        } else {
            ll.addLast({key, value});
        }
    }

    get(key: number): string {
        const searchRes = this.getByKey(key);
        return searchRes && searchRes.value;
    }

    remove(key: number): void {
        const ll = this.getLinkedList(key);
        ll.removeIf(x => x.key === key);
    }

    private hashFunction(location: number): number {
        return location % hashtableSize;
    }

    private getByKey(key: number): Entry {
        const ll = this.getLinkedList(key);
        const res =  ll.find(nod => nod.value.key === key);
        return res ? res.value : undefined;
    }

    private getLinkedList(key: number): SimpleLinkedList<Entry> {
        return this.storrage[this.hashFunction(key)];
    }
}