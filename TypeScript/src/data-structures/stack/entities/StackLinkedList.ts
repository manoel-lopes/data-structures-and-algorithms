import DoublyLinkedList from '../../lists/entities/DoublyLinkedList'

export default class StackLinkedList<T> {
  private stack = new DoublyLinkedList<T>()

  get length() {
    return this.stack.length
  }

  get top() {
    return this.stack.tail
  }

  push = (el: T) => this.stack.push(el)

  pop = () => this.stack.removeAt()

  clear() {
    while (this.length) {
      this.pop()
    }
  }

  toString() {
    if (!this.length) {
      return ''
    }

    let str = `${this.stack.head}`

    for (let i = 1; i < this.length; i++) {
      str = `${this.stack.getElementAt(i)}\n${str}`
    }
    return str
  }
}
