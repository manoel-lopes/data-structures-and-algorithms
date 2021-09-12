import { List } from './data-structures/lists/lib/List'

export type CallbackForEachFn<T> = (el: T, i?: number, linkedList?: List<T>) => unknown

export type CallbackMapFilterFn<T> = (el: T, i?: number, linkedList?: List<T>) => T

export type CallbackReduceFn<T> = (acc: T, el: T, i?: number, linkedList?: List<T>) => T

export type CompareFn = (a: number, b: number) => number

export const ascendingOrderFnStr = `${(a: number, b: number) => a - b}`

export const descendingOrderFnStr = `${(a: number, b: number) => b - a}`

export const defaultToString = (item: unknown) => {
  if (item === null) {
    return 'NULL'
  } else if (item === undefined) {
    return 'UNDEFINED'
  } else if (typeof item === 'number' || item instanceof Number) {
    return `0${item}`
  }

  return `${item}`
}

export const defaultDiff = <T>(a: T, b: T) => {
  return Number(a) - Number(b)
}

export const swap = (array: unknown[], a: number, b: number) =>
  ([array[a], array[b]] = [array[b], array[a]])

export const convertToAscii = (str: string) => {
  let asciiNumber = 0

  for (let i = 0; i < str.length; i++) {
    asciiNumber += str.charCodeAt(i)
  }

  return asciiNumber
}

const generateRandomValue = (max: number) => Math.floor(Math.random() * max)

export const generateArrayWithRandomValues = (n: number, max = n) => {
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

export const isArraySorted = (array: number[]) => {
  let isArraySorted = true

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isArraySorted = false
      break
    }
  }

  return isArraySorted
}
