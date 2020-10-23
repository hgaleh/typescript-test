import { SimpleLinkedList } from "./simple-linked-list";

const hashtableSize = 10;

interface Entry<K, V> {
    key: K;
    value: V
}

export class LinkedListHash<K, V> {
    private entries = new Array<SimpleLinkedList<Entry<K, V>>>(hashtableSize);

    constructor() {
        for(let i = 0; i < hashtableSize; i++) {
            this.entries[i] = new SimpleLinkedList<Entry<K, V>>();
        }
    }

    put(key: K, value: V): void {
        const searchRes = this.getByKey(key);
        const ll = this.getBucket(key);
        if (searchRes) {
            searchRes.value = value;
        } else {
            ll.addLast({key, value});
        }
    }

    get(key: K): V {
        const searchRes = this.getByKey(key);
        return searchRes && searchRes.value;
    }

    remove(key: K): void {
        const ll = this.getBucket(key);
        ll.removeIf(x => x.key === key);
    }

    forEach(fn: (value: Entry<K, V>) => void) {
        this.entries.forEach(entry => {
            entry.forEach(node => fn(node));
        });
    }

    private hashFunction(location: K): number {
        return +location % hashtableSize;
    }

    private getByKey(key: K): Entry<K, V> {
        const ll = this.getBucket(key);
        const res =  ll.find(nod => nod.value.key === key);
        return res ? res.value : undefined;
    }

    private getBucket(key: K): SimpleLinkedList<Entry<K, V>> {
        return this.entries[this.hashFunction(key)];
    }
}