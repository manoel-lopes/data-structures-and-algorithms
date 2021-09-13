from typing import TypeVar, Generic, Optional

T = TypeVar('T')


class Node(Generic[T]):
    def __init__(self, el: T) -> None:
        self.el: T = el
        self.next: Optional[Node[T]] = None


class DoublyNode(Generic[T]):
    def __init__(self, el: T) -> None:
        self.el: T = el
        self.prev: Optional[DoublyNode[T]] = None
        self.next: Optional[DoublyNode[T]] = None
