import { noRepeatCharacter } from "../src/no-repeat-character";

describe('no repeated character', () => {
    it('when one characted is repeated', () => {
        const str = 'aloolas';
        const c = noRepeatCharacter(str);
        expect(c).toBe('s');
    });

    it('when two charactes are repeated, return first', () => {
        const str = 'aloolassdb';
        const c = noRepeatCharacter(str);
        expect(c).toBe('d');
    });

    it('when no character is repeated, return null', () => {
        const str = 'aloolassa';
        const c = noRepeatCharacter(str);
        expect(c).toBeNull();
    });

    it('when string empty return null', () => {
        const str = '';
        const c = noRepeatCharacter(str);
        expect(c).toBeNull();
    });

    it('when string null return null', () => {
        const c = noRepeatCharacter(null);
        expect(c).toBeNull();
    });

    it('when string undefined return null', () => {
        const c = noRepeatCharacter(undefined);
        expect(c).toBeNull();
    });
});