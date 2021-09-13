from typing import List, Optional
from random import randint


def swap(list: List[int], a: int, b: int) -> None:
    list[a], list[b] = list[b], list[a]


def generate_ramdom_list(n: int, max: Optional[int] = None) -> List[int]:
    list = []

    if not max:
        max = n

    for _ in range(n):
        list.append(randint(0, max))

    return list
