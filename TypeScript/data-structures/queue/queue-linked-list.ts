import LinkedList from '../lists/linked-list'

export default class QueueLinkedList<T>  {

    constructor(protected queue = new LinkedList<T>()) {
    }

    get length() {
        return this.queue.length
    }

    get front() {
        return this.queue.head
    }

    enqueue = (el: T) => this.queue.push(el)

    dequeue = () => this.queue.removeAt(0)

    clear() {
        while (this.length) {
            this.dequeue()
        }
    }

    toString() {

        if (!this.length) {
            return ''
        }

        let str = `${this.queue.head}`

        for (let i = 1; i < this.length; i++) {
            str = `${str} ${this.queue.getElementAt(i)}`
        }
        return str
    }
}