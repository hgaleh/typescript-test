import { BehaviorSubject } from 'rxjs';

// saves the last state and subscriber receives the last state
// has an initial value

describe('behavior subject test', () => {
    it('behavior subject has initial value', (done) => {
        const sub = new BehaviorSubject(10);
        let count = 0; 
        sub.subscribe(val => {
            expect(val).toBe(10);
            count++;
        });
        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 10);
    });

    it('behavior subject has initial value and completes', (done) => {
        const sub = new BehaviorSubject(10);
        let count = 0; 
        sub.subscribe(val => {
            expect(val).toBe(10);
            count++;
        });

        sub.complete();

        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 10);
    });

    it('if next two times, last value sent to observer', (done) => {
        const sub = new BehaviorSubject(10);
        sub.next(20);
        let count = 0;
        sub.subscribe(val => {
            if (count > 0) {
                count++;
            }

            if (count === 0) {
                expect(val).toBe(20);
                count = 1;
            }
        });

        sub.complete();

        setTimeout(() => {
            expect(count).toBe(1);
            done();
        }, 10);
    });
});