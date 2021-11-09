import { List } from '../data-structures/lists/lib/List'

import {
  FilterCallback,
  MapCallback,
} from './../util/types'

const defaultToString = (item: unknown) => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (
    typeof item === 'number' ||
    item instanceof Number
  ) {
    return `0${item}`
  }

  return `${item}`
}

const swap = (
  array: unknown[],
  a: number,
  b: number
) => ([array[a], array[b]] = [array[b], array[a]])

const convertToAscii = (str: string) => {
  let asciiNumber = 0

  for (let i = 0; i < str.length; i++) {
    asciiNumber += str.charCodeAt(i)
  }

  return asciiNumber
}

const generateRandomValue = (max: number) =>
  Math.floor(Math.random() * max)

const generateArrayWithRandomValues = (
  n: number,
  max = n
) => {
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

const concatLists = <T>(
  listA: List<T>,
  listB: List<T>,
  newList: List<T>
) => {
  listA.forEach((el: T) => newList.push(el))
  listB.forEach((el: T) => newList.push(el))

  return newList
}

const filterList = <T>(
  list: List<T>,
  newList: List<T>,
  callback: FilterCallback<T>
) => {
  for (let i = 0; i < list.length; i++) {
    if (callback(list.getElementAt(i), i, list)) {
      newList.push(list.getElementAt(i))
    }
  }
  return newList
}

const mapList = <T>(
  list: List<T>,
  newList: List<T>,
  callback: MapCallback<T>
) => {
  for (let i = 0; i < list.length; i++) {
    newList.push(
      callback(list.getElementAt(i), i, list)
    )
  }
  return newList
}

const convertToString = <T>(value: T) => {
  if (typeof value === 'object')
    return JSON.stringify(value)

  return String(value)
}

export {
  defaultToString,
  swap,
  convertToAscii,
  generateRandomValue,
  generateArrayWithRandomValues,
  isArraySorted,
  concatLists,
  filterList,
  mapList,
  convertToString,
}
