import binarySearch from '../../algorithms/search/binary-search'

export default class Set<T> {

    constructor(
        private array: T[] = [],
        private set = {},
        private count = 0) {

        this.createSetFromArray(this.array)
    }

    private createSetFromArray(array: T[]) {
        if (array) {
            const newArray = array.filter((el, i) => array.indexOf(el) === i)
            for (let el of newArray) {
                this.add(el)
            }
        }
    }

    get size() {
        return this.count
    }

    add(el: T) {
        if (!this.has(el)) {
            this.set[this.count] = el
            this.count++
        }
        return this
    }

    delete(el: T) {
        if (this.has(el)) {
            const keys = Object.keys(this.set)
            const key = keys.find(key => this.set[key] === el)
            delete this.set[key]
            this.count--
            return true
        }
        return false
    }

    [Symbol.iterator] = () => this.values().values()

    values = (): T[] => Object.values(this.set)

    //using Binary Search algorithm
    has(el: T) {
        const searchFn = binarySearch
        const sortedArray = [...this].sort((a: any, b: any) => a - b)
        return searchFn(sortedArray, el) === -1 ? false : true
    }

    isSupersetOf(otherSet: Set<T>) {
        return this.size < otherSet.size
            ? false
            : [...otherSet].every(el => this.has(el))
    }

    union = (otherSet: Set<T>) => new Set([...this, ...otherSet])

    symmetricDifference(otherSet: Set<T>) {
        return new Set([...this.union(otherSet)].filter(el => {
            return !this.intersection(otherSet).has(el)
        }))
    }

    intersection(otherSet: Set<T>) {
        let biggerSet: Set<T> = this
        let smallerSet = otherSet

        if (otherSet.size > this.size) {
            biggerSet = otherSet
            smallerSet = this
        }
        return new Set([...smallerSet].filter(el => biggerSet.has(el)))
    }

    difference(otherSet: Set<T>) {
        return new Set([...this].filter(el => !otherSet.has(el)))
    }

    isEmpty = () => this.size === 0

    forEach(callbackFn: (el: T) => unknown) {
        [...this].forEach(el => callbackFn(el))
    }

    clear() {
        this.set = {}
        this.count = 0
    }

    toString() {
        if (this.isEmpty()) {
            return `Set(0) {}`
        }

        const values = [...this]
        let str = `${values[0]}`

        for (let i = 1; i < values.length; i++) {
            str = `${str}, ${values[i].toString()}`
        }
        return `Set(${values.length}) { ${str} }`
    }
}