import {
  swap,
  CompareFn,
  strAscendingOrderFn,
  strDescendingOrderFn
} from '../../util'

function partition(
  array: unknown[],
  left: number,
  right: number,
  compareFn: CompareFn) {

  const pivot = array[Math.floor((right + left) / 2)]
  let i = left
  let j = right
  const srtcompareFn = compareFn.toString()

  // console.log('pivot is ' + pivot + '; left is ' + left + '; right is ' + right)
  if (srtcompareFn === strAscendingOrderFn) {
    while (i <= j) {
      while (array[i] < pivot) {
        i++
        // console.log('i = ' + i)
      }

      while (array[j] > pivot) {
        j--
        // console.log('j = ' + j)
      }

      if (i <= j) {
        // console.log('swap ' + array[i] + ' with ' + array[j])
        swap(array, i, j)
        i++
        j--
      }
    }
    return i

  } else if (srtcompareFn === strDescendingOrderFn) {
    while (i <= j) {
      while (array[i] > pivot) {
        i++
        // console.log('i = ' + i)
      }

      while (array[j] < pivot) {
        j--
        // console.log('j = ' + j)
      }

      if (i <= j) {
        // console.log('swap ' + array[i] + ' with ' + array[j])
        swap(array, i, j)
        i++
        j--
      }
    }
    return i
  }
}

function quick(
  array: unknown[],
  left: number,
  right: number,
  compareFn: CompareFn) {

  let index: number

  if (array.length > 1) {
    index = partition(array, left, right, compareFn)

    if (left < index - 1) {
      quick(array, left, index - 1, compareFn)
    }

    if (index < right) {
      quick(array, index, right, compareFn)
    }
  }
  return array
}

const quickSort = (array: unknown[], compareFn: CompareFn) => {
  return quick(array, 0, array.length - 1, compareFn)
}

const array = [5, 1, 4, 7, 0]
const fn = (a: number, b: number) => b - b
console.log(quickSort(array, fn))
