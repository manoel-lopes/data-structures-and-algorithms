package list

import (
	"Go/data-structures/models/node"
	"Go/util"
)

type List struct {
	Head   *node.Node
	Tail   *node.Node
	Length int
}

func (list *List) GetNode(index int) *node.Node {
	if index >= 0 && index < list.Length {
		pointer := list.Head
		for i := 0; i < index && pointer != nil; i++ {
			pointer = pointer.Next
		}
		return pointer
	}
	return nil
}

func (list *List) GetElementAt(index int) (any, bool) {
	pointer := util.GetNode(list.Head, list.Length, index)
	if pointer != nil {
		return pointer.El, true
	}
	return nil, false
}

func (list *List) SetElementAt(el any, index int) bool {
	pointer := util.GetNode(list.Head, list.Length, index)
	if pointer != nil {
		pointer.El = el
		return true
	}
	return false
}

func (list *List) IndexOf(index *int, el any) bool {
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

func (list *List) Clear() {
	list.Head = nil
	list.Tail = nil
	list.Length = 0
}
