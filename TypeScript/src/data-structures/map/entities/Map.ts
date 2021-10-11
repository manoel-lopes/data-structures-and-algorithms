import { ValuePair } from '../../models/ValuePair'

import { defaultToString } from '../../../util/functions'

export default class Map<K, V> {
  constructor(
    private array: unknown[][] = [],
    private map: { [key: string]: ValuePair<K, V> } = {},
    private toStrFn: (key: K) => string = defaultToString,
    private count = 0
  ) {
    this.createMapFromTwoDimensionalArray(this.array)
  }

  private createMapFromTwoDimensionalArray(array: unknown[][]) {
    if (array) {
      for (let i = 0; i < array.length; i++) {
        this.set(array[i][0] as K, array[i][1] as V)
      }
    }
  }

  get size() {
    return this.count
  }

  set(key: K, value: V) {
    if (key != null && value != null) {
      this.map[this.toStrFn(key)] = new ValuePair(key, value)
      this.count++
    }
    return this
  }

  delete(key: K) {
    if (this.has(key)) {
      delete this.map[this.toStrFn(key)]
      this.count--
      return true
    }
    return false
  }

  get(key: K) {
    const valuePair = this.map[this.toStrFn(key)]
    if (valuePair != null) {
      return valuePair.value
    }
  }

  [Symbol.iterator] = () => Object.values(this.map).values()

  has = (key: K) => !!this.map[this.toStrFn(key)]

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

  keys = () => Object.values(this.map).map(valuePair => valuePair.key)

  values = () => Object.values(this.map).map(valuePair => valuePair.value)

  isEmpty = () => this.size === 0

  forEach(callbackFn: (key: K, value: V) => unknown) {
    const array = [...this]
    array.forEach(valuePair => {
      callbackFn(valuePair.key, valuePair.value)
    })
  }

  clear() {
    this.count = 0
    this.map = {}
  }

  toString() {
    if (this.isEmpty()) {
      return 'Map(0) {}'
    }
    const valuePairs = [...this]

    let str = `${valuePairs[0]}`

    for (let i = 1; i < valuePairs.length; i++) {
      str = `${str}, ${valuePairs[i]}`
    }
    return `Map(${valuePairs.length}) { ${str} }`
  }
}
