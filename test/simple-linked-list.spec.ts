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

    it('contains can find element with specific value in empty array', () => {
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

    it('last kth', () => {
        const linledList = new SimpleLinkedList([10, 20, 30, 40, 50]);
        const res = linledList.lastKth(1);
        expect(res).toBe(50);
        expect(linledList.lastKth(5)).toBe(10);
    });

    it('print middle odd list length', () => {
        const linkedList = new SimpleLinkedList([11, 12, 13, 14, 15]);
        const res = linkedList.getMiddle();
        expect(res).toBe(13);
    });

    it('print middle even list length', () => {
        const linkedList = new SimpleLinkedList([11, 12, 13, 14, 15, 16]);
        const res = linkedList.getMiddle();
        expect(res).toEqual([13, 14]);
    });

    it('print middle single length', () => {
        const linkedList = new SimpleLinkedList([11]);
        const res = linkedList.getMiddle();
        expect(res).toEqual(11);
    });

    it('print middle 2 length', () => {
        const linkedList = new SimpleLinkedList([11, 12]);
        const res = linkedList.getMiddle();
        expect(res).toEqual([11, 12]);
    });

    it('print middle empty length', () => {
        const linkedList = new SimpleLinkedList([]);
        expect(linkedList.getMiddle).toThrow();
    });

    it('find when only one element presents', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi']);
        const res = linkedList.find(x => x.value.length === 5);
        expect(res.value).toBe('taghi')
    });

    it('delete last when only one element exists', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi']);
        linkedList.deleteLast();
        expect(linkedList.isEmpty()).toBeTrue();
    });

    it('when only one element exists and removeFirt, isEmpty is true', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi']);
        linkedList.deleteFirst();
        expect(linkedList.isEmpty()).toBeTrue();
    });

    it('removeIf when removes one element', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi']);
        linkedList.removeIf(x => x === 'taghi');
        expect(linkedList.isEmpty()).toBeTrue();
    });

    it('removeIf when removes last element', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'ahmad']);
        linkedList.removeIf(x => x === 'ahmad');
        expect(linkedList.isEmpty()).toBeFalse();
        expect(linkedList.toArray()).toEqual(['taghi']);
    });

    it('removeIf when removes first element', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'ahmad']);
        linkedList.removeIf(x => x === 'taghi');
        expect(linkedList.isEmpty()).toBeFalse();
        expect(linkedList.toArray()).toEqual(['ahmad']);
    });

    it('removeIf when removes middle element', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'mehdi', 'ahmad']);
        linkedList.removeIf(x => x === 'mehdi');
        expect(linkedList.isEmpty()).toBeFalse();
        expect(linkedList.toArray()).toEqual(['taghi', 'ahmad']);
    });

    it('removeIF middle then first', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'mehdi', 'ahmad']);
        linkedList.removeIf(x => x === 'mehdi');
        linkedList.removeIf(x => x === 'taghi');
        expect(linkedList.isEmpty()).toBeFalse();
        expect(linkedList.toArray()).toEqual(['ahmad']);
    });

    it('removeIF middle then first', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'mehdi', 'ahmad']);
        linkedList.removeIf(x => x === 'mehdi');
        linkedList.removeIf(x => x === 'ahmad');
        expect(linkedList.isEmpty()).toBeFalse();
        expect(linkedList.toArray()).toEqual(['taghi']);
    });

    it('removeIF all', () => {
        const linkedList = new SimpleLinkedList<string>(['taghi', 'mehdi', 'ahmad']);
        linkedList.removeIf(x => x === 'mehdi');
        linkedList.removeIf(x => x === 'ahmad');
        linkedList.removeIf(x => x === 'taghi');
        expect(linkedList.isEmpty()).toBeTrue();
        expect(linkedList.toArray()).toEqual([]);
    });
});