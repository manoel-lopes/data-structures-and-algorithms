import { Node } from '../../models/linked-list-models'
import {
    CallbackFn,
    CallbackReduceFn,
    CompareFn,
    ascendingOrderFnStr,
    descendingOrderFnStr
} from '../../util'

export default class LinkedList<T>{

    constructor(
        protected count = 0,
        protected _head?: Node<T>,
        protected _tail?: Node<T>) {
    }


    get length() {
        return this.count
    }


    get head() {
        if (this._head) {
            return this._head.el
        }
    }


    get tail() {
        if (this._tail) {
            return this._tail.el
        }
    }


    push(el: T) {
        const node = new Node(el)

        if (!this._head) {
            this._head = node

        } else {
            this._tail.next = node
        }

        this._tail = node
        this.count++

        return this.length
    }


    protected getNode(index: number) {
        if (index >= 0 && index < this.length) {
            let pointer = this._head

            for (let i = 0; i < index && pointer; i++) {
                pointer = pointer.next
            }
            return pointer
        }
    }


    insert(el: T, index = 0) {
        if (index >= 0 && index <= this.length) {
            const node = new Node(el)

            if (index === 0) {
                if (!this._head) {
                    this._head = node
                    this._tail = node

                } else {
                    node.next = this._head
                    this._head = node
                }

            } else if (index === this.length) {
                this._tail.next = node
                this._tail = node

            } else {
                const ancestor = this.getNode(index - 1)
                const pointer = ancestor.next
                node.next = pointer
                ancestor.next = node

            }
            this.count++
            return this.length
        }
    }


    removeAt(index: number) {
        if (this.length || index >= 0 && index < this.length) {

            let pointer = this._head

            if (index === 0) {
                this._head = this._head.next

                if (!this._head) {
                    this._tail = null
                }

            } else {
                const ancestor = this.getNode(index - 1)
                pointer = ancestor.next
                ancestor.next = pointer.next
                this._tail = ancestor
            }

            this.count--
            return pointer.el
        }
    }


    pop() {
        if (this.length) {
            const secondToLast = this.getNode(this.length - 2)
            const removed = this._tail

            if (this._tail === this._head) {
                this._head = null
                this._tail = null

            } else {
                secondToLast.next = this._tail.next
                this._tail = secondToLast
            }

            this.count--
            return removed.el
        }
    }


    indexOf(el: T) {
        let pointer = this._head, i = 0

        while (pointer) {
            if (pointer.el === el) {
                return i
            }
            pointer = pointer.next
            i++
        }
        return -1
    }


    getElementAt(index: number) {
        let pointer = this.getNode(index)

        if (pointer) {
            return pointer.el
        }
    }


    setElementAt(el: T, index: number) {
        let pointer = this.getNode(index)

        if (pointer) {
            pointer.el = el
        }
    }


    reverse() {
        let ancestor: Node<T>
        let current = this._head
        let next: Node<T>

        while (current) {
            next = current.next
            current.next = ancestor
            ancestor = current
            current = next
        }
        this._head = ancestor
    }


    concat(list: LinkedList<T>) {
        const newList = new LinkedList()
        this.forEach(el => newList.push(el))
        list.forEach(el => newList.push(el))

        return newList
    }


    forEach(callbackFn: CallbackFn) {
        for (let i = 0; i < this.length; i++) {
            callbackFn(this.getElementAt(i), i, this)
        }
    }


    filter(callbackFn: CallbackFn) {
        const newList = new LinkedList()
        for (let i = 0; i < this.length; i++) {
            if (callbackFn(this.getElementAt(i), i, this)) {
                newList.push(this.getElementAt(i))
            }
        }
        return newList
    }


    map(callbackFn: CallbackFn) {
        const newList = new LinkedList()
        for (let i = 0; i < this.length; i++) {
            newList.push(callbackFn(this.getElementAt(i), i, this))
        }
        return newList
    }


    reduce(callbackFn: CallbackReduceFn, initialValue?: unknown) {
        let acc: unknown = initialValue
        for (let i = 0; i < this.length; i++) {
            if (!acc && i === 0) {
                acc = this.getElementAt(i)
                continue
            }
            acc = callbackFn(acc, this.getElementAt(i), i, this)
        }
        return acc
    }


    //Using the Quick sort algorithm
    private swap(a: number, b: number) {
        const temp = this.getElementAt(a)
        this.setElementAt(this.getElementAt(b), a)
        this.setElementAt(temp, b)
    }


    private partition(left: number, right: number, compareFn: CompareFn) {
        const pivot = this.getElementAt(Math.floor((right + left) / 2))
        let i = left
        let j = right
        const compareFnStr = compareFn.toString()

        // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right)
        if (compareFnStr === ascendingOrderFnStr) {
            while (i <= j) {
                while (this.getElementAt(i) < pivot) {
                    i++
                    // console.log('i = ' + i)
                }

                while (this.getElementAt(j) > pivot) {
                    j--
                    // console.log('j = ' + j)
                }

                if (i <= j) {
                    // console.log('swap ' + this.getElementAt(i) + ' with ' + this.getElementAt(j))
                    this.swap(i, j)
                    i++
                    j--
                }
            }
            return i

        } else if (compareFnStr === descendingOrderFnStr) {
            while (i <= j) {
                while (this.getElementAt(i) > pivot) {
                    i++
                    // console.log('i = ' + i)
                }

                while (this.getElementAt(j) < pivot) {
                    j--
                    // console.log('j = ' + j)
                }

                if (i <= j) {
                    // console.log('swap ' + this.getElementAt(i) + ' with ' + this.getElementAt(j))
                    this.swap(i, j)
                    i++
                    j--
                }
            }
            return i
        }
    }


    private quick(left: number, right: number, compareFn: CompareFn) {
        let index: number

        if (this.length > 1) {
            index = this.partition(left, right, compareFn)

            if (left < index - 1) {
                this.quick(left, index - 1, compareFn)
            }

            if (index < right) {
                this.quick(index, right, compareFn)
            }
        }
    }


    sort = (compareFn: CompareFn) => this.quick(0, this.length - 1, compareFn)


    clear() {
        this.count = 0
        this._head = null
        this._tail = null
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
        return `${str} ->`
    }
}