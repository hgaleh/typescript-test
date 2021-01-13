import { ReplaySubject } from 'rxjs';

describe('relay subject test', () => {
    it('relay subject does not have initial value and sends all values', (done) => {
        const sub = new ReplaySubject();
        let count = 0;
        sub.next(120);
        sub.next(130);
        sub.subscribe(val => {
            if (count === 0) {
                expect(val).toBe(120);
                count = 1;
            } else if (count === 1) {
                expect(val).toBe(130);
                count = 2;
            } else if (count === 2) {
                count = 3;
                expect(val).toBe(140);
            } else if (count === 3) {
                count = 4;
                expect(val).toBe(150);
            } else if (count === 4) {
                count = 5;
                expect(val).toBe(160);
            } else if (count === 5) {
                count = 6;
                expect(val).toBe(170);
            } else if (count === 6) {
                count = 7;
                expect(val).toBe(180);
            } else if (count === 7) {
                count = 8;
                expect(val).toBe(190);
            } else if (count === 8) {
                count = 9;
                expect(val).toBe(200);
            } else {
                count++;
            }
        });
        sub.next(140);
        sub.next(150);
        sub.next(160);
        sub.next(170);
        sub.next(180);
        sub.next(190);
        sub.next(200);
        setTimeout(() => {
            expect(count).toBe(9);
            done();
        }, 10);
    });

    it('it relays all the values before subscription happens', (done) => {
        const sub = new ReplaySubject();
        let count = 0;
        sub.next(120);
        sub.next(130);
        sub.next(140);
        sub.next(150);
        sub.next(160);
        sub.next(170);
        sub.next(180);
        sub.next(190);
        sub.next(200);
        sub.subscribe(val => {
            if (count === 0) {
                expect(val).toBe(120);
                count = 1;
            } else if (count === 1) {
                expect(val).toBe(130);
                count = 2;
            } else if (count === 2) {
                count = 3;
                expect(val).toBe(140);
            } else if (count === 3) {
                count = 4;
                expect(val).toBe(150);
            } else if (count === 4) {
                count = 5;
                expect(val).toBe(160);
            } else if (count === 5) {
                count = 6;
                expect(val).toBe(170);
            } else if (count === 6) {
                count = 7;
                expect(val).toBe(180);
            } else if (count === 7) {
                count = 8;
                expect(val).toBe(190);
            } else if (count === 8) {
                count = 9;
                expect(val).toBe(200);
            } else {
                count++;
            }
        });
        setTimeout(() => {
            expect(count).toBe(9);
            done();
        }, 10);
    });

    it('use buffer size to determine number of saved states, last 3 items are relayed', (done) => {
        const sub = new ReplaySubject(3);
        let count = 0;
        sub.next(120);
        sub.next(130);
        sub.next(140);
        sub.next(150);
        sub.next(160);
        sub.next(170);
        sub.next(180);
        sub.next(190);
        sub.next(200);
        sub.subscribe(val => {
            if (count === 0) {
                expect(val).toBe(180);
                count = 1;
            } else if (count === 1) {
                expect(val).toBe(190);
                count = 2;
            } else if (count === 2) {
                count = 3;
                expect(val).toBe(200);
            } else {
                count++;
            }
        });
        setTimeout(() => {
            expect(count).toBe(3);
            done();
        }, 10);
    });
});