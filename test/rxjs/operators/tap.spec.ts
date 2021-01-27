import { Subject } from "rxjs";
import { tap } from "rxjs/operators";

describe('tap operator function', () => {
    it('make side effects for emitions', () => {
        const sub = new Subject();
        sub.pipe(tap((val) => {
            expect(val).toBe(12);
        })).subscribe();
        sub.next(12);
        sub.next(12);
        sub.next(12);
    });
});