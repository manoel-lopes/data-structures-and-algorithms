/* LIFO (Last In First Out) - O ultimo elemento entrar 
na pilha é o primeiro elemento a sair da pilha */

export default class StackArray<T> {

    constructor(private stack: T[] = []) {
    }


    get length() {
        return this.stack.length
    }


    get top() {
        if (!this.isEmpty()) {
            return this.stack[this.stack.length - 1]
        }
    }


    push = (el: T) => this.stack.push(el)


    pop = () => this.stack.pop()


    isEmpty = () => this.stack.length === 0


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
            let str = `${this.stack[0]}`
            for (let i = 1; i < this.stack.length; i++) {
                str = `${this.stack[i]}\n${str}`
            }
            return str
        }
    }
}
