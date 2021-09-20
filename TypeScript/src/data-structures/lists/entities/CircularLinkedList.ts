import { List } from '../lib/List'
import { Node } from '../../models/Node'

import { CallbackMapFilterFn } from '../../../util'

class CircularLinkedList<T> extends List<T> {
  push(el: T) {
    const node = new Node(el)

    if (!this._head) {
      this._head = node
    } else {
      this._tail.next = node
    }

    this._tail = node
    this._tail.next = this._head

    this.count++
    return this.length
  }

  insert(el: T, index = 0) {
    if (index >= 0 && index <= this.length) {
      const node = new Node(el)
      let current = this._head

      if (!index) {
        if (!this._head) {
          this._head = node
          this._tail = node
          this._tail.next = this._head
        } else {
          node.next = this._head

          // update last element
          this._head = node
          this._tail.next = this._head
        }
      } else if (index === this.length) {
        current = this._tail
        current.next = node
        this._tail = node
        this._tail.next = this._head
      } else {
        // insertion between two elements
        const ancestor = this.getNode(index - 1)
        current = ancestor.next
        node.next = current
        ancestor.next = node
      }

      this.count++
      return this.length
    }
  }

  removeAt(index: number) {
    if (this._head && index >= 0 && index < this.length) {
      let current = this._head

      if (!index) {
        if (this.length === 1) {
          this._head = null
          this._tail = null
        } else {
          current = this._head
          this._head = this._head.next
          this._tail.next = this._head
        }
      } else if (index === this.length - 1) {
        // removing last element
        const secondToLast = this.getNode(this.length - 2)
        this._tail = secondToLast
        this._tail.next = this._head
        current = secondToLast.next
      } else {
        // removing a element between others two
        const ancestor = this.getNode(index - 1)
        current = ancestor.next
        ancestor.next = current.next
      }

      this.count--
      return current.el
    }
  }

  concat(list: List<T>) {
    const newList = new CircularLinkedList<T>()

    this.forEach((el: T) => newList.push(el))
    list.forEach((el: T) => newList.push(el))

    return newList
  }

  filter(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new CircularLinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this.getElementAt(i), i, this)) {
        newList.push(this.getElementAt(i))
      }
    }
    return newList
  }

  map(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new CircularLinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      newList.push(callbackFn(this.getElementAt(i), i, this) as T)
    }
    return newList
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
    return `${str} -> ${this._tail.next.el}`
  }
}

export { CircularLinkedList as LinkedList }
