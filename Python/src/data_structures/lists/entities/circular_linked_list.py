# from models.node import Node
# from lists.linked_list import LinkedList

# from typing import TypeVar, Generic, Union, overload

# T = TypeVar('T')

# class CircularLinkedList(LinkedList, Generic[T]):
#     def __init__(self) -> None:
#         super().__init__()
    
#     # @overload
#     # def append(self, el: T):
#     #     node = Node(el)

#     #     if self._head :
#     #         self._tail.next = node

#     #     else:
#     #         self._head = node

#     #     self._tail = node
#     #     self._tail.next = self._head
        
#     #     self._length += 1

#     #     return self._length
    
#     # def insert(self, index: int, el: T):
#     #     pass

#     # def remove(self, el: T):
#     #     pass

#     def __repr__(self):
#         pointer = self._head
#         if pointer == None:
#             raise IndexError('the list is empty')
#         string = ""
#         pointer = self._head
#         while(pointer):
#             string = string + str(pointer.el) + " -> "
#             pointer = pointer.next
#         string = string + str(self._head.el)
        
#         return string

#     def __str__(self):
#         return self.__repr__()