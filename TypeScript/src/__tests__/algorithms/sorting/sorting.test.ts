import {
  generateArrayWithRandomValues,
  isArraySorted,
} from '../../../util/functions'

import { selectionSort } from '../../../algorithms/sorting/selectionSort'
import { bubbleSort } from '../../../algorithms/sorting/bubbleSort'
import { combSort } from '../../../algorithms/sorting/combSort'

describe('Sorting', () => {
  let array = []

  beforeEach(() => {
    array = generateArrayWithRandomValues(10000)
  })

  it('selection sort algorithm must sort array in less than 1 s', () => {
    const start = Date.now()
    expect(isArraySorted(selectionSort(array))).toBe(true)
    const end = (Date.now() - start) / 1000
    expect(end).toBeLessThan(1)
  })

  it('bubble sort algorithm must sort array', () => {
    expect(isArraySorted(bubbleSort(array))).toBe(true)
  })

  it('comb sort algorithm must sort array', () => {
    expect(isArraySorted(combSort(array))).toBe(true)
  })
})
