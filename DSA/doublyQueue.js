class dqueue {
    constructor() {
        this.head = new Node()
        this.tail = new Node()
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    empty() {
        if (this.head.next === this.tail) {
            return true
        }
        else return false
    }

    enqueueFront(n) {
        let node = new Node(n)
        node.next = this.head.next
        this.head.next.prev = node
        this.head.next = node
        node.prev = this.head
    }

    enqueueBack(n) {
        let node = new Node(n)
        node.prev = this.tail.prev
        this.tail.prev.next = node
        node.next = this.tail
        this.tail.prev = node
    }

    dequeueFront() {
        if (this.empty()) {
            return null
        }
        let node = this.head.next
        node.next.prev = this.head
        this.head.next = node.next
        return node.val
    }

    dequeueBack() {
        if (this.empty()) {
            return null
        }
        let node = this.tail.prev
        node.prev.next = this.tail
        this.tail.prev = node.prev
        return node.val
    }

    front() {
        if (this.empty()) {
            return null
        }

        return this.head.next.val
    }

    back() {
        if (this.empty()) {
            return null
        }
        return this.tail.prev.val
    }

    print() {
        let temp = this.head
        while (temp.next !== this.tail) {
            // console.log(temp.next.val)
            temp = temp.next
        }
    }
}