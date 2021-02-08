export default class Deque<T> {

    constructor(
        private count = 0,
        private lowestCount = 0,
        private deque = {}) {
    }


    get length() {
        return this.count - this.lowestCount
    }


    get front() {
        if (!this.isEmpty()) {
            return this.deque[this.lowestCount]
        }
    }


    get back() {
        if (!this.isEmpty()) {
            return this.deque[this.count - 1]
        }
    }


    push(el: T) {
        this.deque[this.count] = el
        this.count++

        return this.length
    }


    pop(): T {
        if (!this.isEmpty()) {

            this.count--
            const top = this.deque[this.count]
            delete this.deque[this.count]

            return top
        }
    }


    unshift(el: T) {
        if (this.isEmpty()) {
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


    shift(): T {
        if (!this.isEmpty()) {

            const first = this.deque[this.lowestCount]
            delete this.deque[this.lowestCount]
            this.lowestCount++

            return first
        }
    }


    isEmpty = () => this.length === 0


    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    
    toString() {
        if (this.isEmpty()) {
            return ''
        }

        else {
            let str = `${this.deque[this.lowestCount]}`
            for (let i = this.lowestCount + 1; i < this.count; i++) {
                str = `${str} ${this.deque[i]}`
            }
            return str
        }
    }
}
