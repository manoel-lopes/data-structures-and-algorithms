export class Stack<T> {
    private count = 0
    private stack = {}

    get length() {
      return this.count
    }

    get top(): T {
      if (this.length) {
        return this.stack[this.count - 1]
      }
    }

    push(el: T) {
      this.stack[this.count] = el
      this.count++

      return this.length
    }

    pop(): T {
      if (this.length) {
        this.count--
        const top = this.stack[this.count]
        delete this.stack[this.count]

        return top
      }
    }

    clear() {
      while (this.length) {
        this.pop()
      }
    }
    
    toString() {
      if (!this.length) {
        return ''
      }
      let str = `${this.stack[0]}`
      for (let i = 1; i < this.count; i++) {
        str = `${this.stack[i]}\n${str}`
      }

      return str
    }
}
