/* FIFO (First In First Out) - O primeiro  elemento a 
entrar na fila é também o primeiro elemtno a sair*/

export default class Queue<T> {

    constructor(
        private count = 0,
        private lowestCount = 0,
        private queue = {}) {
    }


    get length() {
        return this.count - this.lowestCount
    }


    get front(): T {
        if (!this.isEmpty()) {
            return this.queue[this.lowestCount]
        }
    }

    
    enqueue(el: T) {
        this.queue[this.count] = el
        this.count++

        return this.length
    }

    dequeue(): T {
        if (!this.isEmpty()) {

            const first = this.queue[this.lowestCount]
            delete this.queue[this.lowestCount]
            this.lowestCount++

            return first
        }
    }

    isEmpty = () => this.length === 0

    clear() {
        while (!this.isEmpty()) {
            this.dequeue()
        }
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        else {
            let str = `${this.queue[this.lowestCount]}`
            for (let i = this.lowestCount + 1; i < this.count; i++) {
                str = `${str} ${this.queue[i]}`
            }
            return str
        }
    }
}