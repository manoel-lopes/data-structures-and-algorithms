from typing import List


def partition(list: List[int], start: int, end: int) -> int:
    pivot = list[start]
    low = start + 1
    high = end
    while True:
        while low <= high and list[high] >= pivot:
            high = high - 1

        while low <= high and list[low] <= pivot:
            low = low + 1

        if low <= high:
            list[low], list[high] = list[high], list[low]
        else:
            break

    list[start], list[high] = list[high], list[start]
    return high


def quick_sort(list: List[int], start: int, end: int) -> None:
    if start >= end:
        return

    p = partition(list, start, end)
    quick_sort(list, start, p-1)
    quick_sort(list, p+1, end)


list = [29, 99, 27, 41, 66, 28, 44, 78, 87,
        19, 31, 76, 58, 88, 83, 97, 12, 21, 44]
print(list)
quick_sort(list, 0, len(list) - 1)
print(list)
