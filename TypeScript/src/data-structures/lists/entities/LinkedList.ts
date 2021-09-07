import { List } from '../lib/List'
import { Node } from '../../models/Node'

import { CallbackMapFilterFn } from '../../../util'

export class LinkedList<T> extends List<T> {
  push(el: T) {
    const node = new Node(el)

    if (!this._head) {
      this._head = node
    } else {
      this._tail.next = node
    }

    this._tail = node

    this.count++
    return this.length
  }

  insert(el: T, index = 0) {
    if (index >= 0 && index <= this.length) {
      const node = new Node(el)

      if (!index) {
      
        if (!this._head) {
          this._head = node
          this._tail = node
      
        } else {
          node.next = this._head
          this._head = node
        }
      
      } else if (index === this.length) {
        this._tail.next = node
        this._tail = node
      
      } else {
        const ancestor = this.getNode(index - 1)
        const current = ancestor.next
        node.next = current
        ancestor.next = node
      }

      this.count++
      return this.length
    }
  }

  removeAt(index: number) {
    if (this._head && index >= 0 && index < this.length) {
      let pointer = this._head

      if (!index) {
        this._head = this._head.next

        if (!this._head) {
          this._tail = null
        }
      
      } else {
        const ancestor = this.getNode(index - 1)
        pointer = ancestor.next
        ancestor.next = pointer.next
        this._tail = ancestor
      }

      this.count--
      return pointer.el
    }
  }

  toString() {
    let pointer = this._head

    if (!pointer) {
      return ''
    }

    let str = `${pointer.el}`
    pointer = pointer.next

    for (let i = 1; i < this.length && pointer; i++) {
      str = `${str} -> ${pointer.el}`
      pointer = pointer.next
    }
    return `${str} ->`
  }

  concat(list: List<T>) {
    const newList = new LinkedList<T>()

    this.forEach((el: T) => newList.push(el))
    list.forEach((el: T) => newList.push(el))

    return newList
  }

  filter(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new LinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this.getElementAt(i), i, this)) {
        newList.push(this.getElementAt(i))
      }
    }
    return newList
  }

  map(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new LinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      newList.push(callbackFn(this.getElementAt(i), i, this) as T)
    }
    return newList
  }
}
