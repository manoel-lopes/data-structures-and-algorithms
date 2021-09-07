export default class Queue<T> {
  private count = 0
  private lowestCount = 0
  private queue = {}

  get length() {
    return this.count - this.lowestCount
  }

  get front(): T {
    if (this.length) {
      return this.queue[this.lowestCount]
    }
  }

  enqueue(el: T) {
    this.queue[this.count] = el
    this.count++

    return this.length
  }

  dequeue(): T {
    if (this.length) {
      const first = this.queue[this.lowestCount]
      delete this.queue[this.lowestCount]
      this.lowestCount++

      return first
    }
  }

  clear() {
    while (this.length) {
      this.dequeue()
    }
  }

  toString() {
    if (!this.length) {
      return ''
    } else {
      let str = `${this.queue[this.lowestCount]}`
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        str = `${str} ${this.queue[i]}`
      }
      return str
    }
  }
}
