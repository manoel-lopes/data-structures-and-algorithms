const merge = (arrayA: number[], start: number, middle: number, end: number) => {
  let i = start, j = middle, k = 0
  const arrayB: number[] = []

  while (i < middle && j < end) {
    if (arrayA[i] <= arrayA[j]) arrayB[k++] = arrayA[i++]
    arrayB[k++] = arrayA[j++]
  }

  while (i < middle) {
    arrayB[k++] = arrayA[i++]
  }

  while (j < end) {
    arrayB[k++] = arrayA[j++]
  }

  for (i = start; i < end; i++) {
    arrayA[i] = arrayB[i - start]
  }
}

export const mergeSort = (array: number[], start: number, end: number) => {
  if (start < end - 1) {
    const middle = (start + end) / 2

    mergeSort(array, start, middle)
    mergeSort(array, middle, end)
    merge(array, start, middle, end)
  }
}
