import { swap } from '../../util/functions'

export const combSort = (array: number[]) => {
  const sortedArray = array.slice()
  const { length } = sortedArray

  let step = length, i: number, j: number, k: number
  let again = true

  while ((step = step / 1.3) > 1)
    for (j = 0; j < length - step; j++) {
      k = j + step
      if (sortedArray[j] > sortedArray[k]) {
        swap(sortedArray, j, k)
      }
    }

  for (i = 0; i < length && again; i++)
    for (i = 0; i < length - 1 && again; i++)
      for (j = length - 1, again = false; j > i; j--)
        if (sortedArray[j] < sortedArray[j - 1]) {
          swap(sortedArray, j, j - 1)
          again = true
        }

  return sortedArray
}
