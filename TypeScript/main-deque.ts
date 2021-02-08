import { questionInt } from 'readline-sync'
// import Deque from './data-structures/deque/deque'
// import Deque from './data-structures/deque/deque-array'
import Deque from './data-structures/deque/deque-linked-list'

let option: number, el: unknown
const deque = new Deque()

do {

    option = questionInt(`
Menu de opcoes:
1 - Inserir elemento no inicio da deque
2 - Inserir elemento no final da deque
3 - Remover elemento no inico da deque
4 - Remover elemento no final da deque
5 - Obter quantidade de elementos na deque
6 - Obter primeiro elemento da deque
7 - Obter ultimo elemento da deque
8 - Imprimir deque
9 - Limpar deque
Opcao: `)

    if (option === 1) {

        el = questionInt('\nDigite o elemento a ser inserido: ')
        deque.unshift(el)

        console.log(`\n${deque.toString()}`)

    } else if (option === 2) {

        el = questionInt('\nDigite o elemento a ser inserido: ')
        deque.push(el)

        console.log(`\n${deque.toString()}`)


    } else if (option === 3) {

        deque.shift()

        if (!deque.isEmpty()) {
            console.log(`\n${deque.toString()}`)

        } else {
            console.log('\nFalha em remover o elemento!')
        }

    } else if (option === 4) {

        deque.pop()

        if (!deque.isEmpty()) {
            console.log(`\n${deque.toString()}`)

        } else {
            console.log('\nA deque esta vazia!')

        }

    } else if (option === 5) {

        console.log(`\nQuantidade de elementos na deque: ${deque.length}`)

    } else if (option === 6) {

        if (deque.isEmpty()) {
            console.log('\nA deque esta vazia!')

        } else {
            console.log(`\nPrimeiro elemento na deque: ${deque.front}`)
        }

    } else if (option === 7) {

        if (deque.isEmpty()) {
            console.log('\nA deque esta vazia!')

        } else {
            console.log(`\nUltimo elemento na deque: ${deque.back}`)
        }

    } else if (option === 8) {

        if (deque.isEmpty()) {
            console.log('\nA deque esta vazia!')

        } else {
            console.log('\n' + deque.toString())
        }

    } else if (option === 9) {

        deque.clear()

        if (deque.isEmpty()) {
            console.log('\nA deque esta vazia!')
        }

    } else {
        console.log("\nOpcao Invalida!")
    }

} while (1)
