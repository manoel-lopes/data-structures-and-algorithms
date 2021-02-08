/* FIFO (First In First Out) - O primeiro  elemento a 
entrar na fila é também o primeiro elemtno a sair*/

export default class QueueArray<T> {

    constructor(protected queue: T[] = []) {
    }


    get length() {
        return this.queue.length
    }


    get front() {
        if (!this.isEmpty()) {
            return this.queue[0]
        }
    }


    enqueue = (el: T) => this.queue.push(el)


    dequeue = () => this.queue.shift()


    isEmpty = () => this.queue.length === 0


    clear() {
        while (!this.isEmpty()) {
            this.dequeue()
        }
    }

    
    toString() {
        if (this.isEmpty()) {
            return ' '
        }
        else {
            let str = `${this.queue[0]}`
            for (let i = 1; i <= this.queue.length - 1; i++) {
                str = `${str} ${this.queue[i]}`
            }
            return str
        }
    }
}