from src.data_structures.lists.lib.list import List
from src.data_structures.models.node import Node

from typing import TypeVar, Union

T = TypeVar('T')


class LinkedList(List[T]):
    def __init__(self) -> None:
        super().__init__()

    def append(self, el: T) -> int:
        node = Node(el)

        if self._head:
            self._tail.next = node
        else:
            self._head = node

        self._tail = node

        self._length += 1
        return self._length

    def insert(self, index: int, el: T) -> int:
        if index >= 0 and index <= self._length:
            node = Node(el)

            if index == 0:
                if not self._head:
                    self._head = node
                    self._tail = node
                else:
                    node.next = self._head
                    self._head = node

            elif index == self._length:
                self._tail.next = node
                self._tail = node

            else:
                ancestor = self._getNode(index - 1)
                pointer = ancestor.next
                node.next = pointer
                ancestor.next = node

        self._length += 1
        return self._length

    def remove(self, el: T) -> Union[T, None]:
        if self._length:
            index = self.index(el)

            if index is not None:
                pointer = self._head

                if index == 0:
                    self._head = self._head.next

                    if not self._head:
                        self._tail = None

                else:
                    ancestor = self._getNode(index - 1)
                    pointer = ancestor.next
                    ancestor.next = pointer.next
                    self._tail = ancestor

                self._length -= 1
                return pointer.el

            raise ValueError(f'list.remove({el}): {el} not in list'.format(el))
        raise ValueError('remove from empty list')

    def __repr__(self) -> str:
        pointer = self._head

        if pointer is not None:
            string = ""
            pointer = self._head

            while(pointer):
                string = string + str(pointer.el) + " -> "
                pointer = pointer.next

            return string

        raise ValueError('the list is empty')
