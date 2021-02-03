import { LinkedList } from './linkedList.js';
// 'import' syntax is supported by Modern JavaScript but It doesn't run through the file protocol.
// to quickly run some code on a server -> use a simple web server 'http-server'

class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    toArray() {
        return this.items.slice();
    }
}

const stack = new Stack();
stack.push('Cook dinner');
stack.push('Wash the dishes');
stack.push('Buy ingredients');

console.log('stack', stack.pop());

console.log('stack', stack.toArray());

console.log('stack', stack.pop());
console.log('stack', stack.pop());

console.log('stack', stack.toArray());



class LinkedStack {
    constructor() {
        this.list = new LinkedList();
    }

    push(value) { this.list.prepend(value); }

    pop() { return this.list.deleteHead(); }

    isEmpty() { return !this.list.head; }

    toArray() { return this.list.toArray(); }
}

const linkedStack = new LinkedStack();
linkedStack.push('Cook dinner');
linkedStack.push('Wash the dishes');
linkedStack.push('Buy ingredients');

console.log('linkedStack', linkedStack.pop());

console.log('linkedStack', linkedStack.toArray());

console.log('linkedStack', linkedStack.pop());
console.log('linkedStack', linkedStack.pop());

console.log('linkedStack', linkedStack.toArray());