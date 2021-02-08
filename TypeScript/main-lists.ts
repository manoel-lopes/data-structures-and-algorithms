import { questionInt } from "readline-sync"
import List from "./data-structures/lists/linked-list"
// import List from "./data-structures/lists/doubly-linked-list"
// import List from "./data-structures/lists/circular-linked-list"

let option: number, el: unknown, index: number
const list = new List()

do {
    option = questionInt(`
Menu:
1  - Insert element in the beginning
2  - Insert element in the end
3  - Insert element (any position)
4  - Remove element in the beginning
5  - Remove element in the end
6  - Remove element (any)
7  - Get quantity de elements in the list
8  - Get element by index
9  - Get index by element
10 - Alterate element
11 - Print list
12 - Clear list
Option: `)

    if (option === 1) {

        el = questionInt("\nType it the element to be insert: ")
        list.insert(el)

        console.log(`\n${list.toString()}`)

    } else if (option === 2) {

        el = questionInt("\nType it the element to be insert: ")
        list.push(el)

        console.log(`\n${list.toString()}`)

    } else if (option === 3) {

        index = questionInt("\nType it the new element: ")
        el = questionInt("Type it the new element's index: ")

        if (list.insert(el, index)) {
            console.log(`\n${list.toString()}`)

        } else {
            console.log(`\nTh insert failed!`)

        }

    } else if (option === 4) {

            if (list.removeAt(0)) {
                console.log(`\n${list.toString()}`)
                
            } else {
                console.log("\nThe list it's empty!")
            }

    } else if (option === 5) {

            if (list.pop()) {
                console.log(`\n${list.toString()}`)
                
            } else {
                console.log("\nThe list it's empty!")
            }

    } else if (option === 6) {

        if (list.length) {
            el = questionInt("\nType it the element to be remove: ")
            index = list.indexOf(el)

            if (index !== -1) {

                if (list.removeAt(index)) {
                    console.log(`\n${list.toString()}`)
                    
                } else {
                    console.log("\nThe list it's empty!")
                }

            } else {
                console.log(`\n${el} it's not in the list!`)
            }

        } else {
            console.log("\nThe list it's empty!")

        }

    } else if (option === 7) {

        if (!list.length) {
            console.log("\nThe list it's empty!")

        } else {
            console.log(`\nQuantity of elements in the list: ${list.length}`)
        }

    } else if (option === 8) {

        index = questionInt("\nType it the new index: ")
        el = list.getElementAt(index)

        if (el !== undefined) {
            console.log(`\nElement in position ${index}: ${el}`)

        } else {
            console.log(`${el} it's not in the list\n!`)
        }

    } else if (option === 9) {

        el = questionInt("\nType it the element: ")
        index = list.indexOf(el)

        if (list.indexOf(el) !== -1) {
            console.log(`\nElement in position ${index}: ${el}`)

        } else {
            console.log(`${el} it's not in the list\n!`)
        }

    } else if (option === 10) {

        index = questionInt("\nType it the index of the element to be alterate: ")
        el = questionInt("Type it the new element: ")

        list.setElementAt(el, index)

        if (list.getElementAt(index) === el) {
            console.log(`\Successful alteration!\n`)
            console.log(list.toString())

        } else {
            console.log(`\nThere was an error in the alteration!`)
        }

    } else if (option === 11) {

        if (!list.length) {
            console.log("\nThe list it's empty!");

        } else {
            console.log(`\n${list.toString()}`)

        }

    } else if (option === 12) {

        list.clear()

        if (!list.length) {
            console.log("\nThe list it's empty!")
        }

    } else {
        console.log("\nInvalid Option!")
    }

} while (1)