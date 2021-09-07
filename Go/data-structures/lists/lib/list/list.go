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

func (list *List) GetSize() int {
	return list.Length
}

func (list *List) GetElementAt(el *int, index int) int {
	pointer := list.GetNode(index)

	if pointer != nil {
		*el = pointer.El

		return 1
	}
	return 0
}

func (list *List) SetElementAt(el int, index int) int {
	pointer := list.GetNode(index)

	if pointer != nil {
		pointer.El = el

		return 1
	}
	return 0
}

func (list *List) IndexOf(index *int, el int) int {
	pointer := list.Head
	i := 0

	for pointer != nil {
		if pointer.El == el {
			*index = i

			return 1
		}

		pointer = pointer.Next
		i++
	}
	return 0
}

func (list *List) Clear() {
	list.Length = 0
	list.Head = nil
	list.Tail = nil
}
