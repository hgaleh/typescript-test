import { StackWithQueue } from '../src/stack-with-q';

describe('implement stack with queue', () => {
    it('push', () => {
        const s = new StackWithQueue();
        s.push(10);
        s.push(11);
        s.push(17);

        const res1 = s.pop();
        const res2 = s.pop();
        const res3 = s.pop();

        expect(res1).toBe(17);
        expect(res2).toBe(11);
        expect(res3).toBe(10);
    });

    it('peek', () => {
        const s = new StackWithQueue();
        s.push(10);
        s.push(11);
        s.push(17);

        const res1 = s.peek();
        const res2 = s.peek();
        const res3 = s.peek();

        expect(res1).toBe(17);
        expect(res2).toBe(17);
        expect(res3).toBe(17);
    });

    it('size', () => {
        const s = new StackWithQueue();
        s.push(10);
        s.push(11);
        s.push(17);
        expect(s.size()).toBe(3);
    });

    it('size 0', () => {
        const s = new StackWithQueue();
        expect(s.size()).toBe(0);
    });

    it('size 1', () => {
        const s = new StackWithQueue();
        s.push(10);
        expect(s.size()).toBe(1);
    });

    it('isEmpty', () => {
        const s = new StackWithQueue();
        s.push(10);
        s.push(11);
        s.push(17);
        expect(s.isEmpty()).toBeFalse();
    });

    it('isEmpty yes', () => {
        const s = new StackWithQueue();
        expect(s.isEmpty()).toBeTrue();
    });

    it('isEmpty', () => {
        const s = new StackWithQueue();
        s.push(10);
        s.push(11);
        s.push(17);

        s.pop();
        s.pop();
        s.pop();

        expect(s.isEmpty()).toBeTrue();
    });
});