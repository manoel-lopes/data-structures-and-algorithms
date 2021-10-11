import { questionInt } from 'readline-sync'

// import { Deque } from './entities/DequeLinkedList'
import { Deque } from './entities/Deque'

let el: unknown
const deque = new Deque()

do {
  const option = questionInt(`
Menu:
1 - Insert element at the front of deque
2 - Insert element at the back of deque
3 - Remove element at the front of deque
4 - Remove element at the back of deque
5 - Get the quantity of elements in the deque
6 - Get the element at the front of the deque
7 - Get the element at the back of the deque
8 - Print deque
9 - Clear deque
Option: `)

  if (option === 1) {
    el = questionInt('\nType the element to be insert: ')
    deque.unshift(el)

    console.log(`\n${deque.toString()}`)
  } else if (option === 2) {

    el = questionInt('\nType the element to be insert: ')
    deque.push(el)

    console.log(`\n${deque.toString()}`)
  } else if (option === 3) {
    deque.shift()

    if (deque.length) {
      console.log(`\n${deque.toString()}`)
    } else {
      console.log('\nThe deque is empty!')
    }
  } else if (option === 4) {
    deque.pop()

    if (deque.length) {
      console.log(`\n${deque.toString()}`)
    } else {
      console.log('\nThe deque is empty!')
    }
  } else if (option === 5) {
    console.log(`\nQuantity of elements in the deque: ${deque.length}`)
  } else if (option === 6) {
    if (!deque.length) {
      console.log('\nThe deque is empty!')
    } else {
      console.log(`\nElement at the front of the deque: ${deque.front}`)
    }
  } else if (option === 7) {
    if (!deque.length) {
      console.log('\nThe deque is empty!')
    } else {
      console.log(`\nElement at the back of the: ${deque.back}`)
    }
  } else if (option === 8) {
    if (!deque.length) {
      console.log('\nThe deque is empty!')
    } else {
      console.log(`\n${deque.toString()}`)
    }
  } else if (option === 9) {
    deque.clear()

    if (!deque.length) {
      console.log('\nThe deque is empty!')
    }
    
  } else {
    console.log('\nInvalid Option!')
  }
} while (1)
