import DoublyLinkedList from '../lists/doubly-linked-list'

export default class StackLinkedList<T>  {
    constructor(private stack = new DoublyLinkedList<T>()) {
    }

    
    get length() {
        return this.stack.length
    }


    get top() {
        return this.stack.tail
    }


    push = (el: T) => this.stack.push(el)


    pop = () => this.stack.pop()


    isEmpty = () => this.stack.isEmpty()


    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }


    toString() {

        if (this.isEmpty()) {
            return ''
        }

        let str = `${this.stack.head}`

        for (let i = 1; i < this.length; i++) {
            str = `${this.stack.getElementAt(i)}\n${str}`
        }
        return str
    }
}