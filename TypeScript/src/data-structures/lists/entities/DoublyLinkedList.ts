import { List } from '../lib/List'
import { DoublyNode } from '../../models/DoublyNode'

import { CallbackMapFilterFn } from '../../../util'

class DoublyLinkedList<T> extends List<T> {
  protected _head?: DoublyNode<T>
  protected _tail?: DoublyNode<T>

  protected getNode(index: number) {
    if (index >= 0 && index < this.length) {
      let pointer: DoublyNode<T>

      if (index > this.count / 2) {
        pointer = this._tail
        for (let i = this.count; i > 0 && pointer; i--) {
          pointer = pointer.prev
        }
      }

      pointer = this._head
      for (let i = 0; i < index && pointer; i++) {
        pointer = pointer.next
      }
      return pointer
    }
  }

  push(el: T) {
    const node = new DoublyNode(el)

    if (this.head == null) {
      this._head = node
      this._tail = node
    } else {
      // attach to the tail node
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }

    this.count++
    return this.length
  }

  insert(el: T, index = 0) {
    if (index >= 0 && index <= this.length) {
      const node = new DoublyNode(el)
      let current = this._head

      if (!index) {
        if (!this._head) {
          this._head = node
          this._tail = node
        } else {
          node.next = this._head
          this._head.prev = node
          this._head = node
        }

        // last position
      } else if (index === this.length) {
        current = this._tail // {2}
        current.next = node
        node.prev = current
        this._tail = node
      } else {
        // insertion between two elements
        const ancestor = this.getNode(index - 1)
        current = ancestor.next
        node.next = current
        ancestor.next = node

        current.prev = node // NEW
        node.prev = ancestor // NEW
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

        // if there is only one item, then we update _tail as well
        if (this.length === 1) {
          // {2}
          this._tail = null
        } else {
          this._head.prev = null // {3}
        }

        // last item
      } else if (index === this.length - 1) {
        pointer = this._tail // {4}
        this._tail = pointer.prev
        this._tail.next = null
      } else {
        pointer = this.getNode(index)
        const ancestor = pointer.prev
        // link ancestor with pointer's next - skip it to remove
        ancestor.next = pointer.next // {6}
        pointer.next.prev = ancestor // NEW
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

    let str = `<- ${pointer.el}`
    pointer = pointer.next

    for (let i = 1; i < this.length && pointer; i++) {
      str = `${str} <=> ${pointer.el}`
      pointer = pointer.next
    }
    return `${str} ->`
  }

  concat(list: List<T>) {
    const newList = new DoublyLinkedList<T>()

    this.forEach((el: T) => newList.push(el))
    list.forEach((el: T) => newList.push(el))

    return newList
  }

  filter(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new DoublyLinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this.getElementAt(i), i, this)) {
        newList.push(this.getElementAt(i))
      }
    }
    return newList
  }

  map(callbackFn: CallbackMapFilterFn<T>) {
    const newList = new DoublyLinkedList<T>()
    for (let i = 0; i < this.length; i++) {
      newList.push(callbackFn(this.getElementAt(i), i, this) as T)
    }
    return newList
  }
}

export { DoublyLinkedList as LinkedList }
