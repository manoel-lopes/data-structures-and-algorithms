from typing import List

from src.util.functions import swap


def bubble_sort(list: List[int]) -> List[int]:
    sorted_list = list[:]
    i = 0
    while i < len(sorted_list):
        j = len(sorted_list) - 1
        while j > i:
            if sorted_list[j] < sorted_list[j - 1]:
                swap(sorted_list, j, j-1)
            j -= 1
        i += 1
    return sorted_list
