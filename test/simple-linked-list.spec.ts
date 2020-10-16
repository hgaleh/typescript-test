import { SimpleLinkedList } from '../src/simple-linked-list';

describe('test simple linked list', () => {
    it('can create', () => {
        const linkedList = new SimpleLinkedList([1, 2, 3]);
    });

    it('can be  created even with empty array', () => {
        const linkedList = new SimpleLinkedList([]);
    });

    it('can change into array', () => {
        const linkedList = new SimpleLinkedList([1, 2, 3]);
        expect(linkedList.toArray()).toEqual([1, 2, 3]);
    });

    it('can insert at first index', () => {
        const linkedList = new SimpleLinkedList([1, 2, 3]);
        linkedList.addFirst(23);
        expect(linkedList.toArray()).toEqual([23, 1, 2, 3]);
    });

    it('can insert into first even when empty', () => {
        const linkedList = new SimpleLinkedList([]);
        linkedList.addFirst(23);
        expect(linkedList.toArray()).toEqual([23]);
    });

    it('can insert at last index', () => {
        const linkedList = new SimpleLinkedList([1, 2, 3]);
        linkedList.addLast(23);
        expect(linkedList.toArray()).toEqual([1, 2, 3, 23]);
    });

    it('can insert into last even when empty', () => {
        const linkedList = new SimpleLinkedList([]);
        linkedList.addLast(23);
        expect(linkedList.toArray()).toEqual([23]);
    });

    it('delete first node', () => {
        const linkedList = new SimpleLinkedList([1, 2, 4]);
        linkedList.deleteFirst();
        expect(linkedList.toArray()).toEqual([2, 4]);
    });

    it('delete first node when empty', () => {
        const linkedList = new SimpleLinkedList([]);
        linkedList.deleteFirst();
        expect(linkedList.toArray()).toEqual([]);
    });

    it('can delete last element', () => {
        const linkedList = new SimpleLinkedList([1, 2, 4]);
        linkedList.deleteLast();
        expect(linkedList.toArray()).toEqual([1, 2]);
    });

    it('can delete last element event when empty', () => {
        const linkedList = new SimpleLinkedList([]);
        linkedList.deleteLast();
        expect(linkedList.toArray()).toEqual([]);
    });

    it('containt can find element with specific value', () => {
        const linkedList = new SimpleLinkedList([1, 2, 4]);
        const isTrue = linkedList.contains(2);
        const isFalse = linkedList.contains(45);
        expect(isTrue).toBeTrue();
        expect(isFalse).toBeFalse();
    });

    it('containt can find element with specific value in empty array', () => {
        const linkedList = new SimpleLinkedList([]);
        const isFalse1 = linkedList.contains(2);
        const isFalse2 = linkedList.contains(45);
        expect(isFalse1).toBeFalse();
        expect(isFalse2).toBeFalse();
    });

    it('returns index of element', () => {
        const linkedList = new SimpleLinkedList([1, 2, 4]);
        const indexOf2 = linkedList.indexOf(2);
        const indexOf1 = linkedList.indexOf(1);
        expect(indexOf2).toBe(1);
        expect(indexOf1).toBe(0);
    });

    it('returns -1 when not found', () => {
        const linkedList = new SimpleLinkedList([1, 2, 4]);
        const indexOf20 = linkedList.indexOf(20);
        expect(indexOf20).toBe(-1);
    });

    it('returns -1 when empty', () => {
        const linkedList = new SimpleLinkedList([]);
        const indexOf20 = linkedList.indexOf(20);
        expect(indexOf20).toBe(-1);
    });

    it('reverse', () => {
        const linkedList = new SimpleLinkedList([12, 13, 23]);
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([23, 13, 12]);
    });

    it('reverse empty list', () => {
        const linkedList = new SimpleLinkedList([]);
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([]);
    });

    it('reverse one element list', () => {
        const linkedList = new SimpleLinkedList([2]);
        linkedList.reverse();
        expect(linkedList.toArray()).toEqual([2]);
    });
});