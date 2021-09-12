const merge = (arrayA: number[], start: number, middle: number, end: number) => {
  let i = start,
    j = middle,
    k = 0

  const sortedArray = arrayA.slice()
  const arrayB: number[] = []

  while (i < middle && j < end) {
    if (sortedArray[i] <= sortedArray[j]) {
      arrayB[k++] = sortedArray[i++]
    } else {
      arrayB[k++] = sortedArray[j++]
    }
  }

  while (i < middle) {
    arrayB[k++] = sortedArray[i++]
  }

  while (j < end) {
    arrayB[k++] = sortedArray[j++]
  }

  for (let i = start; i < end; i++) {
    sortedArray[i] = arrayB[i - start]
  }

  return sortedArray
}

export const mergeSort = (array: number[], start: number, end: number) => {
  let sortedArray: number[] = []
  if (start < end - 1) {
    let middle = (start + end) / 2

    mergeSort(array, start, middle)
    mergeSort(array, middle, end)
    sortedArray = merge(array, start, middle, end)
  }

  return sortedArray
}
