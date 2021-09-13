from typing import Optional, TypeVar, Generic, Union
from abc import ABC, abstractmethod

from src.data_structures.models.node import Node

T = TypeVar('T')


class List(ABC, Generic[T]):

    def __init__(self) -> None:
        self._head: Node[T] = None
        self._tail: Node[T] = None
        self._length: int = 0

    def __len__(self) -> int:
        return self._length

    @property
    def head(self) -> Optional[T]:
        if self._head:
            return self._head.el

        raise IndexError('the list is empty')

    @property
    def tail(self) -> Union[T, None]:
        if self._tail:
            return self._tail.el

        raise IndexError('the list is empty')

    @abstractmethod
    def append(self, el: T) -> int:
        pass

    def _getNode(self, index: int) -> Node[T]:
        if index >= 0 and index <= self._length:
            pointer = self._head

            i = 0
            while (i < index and pointer):
                pointer = pointer.next
                i += 1

            return pointer

    @abstractmethod
    def insert(self, index: int, el: T) -> int:
        pass

    @abstractmethod
    def remove(self, el: T) -> Optional[T]:
        pass

    def index(self, el: T) -> Optional[int]:
        pointer = self._head

        i = 0
        while(pointer):
            if pointer.el == el:
                return i

            pointer = pointer.next
            i += 1

        raise ValueError('{} is not in the list'.format(el))

    def __getitem__(self, index: int) -> Optional[T]:
        pointer = self._getNode(index)
        if pointer:
            return pointer.el

        raise IndexError('list index out of range')

    def __setitem__(self, index: int, el: T) -> None:
        pointer = self._getNode(index)
        if pointer:
            pointer.el = el

        raise IndexError('list index out of range')

    def clear(self) -> None:
        self._head = None
        self._tail = None
        self._length = 0

    @abstractmethod
    def __repr__(self) -> str:
        pass

    def __str__(self) -> str:
        return self.__repr__()
