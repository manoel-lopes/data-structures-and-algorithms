import { Node } from '../../models/Node'

import {
  FindIndexCallback,
  ForeachCallback,
  FilterCallback,
  MapCallback,
  ReduceCallback,
  CompareFn,
} from '../../../util/types'

export abstract class LinkedList<T> {
  protected _length = 0
  protected _head?: Node<T>
  protected _tail?: Node<T>

  get length() {
    return this._length
  }

  get head() {
    return this._head?.el

  }
  get tail() {
    return this._tail?.el
  }

  protected getNode(index: number) {
    if (index >= 0 && index < this.length) {
      let pointer = this._head

      for (let i = 0; i < index && pointer; i++) {
        pointer = pointer.next
      }
      return pointer
    }
  }

  abstract push(el: T): number

  abstract insert(el: T, index?: number): number

  abstract removeAt(index: number): T

  indexOf(el: T) {
    let pointer = this._head
    let i = 0

    while (pointer && i <= this.length) {
      if (pointer.el === el) {
        return i
      }
      pointer = pointer.next
      i++
    }

    return -1
  }

  getElementAt(index: number) {
    const pointer = this.getNode(index)

    if (pointer) {
      return pointer.el
    }
  }

  setElementAt(el: T, index: number) {
    const pointer = this.getNode(index)

    if (pointer) {
      pointer.el = el
    }
  }

  clear() {
    this._length = 0
    this._head = null
    this._tail = null
  }

  abstract toString(): string

  reverse() {
    let current = this._head
    let ancestor: Node<T>
    let next: Node<T>

    while (current) {
      next = current.next
      current.next = ancestor
      ancestor = current
      current = next
    }
    this._head = ancestor
  }

  findIndex(callback: FindIndexCallback<T>) {
    let pointer = this._head
    let i = 0

    while (pointer) {
      if (callback(pointer.el)) {
        return i
      }
      pointer = pointer.next
      i++
    }

    return -1
  }

  forEach(callback: ForeachCallback<T>) {
    for (let i = 0; i < this.length; i++) {
      callback(this.getElementAt(i), i, this)
    }
  }

  abstract concat(list: LinkedList<T>): LinkedList<T>

  abstract filter(callback: FilterCallback<T>): LinkedList<T>

  abstract map(callback: MapCallback<T>): LinkedList<T>

  reduce(callback: ReduceCallback<T>, initialValue?: T) {
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
      if (!acc && i === 0) {
        acc = this.getElementAt(i)
        continue
      }
      acc = callback(acc, this.getElementAt(i), i, this)
    }
    return acc
  }

  // Using the Quick sort algorithm
  protected swap(a: number, b: number) {
    const temp = this.getElementAt(a)
    this.setElementAt(this.getElementAt(b), a)
    this.setElementAt(temp, b)
  }

  protected partition(left: number, right: number, compareFn: CompareFn) {
    const ascendingOrderFnStr = `${(a: number, b: number) => a - b}`

    const descendingOrderFnStr = `${(a: number, b: number) => b - a}`

    const pivot = this.getElementAt(Math.floor((right + left) / 2))
    let i = left
    let j = right
    const compareFnStr = compareFn ? compareFn.toString() : ascendingOrderFnStr

    console.log(`pivot: ${pivot}, left: ${left}, right: ${right}`)
    if (compareFnStr === ascendingOrderFnStr) {
      while (i <= j) {
        while (this.getElementAt(i) < pivot) {
          i++
          // console.log('i = ' + i)
        }

        while (this.getElementAt(j) > pivot) {
          j--
          // console.log('j = ' + j)
        }

        if (i <= j) {
          // console.log(`swap ${this.getElementAt(i)} with ${this.getElementAt(j)}`)
          this.swap(i, j)
          i++
          j--
        }
      }
      return i
    } else if (compareFnStr === descendingOrderFnStr) {
      while (i <= j) {
        while (this.getElementAt(i) > pivot) {
          i++
          // console.log('i = ' + i)
        }

        while (this.getElementAt(j) < pivot) {
          j--
          // console.log('j = ' + j)
        }

        if (i <= j) {
          // console.log(`swap ${this.getElementAt(i)} with ${this.getElementAt(j)}`)
          this.swap(i, j)
          i++
          j--
        }
      }
      return i
    }
  }

  protected quick(left: number, right: number, compareFn: CompareFn) {
    let index: number

    if (this.length > 1) {
      index = this.partition(left, right, compareFn)

      if (left < index - 1) {
        this.quick(left, index - 1, compareFn)
      }

      if (index < right) {
        this.quick(index, right, compareFn)
      }
    }
  }

  sort = (compareFn?: CompareFn) => this.quick(0, this.length - 1, compareFn)
}
