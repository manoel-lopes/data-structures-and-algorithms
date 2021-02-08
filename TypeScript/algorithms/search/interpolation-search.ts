import { defaultDiff } from '../../util'

export function interpolationSearch<T>(sortedArray: T[], el: T, diffFn = defaultDiff) {
  let low = 0
  let high = sortedArray.length - 1
  let position = -1
  let delta = -1

  while (low <= high && el >= sortedArray[low] && el <= sortedArray[high]) {
    delta = diffFn(el, sortedArray[low]) / diffFn(sortedArray[high], sortedArray[low])
    position = low + Math.floor((high - low) * delta)

    if (sortedArray[position] === el) {
      return position
    }

    if (sortedArray[position] < el) {
      low = position + 1
    } else {
      high = position - 1
    }
  }
  return -1
}
