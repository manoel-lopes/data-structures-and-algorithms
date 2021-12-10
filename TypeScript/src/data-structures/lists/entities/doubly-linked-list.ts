import { LinkedList } from '../lib/linked-list'

import { DoublyNode } from '../../models/DoublyNode'

import { FilterCallback, MapCallback } from '../../../util/types'
import { concatLists, filterList, mapList } from '../../../util/functions'

export class DoublyLinkedList<T> extends LinkedList<T> {
  protected _head?: DoublyNode<T> = null
  protected _tail?: DoublyNode<T> = null

  protected getNode(index: number) {
    if (index >= 0 && index < this.length) {
      let pointer: DoublyNode<T>

      if (index > this._length / 2) {
        pointer = this._tail
        for (let i = this._length; i > 0 && pointer; i--) {
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
      //* attach to the tail node
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }

    this._length++
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

        //* last position
      } else if (index === this.length) {
        current = this._tail
        current.next = node
        node.prev = current
        this._tail = node
      } else {
        //* insertion between two elements
        const ancestor = this.getNode(index - 1)
        current = ancestor.next
        node.next = current
        ancestor.next = node

        current.prev = node
        node.prev = ancestor
      }

      this._length++
    }
    return this.length
  }

  removeAt(index: number) {
    if (this._head && index >= 0 && index < this.length) {
      let pointer = this._head

      if (!index) {
        this._head = this._head.next

        //* if there is only one item, then we update _tail as well
        if (this.length === 1) {
          this._tail = null
        } else {
          this._head.prev = null
        }

        //* last item
      } else if (index === this.length - 1) {
        pointer = this._tail
        this._tail = pointer.prev
        this._tail.next = null
      } else {
        pointer = this.getNode(index)
        const ancestor = pointer.prev
        //* link ancestor with pointer's next - skip it to remove
        ancestor.next = pointer.next //* {6}
        pointer.next.prev = ancestor //* NEW
      }

      this._length--
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

  concat(list: LinkedList<T>) {
    const newList = new DoublyLinkedList<T>()
    concatLists(this, list, newList)

    return newList
  }

  filter(callbackFn: FilterCallback<T>) {
    const newList = new DoublyLinkedList<T>()
    filterList(this, newList, callbackFn)

    return newList
  }

  map(callbackFn: MapCallback<T>) {
    const newList = new DoublyLinkedList<T>()
    mapList(this, newList, callbackFn)

    return newList
  }
}

