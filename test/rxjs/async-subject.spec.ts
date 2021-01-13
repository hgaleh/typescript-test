import { AsyncSubject, Subscriber } from 'rxjs';

// saves last state before complete() and relays that to all observers

describe('async subject test', () => {
    it('subscribers will receive last value after completion', () => {
        const sub = new AsyncSubject();
        sub.subscribe(x => {
            expect(x).toBe(456);
        });
        sub.next(123); //nothing logged
        sub.subscribe(x => {
            expect(x).toBe(456);
        });
        sub.next(456);
        sub.complete(); //456, 456 logged by both subscribers
    });

    it('several values are sent but the last one is counted', () => {
        const sub = new AsyncSubject();
        sub.subscribe(val => {
            expect(val).toBe(100);
        });
        sub.next(10);
        sub.next(20);
        sub.next(30);
        sub.next(40);
        sub.next(50);
        sub.next(60);
        sub.next(70);
        sub.next(80);
        sub.next(90);
        sub.next(100);
        sub.complete();
    });

    it('even after complete, if subscribe, last value will be resulted', (done) => {
        const sub = new AsyncSubject();
        let count = 0;
        sub.subscribe(val => {
            expect(val).toBe(20);
            count++;
        });
        sub.next(10);
        sub.next(20);
        sub.complete();
        sub.subscribe(val => {
            expect(val).toBe(20);
            count++;
            expect(count).toBe(2);
            done();
        });
    });

    it('several subscribers after complete receive the same result', () => {
        const sub = new AsyncSubject();
        let count = 0;
        sub.next(10);
        sub.next(20);
        sub.next(30);
        sub.complete();
        sub.subscribe(val => {
            expect(val).toBe(30);
            count++;
        });
        sub.subscribe(val => {
            expect(val).toBe(30);
            count++;
        });
        sub.subscribe(val => {
            expect(val).toBe(30);
            count++;
            expect(count).toBe(3);
        });
    });

    it('if not complete there will be not resolution in subscribers', (done) => {
        const sub = new AsyncSubject();
        let count = 0;
        sub.subscribe(val => {
            count++;
        });
        sub.next(10);
        setTimeout(() => {
            expect(count).toBe(0);
            done();
        }, 10)
    });

    it('complete without next', (done) => {
        const sub = new AsyncSubject();
        let count = 0;
        sub.subscribe(() => {
            count++;
        });
        sub.complete();
        setTimeout(() => {
            expect(count).toBe(0);
            done();
        }, 10);
    });

    it('after complete no next is subscribed', (done) => {
        const sub = new AsyncSubject();
        let count = 0;
        sub.subscribe(val => {
            if (count === 0) {
                count = 1;
                expect(val).toBe(10);
            } else {
                count++;
            }
        });
        sub.next(10);
        sub.complete();
        sub.next(20);
        sub.complete();
        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 10);
    });
});