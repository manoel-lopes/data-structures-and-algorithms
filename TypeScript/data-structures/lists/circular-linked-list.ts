import LinkedList from './linked-list'
import { Node } from '../../models/linked-list-models'

export default class CircularLinkedList<T> extends LinkedList<T> {

    constructor(protected array: T[] = []) {
        super()

    }


    push(el: T) {
        const node = new Node(el)

        if (!this._head) {
            this._head = node
        }

        else {
            this._tail.next = node
        }

        this._tail = node
        this._tail.next = this._head
        this.count++

        return this.length
    }


    insert(el: T, index = 0) {
        if (index >= 0 && index <= this.length) {
            const node = new Node(el)
            let pointer = this._head

            if (index === 0) {
                if (!this._head) { // lista vazia
                    this._head = node
                    this._tail = node
                    this._tail.next = this._head

                } else {
                    node.next = this._head
                    const pointer = this.getNode(this.length - 1)

                    //atualiza o ultimo elemento
                    this._head = node
                    pointer.next = this._head
                    this._tail.next = pointer.next
                }

                //ultima posição
            } else if (index === this.length) {
                pointer = this._tail
                pointer.next = node
                this._tail = node
                this._tail.next = this._head

            } else {
                //inserção entre dois elementos (meio)
                const ancestor = this.getNode(index - 1)
                pointer = ancestor.next
                node.next = pointer
                ancestor.next = node

            }

            this.count++
            return this.length
        }
    }


    removeAt(index: number) {
        if (index >= 0 && index < this.length && this._head) {

            let pointer = this._head

            if (index === 0) {

                if (this.length === 1) {
                    this._head = null
                    this._tail = null

                } else {
                    const removed = this._head
                    pointer = this.getNode(this.length - 1)
                    this._head = this._head.next
                    pointer.next = this._head
                    this._tail.next = this._head
                    pointer = removed

                }

            } else if (index === this.length - 1) {
                const secondoToLast = this.getNode(this.length - 2)
                pointer = secondoToLast.next
                this._tail = secondoToLast
                this._tail.next = this._head

            } else {
                const ancestor = this.getNode(index - 1)
                pointer = ancestor.next
                ancestor.next = pointer.next
            }

            this.count--
            return pointer.el
        }
    }

    toString() {
        let pointer = this._head

        if (!pointer) {
            return ''
        }

        let str = `${pointer.el}`
        pointer = pointer.next

        for (let i = 1; i < this.length && pointer; i++) {
            str = `${str} -> ${pointer.el}`
            pointer = pointer.next
        }
        return `${str} -> ${this._tail.next.el}`
    }
}