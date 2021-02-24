import { questionInt } from 'readline-sync'
// import Queue from './data-structures/queue/queue'
// import Queue from './data-structures/queue/queue-linked-list'
import Queue from './data-structures/queue/priority-queue-linked-list'

let option: number, el: number
const queue = new Queue()

do {
    option = questionInt(`
Menu:
1 - Insert element in the queue
2 - Remove element in the queue
3 - Get the quantity of elements in the queue
4 - Get the element at the front of the queue
5 - Print queue
6 - Clear queue
Option: `)

    if (option === 1) {

        el = questionInt('\nType the element to be insert: ')
        queue.enqueue(el)

        console.log(`\n${queue.toString()}`)

    } else if (option === 2) {

        queue.dequeue()

        if (queue.length) {
            console.log(`\n${queue.toString()}`)

        } else {
            console.log('\nThe queue is empty!')
        }

    } else if (option === 3) {

        console.log(`\nQuantity of elements in the queue: ${queue.length}`)

    } else if (option === 4) {

        if (!queue.length) {
            console.log('\nThe queue is empty!')

        } else {
            console.log(`\nElement at the front of the queue: ${queue.front}`)
        }

    } else if (option == 5) {

        if (!queue.length) {
            console.log('\nThe queue is empty!')

        } else {
            console.log(`\n${queue.toString()}`)
        }

    } else if (option == 6) {

        queue.clear()

        if (!queue.length) {
            console.log('\nThe queue is empty!')
        }

    } else {
        console.log('\nInvalid Option!')
    }

} while (1)
