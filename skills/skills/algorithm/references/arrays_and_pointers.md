# Arrays, Pointers & Searching Cheat Sheet

Reference guide for core array techniques: Two Pointers, Binary Search, Sliding Window, Prefix Sum, Intervals, and Greedy.

Source References:
- Two Pointers: [`sources/arrays-pointers/two-pointers.md`](sources/arrays-pointers/two-pointers.md)
- Binary Search: [`sources/arrays-pointers/binary-search.md`](sources/arrays-pointers/binary-search.md)
- Fixed Sliding Window: [`sources/arrays-pointers/sliding-window-fixed.md`](sources/arrays-pointers/sliding-window-fixed.md)
- Variable Sliding Window: [`sources/arrays-pointers/sliding-window-variable.md`](sources/arrays-pointers/sliding-window-variable.md)
- Prefix Sum: [`sources/arrays-pointers/prefix-sum.md`](sources/arrays-pointers/prefix-sum.md)
- Intervals: [`sources/arrays-pointers/intervals.md`](sources/arrays-pointers/intervals.md)
- Greedy: [`sources/arrays-pointers/greedy.md`](sources/arrays-pointers/greedy.md)

---

## 1. Two Pointers Pattern

- **Opposite Direction (Collision)**:
  - `left = 0`, `right = n - 1`; shrink window inwards based on comparison.
  - Used for: Two Sum (sorted array), Container With Most Water, Valid Palindrome.
- **Same Direction (Fast & Slow / Read & Write)**:
  - `fast` explores ahead; `slow` tracks output location.
  - Used for: Remove Duplicates from Sorted Array, Move Zeroes.

---

## 2. Binary Search Pattern

### Standard Template
```python
def binary_search(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### Binary Search on Solution Space
- Use when searching for minimum/maximum feasible value $X$ in monotonic range `[min_val, max_val]`.
- Pattern: Evaluate `is_valid(mid)`; if true, shrink range to find optimal boundary.
- Used for: Koko Eating Bananas, Capacity To Ship Packages Within D Days, Split Array Largest Sum.

---

## 3. Sliding Window Pattern

- **Fixed Length Window**:
  - Maintain window of size $K$. Add `nums[right]`, subtract `nums[right - K]`.
  - Used for: Maximum Sum Subarray of Size K, Permutation in String.
- **Variable Length Window**:
  - Expand `right` to satisfy condition; shrink `left` while condition is invalid (or valid, depending on min/max optimization).
  - Used for: Longest Substring Without Repeating Characters, Minimum Window Substring.

---

## 4. Prefix Sum Pattern

- Precalculate cumulative sums: `prefix[i] = prefix[i-1] + nums[i-1]` ($prefix[0] = 0$).
- Range sum query $sum(L, R) = prefix[R+1] - prefix[L]$ in $O(1)$ time.
- Combine with **Hash Map** (`prefix_sum -> count`) for subarray sum equal to $K$ in $O(N)$ time:
  - Check if `current_prefix - K` exists in Hash Map.

---

## 5. Intervals Pattern

1. **Sort Intervals**: Sort by start time `intervals.sort(key=lambda x: x[0])`.
2. **Overlap Check**: Interval $A = [s_1, e_1]$ and $B = [s_2, e_2]$ overlap if $\max(s_1, s_2) \le \min(e_1, e_2)$.
3. **Merge Interval**: If overlapping with last merged interval, update end time `merged[-1][1] = max(merged[-1][1], interval[1])`.
4. **Key Variations**: Insert Interval, Non-overlapping Intervals (Greedy choice by smallest end time), Meeting Rooms.

---

## 6. Greedy Algorithms Pattern

- Make locally optimal choice at each step to reach global optimum.
- Pre-requisite: Must satisfy **Optimal Substructure** and **Greedy Choice Property**.
- Common applications: Jump Game, Task Scheduler, Gas Station, Minimum Number of Arrows to Burst Balloons.
