import { ValuePair } from '../../models/ValuePair'

import { defaultToString } from '../../../util'

export class HashTable<K = number | string, V = unknown> {
  constructor(
    private _table: { [key: string]: ValuePair<number | string, V> } = {},
    private toStrFn: (key: K) => string = defaultToString,
    private count = 0
  ) {}

  get size() {
    return this.count
  }

  get table() {
    return this._table
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
      this._table[this.hashCode(key)] = new ValuePair(`${key}`, value)
      this.count++
    }
    return this
  }

  delete(key: K) {
    const hash = this.hashCode(key)
    const valuePair = this._table[hash]

    if (valuePair != null) {
      delete this._table[hash]
      return true
    }
    return false
  }

  get(key: K) {
    const valuePair = this._table[this.hashCode(key)]
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

  keys = () => Object.values(this._table).map((valuePair) => `${valuePair.key}`)

  values = () => Object.values(this._table).map((valuePair) => valuePair.value)

  clear() {
    this.count = 0
    this._table = {}
  }

  toString() {
    if (!this.size) {
      return 'Hash Table(0) {}'
    }

    const keys = Object.keys(this._table)
    let str = `${this._table[keys[0]]}`

    for (let i = 1; i < keys.length; i++) {
      str = `${str}, ${this._table[keys[i]]}`
    }
    return `Hash Table(${keys.length}) { ${str} }`
  }
}
