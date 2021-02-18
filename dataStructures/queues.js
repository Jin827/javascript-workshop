import { LinkedList } from './linkedList.js';

class SimpleQueue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.unshift(value);
    }

    dequeue() {
        this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return this.items.slice();
    }
}


class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(value) {
        this.list.append(value);
    }

    dequeue() {
        this.list.deleteHead();
    }

    isEmpty() {
        return !this.list.head;
    }

    toArray() {
        return this.list.toArray();
    }
}

const queue = new Queue();

queue.enqueue('Max');
console.log(queue.toArray());

queue.enqueue('Manu');
console.log(queue.toArray());

queue.enqueue('Julia');
console.log(queue.toArray());

queue.dequeue('Max');
console.log(queue.toArray());