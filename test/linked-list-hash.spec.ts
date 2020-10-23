import { LinkedListHash } from '../src/linked-list-hash';

describe('use chaining to handle collisiona in hashmaps', () => {
    it('put in two buckets', () => {
        const hash = new LinkedListHash<number, string>();
        hash.put(2, 'Ali');
        hash.put(58, 'Ghobad');
        expect(hash.get(2)).toBe('Ali');
        expect(hash.get(58)).toBe('Ghobad');
    });

    it('when two elements in one bucket, get', () => {
        const hash = new LinkedListHash<number, string>();
        hash.put(2, 'Nariman');
        hash.put(12, 'Mahziyar');
        const res1 =  hash.get(2);
        const res2 =  hash.get(12);
        expect(res1).toBe('Nariman');
        expect(res2).toBe('Mahziyar');
    });

    it('when put in the same place, value is overridden', () => {
        const hash = new LinkedListHash<number, string>();
        hash.put(2, 'Nariman');
        hash.put(2, 'Mahziyar');
        const res1 =  hash.get(2);
        expect(res1).toBe('Mahziyar');
    });

    it('if didnt put anything, should return undefined', () => {
        const hash = new LinkedListHash<number, string>();
        hash.put(2, 'Nariman');
        hash.put(2, 'Mahziyar');
        const res1 =  hash.get(3);
        expect(res1).toBeUndefined();
    });

    it('if remove an element, get returns undefined', () => {
        const hash = new LinkedListHash<number, string>();
        hash.put(2, 'Nariman');
        hash.put(2, 'Mahziyar');
        hash.remove(2);
        expect(hash.get(2)).toBeUndefined();
    });
});