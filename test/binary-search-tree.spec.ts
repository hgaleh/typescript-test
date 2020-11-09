import { BinarySearchTree } from "../src/binary-search-tree";
const { performance } = require('perf_hooks');

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

    it('remove something that does not exist', () => {
        const tree = new BinarySearchTree(2);
        tree.remove(8);

        expect(tree.toArray()).toEqual([2]);
    });

    it('remove all tree and then add new elements', () => {
        const tree = new BinarySearchTree(2);
        tree.remove(8);
        tree.remove(5);
        tree.remove(9);

        tree.remove(9);
        tree.remove(8);
        tree.remove(5);
        tree.remove(2);

        tree.add(1);

        expect(tree.toArray()).toEqual([1]);
    });

    it('not equal trees', () => {
        const tree = new BinarySearchTree(2);
        tree.add(1);
        tree.add(5);

        const tree2 = new BinarySearchTree(2);
        tree2.add(6);
        tree2.add(5);

        const eq = tree.equals(tree2);

        expect(eq).toBeFalse();
    });

    it('equal trees', () => {
        const tree = new BinarySearchTree(2);
        tree.add(1);
        tree.add(5);

        const tree2 = new BinarySearchTree(2);
        tree2.add(1);
        tree2.add(5);

        const eq = tree.equals(tree2);

        expect(eq).toBeTrue();
    });

    it('is valid tree', () => {
        const tree = new BinarySearchTree(2);
        tree.add(1);
        tree.add(5);
        expect(tree.isValid()).toBeTrue();
    });

    it('is valid tree', () => {
        const tree = new BinarySearchTree(2);
        tree.add(65);
        tree.add(20);
        tree.add(1);
        tree.add(57);
        tree.add(5);
        tree.add(52);
        tree.add(12);
        tree.add(47);
        tree.add(13);
        tree.add(8);
        tree.add(7);
        tree.add(15);
        tree.add(10);
        tree.add(14);
        tree.add(24);
        tree.add(25);

        const nodes = tree.nodesWithDistance(4);

        expect(nodes).toEqual([12, 52]);
    });

    it('async methods', async () => {
        let i = 1;
        function returnsPromise(a: number) {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(a + 1);
                }, 10);
            });
        }
        const t0 = performance.now();
        await returnsPromise(i);
        const t1 = performance.now();
        expect(t1 - t0).toBeCloseTo(10, -0.5);
    });
});