# Fundamental Data Structures Cheat Sheet

Reference guide for Linked Lists, Stacks, Monotonic Stacks, Heaps/Priority Queues, Tries, and Matrices.

Source References:
- Linked List: [`sources/data-structures/linked-list.md`](sources/data-structures/linked-list.md)
- Stack: [`sources/data-structures/stack.md`](sources/data-structures/stack.md)
- Monotonic Stack: [`sources/data-structures/monotonic-stack.md`](sources/data-structures/monotonic-stack.md)
- Heap: [`sources/data-structures/heap.md`](sources/data-structures/heap.md)
- Trie: [`sources/data-structures/trie.md`](sources/data-structures/trie.md)
- Matrix: [`sources/data-structures/matrix.md`](sources/data-structures/matrix.md)

---

## 1. Linked List Patterns

- **Dummy Head Node**: Use `dummy = ListNode(0); dummy.next = head` to eliminate boundary checks when modifying head node.
- **Fast & Slow Pointers (Floyd's Cycle Finding)**:
  - Detect cycle: `fast` moves 2 steps, `slow` moves 1 step. Collision implies cycle.
  - Find middle node: When `fast` reaches end, `slow` is at middle.
- **Reverse Linked List**: Maintain `prev = None, curr = head`. Swap pointers iteratively in $O(N)$ time and $O(1)$ space.

---

## 2. Stack & Monotonic Stack Patterns

### Standard Stack (LIFO)
- Used for nested structure evaluation: Valid Parentheses, Evaluate Reverse Polish Notation, Basic Calculator.

### Monotonic Stack
- Maintains elements in monotonic increasing or decreasing order.
- Used to find **Next Greater Element** or **Next Smaller Element** in $O(N)$ time:
  ```python
  def next_greater_element(nums: list[int]) -> list[int]:
      res = [-1] * len(nums)
      stack = []  # stores indices
      for i, num in enumerate(nums):
          while stack and nums[stack[-1]] < num:
              idx = stack.pop()
              res[idx] = num
          stack.append(i)
      return res
  ```
- Applications: Daily Temperatures, Trapping Rain Water, Largest Rectangle in Histogram.

---

## 3. Heap / Priority Queue Patterns

- **Min-Heap vs Max-Heap**:
  - Python `heapq` is a Min-Heap. Store `-val` for Max-Heap.
- **Top-K Elements**:
  - Keep Min-Heap of size $K$. Push element, if size exceeds $K$, pop min element. Resulting heap contains $K$ largest elements in $O(N \log K)$ time.
- **Two Heaps Pattern**:
  - Maintain lower half in Max-Heap and upper half in Min-Heap to find Median of Data Stream in $O(1)$ time.

---

## 4. Trie (Prefix Tree) Pattern

- Tree structure where each node represents a character key.
- Used for fast prefix lookups, autocomplete, dictionary validation in $O(L)$ time ($L$ = word length).
```python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_word = True
```

---

## 5. Matrix Traversal Patterns

- **Directions Array**: `DIRS = [(0, 1), (1, 0), (0, -1), (-1, 0)]` for 4-directional grid steps.
- **Boundaries Guard**: `0 <= r < ROWS and 0 <= c < COLS`.
- **In-Place Transformation**:
  - Rotate Image 90 degrees: Transpose matrix (`matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]`), then reverse each row.
- **Spiral Order**: Maintain 4 boundaries (`top, bottom, left, right`).
