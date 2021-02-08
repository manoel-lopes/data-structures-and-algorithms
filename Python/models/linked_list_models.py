from typing import TypeVar, Generic

T = TypeVar('T')


class Node(Generic[T]):
    def __init__(self, el) -> None:
        self.el: T = el
        self.next: Node[T] = None

class DoublyNode(Generic[T]):
    def __init__(self, el) -> None:
        self.el: T = el
        self.prev: DoublyNode[T] = None
        self.next: DoublyNode[T] = None
