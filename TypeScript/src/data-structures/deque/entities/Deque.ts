export class Deque<T> {
  private count = 0
  private lowestCount = 0
  private deque = {}

  get length() {
    return this.count - this.lowestCount
  }

  get front() {
    if (this.length) {
      return this.deque[this.lowestCount]
    }
  }

  get back() {
    if (this.length) {
      return this.deque[this.count - 1]
    }
  }

  unshift(el: T) {
    if (!this.length) {
      this.push(el)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.deque[this.lowestCount] = el
    } else {
      for (let i = this.count; i > 0; i--) {
        this.deque[i] = this.deque[i - 1]
      }

      this.count++
      this.deque[0] = el
    }

    return this.length
  }

  push(el: T) {
    this.deque[this.count] = el
    this.count++

    return this.length
  }

  shift(): T {
    if (this.length) {
      const first = this.deque[this.lowestCount]
      delete this.deque[this.lowestCount]
      this.lowestCount++

      return first
    }
  }

  pop(): T {
    if (this.length) {
      this.count--
      const top = this.deque[this.count]
      delete this.deque[this.count]

      return top
    }
  }

  clear() {
    this.deque = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (!this.length) {
      return ''
    }

    let str = `${this.deque[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      str = `${str} ${this.deque[i]}`
    }
    return str
  }
}
