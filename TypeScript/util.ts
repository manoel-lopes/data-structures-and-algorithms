export type CallbackFn = (el: unknown, i?: number, list?: unknown) => unknown


export type CallbackReduceFn = (acc: unknown, el: unknown, i?: number, list?: unknown) => unknown


export type CompareFn = (a: number, b: number) => number


export const ascendingOrderFnStr = `${(a: number, b: number) => a - b}`

export const descendingOrderFnStr = `${(a: number, b: number) => b - a}`


export function defaultToString(item: any): string {
  if (item === null) {
    return 'NULL'

  } else if (item === undefined) {
    return 'UNDEFINED'

  }
  else if (typeof item === 'number' || item instanceof Number) {
    return `0${item}`
  }

  return `${item}`
}


export function defaultDiff<T>(a: T, b: T): number {
  return Number(a) - Number(b)
}


export function swap(array: any[], a: number, b: number) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */
  [array[a], array[b]] = [array[b], array[a]];
}

export function convertToAscii(string: string) {
  let asciiNumber = 0

  for (let i = 0; i < string.length; i++) {
    asciiNumber += string.charCodeAt(i)
    
  }

  return asciiNumber
}