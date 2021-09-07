import { swap } from '../../util'

export const selectionSort = (array: number[]) => {
  let indexMin: number

  for (let i = 0; i < array.length - 1; i++) {
    indexMin = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j
      }
    }

    i !== indexMin && swap(array, i, indexMin)
  }
}
