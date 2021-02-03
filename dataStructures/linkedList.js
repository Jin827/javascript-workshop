export class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    append(value) {
        // next -> point to the next node
        const newNode = { value, next: null };

        if (this.tail) {
            // update 'next' property of the old tail  
            this.tail.next = newNode;
        }

        // does not replace the old tail
        // just set a new value for the tail property in the LinkedList object
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    prepend(value) {
        const newNode = { value, next: this.head };

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);

        if (existingNode) {
            // put new node between the existing node and its next node
            const newNode = { value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    find(value) {
        // if list is empty, return null
        if (!this.head) {
            return null;
        }

        let curNode = this.head;

        while (curNode) {
            if (curNode.value === value) {
                // if the value matches, return it
                return curNode;
            }
            // if the value does't match, move on to the next node
            curNode = curNode.next;
        }

        // if we find nothing, return null
        return null;
    }

    delete(value) {
        if (!this.head) {
            return;
        }

        // when deleting the head
        // use 'while' becuase the next node can have the same value again
        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        // when deleting other node
        let curNode = this.head;

        while (curNode.next) {
            if (curNode.next.value === value) {
                // delete next node
                // by setting next property with 'the node after the next node'
                curNode.next = curNode.next.next;

            } else {
                // simply move on to the next node
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedItem = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedItem;
    }

    toArray() {
        const elements = [];

        let curNode = this.head;

        while (curNode) {
            elements.push(curNode);
            curNode = curNode.next;
        }

        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('max');
linkedList1.append('max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend('first value');
linkedList1.prepend('first value');

console.log('linkedList', linkedList1.toArray());

linkedList1.delete('max');
linkedList1.delete('first value');
linkedList1.delete(18.51);

console.log('linkedList', linkedList1.toArray());

console.log('linkedList', linkedList1.find(2));
console.log('linkedList', linkedList1.find(true));

linkedList1.insertAfter('new value - 1', 1);
console.log('linkedList', linkedList1.toArray());