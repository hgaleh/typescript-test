import { Subject } from 'rxjs';

describe('subject test', () => {
    it('subject does not save anything', (done) => {
        const sub = new Subject();
        let count = 0;
        sub.next(10);
        sub.next(20);
        sub.subscribe(val => {
            if (count === 0) {
                count = 1;
                expect(val).toBe(30);
            } else if (count === 1) {
                expect(val).toBe(40);
                count = 2;
            } else {
                count++;
            }
        });
        sub.next(30);
        sub.next(40);
        setTimeout(() => {
            expect(count).toBe(2);
            done();
        }, 10);
    });
});