from typing import List


def swap(list: List[int], a: int, b: int) -> None:
    list[a], list[b] = list[b], list[a]


def bubble_sort(list: List[int]) -> None:
    i = 0
    while i < len(list):
        j = len(list) - 1
        while j > i:
            if list[j] < list[j - 1]:
                swap(list, j, j-1)
            j -= 1
        i += 1


list = [29, 99, 27, 41, 66, 28, 44, 78, 87,
        19, 31, 76, 58, 88, 83, 97, 12, 21, 44]
print(list)
bubble_sort(list)
print(list)
