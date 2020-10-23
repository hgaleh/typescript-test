import { LinkedListQueue } from "./linked-list-queue";

const hashtableSize = 10;

interface Entry {
    key: number;
    value: LinkedListQueue;
}

export class LinkedListHash {
    private storrage = new Array<Entry>(hashtableSize);

    put(key: number, value: string): void {

    }

    // get(key: number): string {

    // }

    remove(key: number): void {

    }

    // priavte hashFunction(location: number): number {
    //     const linkedListLocation = location % hashtableSize;
    //     this.storrage[linkedListLocation]
    //     return location % hashtableSize;
    // }
}