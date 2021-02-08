from models.linked_list_models import Node
from typing import TypeVar, Generic, Union

T = TypeVar('T')


class LinkedList(Generic[T]):
    def __init__(self) -> None:
        self._head: Node[T] = None
        self._tail: Node[T] = None
        self._length: int = 0

    def __len__(self):
        return self._length

    @property
    def head(self) -> Union[T, None]:
        if self._head:
            return self._head.el
        else:
            raise IndexError('the list is empty')

    @property
    def tail(self) -> Union[T, None]:
        if self._tail:
            return self._tail.el
        else:
            raise IndexError('the list is empty')

    def append(self, el: T):
        node = Node(el)

        if self._head:
            self._tail.next = node
        else:
            self._head = node

        self._tail = node
        self._length += 1

        return self._length

    def _getNode(self, index: int):
        pointer = self._head
        for i in range(index):
            if pointer:
                pointer = pointer.next
        return pointer

    def insert(self, index: int, el: T):
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

    def remove(self, el: T):
        if self._length:
            index = self.index(el)

            if index != None:
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

            raise ValueError('list.remove({}): {} not in list'.format(el))
        raise IndexError('remove from empty list')

    def pop(self):
        if self._length:
            secondToLast = self._getNode(self._length - 2)
            removed = self._tail

            if self._tail == self._head:
                self._head = None
                self._tail = None

            else:
                secondToLast.next = self._tail.next
                self._tail = secondToLast

            self._length -= 1
            return removed.el
        raise IndexError('pop from empty list')

    def index(self, el) -> Union[int, None]:
        pointer = self._head
        i = 0
        while(pointer):
            if pointer.el == el:
                return i
            pointer = pointer.next
            i += 1
        raise ValueError('{} is not in the list'.format(el))

    def __getitem__(self, index: int):
        pointer = self._getNode(index)
        if pointer:
            return pointer.el
        else:
            raise IndexError('list index out of range')

    def __setitem__(self, index: int, el: T):
        pointer = self._getNode(index)
        if pointer:
            pointer.el = el
        else:
            raise IndexError('list index out of range')

    def clear(self):
        self._head = None
        self._tail = None
        self._length = 0

    def __repr__(self):
        pointer = self._head
        if pointer == None:
            raise IndexError('the list is empty')
        string = ""
        pointer = self._head
        while(pointer):
            string = string + str(pointer.el) + " -> "
            pointer = pointer.next
        return string

    def __str__(self):
        return self.__repr__()
