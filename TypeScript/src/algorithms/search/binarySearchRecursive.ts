const binarySearchRecursive = <T>(
  sortedArray: T[],
  el: T,
  low: number,
  high: number
) => {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]

    if (element < el) {
      return binarySearchRecursive(sortedArray, el, mid + 1, high)
  
    } else if (element > el) {
      return binarySearchRecursive(sortedArray, el, low, mid - 1)
  
    } else {
      return mid
    }
  }
  return -1
}

export const binarySearch = <T>(sortedArray: T[], el: T) => {
  const low = 0
  const high = sortedArray.length - 1

  return binarySearchRecursive(sortedArray, el, low, high)
}
