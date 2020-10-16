export class SimpleNode<T> {
    next: SimpleNode<T>;
    value: T;

    constructor(val?: T) {
        this.value = val;
    }
}