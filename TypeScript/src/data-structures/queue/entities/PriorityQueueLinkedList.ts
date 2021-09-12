import { QueueLinkedList } from './QueueLinkedList'
import { DoublyLinkedList } from '../../lists/entities/DoublyLinkedList'

export class PriorityQueueLinkedList<T> extends QueueLinkedList<T> {
  protected queue = new DoublyLinkedList<T>()

  constructor() {
    super()
  }

  enqueue = (el: T) => {
    if (!this.queue.length) {
      return this.queue.insert(el)
    } else {
      let pointer: T, i: number

      for (i = 0; i < this.queue.length; i++) {
        pointer = this.queue.getElementAt(i)

        if (el < pointer) {
          return this.queue.insert(el, i)
        }
      }

      return this.queue.insert(el, this.queue.length)
    }
  }
}
