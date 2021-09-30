import { Deque } from '../data-structures/deque/entities/Deque'

const palindromeChecker = (str: string) => {
  if (!str || str === ' ') {
    return false
  }

  const deque = new Deque<string>()
  const lowerString = str.toLocaleLowerCase().split(' ').join('')

  for (let i = 0; i < lowerString.length; i++) {
    deque.push(lowerString.charAt(i))
  }

  let firstChar: string, lastChar: string

  while (deque.length > 1) {
    firstChar = deque.shift()
    lastChar = deque.pop()

    if (firstChar !== lastChar) {
      return false
    }
  }

  return true
}

console.log('""', palindromeChecker(''))
console.log('" "', palindromeChecker(' '))
console.log('a', palindromeChecker('a'))
console.log('a', palindromeChecker('a'))
console.log('aa', palindromeChecker('aa'))
console.log('kayak', palindromeChecker('kayak'))
console.log('tenet', palindromeChecker('tenet'))
