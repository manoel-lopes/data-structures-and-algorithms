package list

import . "Go/data-structures/models/node"

type List struct {
	Head   *Node
	Tail   *Node
	Length int
}

func (list *List) GetNode(index int) *Node {
	if index >= 0 && index < list.Length {
		pointer := list.Head

		for i := 0; i < index && pointer != nil; i++ {
			pointer = pointer.Next
		}
		return pointer
	}
	return nil
}

func (list *List) GetElementAt(el *int, index int) bool {
	pointer := list.GetNode(index)

	if pointer != nil {
		*el = pointer.El

		return true
	}
	return false
}

func (list *List) SetElementAt(el int, index int) bool {
	pointer := list.GetNode(index)

	if pointer != nil {
		pointer.El = el

		return true
	}
	return false
}

func (list *List) IndexOf(index *int, el int) bool {
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
