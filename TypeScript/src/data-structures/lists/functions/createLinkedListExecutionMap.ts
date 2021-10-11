import { questionInt } from 'readline-sync'

import { LinkedList } from '../lib/LinkedList'

export const createLinkedListExecutionMap = (linkedList: LinkedList<unknown>) => {
  let el: unknown, index: number
  const executionMap = {}

  executionMap[1] = () => {
    el = questionInt('\nType the element to be insert: ')
    linkedList.insert(el)

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[2] = () => {
    el = questionInt('\nType the element to be insert: ')
    linkedList.push(el)

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[3] = () => {
    index = questionInt('\nType the index of the new element: ')
    el = questionInt('Type the new element: ')

    if (!linkedList.insert(el, index)) {
      console.log('\nInsertion failed!')
      return
    }

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[4] = () => {
    linkedList.removeAt(0)

    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[5] = () => {
    linkedList.removeAt(linkedList.length - 1)

    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[6] = () => {
    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    el = questionInt('\nType the element to be remove: ')
    index = linkedList.indexOf(el)

    if (index === -1) {
      console.log(`\n${el} is not in the list!`)
      return
    }

    linkedList.removeAt(index)
    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[7] = () => {
    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    console.log(`\nQuantity of elements in the list: ${linkedList.length}`)
  }

  executionMap[8] = () => {
    index = questionInt("\nType the element's index: ")
    el = linkedList.getElementAt(index)

    if (el == undefined) {
      console.log('List index out of range!')
      return
    }

    console.log(`Element in position ${index}: ${el}`)
  }

  executionMap[9] = () => {
    el = questionInt('\nType the element: ')
    index = linkedList.indexOf(el)

    if (linkedList.indexOf(el) === -1) {
      console.log(`${el} is not in the list!`)
      return
    }

    console.log(`Element in position ${index}: ${el}`)
  }

  executionMap[10] = () => {
    index = questionInt('\nType the index of the element to be change: ')
    el = questionInt('Type the new element: ')

    linkedList.setElementAt(el, index)

    if (linkedList.getElementAt(index) !== el) {
      console.log('\nError in the alteration!')
      return
    }

    console.log('\nSuccessful alteration!\n')
    console.log(linkedList.toString())
  }

  executionMap[11] = () => {
    if (!linkedList.length) {
      console.log('\nThe list is empty!')
      return
    }

    console.log(`\n${linkedList.toString()}`)
  }

  executionMap[12] = () => {
    linkedList.clear()

    if (!linkedList.length) {
      console.log('\nThe list is empty!')
    }
  }

  return executionMap
}
