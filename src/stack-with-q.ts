export class StackWithQueue {
    private q1: number[] = [];
    private q2: number[] = [];

    push(val: number): void {
        while (!this.isEmpty()) {
            this.q2.push(this.q1.shift());
        }
        this.q1.push(val);
        while(this.q2.length > 0) {
            this.q1.push(this.q2.shift());
        }
    }

    pop(): number {
        return this.q1.shift();
    }

    peek(): number {
        return this.q1[0];
    }

    size(): number {
        return this.q1.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }
}