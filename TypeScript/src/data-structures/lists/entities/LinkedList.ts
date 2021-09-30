import { List } from '../lib/List'

import { Node } from '../../models/Node'

import { CallbackFilterFn, CallbackMapFn } from './../../../util/types'
import { concatLists, filterList, mapList } from './../../../util/functions'

export class LinkedList<T> extends List<T> {
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

  concat(list: List<T>) {
    const newList = new LinkedList<T>()
    concatLists(this, list, newList)

    return newList
  }

  filter(callbackFn: CallbackFilterFn<T>) {
    const newList = new LinkedList<T>()
    filterList(this, newList, callbackFn)

    return newList
  }

  map(callbackFn: CallbackMapFn<T>) {
    const newList = new LinkedList<T>()
    mapList(this, newList, callbackFn)

    return newList
  }
}
