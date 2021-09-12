import { binarySearch } from './../../../algorithms/searching/binarySearch'

import { DoublyLinkedList } from '../../lists/entities/DoublyLinkedList'

export default class SetLinkedList<T> {
  private set = new DoublyLinkedList<T>()

  constructor(private array: T[] = []) {
    this.createSetFromArray(this.array)
  }

  private createSetFromArray(array: T[]) {
    if (array) {
      const newArray = array.filter((el, i) => array.indexOf(el) === i)
      for (const el of newArray) {
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
      this.set.removeAt(this.set.indexOf(el))
      return true
    }
    return false
  }

  values() {
    const setArray: T[] = []
    for (let i = 0; i < this.size; i++) {
      setArray.push(this.set.getElementAt(i))
    }
    return setArray
  }

  // using Binary Search algorithm
  has(el: T) {
    const searchFn = binarySearch
    const sortedArray = [...this].sort()
    return searchFn(sortedArray, el) !== -1
  }

  [Symbol.iterator] = () => this.values().values()

  isSupersetOf(otherSet: SetLinkedList<T>) {
    if (this.size < otherSet.size) {
      return false
    }
    return [...otherSet].every((el) => this.has(el))
  }

  union(otherSet: SetLinkedList<T>) {
    return new SetLinkedList([...this, ...otherSet])
  }

  symmetricDifference(otherSet: SetLinkedList<T>) {
    return new SetLinkedList(
      [...this.union(otherSet)].filter((el) => {
        return !this.intersection(otherSet).has(el)
      })
    )
  }

  intersection(otherSet: SetLinkedList<T>) {
    let biggerSet: SetLinkedList<T> = this
    let smallerSet = otherSet

    if (otherSet.size > this.size) {
      biggerSet = otherSet
      smallerSet = this
    }
    return new SetLinkedList([...smallerSet].filter((el) => biggerSet.has(el)))
  }

  difference(otherSet: SetLinkedList<T>) {
    return new SetLinkedList([...this].filter((el) => !otherSet.has(el)))
  }

  clear = () => this.set.clear()

  forEach(callbackFn: (el: T) => unknown) {
    ;[...this].forEach((el) => callbackFn(el))
  }

  toString() {
    if (!this.size) {
      return 'Set(0) {}'
    }

    let str = `${this.set.getElementAt(0)}`

    for (let i = 1; i < this.size; i++) {
      str = `${str}, ${this.set.getElementAt(i)}`
    }
    return `Set(${this.size}) { ${str} }`
  }
}
