export const binarySearch = <T>(sortedArray: T[], el: T) => {
  let low = 0
  let high = sortedArray.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
 
    if (element < el) {
      low = mid + 1
 
    } else if (element > el) {
      high = mid - 1
 
    } else {
      return mid
    }
  }
 
  return -1
}
