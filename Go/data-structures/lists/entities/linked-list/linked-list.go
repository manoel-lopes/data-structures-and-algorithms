package linkedList

import (
	"Go/data-structures/lists/lib/list"
	"Go/data-structures/models/node"
	"strconv"
)

type linkedList struct {
	list   list.List
	head   *any
	tail   *any
	count int
}

func (list *linkedList) merge() {
	if list.list.Head != nil && list.list.Tail != nil {
		list.head = &list.list.Head.El
		list.tail = &list.list.Tail.El
	} else {
		list.head = nil
		list.tail = nil
	}
	list.count = list.list.Length
}

func New() *linkedList {
	return &linkedList{
		head:   nil,
		tail:   nil,
		count: 0,
	}
}

// func (list *linkedList) GetHead() any {
// 	return list.head.El
// }

// func (list *linkedList) GetTail() any {
// 	return list.tail.El
// }

func (list *linkedList) GetSize() int {
	return list.count
}

func (list *linkedList) Append(el int) int {
	node := node.New(el)

	if list.list.Head == nil {
		list.list.Head = node
	} else {
		list.list.Tail.Next = node
	}

	list.list.Tail = node
	list.list.Length++
	list.merge()

	return list.list.Length
}

func (list *linkedList) Insert(el int, index int) int {
	if index >= 0 && index <= list.list.Length {
		node := node.New(el)

		if index == 0 {
			if list.list.Head == nil {
				list.list.Head = node
				list.list.Tail = node

			} else {
				node.Next = list.list.Head
				list.list.Head = node
			}

		} else if index == list.list.Length {
			list.list.Tail.Next = node
			list.list.Tail = node

		} else {
			ancestor := list.list.GetNode(index - 1)
			pointer := ancestor.Next
			node.Next = pointer
			ancestor.Next = node

		}
		list.list.Length++
		list.merge()
		return list.list.Length
	}
	return 0
}

// func (list *linkedList) Pop() (any, bool) {
// 	size := list.GetSize()
// 	if size > 0 {
// 		secondToLast := util.GetNode(list.head, list.count, size-2)
// 		removed := list.tail
// 		if list.tail == list.head {
// 			list.head = nil
// 			list.tail = nil
// 		} else {
// 			secondToLast.Next = list.tail.Next
// 			list.tail = secondToLast
// 		}
// 		list.count--
// 		return removed.El, true
// 	}
// 	return nil, false
// }

func (list *linkedList) GetElementAt(index int) (any, bool) {
	return list.list.GetElementAt(index)
}

func (list *linkedList) SetElementAt(el int, index int) bool {
	ok := list.list.SetElementAt(el, index)
	if ok {
		list.merge()
	}
	return ok
}


func (list *linkedList) IndexOf(index *int, el any) bool {
	return list.list.IndexOf(index, el)
}

func (list *linkedList) IsEmpty() bool {
	return list.count == 0
}

func (list *linkedList) Clear() {
	list.list.Clear()
	list.merge()
}

func (list *linkedList) ToString() string {
	pointer := list.list.Head

	if pointer == nil {
		return " "
	}

	str := strconv.Itoa(pointer.El.(int))
	for pointer.Next != nil {
		pointer = pointer.Next
		str = str + " -> " + strconv.Itoa(pointer.El.(int))
	}

	str = str + " -> " 
	return str
}