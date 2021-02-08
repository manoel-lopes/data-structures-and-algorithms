import LinkedList from '../lists/linked-list'
import QueueLinkedList from './queue-linked-list'

export default class PriorityQueueLinkedList<T> extends QueueLinkedList<T> {

    constructor(protected queue = new LinkedList<T>()) {
        super()
    }

    enqueue = (el: T) => {
        if (this.queue.isEmpty()) {
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