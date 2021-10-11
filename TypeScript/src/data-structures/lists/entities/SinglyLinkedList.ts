import { LinkedList } from '../lib/LinkedList'

import { Node } from '../../models/Node'

import { CallbackFilterFn, CallbackMapFn } from '../../../util/types'
import { concatLists, filterList, mapList } from '../../../util/functions'

class SinglyLinkedList<T> extends LinkedList<T> {
  push(el: T) {
    const node = new Node(el)

    if (!this._head) {
      this._head = node
    } else {
      this._tail.next = node
    }

    this._tail = node

    this._length++
    return this._length
  }

  insert(el: T, index = 0) {
    if (index >= 0 && index <= this._length) {
      const node = new Node(el)

      if (!index) {
      
        if (!this._head) {
          this._head = node
          this._tail = node
      
        } else {
          node.next = this._head
          this._head = node
        }
      
      } else if (index === this._length) {
        this._tail.next = node
        this._tail = node
      
      } else {
        const ancestor = this.getNode(index - 1)
        const current = ancestor.next
        node.next = current
        ancestor.next = node
      }

      this._length++
      return this._length
    }
  }

  removeAt(index: number) {
    if (this._head && index >= 0 && index < this._length) {
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

      this._length--
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

    for (let i = 1; i < this._length && pointer; i++) {
      str = `${str} -> ${pointer.el}`
      pointer = pointer.next
    }
    return `${str} ->`
  }

  concat(linkedList: LinkedList<T>) {
    const newLinkedList = new SinglyLinkedList<T>()
    concatLists(this, linkedList, newLinkedList)

    return newLinkedList
  }

  filter(callbackFn: CallbackFilterFn<T>) {
    const newLinkedList = new SinglyLinkedList<T>()
    filterList(this, newLinkedList, callbackFn)

    return newLinkedList
  }

  map(callbackFn: CallbackMapFn<T>) {
    const newLinkedList = new SinglyLinkedList<T>()
    mapList(this, newLinkedList, callbackFn)

    return newLinkedList
  }
}

export { SinglyLinkedList as LinkedList }