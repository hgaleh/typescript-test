import { Subject } from "rxjs";
import { mapTo } from "rxjs/operators";

describe('mapTo operator function', () => {
    it('change every emition to a constant value', () => {
        const sub = new Subject();
        sub.pipe(mapTo(12)).subscribe(val => {
            expect(val).toBe(12);
        })
        sub.next(23);
        sub.next(24);
        sub.next('dddd');
        sub.next(74);
    });
});