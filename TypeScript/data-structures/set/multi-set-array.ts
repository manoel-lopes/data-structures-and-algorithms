import SetArray from './set-array'

export default class MultiSetArray<T> extends SetArray<T> {

    constructor(
        protected array: T[] = [],
        protected set: T[] = []) {
        super()
        this.createSetFromArray(this.array)
    }

    protected createSetFromArray(array) {
        for (let el of array) {
            this.add(el)
        }
    }

    add(el: T) {
        this.set.push(el)
        return this
    }

    isSupersetOf(otherSet: MultiSetArray<T>) {
        if (this.size < otherSet.size) {
            return false
        }
        return [...otherSet].every(el => this.has(el))
    }

    union(otherSet: MultiSetArray<T>) {
        return new MultiSetArray([...this, ...otherSet])
    }

    symmetricDifference(otherSet: MultiSetArray<T>) {
        return new MultiSetArray([...this.union(otherSet)].filter(el => {
            return !this.intersection(otherSet).has(el)
        }))
    }

    intersection(otherSet: MultiSetArray<T>) {
        let biggerSet: MultiSetArray<T> = this
        let smallerSet = otherSet

        if (otherSet.size > this.size) {
            biggerSet = otherSet
            smallerSet = this
        }
        return new MultiSetArray([...smallerSet].filter(el => biggerSet.has(el)))
    }

    difference(otherSet: MultiSetArray<T>) {
        return new MultiSetArray([...this].filter(el => !otherSet.has(el)))
    }

    toString() {
        if (this.isEmpty()) {
            return `MultiMultiSet(0) {}`
        }

        let str = `${this.set[0]}`

        for (let i = 1; i < this.size; i++) {
            str = `${str}, ${this.set[i]}`
        }
        return `MultiMultiSet(${this.size}) { ${str} }`
    }
}