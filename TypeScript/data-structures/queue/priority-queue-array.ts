import QueueArray from './queue-array'

export default class PriorityQueueArray<T> extends QueueArray<T> {

    constructor(protected queue: T[] = []) {
        super()
    }

    enqueue = (el: T) => {
        let added = false

        for (let i = 0; i < this.queue.length; i++) {
            if (el < this.queue[i]) {
                this.queue.splice(i, 0, el)
                added = true
                break
            }
        }

        if (!added) {
            this.queue.push(el)
        }
        return this.length
    }
}