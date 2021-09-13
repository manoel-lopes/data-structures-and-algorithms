import { swap } from './../../util'

export const bubbleSort = (array: number[]) => {
  const sortedArray = array.slice()

  for (let i = 0; i < sortedArray.length - 1; i++) {
    for (let j = sortedArray.length - 1; j > i; j--) {
      if (sortedArray[j] < sortedArray[j - 1]) {
        swap(sortedArray, j, j - 1)
      }
    }
  }

  return sortedArray
}
