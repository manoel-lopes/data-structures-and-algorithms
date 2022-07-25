package linkedList

import (
	"Go/data-structures/lists/lib/list"
	"Go/data-structures/models/node"
	"Go/util"
	"strconv"
)

type linkedList struct {
	list  list.List
	head  *node.Node
	tail  *node.Node
	count int
}

func (list *linkedList) merge() {
	list.list.Head = list.head
	list.list.Tail = list.tail
	list.list.Length = list.count
}

func New() *linkedList {
	return &linkedList{
		head:  nil,
		tail:  nil,
		count: 0,
	}
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

func (list *linkedList) Append(el int) int {
	node := node.New(el)
	if list.head == nil {
		list.head = node
	} else {
		list.tail.Next = node
	}
	list.tail = node
	list.count++
	list.merge()
	return list.count
}

func (list *linkedList) Insert(el int, index int) int {
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
			ancestor := list.list.GetNode(index - 1)
			pointer := ancestor.Next
			node.Next = pointer
			ancestor.Next = node
		}
		list.count++
		list.merge()
		return list.count
	}
	return 0
}

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
		list.merge()
		return removed.El, true
	}
	return nil, false
}

func (list *linkedList) GetElementAt(index int) (any, bool) {
	return list.list.GetElementAt(index)
}

func (list *linkedList) SetElementAt(el int, index int) bool {
	if list.list.SetElementAt(el, index) {
		list.merge()
		return true
	}
	return false
}

func (list *linkedList) IndexOf(index *int, el any) bool {
	return list.list.IndexOf(index, el)
}

func (list *linkedList) IsEmpty() bool {
	return list.list.IsEmpty()
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
