import { BinarySearchTree } from "../src/binary-search-tree";

describe('binary tree', () => {
    it('put values in binary tree', () => {
        const tree = new BinarySearchTree(2);
        tree.add(4);
        tree.add(5);
        tree.add(6);
        tree.add(8);
        tree.add(2);
        tree.add(5);
        const arr = tree.toArray();
        expect(arr).toEqual([
            2, 4, 5, 6, 8
        ]);
    });

    it('put values in binary tree', () => {
        const tree = new BinarySearchTree(2);
        tree.add(4);
        tree.add(5);
        tree.add(6);
        tree.add(8);
        tree.add(2);
        tree.add(5);

        const res = tree.find(8);
        expect(res).toBeTrue();
    });

    it('remove from tree', () => {
        const tree = new BinarySearchTree(2);
        tree.add(4);
        tree.add(5);
        tree.add(6);
        tree.add(8);
        tree.add(2);
        tree.add(5);

        tree.remove(5);

        expect(tree.toArray()).toEqual([
            2, 4, 6, 8
        ]);
    });

    it('remove from tree, root', () => {
        const tree = new BinarySearchTree(2);
        tree.add(4);
        tree.add(5);
        tree.add(6);
        tree.add(8);
        tree.add(2);
        tree.add(5);

        tree.remove(2);

        expect(tree.toArray()).toEqual([
            4, 5, 6, 8
        ]);
    });

    it('remove from tree, all children', () => {
        const tree = new BinarySearchTree(2);
        tree.add(4);
        tree.add(5);
        tree.add(6);
        tree.add(8);
        tree.add(2);
        tree.add(5);

        tree.remove(2);
        tree.remove(4);
        tree.remove(5);
        tree.remove(6);
        tree.remove(8);

        expect(tree.toArray()).toEqual([]);
    });
});