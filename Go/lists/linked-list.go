package main

import "strconv"

type node struct {
	el   int
	next *node
}

type linkedList struct {
	head  *node
	tail  *node
	count int
}

func createNode(el int) *node {
	return &node{el: el}
}

func createLinkedList() *linkedList {
	return &linkedList{}
}

func (list *linkedList) getHead() int {
	return list.head.el
}

func (list *linkedList) getTail() int {
	return list.tail.el
}

func (list *linkedList) getSize() int {
	return list.count
}

func (list *linkedList) append(el int) int {
	node := createNode(el)

	if !list.isEmpty() {
		list.tail.next = node

	} else {
		list.head = node
	}

	list.tail = node
	list.count++

	return list.count
}

func (list *linkedList) getNode(index int) *node {

	if index >= 0 && index < list.count {
		pointer := list.head

		for i := 0; i < index && pointer != nil; i++ {
			pointer = pointer.next
		}
		return pointer
	}
	return nil
}

func (list *linkedList) insert(el int, index int) int {
	if index >= 0 && index <= list.count {
		node := createNode(el)

		if index == 0 {
			if  list.head == nil {
				list.head = node
				list.tail = node

			} else {
				node.next = list.head
				list.head = node
			}

		} else if index == list.count {
			list.tail.next = node
			list.tail = node

		} else {
			ancestor := list.getNode(index - 1)
			pointer  := ancestor.next
			node.next = pointer
			ancestor.next = node

		}

		list.count++
		return list.count
	}

	return 0
}

// removeAt(index: number) {
// 	if (index >= 0 && index < list.length && list._head) {

// 		let pointer = list._head

// 		if (index === 0) {
// 			list._head = list._head.next

// 			if (!list._head) {
// 				list._tail = null
// 			}

// 		} else {
// 			const ancestor = list.getNode(index - 1)
// 			pointer = ancestor.next
// 			ancestor.next = pointer.next
// 			list._tail = ancestor
// 		}

// 		list.count--
// 		return pointer.el
// 	}
// }

func (list *linkedList) pop(el *int) int {
	size := list.getSize()

	if size > 0 {
		secondoToLast := list.getNode(size - 2)
		removed := list.tail

		if list.tail == list.head {
			list.head = nil
			list.tail = nil

		} else {
			secondoToLast.next = list.tail.next
			list.tail = secondoToLast
		}

		list.count--
		*el = removed.el
		return 1
	}
	return 0
}

func (list *linkedList) getElementAt(el *int, index int) int {

	pointer := list.getNode(index)

	if pointer != nil {
		*el = pointer.el

		return 1
	}
	return 0
}

func (list *linkedList) setElementAt(el int, index int) int {

	pointer := list.getNode(index)

	if pointer != nil {
		pointer.el = el

		return 1
	}
	return 0
}

func (list *linkedList) indexOf(index *int, el int) int {

	pointer := list.head
	i := 0

	for pointer != nil {
		if pointer.el == el {
			*index = i

			return 1
		}

		pointer = pointer.next
		i++
	}
	return 0
}

func (list *linkedList) isEmpty() bool {
	return list.count == 0
}

func (list *linkedList) clear() {
	// for !list.isEmpty() {
	// 	list.remove(list.getHead())
	// }
}

func (list *linkedList) toString() string {

	pointer := list.head

	if pointer == nil {
		return " "
	}

	str := strconv.Itoa(pointer.el)

	for pointer.next != nil {
		pointer = pointer.next
		str = str + " -> " + strconv.Itoa(pointer.el)
	}

	str = str + " -> nil "
	return str
}
