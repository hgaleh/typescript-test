export class BinarySearchTree {

    private left: Child;
    private right: Child;

    constructor(private value: number) {}

    add(val: number): void {
        if (val > this.value) {
            if (this.right) {
                this.right.add(val);
            } else {
                this.right = new Child(val);
            }
        } else if(val < this.value) {
            if(this.left) {
                this.left.add(val);
            } else {
                this.left = new Child(val);
            }
        }
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
            if (this.right) {
                if (this.right.value === val) {
                    const rightChildren = this.right.childrenArray();
                    if (rightChildren && rightChildren.length > 0) {
                        const midleElement = rightChildren.length / 2;
                        this.right = new BinarySearchTree(rightChildren.splice(midleElement, 1)[0]);
                        rightChildren.forEach(child => {
                            this.right.add(child);
                        });
                    } else {
                        this.right = undefined;
                    }
                } else {
                    this.right.remove(val);
                }
            } else {
                return;
            }
        } else if ( val < this.value) {
            if (this.left) {
                if (this.left.value === val) {
                    const leftChildren = this.left.childrenArray();
                    if (leftChildren && leftChildren.length > 0) {
                        const midleElement = leftChildren.length / 2;
                        this.left = new BinarySearchTree(leftChildren.splice(midleElement, 1)[0]);
                        leftChildren.forEach(child => {
                            this.left.add(child);
                        });
                    } else {
                        this.left = undefined;
                    }
                } else {
                    this.left.remove(val);
                }
            } else {
                return;
            }
        }
    }

    toArray(): number[] {
        const leftHand = this.left ? this.left.toArray() : [];
        const rightHand = this.right ? this.right.toArray() : [];
        return leftHand
            .concat([this.value])
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