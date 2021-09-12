import { questionInt } from 'readline-sync'

// import { StackLinkedList as Stack } from '../stack/entities/StackLinkedList'
import { Stack } from './entities/Stack'

let option: number, el: unknown
const stack = new Stack()

do {
  option = questionInt(`
Menu:
1 - Insert element on stack
2 - Remove element on stack
3 - Get the quantity of elements in the stack
4 - Get element at the top of the stack
5 - Print stack
6 - Clear stack
Option: `)

  if (option === 1) {

    el = questionInt('\nType the element to be insert: ')
    stack.push(el)

    console.log(`\n${stack.toString()}`)

  } else if (option === 2) {

    stack.pop()

    if (stack.length) {
      console.log(`\n${stack.toString()}`)
    } else {
      console.log('\nThe stack is empty!')
    }

  } else if (option === 3) {

    console.log(`\nQuantity of elements in the stack: ${stack.length}`)

  } else if (option === 4) {

    if (!stack.length) {
      console.log('\nThe stack is empty!')
    } else {
      console.log(`\nElement at the top of the stack: ${stack.top}`)
    }


  } else if (option === 5) {

    if (!stack.length) {
      console.log('\nThe stack is empty!')
    } else {
      console.log(`\n${stack.toString()}`)
    }

  } else if (option === 6) {

    stack.clear()

    if (!stack.length) {
      console.log('\nThe stack is empty!')
    }

  } else {
    console.log('\nInvalid Option!')
  }

} while (1)
