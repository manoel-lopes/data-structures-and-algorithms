# from models.node import DoublyNode
# from lists.lib import List

# from typing import TypeVar, Generic, Union, overload

# T = TypeVar('T')


# class DoublyLinkedList(List, Generic[T]):
#     def __init__(self):
#         super().__init__()
#         self._head: DoublyNode[T] = None
#         self._tail: DoublyNode[T] = None
#         self._length: int = 0
        
#     @property
#     def head(self) -> Union[T, None]:
#         if self._head:
#             return self._head.el
#         else:
#             raise IndexError('the list is empty')

#     @property
#     def tail(self) -> Union[T, None]:
#         if self._tail:
#             return self._tail.el
#         else:
#             raise IndexError('the list is empty')
    

#     def append(self, el: T):
#         pass

#     def _getNode(self, index: int):
#         pass

#     def insert(self, index: int, el: T):
#         pass

#     def remove(self, el: T):
#         pass

#     def pop(self):
#         pass
        
#     def __repr__(self):
#         pointer = self._head
#         if pointer == None:
#             raise IndexError('the list is empty')
#         string = ""
#         pointer = self._head
#         while(pointer):
#             string = string + str(pointer.el) + " <=> "
#             pointer = pointer.next
#         return string

#     def __str__(self):
#         return self.__repr__()