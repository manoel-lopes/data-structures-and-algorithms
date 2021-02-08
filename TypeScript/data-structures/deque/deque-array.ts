export default class DequeArray<T> {

    constructor(private deque: T[] = []) {
    }


    get length() {
        return this.deque.length
    }


    get front(): T {
        return this.deque[0]
    }


    get back(): T {
        return this.deque[this.deque.length - 1]
    }
    

    push = (el: T) => this.deque.push(el)


    pop = () => this.deque.pop()


    unshift = (el: T) => this.deque.unshift(el)


    shift = () => this.deque.shift()


    isEmpty = () => this.deque.length === 0


    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    
    toString() {
        if (this.isEmpty()) {
            return ' '
        }
        else {
            let str = `${this.deque[0]}`
            for (let i = 1; i <= this.deque.length - 1; i++) {
                str = `${str} ${this.deque[i]}`
            }
            return str
        }
    }
}