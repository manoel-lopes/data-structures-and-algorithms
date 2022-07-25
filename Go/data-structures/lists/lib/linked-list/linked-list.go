package linkedList

import (
	"Go/data-structures/models/node"
	"Go/util"
)

type LinkedList struct {
	Head   *node.Node
	Tail   *node.Node
	Length int
}

func (list *LinkedList) Merge(listHead *node.Node, listTail *node.Node, listLength int) {
	list.Head = listHead
	list.Tail = listTail
	list.Length = listLength
}

func (list *LinkedList) GetNode(index int) *node.Node {
	if index >= 0 && index < list.Length {
		pointer := list.Head
		for i := 0; i < index && pointer != nil; i++ {
			pointer = pointer.Next
		}
		return pointer
	}
	return nil
}

func (list *LinkedList) GetElementAt(el any, index int) bool {
	pointer := util.GetNode(list.Head, list.Length, index)
	if pointer != nil {
		el = pointer.El
		return true
	}
	return false
}

func (list *LinkedList) SetElementAt(el any, index int) bool {
	pointer := util.GetNode(list.Head, list.Length, index)
	if pointer != nil {
		pointer.El = el
		return true
	}
	return false
}

func (list *LinkedList) IndexOf(index *int, el any) bool {
	pointer := list.Head
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

func (list *LinkedList) Clear() {
	list.Head = nil
	list.Tail = nil
	list.Length = 0
}
