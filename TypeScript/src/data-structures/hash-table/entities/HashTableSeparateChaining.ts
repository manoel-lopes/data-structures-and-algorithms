import { defaultToString } from '../../../util'
import ValuePair from '../../models/ValuePair'
import DoublyLinkedList from '../../lists/entities/DoublyLinkedList'

export default class HashTableSeparateChaining<
  K = number | string,
  V = unknown
> {
  constructor(
    private _table: {
      [key: string]: DoublyLinkedList<ValuePair<number | string, V>>
    } = {},
    private toStrFn: (key: K) => string = defaultToString,
    private count = 0
  ) {}

  get size() {
    return this.count
  }

  get table() {
    const keys = Object.keys(this._table)
    const lists = Object.values(this._table)
    const _table = {}

    for (let i = 0; i < this.size; i++) {
      _table[keys[i]] = lists[i].getElementAt(0)
    }

    return _table
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

      if (this._table[position] == null) {
        this._table[position] = new DoublyLinkedList<
          ValuePair<number | string, V>
        >()
      }

      this._table[position].push(new ValuePair(`${key}`, value))
      this.count++
      return true
    }
    return false
  }

  delete(key: K) {
    const position = this.hashCode(key)
    const linkedList = this._table[position]
    let index: number

    if (linkedList != null && linkedList.length) {
      let current = linkedList.head

      while (current != null) {
        if (current.key === Number(key) || current.key === `${key}`) {
          index = linkedList.indexOf(current)
          linkedList.removeAt(index)

          if (!linkedList.length) {
            delete this._table[position]
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
    const linkedList = this._table[position]
    let current: ValuePair<string | number, V>

    if (linkedList != null && linkedList.length) {
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
    const keysArray: string[] = []
    Object.values(this._table).forEach(linkedList => {
      let current = linkedList.head

      for (let i = 1; i < this.size && current != null; i++) {
        keysArray.push(`${current.key}`)
        current = linkedList.getElementAt(i)
      }
    })

    return keysArray
  }

  values() {
    const valuesArray: unknown[] = []
    Object.values(this._table).forEach(linkedList => {
      let current = linkedList.head

      for (let i = 1; i < this.size && current != null; i++) {
        valuesArray.push(current.value)
        current = linkedList.getElementAt(i)
      }
    })

    return valuesArray
  }

  isEmpty = () => this.size === 0

  clear() {
    this.count = 0
    this._table = {}
  }

  toString() {
    if (this.isEmpty()) {
      return 'Hash Table(0) {}'
    }

    const lists = Object.values(this._table)

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
