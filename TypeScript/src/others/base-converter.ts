import { Stack } from '../data-structures/stack/entities/Stack'

const baseConverter = (decNumber: number, base: number) => {
  const remStack = new Stack<number>()
  const digits = '0123456789ABCDEF'
  let rem: number
  let baseString = ''

  if (!(base === 2 || base === 8 || base === 16)) {
    return ''
  }

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    remStack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!remStack.length) {
    baseString += digits[parseInt(`${remStack.pop()}`)]
  }

  return baseString
}

console.log(baseConverter(100345, 2))
console.log(baseConverter(100345, 8))
console.log(baseConverter(100345, 16))
