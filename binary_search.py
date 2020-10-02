import math


def binary_search(
    l,
    target,
    left=None,
    right=None
):
    if left is None:
        left = 0
    if right is None:
        right = len(l) - 1
    mid = math.floor((left + right) / 2)
    if left > right:
        return None
    pivot = l[mid]
    if pivot == target:
        return mid
    if pivot > target:
        return binary_search(l, target, 0, mid - 1)
    if pivot < target:
        return binary_search(l, target, mid + 1, right)


tests = [
    [binary_search([1, 2, 3, 4, 5], 3), 2],
    [binary_search([2, 3, 4, 5], 5), 3],
    [binary_search([31, 44, 51, 200], 200), 3],
    [binary_search([31, 44, 51, 200], 1), None],
    [binary_search([31, 44, 51, 200], 44), 1],
    [binary_search([-1, 0, 3, 5, 9, 12], 2), None]
]

for res in tests:
    print(res[0] == res[1])
