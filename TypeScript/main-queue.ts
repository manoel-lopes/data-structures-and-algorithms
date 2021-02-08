import { questionInt } from 'readline-sync'
// import Queue from './data-structures/queue/queue'
// import Queue from './data-structures/queue/queue-array'
// import Queue from './data-structures/queue/queue-linked-list'
// import Queue from './data-structures/queue/priority-queue-array'
import Queue from './data-structures/queue/priority-queue-linked-list'

let option: number, el: number
const queue = new Queue()

do {

    option = questionInt(`
Menu de opcoes:
1 - Inserir elemento na fila
2 - Remover elemento da fila
3 - Obter quantidade de elementos na fila
4 - Obter primeiro elemento da fila
5 - Imprimir fila
6 - Limpar fila
Opcao: `)

    if (option === 1) {

        el = questionInt('\nDigite o elemento a ser inserido: ')
        queue.enqueue(el)

        console.log(`\n${queue.toString()}`)

    } else if (option === 2) {

        queue.dequeue()

        if (!queue.isEmpty()) {
            console.log(`\n${queue.toString()}`)

        } else {
            console.log('\nA fila esta vazia!')
        }

    } else if (option === 3) {

        console.log(`\nQuantidade de elementos na lista: ${queue.length}`)

    } else if (option === 4) {

        if (queue.isEmpty()) {
            console.log('\nA lista esta vazia!')

        } else {
            console.log(`\nPrimeiro elemento na fila: ${queue.front}`)
        }

    } else if (option == 5) {

        if (queue.isEmpty()) {
            console.log('\nA fila esta vazia!')

        } else {
            console.log(`\n${queue.toString()}`)
        }

    } else if (option == 6) {

        queue.clear()

        if (queue.isEmpty()) {
            console.log('\nA fila esta vazia!')
        }

    } else {
        console.log("\nOpcao Invalida!")
    }

} while (1)
