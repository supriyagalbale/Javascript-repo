class MaxHeap {
    constructor() {
        this.arr = [];
    }

    heapifyTopToBottom() {
        let curr = 0;
        while (curr < this.arr.length) {
            let max = curr;
            let left = 2 * curr + 1;
            let right = 2 * curr + 2;

            if (left < this.arr.length && this.arr[left] > this.arr[max]) {
                max = left;
            }
            if (right < this.arr.length && this.arr[right] > this.arr[max]) {
                max = right;
            }
            if (max === curr) return;

            [this.arr[curr], this.arr[max]] = [this.arr[max], this.arr[curr]];
            curr = max;
        }
    }

    heapifyBottomToTop() {
        let curr = this.arr.length - 1;
        while (curr > 0) {
            let parent = Math.floor((curr - 1) / 2);
            if (this.arr[curr] > this.arr[parent]) {
                [this.arr[curr], this.arr[parent]] = [this.arr[parent], this.arr[curr]];
                curr = parent;
            } else {
                return;
            }
        }
    }

    add(n) {
        this.arr.push(n);
        this.heapifyBottomToTop();
    }

    remove() {
        if (this.arr.length === 0) return null;

        const max = this.arr[0];
        const lastIndex = this.arr.length - 1;
        [this.arr[0], this.arr[lastIndex]] = [this.arr[lastIndex], this.arr[0]];
        this.arr.pop();
        this.heapifyTopToBottom();

        return max;
    }

    getMax() {
        // Since this is a max-heap, this returns the **maximum** element.
        return this.arr.length > 0 ? this.arr[0] : null;
    }
}

// Demo usage
function main() {
    console.log("Max Heap Example:");
    const myHeap = new MaxHeap();
    myHeap.add(3);
    myHeap.add(10);
    myHeap.add(5);
    myHeap.add(8);

    console.log("Max element:", myHeap.getMax());  // Actually max
    console.log("Removed max:", myHeap.remove());
    console.log("Max element now:", myHeap.getMin());
}
main();
