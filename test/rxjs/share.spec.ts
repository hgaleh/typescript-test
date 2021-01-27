import { of, timer } from 'rxjs';
import { share, shareReplay, tap } from 'rxjs/operators';

describe('share subject test', () => {
    it('shared will multicast timer', (done) => {
        let count = 0;
        const sharedObservable = of(10).pipe(tap(() => {
            count++;
        }), shareReplay(1));

        sharedObservable.subscribe(() => {});
        sharedObservable.subscribe(() => {});
        sharedObservable.subscribe(() => {});
        sharedObservable.subscribe(() => {});

        timer(1).subscribe(() => {
            expect(count).toBe(1);
            done();
        });
    });
});