package linkedList

import (
	"Go/data-structures/lists/lib/list"
	"Go/data-structures/models/node"
	"strconv"
)

type linkedList struct {
	list.List
}

func New() *linkedList {
	return &linkedList{}
}

func (list *linkedList) GetSize() int {
	return list.Length
}

func (list *linkedList) Append(el int) int {
	node := node.New(el)

	if list.Head == nil {
		list.Head = node
	} else {
		list.Tail.Next = node
	}

	list.Tail = node

	list.Length++
	return list.Length
}

func (list *linkedList) Insert(el int, index int) int {
	if index >= 0 && index <= list.Length {
		node := node.New(el)

		if index == 0 {
			if list.Head == nil {
				list.Head = node
				list.Tail = node

			} else {
				node.Next = list.Head
				list.Head = node
			}

		} else if index == list.Length {
			list.Tail.Next = node
			list.Tail = node

		} else {
			ancestor := list.GetNode(index - 1)
			pointer := ancestor.Next
			node.Next = pointer
			ancestor.Next = node

		}

		list.Length++
		return list.Length
	}
	return 0
}

func (list *linkedList) ToString() string {
	pointer := list.Head

	if pointer == nil {
		return " "
	}

	str := strconv.Itoa(pointer.El)
	for pointer.Next != nil {
		pointer = pointer.Next
		str = str + " -> " + strconv.Itoa(pointer.El)
	}

	str = str + " -> "
	return str
}
