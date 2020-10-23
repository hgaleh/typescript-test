export class BinarySearchTree {

    private left: Child;
    private right: Child;

    constructor(private value: number) {}

    add(val: number): void {
        if (this.value) {
            if (val > this.value) {
                this.right = this.addToWing(this.right, val);
            } else if(val < this.value) {
                this.left = this.addToWing(this.left, val);
            }
        } else {
            this.value = val;
        }
    }

    private addToWing(branch: Child, val: number): Child {
        if (branch) {
            branch.add(val);
        } else {
            branch = new Child(val);
        }
        return branch;
    }

    find(val: number): boolean {
        if (val === this.value) {
            return true;
        } else if (val < this.value) {
            return this.left ? this.left.find(val) : false;
        } else {
            return this.right ? this.right.find(val) : false;
        }
    }

    remove(val: number): void {
        if(val > this.value) {
            this.right = this.removeFromBranch(this.right, val);
        } else if ( val < this.value) {
            this.left = this.removeFromBranch(this.left, val);
        } else {
            const newMe = this.removeFromBranch(this, val);
            if (newMe) {
                this.value = newMe.value;
                this.right = newMe.right;
                this.left = newMe.left;
            } else {
                this.value = undefined;
            }
        }
    }

    private removeFromBranch(branch: Child, val: number): Child {
        if (branch) {
            if (branch.value === val) {
                const children = branch.childrenArray();
                if (children && children.length > 0) {
                    const midleElement = Math.floor(children.length / 2);
                    branch = new Child(children.splice(midleElement, 1)[0]);
                    children.forEach(child => {
                        branch.add(child);
                    });
                } else {
                    branch = undefined;
                }
            } else {
                branch.remove(val);
            }
        }
        return branch;
    }

    toArray(): number[] {
        const leftHand = this.left ? this.left.toArray() : [];
        const rightHand = this.right ? this.right.toArray() : [];
        const thisArray = this.value ? [this.value] : [];
        return leftHand
            .concat(thisArray)
            .concat(rightHand);
    }

    private childrenArray(): number[] {
        const leftHand = this.left ? this.left.toArray() : [];
        const rightHand = this.right ? this.right.toArray() : [];
        return leftHand
            .concat(rightHand);
    }
}

class Child extends BinarySearchTree {
    constructor(value: number) {
        super(value);
    }
}