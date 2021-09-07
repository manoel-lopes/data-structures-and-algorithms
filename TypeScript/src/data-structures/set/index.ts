import { question, questionInt } from 'readline-sync'
import Set from './entities/Set'
// import Set from './entities/SetLinkedList'

let option: number, el: unknown, choice: string, isSupersetStr: string
const setA = new Set(); const setB = new Set()

do {
  option = questionInt(`
Menu:
1  - Insert element on set
2  - Remove element on set
3  - Get the quantity of elements on set
4  - Realize operations with the sets
5  - Print set
6  - Clear set
Option: `)

  if (option === 1) {

    choice = question('\nSet A or B? ')
    
    if (choice === 'A') {
      
      el = questionInt('\nType the element to be insert: ')
      
      setA.add(el)
      console.log(`\nA: ${setA.toString()}`)
      // console.log("\nA: %o", setA)
      
    } else if (choice === 'B') {
      
      el = questionInt('\nType the element to be insert: ')
      
      setB.add(el)
      console.log(`\nB: ${setB.toString()}`)
      // console.log("\nB: %o", setB)
      
    } else {
      console.log('\nInvalid Option!')
    }
    
  } else if (option === 2) {
    
    choice = question('\nSet A or B? ')

    if (choice === 'A') {
      
      el = questionInt('\nType the element to be remove: ')
      
      if (setA.delete(el)) {
        console.log(`\nA: ${setA.toString()}`)
        // console.log("\nA: %o", setA)
        
      } else {
        console.log(`${el} is not in the set!`)
      }
      
    } else if (choice === 'B') {
      
      el = questionInt('\nType the element to be remove: ')
      
      if (setB.delete(el)) {
        console.log(`\nB: ${setB.toString()}`)
        // console.log("\nB: %o", setB)
        
      } else {
        console.log(`${el} is not in the set!`)
      }
      
    } else {
      console.log('\nInvalid Option!')
    }
    
  } else if (option === 3) {
    
    console.log(`\nQuantity of elements in the set A: ${setA.size}`)
    console.log(`\nQuantity of elements in the set B: ${setB.size}`)
    
  } else if (option === 4) {

    console.log(`\nA: ${setA.toString()}`)
    console.log(`B: ${setB.toString()}`)
    // console.log("\nA: %o", setA)
    // console.log("B: %o", setB)

    const unionSet = setA.union(setB)
    console.log(`\nUnion: ${unionSet.toString()}`)
    // const unionSet = new Set([...setA, ...setB])
    // console.log("\nUnion: %o", unionSet)

    const intersecSet = setA.intersection(setB)
    console.log(`Intersection: ${intersecSet.toString()}`)
    // const intersecSet = new Set([...setA].filter(el => setB.has(el)))
    // console.log("Intercessao: %o", intersecSet)

    const diffSet = setA.difference(setB)
    console.log(`Difference: ${diffSet.toString()}`)
    // const diffSet = new Set([...setA].filter(el => !setB.has(el)))
    // console.log("Difference: %o", diffSet)

    const symDiffSet = setA.symmetricDifference(setB)
    console.log(`Symmetric Difference: ${symDiffSet.toString()}`)
    // const symDiffSet = new Set([...unionSet].filter(el => {
    // return !intersecSet.has(el)
    // }))
    // console.log("Symmetric Difference: %o", symDiffSet)

    // const isSuperset = [...setB].every(el => setA.has(el) ? true : false)
    const isSuperset = setA.isSupersetOf(setB)
    isSupersetStr = isSuperset
      ? 'B is contained in A'
      : 'B is not contained in A'

    console.log(isSupersetStr)

    unionSet.clear()
    intersecSet.clear()
    diffSet.clear()
    symDiffSet.clear()

  } else if (option === 5) {

    console.log(`\nA: ${setA.toString()}`)
    console.log(`B: ${setB.toString()}`)
    // console.log("\nA: %o", setA)
    // console.log("B: %o", setB)

  } else if (option === 6) {

    setA.clear()
    setB.clear()

    console.log(`\nA: ${setA.toString()}`)
    console.log(`B: ${setB.toString()}`)
    // console.log("\nA: %o", setA)
    // console.log("B: %o", setB)

  } else {
    console.log('\nInvalid Option!')
  }

} while (1)
