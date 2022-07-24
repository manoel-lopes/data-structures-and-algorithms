package linkedList

import (
	"Go/data-structures/models/node"
	util "Go/util"
	"strconv"
)

type linkedList struct {
	head  *node.Node
	tail  *node.Node
	count int
}

func New() *linkedList {
	return &linkedList{}
}

func (list *linkedList) GetHead() any {
	return list.head.El
}

func (list *linkedList) GetTail() any {
	return list.tail.El
}

func (list *linkedList) GetSize() int {
	return list.count
}

func (list *linkedList) Append(el any) int {
	node := node.New(el)
	if !list.IsEmpty() {
		list.tail.Next = node
	} else {
		list.head = node
	}
	list.tail = node
	list.count++
	return list.count
}

func (list *linkedList) Insert(el any, index int) int {
	if index >= 0 && index <= list.count {
		node := node.New(el)
		if index == 0 {
			if list.head == nil {
				list.head = node
				list.tail = node
			} else {
				node.Next = list.head
				list.head = node
			}

		} else if index == list.count {
			list.tail.Next = node
			list.tail = node

		} else {
			ancestor := util.GetNode(list.head, list.count, index-1)
			pointer := ancestor.Next
			node.Next = pointer
			ancestor.Next = node
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
// 			list._head = list._head.Next

// 			if (!list._head) {
// 				list._tail = null
// 			}

// 		} else {
// 			const ancestor = util.GetNode(list.head, list.count, index - 1)
// 			pointer = ancestor.Next
// 			ancestor.Next = pointer.Next
// 			list._tail = ancestor
// 		}

// 		list.count--
// 		return pointer.El
// 	}
// }

func (list *linkedList) Pop() (any, bool) {
	size := list.GetSize()
	if size > 0 {
		secondToLast := util.GetNode(list.head, list.count, size-2)
		removed := list.tail
		if list.tail == list.head {
			list.head = nil
			list.tail = nil
		} else {
			secondToLast.Next = list.tail.Next
			list.tail = secondToLast
		}
		list.count--
		return removed.El, true
	}
	return nil, false
}

func (list *linkedList) GetElementAt(index int) (any, bool) {
	pointer := util.GetNode(list.head, list.count, index)
	if pointer != nil {
		return pointer.El, true
	}
	return nil, false
}

func (list *linkedList) SetElementAt(el any, index int) bool {
	pointer := util.GetNode(list.head, list.count, index)
	if pointer != nil {
		pointer.El = el
		return true
	}
	return false
}

func (list *linkedList) IndexOf(index *int, el any) bool {
	pointer := list.head
	i := 0
	for pointer != nil {
		if pointer.El == el {
			*index = i
			return true
		}
		pointer = pointer.Next
		i++
	}
	return false
}

func (list *linkedList) IsEmpty() bool {
	return list.count == 0
}

func (list *linkedList) Clear() {
	// for !list.IsEmpty() {
	// 	list.remove(list.getHead())
	// }
}

func (list *linkedList) ToString() string {
	pointer := list.head
	if pointer == nil {
		return " "
	}

	str := strconv.Itoa(pointer.El.(int))
	for pointer.Next != nil {
		pointer = pointer.Next
		str = str + " -> " + strconv.Itoa(pointer.El.(int))
	}
	str = str + " -> nil "
	return str
}
