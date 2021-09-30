import {
  generateArrayWithRandomValues,
  isArraySorted,
} from '../../../src/util/functions'

import { selectionSort } from '../../../src/algorithms/sorting/selectionSort'
import { bubbleSort } from '../../../src/algorithms/sorting/bubbleSort'
import { combSort } from '../../../src/algorithms/sorting/combSort'

const array = generateArrayWithRandomValues(10000)

test('The selection sort algorithm must sort the array', () => {
  expect(isArraySorted(selectionSort(array))).toBe(true)
})

test('The bubble sort algorithm must sort the array', () => {
  expect(isArraySorted(bubbleSort(array))).toBe(true)
})

test('The comb sort algorithm must sort the array', () => {
  expect(isArraySorted(combSort(array))).toBe(true)
})
