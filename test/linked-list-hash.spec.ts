import { LinkedListHash } from '../src/linked-list-hash';

describe('use chaining to handle collisiona in hashmaps', () => {
    it('put', () => {
        const hash = new LinkedListHash();
        hash.put(2, 'Ali');
        hash.put(58, 'Ghobad');
        // expect(hash.get(2)).toBe('Ali');
        // expect(hash.get(58)).toBe('Ghobad');
    });

    it('get', () => {

    });

    it('remove', () => {

    });

    it('put', () => {

    });
});