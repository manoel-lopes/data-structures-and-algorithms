package singlyLinkedList

import (
	"Go/data-structures/lists/lib/linked-list"
	"Go/data-structures/models/node"
	"Go/util"
	"strconv"
)

type singlyLinkedList struct {
	linkedList linkedList.LinkedList
	head       *node.Node
	tail       *node.Node
	count      int
}

func (list *singlyLinkedList) merge() {
	list.head = list.linkedList.Head
	list.tail = list.linkedList.Tail
	list.count = list.linkedList.Length
}

func New() *singlyLinkedList {
	return &singlyLinkedList{
		head:  nil,
		tail:  nil,
		count: 0,
	}
}

func (list *singlyLinkedList) GetHead() any {
	return list.head.El
}

func (list *singlyLinkedList) GetTail() any {
	return list.tail.El
}

func (list *singlyLinkedList) GetSize() int {
	return list.count
}

func (list *singlyLinkedList) Append(el any) int {
	node := node.New(el)
	if list.head == nil {
		list.head = node
	} else {
		list.tail.Next = node
	}
	list.tail = node
	list.count++
	list.linkedList.Merge(list.head, list.tail, list.count)
	return list.count
}

func (list *singlyLinkedList) Insert(el any, index int) int {
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
			ancestor := list.linkedList.GetNode(index - 1)
			pointer := ancestor.Next
			node.Next = pointer
			ancestor.Next = node
		}
		list.count++
		list.linkedList.Merge(list.head, list.tail, list.count)
		return list.count
	}
	return 0
}

func (list *singlyLinkedList) Pop() any {
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
		list.linkedList.Merge(list.head, list.tail, list.count)
		return removed.El
	}
	return nil
}

func (list *singlyLinkedList) GetElementAt(el any, index int) bool {
	return list.linkedList.GetElementAt(el, index)
}

func (list *singlyLinkedList) SetElementAt(el any, index int) bool {
	if list.linkedList.SetElementAt(el, index) {
		list.linkedList.Merge(list.head, list.tail, list.count)
		return true
	}
	return false
}

func (list *singlyLinkedList) IndexOf(index *int, el any) bool {
	return list.linkedList.IndexOf(index, el)
}

func (list *singlyLinkedList) IsEmpty() bool {
	return list.count == 0
}

func (list *singlyLinkedList) Clear() {
	list.linkedList.Clear()
	list.merge()
}

func (list *singlyLinkedList) ToString() string {
	pointer := list.linkedList.Head
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
