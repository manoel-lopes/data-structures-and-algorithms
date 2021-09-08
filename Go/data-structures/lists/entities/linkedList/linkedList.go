package linkedList

import (
	. "Go/data-structures/lists/lib/list"
	"Go/data-structures/models/node"
	"strconv"
)

type linkedList struct {
	list   List
	Head   *int
	Tail   *int
	Length int
}

func New() *linkedList {
	return &linkedList{
		Head:   nil,
		Tail:   nil,
		Length: 0,
	}
}

func (list *linkedList) merge() {
	if list.list.Head != nil && list.list.Tail != nil {
		list.Head = &list.list.Head.El
		list.Tail = &list.list.Tail.El
	} else {
		list.Head = nil
		list.Tail = nil
	}

	list.Length = list.list.Length

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

func (list *linkedList) ToString() string {
	pointer := list.list.Head

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

func (list *linkedList) GetElementAt(el *int, index int) int {
	return list.list.GetElementAt(el, index)
}

func (list *linkedList) SetElementAt(el int, index int) int {
	ok := list.list.SetElementAt(el, index)

	if ok == 1 {
		list.merge()
	}

	return ok
}

func (list *linkedList) IndexOf(index *int, el int) int {
	return list.list.IndexOf(index, el)
}

func (list *linkedList) Clear() {
	list.list.Clear()
	list.merge()
}
