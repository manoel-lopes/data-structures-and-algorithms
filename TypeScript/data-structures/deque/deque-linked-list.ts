import DoublyLinkedList from '../lists/doubly-linked-list'

export default class DequeLinkedList<T>  {

    constructor(private deque = new DoublyLinkedList<T>()) {
    }

    get length() {
        return this.deque.length
    }

    get front() {
        return this.deque.head
    }

    get back() {
        return this.deque.tail
    }

    push = (el: T) => this.deque.push(el)

    pop = () => this.deque.pop()

    unshift = (el: T) => this.deque.insert(el)

    shift = () => this.deque.removeAt(0)

    clear() {
        while (this.length) {
            this.shift()
        }
    }

    toString() {

        if (!this.length) {
            return ''
        }

        let str = `${this.deque.head}`

        for (let i = 1; i < this.length; i++) {
            str = `${str} ${this.deque.getElementAt(i)}`
        }
        return str
    }
}