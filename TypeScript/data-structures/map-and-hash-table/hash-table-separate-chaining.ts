import { defaultToString } from '../../util'
import LinkedList from '../lists/linked-list'
import ValuePair from '../../models/value-pair'

export default class HashTableSeparateChaining<K = number | string, V = unknown> {

    constructor(
        private table: { [key: string]: LinkedList<ValuePair<number | string, V>> } = {},
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
            const position = this.hashCode(key)

            if (this.table[position] == null) {
                this.table[position] = new LinkedList<ValuePair<number | string, V>>()
            }

            this.table[position].push(new ValuePair(`${key}`, value))
            this.count++
            return true
        }
        return false
    }


    delete(key: K) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        let index: number

        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.head

            while (current != null) {
                if (current.key === Number(key) || current.key === `${key}`) {
                    index = linkedList.indexOf(current)
                    linkedList.removeAt(index)

                    if (linkedList.isEmpty()) {
                        delete this.table[position]
                    }
                    this.count--
                    return true
                }

                for (let i = 1; i < this.size; i++) {
                    current = linkedList.getElementAt(i)
                }

            }
        }
        return false
    }


    get(key: K) {
        const position = this.hashCode(key)
        const linkedList = this.table[position]
        let current: ValuePair<string | number, V>

        if (linkedList != null && !linkedList.isEmpty()) {
            current = linkedList.head

            while (current != null) {
                if (current.key === Number(key) || current.key === `${key}`) {
                    return current.value
                }

                for (let i = 1; i < this.size; i++) {
                    current = linkedList.getElementAt(i)
                }

            }
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


    keys() {
        const keysAarray: string[] = []
        Object.values(this.table).forEach(linkedList => {
            let current = linkedList.head

            for (let i = 1; i < this.size && current != null; i++) {
                keysAarray.push(`${current.key}`)
                current = linkedList.getElementAt(i)
            }
        })

        return keysAarray
    }


    values() {
        const valuesAarray: unknown[] = []
        Object.values(this.table).forEach(linkedList => {
            let current = linkedList.head

            for (let i = 1; i < this.size && current != null; i++) {
                valuesAarray.push(current.value)
                current = linkedList.getElementAt(i)
            }
        })

        return valuesAarray
    }


    getTable() {
        const keys = Object.keys(this.table)
        const lists = Object.values(this.table)
        const table = {}

        for (let i = 0; i < this.size; i++) {
            table[keys[i]] = lists[i].getElementAt(0)
        }

        return table
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

        const lists = Object.values(this.table)

        let key = lists[0].getElementAt(0).key
        let value = lists[0].getElementAt(0).value

        let str = `${key} => ${value}`

        for (let i = 1; i < lists.length; i++) {
            key = lists[i].getElementAt(0).key
            value = lists[i].getElementAt(0).value

            str = `${str}, ${key} => ${value}`
        }

        return `Hash Table(${this.size}) { ${str} }`
    }
}