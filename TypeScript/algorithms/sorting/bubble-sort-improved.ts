import { swap } from '../../util'

export function modifiedBubbleSort<T>(array: T[]) {
  const { length } = array

  for (let i = 0; i < length; i++) {
    // console.log('--- ')
    for (let j = 0; j < length - 1 - i; j++) {
      // console.log('compare ' + array[j] + ' with ' + array[j + 1])
      if (array[j] > array[j + 1]) {
        // console.log('swap ' + array[j] + ' with ' + array[j + 1])
        swap(array, j, j + 1)
      }
    }
  }
}

const array = [5, 1, 7, 2, 3]
modifiedBubbleSort(array)
console.log(array)
