import Set from './set'

export default class MultiSet<T> extends Set<T>{

    constructor(
        protected array: T[] = [],
        protected set = {}) {
        super()

        this.createSetFromArray(this.array)
    }

    protected createSetFromArray(array: T[]) {
        for (let el of array) {
            this.add(el)
        }
    }

    add(el: T) {
        this.set[this.count] = el
        this.count++
        return this
    }

    isSupersetOf(otherSet: MultiSet<T>) {
        if (this.size < otherSet.size) {
            return false
        }
        return [...otherSet].every(el => this.has(el))
    }

    union = (otherSet: MultiSet<T>) => new MultiSet([...this, ...otherSet])

    symmetricDifference(otherSet: MultiSet<T>) {
        return new MultiSet([...this.union(otherSet)].filter(el => {
            return !this.intersection(otherSet).has(el)
        }))
    }

    intersection(otherSet: MultiSet<T>) {
        let biggerSet: MultiSet<T> = this
        let smallerSet = otherSet

        if (otherSet.size > this.size) {
            biggerSet = otherSet
            smallerSet = this
        }
        return new MultiSet([...smallerSet].filter(el => biggerSet.has(el)))
    }

    difference(otherSet: MultiSet<T>) {
        return new MultiSet([...this].filter(el => !otherSet.has(el)))
    }

    toString() {
        if (this.isEmpty()) {
            return `MultiSet(0) {}`
        }

        const values = [...this]
        let str = `${values[0]}`

        for (let i = 1; i < values.length; i++) {
            str = `${str}, ${values[i].toString()}`
        }
        return `MultiSet(${values.length}) { ${str} }`
    }
}