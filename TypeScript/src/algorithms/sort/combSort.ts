import { swap } from './../../util'

export const combSort = (array: unknown[]) => {
  const { length } = array
  let step = length, i: number, j: number, k: number
  let again = true

  while ((step = step / 1.3) > 1)
    for (j = 0; j < length - step; j++) {
      k = j + step
      if (array[j] > array[k]) {
        swap(array, j, k)
      }
    }

  for (i = 0; i < length && again; i++)
    for (i = 0; i < length - 1 && again; i++)
      for (j = length - 1, again = false; j > i; j--)
        if (array[j] > array[j - 1]) {
          swap(array, j, j - 1)
          again = true
        }
}
