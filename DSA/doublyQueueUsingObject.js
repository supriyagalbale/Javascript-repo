// All ops in O(1)

class Deque {
    constructor() {
        this.store = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    enqueueFront(value) {
        this.frontIndex--;
        this.store[this.frontIndex] = value;
    }

    enqueueBack(value) {
        this.store[this.backIndex] = value;
        this.backIndex++;
    }

    dequeueFront() {
        if (this.isEmpty()) return null;
        const value = this.store[this.frontIndex];
        delete this.store[this.frontIndex];
        this.frontIndex++;
        return value;
    }

    dequeueBack() {
        if (this.isEmpty()) return null;
        this.backIndex--;
        const value = this.store[this.backIndex];
        delete this.store[this.backIndex];
        return value;
    }

    front() {
        return this.isEmpty() ? null : this.store[this.frontIndex];
    }

    back() {
        return this.isEmpty() ? null : this.store[this.backIndex - 1];
    }

    isEmpty() {
        return this.frontIndex === this.backIndex;
    }

    size() {
        return this.backIndex - this.frontIndex;
    }

    print() {
        const result = [];
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            result.push(this.store[i]);
        }
        console.log(result);
    }
}
