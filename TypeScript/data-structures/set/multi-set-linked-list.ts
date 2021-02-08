import LinkedList from '../lists/linked-list'
import SetLinkedList from './set-linked-list'

export default class MultiSetLinkedList<T> extends SetLinkedList<T>  {

    constructor(
        protected array: T[] = [],
        protected set = new LinkedList<T>()) {
        super()

        this.createSetFromArray(this.array)
    }

    protected createSetFromArray(array: T[]) {
        if (array) {
            for (let el of array) {
                this.add(el)
            }
        }
    }

    add(el: T) {
        this.set.push(el)
        return this
    }

    isSupersetOf(otherSet: MultiSetLinkedList<T>) {
        if (this.size < otherSet.size) {
            return false
        }
        return [...otherSet].every(el => this.has(el))
    }

    union(otherSet: MultiSetLinkedList<T>) {
        return new MultiSetLinkedList([...this, ...otherSet])
    }

    symmetricDifference(otherSet: MultiSetLinkedList<T>) {
        return new MultiSetLinkedList([...this.union(otherSet)].filter(el => {
            return !this.intersection(otherSet).has(el)
        }))
    }

    intersection(otherSet: MultiSetLinkedList<T>) {
        let biggerSet: MultiSetLinkedList<T> = this
        let smallerSet = otherSet

        if (otherSet.size > this.size) {
            biggerSet = otherSet
            smallerSet = this
        }
        return new MultiSetLinkedList([...smallerSet].filter(el => {
            return biggerSet.has(el)
        }))
    }

    difference(otherSet: MultiSetLinkedList<T>) {
        return new MultiSetLinkedList([...this].filter(el => !otherSet.has(el)))
    }

    toString() {
        if (this.isEmpty()) {
            return `MultiSet(0) {}`
        }

        let str = `${this.set.getElementAt(0)}`

        for (let i = 1; i < this.size; i++) {
            str = `${str}, ${this.set.getElementAt(i)}`
        }
        return `MultiSet(${this.size}) { ${str} }`
    }
}