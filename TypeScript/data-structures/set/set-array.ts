import binarySearch from '../../algorithms/search/binary-search'

export default class SetArray<T> {

    constructor(
        protected array: T[] = [],
        protected set: T[] = []) {

        this.createSetFromArray(this.array)
    }

    protected createSetFromArray(array: T[]) {
        if (array) {
            const newArray = array.filter((el, i) => array.indexOf(el) === i)
            for (let el of newArray) {
                this.add(el)
            }
        }
    }

    
    get size() {
        return this.set.length
    }


    add(el: T) {
        if (!this.has(el)) {
            this.set.push(el)
        }
        return this
    }


    delete(el: T) {
        if (this.has(el)) {
            this.set.splice(this.set.indexOf(el), 1)
            return true
        }
        return false
    }


    [Symbol.iterator] = () => this.values().values()


    values = () => this.set


    //using Binary Search algorithm
    has(el: T) {
        const searchFn = binarySearch
        const sortedArray = this.set.sort((a: any, b: any) => a - b)
        return searchFn(sortedArray, el) === -1 ? false : true
    }


    isSupersetOf(otherSet: SetArray<T>) {
        if (this.size < otherSet.size) {
            return false
        }
        return [...otherSet].every(el => this.has(el))
    }


    union(otherSet: SetArray<T>) {
        return new SetArray<T>([...this, ...otherSet])
    }


    symmetricDifference(otherSet: SetArray<T>) {
        return new SetArray([...this.union(otherSet)].filter(el => {
            return !this.intersection(otherSet).has(el)
        }))
    }


    intersection(otherSet: SetArray<T>) {
        let biggerSet: SetArray<T> = this
        let smallerSet = otherSet

        if (otherSet.size > this.size) {
            biggerSet = otherSet
            smallerSet = this
        }
        return new SetArray([...smallerSet].filter(el => biggerSet.has(el)))
    }


    difference(otherSet: SetArray<T>) {
        return new SetArray([...this].filter(el => !otherSet.has(el)))
    }


    isEmpty = () => this.size === 0


    forEach(callbackFn: (el: T) => unknown) {
        this.set.forEach(el => callbackFn(el))
    }


    clear = () => this.set = []

    
    toString() {
        if (this.isEmpty()) {
            return `Set(0) {}`
        }

        let str = `${this.set[0]}`

        for (let i = 1; i < this.size; i++) {
            str = `${str}, ${this.set[i]}`
        }
        return `Set(${this.size}) { ${str} }`
    }
}