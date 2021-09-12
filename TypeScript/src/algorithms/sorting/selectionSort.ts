import { swap } from '../../util'

export const selectionSort = (array: number[]) => {
  const sortedArray = array.slice()
  let indexMin: number

  for (let i = 0; i < sortedArray.length - 1; i++) {
    indexMin = i
    for (let j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[indexMin] > sortedArray[j]) {
        indexMin = j
      }
    }

    i !== indexMin && swap(sortedArray, i, indexMin)
  }

  return sortedArray
}
