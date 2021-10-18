import { questionInt } from 'readline-sync'

import { createLinkedListExecutionMap } from './functions/createLinkedListExecutionMap'

import { LinkedList } from './entities/SinglyLinkedList'
// import { LinkedList } from './entities/DoublyLinkedList'
// import { LinkedList } from './entities/CircularLinkedList'

import { createRage, isInRange } from '../../util/functions'

const linkedList = new LinkedList()

const main = () => {
  do {
    const option = questionInt(`
Menu:
1  - Insert element at front
2  - Insert element at back
3  - Insert element (any position)
4  - Remove element at front
5  - Remove element at back
6  - Remove element
7  - Get list length
8  - Get element by index
9  - Get index by element
10 - Change element
11 - Print list
12 - Clear list
Option: `)

    const isValidOption = isInRange(createRage(1, 12), option)
    if (!isValidOption) {
      console.log('\nInvalid Option!')
      return
    }

    const executionMap = createLinkedListExecutionMap(linkedList)
    const linkedListMethod = executionMap[option]
    linkedListMethod()

  } while (1)
}

main()
