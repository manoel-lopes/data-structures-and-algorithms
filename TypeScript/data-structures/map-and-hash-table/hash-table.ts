import { defaultToString } from '../../util'
import ValuePair from '../../models/value-pair'

export default class HahTable<K = number | string, V = unknown> {

    constructor(
        private table: { [key: string]: ValuePair<number | string, V> } = {},
        private toStrFn: (key: K) => string = defaultToString,
        private count = 0) {

    }


    get size() {
        return this.count
    }


    hashCode(key: K) {
        if (typeof key === 'number') {
            return `0${key}`

        }

        const tableKey = this.toStrFn(key)
        let hash = 0

        for (let i = 0; i < tableKey.length; i++) {
            hash += tableKey.charCodeAt(i)
        }

        hash = hash % 37
        return `0${hash}`
    }



    put(key: K, value: V) {
        if (key != null && value != null) {
            this.table[this.hashCode(key)] = new ValuePair(`${key}`, value)
            this.count++
        }
        return this
    }


    delete(key: K) {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]

        if (valuePair != null) {
            delete this.table[hash]
            return true
        }
        return false
    }


    get(key: K) {
        const valuePair = this.table[this.hashCode(key)]
        if (valuePair != null) {
            return valuePair.value
        }
    }


    entries() {
        const entriesArray: unknown[] = []
        const keys = this.keys()
        const values = this.values()

        for (let i = 0; i < this.size; i++) {
            if (keys[i] != null && values[i] != null) {
                entriesArray[i] = []
                entriesArray[i][0] = keys[i]
                entriesArray[i][1] = values[i]
            }
        }

        return entriesArray
    }


    keys = () => Object.values(this.table).map(valuePair => `${valuePair.key}`)


    values = () => Object.values(this.table).map(valuePair => valuePair.value)


    getTable() {
        return this.table
    }


    isEmpty = () => this.size === 0


    clear() {
        this.count = 0
        this.table = {}
    }


    toString() {
        if (this.isEmpty()) {
            return 'Hash Table(0) {}'
        }

        const keys = Object.keys(this.table)
        let str = `${this.table[keys[0]]}`

        for (let i = 1; i < keys.length; i++) {
            str = `${str}, ${this.table[keys[i]]}`
        }
        return `Hash Table(${keys.length}) { ${str} }`
    }
}