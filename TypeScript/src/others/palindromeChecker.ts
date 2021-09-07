import Deque from '../data-structures/deque/entities/Deque'

function palindromeChecker(aString: string) {
  if (!aString || aString === ' ') {
    return false
  }

  const deque = new Deque<string>()
  const lowerString = aString.toLocaleLowerCase().split(' ').join('')

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
