"""Fundamental Data Structures Algorithms with doctests."""

import heapq
from typing import Optional


class ListNode:
    def __init__(self, val: int = 0, next: "Optional[ListNode]" = None):
        self.val = val
        self.next = next


def reverse_linked_list_values(vals: list[int]) -> list[int]:
    """Reverse a linked list and return values list.

    >>> reverse_linked_list_values([1, 2, 3, 4, 5])
    [5, 4, 3, 2, 1]
    >>> reverse_linked_list_values([])
    []
    """
    if not vals:
        return []
    head = ListNode(vals[0])
    curr = head
    for v in vals[1:]:
        curr.next = ListNode(v)
        curr = curr.next

    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    res = []
    while prev:
        res.append(prev.val)
        prev = prev.next
    return res


def is_valid_parentheses(s: str) -> bool:
    """Validate string of brackets.

    >>> is_valid_parentheses("()")
    True
    >>> is_valid_parentheses("()[]{}")
    True
    >>> is_valid_parentheses("(]")
    False
    """
    mapping = {")": "(", "}": "{", "]": "["}
    stack = []
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else "#"
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack


def next_greater_element(nums: list[int]) -> list[int]:
    """Find next greater element for each item using monotonic stack.

    >>> next_greater_element([2, 1, 2, 4, 3])
    [4, 2, 4, -1, -1]
    >>> next_greater_element([1, 2, 3, 4])
    [2, 3, 4, -1]
    """
    res = [-1] * len(nums)
    stack = []
    for i, num in enumerate(nums):
        while stack and nums[stack[-1]] < num:
            idx = stack.pop()
            res[idx] = num
        stack.append(i)
    return res


def find_kth_largest(nums: list[int], k: int) -> int:
    """Find Kth largest element in array using Min-Heap.

    >>> find_kth_largest([3, 2, 1, 5, 6, 4], 2)
    5
    >>> find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)
    4
    """
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]


class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False


class Trie:
    """Prefix Tree data structure.

    >>> trie = Trie()
    >>> trie.insert("apple")
    >>> trie.search("apple")
    True
    >>> trie.search("app")
    False
    >>> trie.starts_with("app")
    True
    >>> trie.insert("app")
    >>> trie.search("app")
    True
    """

    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_word

    def starts_with(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            if char not in node.children:
                return False
            node = node.children[char]
        return True


def rotate_matrix_90(matrix: list[list[int]]) -> list[list[int]]:
    """Rotate n x n matrix 90 degrees clockwise in-place.

    >>> rotate_matrix_90([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
    [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
    """
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()
    return matrix


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
