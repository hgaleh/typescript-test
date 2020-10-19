export interface IQueue {
    add(val: number): void;
    remove(): number;
    isEmpty(): boolean;
    toArray(): number[];
}

export class Queue implements IQueue {
    private arr: number[] = [];

    constructor(val: number[]) {
        val.forEach(v => this.add(v));
    }

    toArray(): number[] {
        return this.arr.slice(0);
    }

    add(val: number): void {
        this.arr.push(val);
    }

    remove(): number {
        return this.arr.splice(0, 1)[0];
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

}