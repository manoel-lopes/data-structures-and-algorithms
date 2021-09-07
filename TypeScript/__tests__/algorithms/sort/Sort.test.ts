import { generateRandomValuesForArray, determineIfArrayIsSorted } from '../../../src/util'

import { selectionSort } from '../../../src/algorithms/sort/selectionSort'
import { combSort } from '../../../src/algorithms/sort/combSort'
import { mergeSort } from '../../../src/algorithms/sort/mergeSort'

test('The selection sort algorithm must sort the array', () => {
  const array = generateRandomValuesForArray(10000)
  selectionSort(array)
  const isArraySorted = determineIfArrayIsSorted(array)
  expect(isArraySorted).toBe(true)
})

test('The comb sort algorithm must sort the array', () => {
  const array = generateRandomValuesForArray(10000)
  combSort(array)
  const isArraySorted = determineIfArrayIsSorted(array)
  expect(isArraySorted).toBe(true)
})

test('The merge sort algorithm must sort the array', () => {
  const array = generateRandomValuesForArray(10000)
  mergeSort(array, 0, array.length)
  const isArraySorted = determineIfArrayIsSorted(array)
  expect(isArraySorted).toBe(true)
})
