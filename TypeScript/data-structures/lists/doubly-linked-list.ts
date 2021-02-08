import LinkedList from './linked-list'
import { DoublyNode } from '../../models/linked-list-models'

export default class DoublyLinkedList<T> extends LinkedList<T> {

  constructor(
    protected _head?: DoublyNode<T>,
    protected _tail?: DoublyNode<T>) {
    super()

  }


  push(el: T) {
    const node = new DoublyNode(el)

    if (this.head == null) {
      this._head = node
      this._tail = node // NEW

    } else {
      // attach to the tail node // NEW
      this._tail.next = node
      node.prev = this._tail
      this._tail = node
    }

    this.count++
    return this.length
  }


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


  insert(el: T, index = 0) {
    if (index >= 0 && index <= this.length) {
      const node = new DoublyNode(el)
      let pointer = this._head

      if (index === 0) {
        if (!this._head) {
          this._head = node
          this._tail = node

        } else {
          node.next = this._head
          this._head.prev = node
          this._head = node
        }

        //ultima posição
      } else if (index === this.length) {
        pointer = this._tail // {2}
        pointer.next = node
        node.prev = pointer
        this._tail = node

      } else {
        //inserção entre dois elementos (meio)
        const ancestor = this.getNode(index - 1)
        pointer = ancestor.next
        node.next = pointer
        ancestor.next = node

        pointer.prev = node // NEW
        node.prev = ancestor // NEW
      }

      this.count++
      return this.length
    }
  }


  removeAt(index: number) {
    if (index >= 0 && index < this.length && this._head) {

      let pointer = this._head

      if (index === 0) {
        this._head = this._head.next

        // if there is only one item, then we update _tail as well //NEW
        if (this.length === 1) { // {2}
          this._tail = null

        } else {
          this._head.prev = null // {3}
        }

        // last item //NEW
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


  pop() {
    if (this.length) {
      const removed = this._tail

      if (this.length === 1) {
        this._head = null
        this._tail = null

      } else {
        // set the node before the current tail as the new tail
        this._tail = this._tail.prev
        // remove the connection from the new tail to the old tail
        this._tail.next = null
        // remove the connection from the old tail to the new tail
        removed.prev = null
      }

      this.count--
      return removed.el
    }
  }

  toString() {
    let pointer = this._head

    if (!pointer) {
      return ''
    }

    let str = `${null} <- ${pointer.el}`
    pointer = pointer.next

    for (let i = 1; i < this.length && pointer; i++) {
      str = `${str} <=> ${pointer.el}`
      pointer = pointer.next
    }
    return `${str} ->`
  }
}
