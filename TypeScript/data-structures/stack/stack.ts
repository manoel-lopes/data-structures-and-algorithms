/* LIFO (Last In First Out) - O ultimo elemento entrar na pilha é o primeiro
elemento a sair da pilha */

export default class Stack<T> {

    constructor(
        private count = 0,
        private stack = {}) {
    }


    get length() {
        return this.count
    }


    get top(): T {
        if (!this.isEmpty()) {
            return this.stack[this.count - 1]
        }
    }


    push(el: T) {
        this.stack[this.count] = el
        this.count++

        return this.length
    }


    pop(): T {
        if (!this.isEmpty()) {
            this.count--
            const top = this.stack[this.count]
            delete this.stack[this.count]

            return top
        }
    }


    isEmpty = () => this.count === 0


    clear() {
        while (!this.isEmpty()) {
            this.pop()
        }
    }

    
    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let str = `${this.stack[0]}`
        for (let i = 1; i < this.count; i++) {
            str = `${this.stack[i]}\n${str}`
        }

        return str
    }
}