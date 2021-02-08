import { questionInt } from 'readline-sync'
// import Stack from '../data-structures/stack/stack'
// import Stack from '../data-structures/stack/stack-array'
import Stack from '../data-structures/stack/stack-linked-list'

let option: number, el: unknown
const stack = new Stack()

do {

    option = questionInt(`
Menu de opcoes:
1 - Inserir elemento na pilha
2 - Remover elemento da pilha
3 - Obter quantidade de elementos na pilha
4 - Obter elemento no topo da pilha
5 - Imprimir pilha
6 - Limpar pilha
Opcao: `)

    if (option === 1) {

        el = questionInt('\nDigite o elemento a ser inserido: ')
        stack.push(el)

        console.log(`\n${stack.toString()}`)


    } else if (option === 2) {

        stack.pop()

        if (!stack.isEmpty()) {
            console.log(`\n${stack.toString()}`)

        } else {
            console.log('\nA pilha esta vazia!')
        }


    } else if (option === 3) {

        console.log(`\nQuantidade de elementos na pilha: ${stack.length}`)

    } else if (option === 4) {

        if (stack.isEmpty()) {
            console.log('\nA pilha esta vazia!')

        } else {
            console.log(`\nElemento no topo da pilha: ${stack.top}`)
        }

    } else if (option == 5) {

        if (stack.isEmpty()) {
            console.log('\nA pilha esta vazia!')

        } else {
            console.log(`\n${stack.toString()}`)
        }

    } else if (option == 6) {

        stack.clear()

        if (stack.isEmpty()) {
            console.log('\nA pilha esta vazia!')
        }

    } else {
        console.log("\nOpcao Invalida!")
    }

} while (1)
