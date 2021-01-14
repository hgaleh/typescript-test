import { of, Subject } from "rxjs";
import { take } from "rxjs/operators";

describe('take operator function', () => {
    it('it takes first n emitions and finishes', () => {
        const sub = of(1, 2, 3, 4, 5, 6, 7, 8);
        let count = 0;
        sub.pipe(take(5)).subscribe(val => {
            count++;
        }, err => {}, () => {
            expect(count).toBe(5);
        });
    });
});