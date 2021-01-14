import { Subject } from "rxjs";
import { pluck } from 'rxjs/operators'

describe('pluck test', () => {
    it('pluck picks a part of object', () => {
        const subj = new Subject<{name: string, lastName: string}>();
        subj.pipe(pluck('name')).subscribe(val => {
            expect(val).toBe('ali');
        });
        subj.next({name: 'ali', lastName: 'mohammade'});
    });
});