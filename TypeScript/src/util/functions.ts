import { question } from 'readline-sync'

import { LinkedList } from '../data-structures/lists/lib/LinkedList'

import { CallbackFilterFn, CallbackMapFn } from './../util/types'

const defaultToString = (item: unknown) => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'number' || item instanceof Number) {
    return `0${item}`
  }

  return `${item}`
}

const swap = (array: unknown[], a: number, b: number) =>
  ([array[a], array[b]] = [array[b], array[a]])

const convertToAscii = (str: string) => {
  let asciiNumber = 0

  for (let i = 0; i < str.length; i++) {
    asciiNumber += str.charCodeAt(i)
  }

  return asciiNumber
}

const generateRandomValue = (max: number) => Math.floor(Math.random() * max)

const generateArrayWithRandomValues = (n: number, max = n) => {
  const array = []
  let el: number

  while (array.length < n) {
    el = generateRandomValue(max)

    if (array.indexOf(el) == -1) {
      array.push(el)
    }
  }

  return array
}

const isArraySorted = (array: number[]) => {
  let isArraySorted = true

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isArraySorted = false
      break
    }
  }

  return isArraySorted
}

const createRage = (start: number, end: number) => {
  return Array.from(Array(end - start + 1)).map((_, i) => start + i)
}

const isInRange = (range: number[], value: number) => {
  return range.find(el => el === value) == undefined ? false : true
}

const isNumber = (value: string) => {
  return !value.length ? false : Number(value) === 0 ? true : !!Number(value)
}

const createElement = (query: string): unknown => {
  const el = question(query)

  if (isNumber(el)) {
    return Number(el)
  } else if (el === 'false' || el === 'true') {
    if (el === 'false') {
      return false
    }
    return true
  }

  return el
}

const concatLists = <T>(
  linkedListA: LinkedList<T>,
  linkedListB: LinkedList<T>,
  newLinkedList: LinkedList<T>
) => {
  linkedListA.forEach((el: T) => newLinkedList.push(el))
  linkedListB.forEach((el: T) => newLinkedList.push(el))

  return newLinkedList
}

const filterList = <T>(
  linkedList: LinkedList<T>,
  newLinkedList: LinkedList<T>,
  callbackFn: CallbackFilterFn<T>
) => {
  for (let i = 0; i < linkedList.length; i++) {
    if (callbackFn(linkedList.getElementAt(i), i, linkedList)) {
      newLinkedList.push(linkedList.getElementAt(i))
    }
  }
  return newLinkedList
}

const mapList = <T>(
  linkedList: LinkedList<T>,
  newLinkedList: LinkedList<T>,
  callbackFn: CallbackMapFn<T>
) => {
  for (let i = 0; i < linkedList.length; i++) {
    newLinkedList.push(callbackFn(linkedList.getElementAt(i), i, linkedList))
  }
  return newLinkedList
}

export {
  defaultToString,
  swap,
  convertToAscii,
  generateRandomValue,
  generateArrayWithRandomValues,
  isArraySorted,
  createRage,
  isInRange,
  createElement,
  concatLists,
  filterList,
  mapList,
}
