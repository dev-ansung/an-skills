---
name: algorithm
description: Comprehensive Data Structures and Algorithms skill covering coding interview problem-solving frameworks, core patterns (Two Pointers, Binary Search, Sliding Window, Prefix Sum, Monotonic Stack, Intervals, Greedy), advanced data structures (Heaps, Tries, Matrices, Linked Lists), tree & graph algorithms (BFS, DFS, Topological Sort, Shortest Path/Dijkstra), and Dynamic Programming & Backtracking (Memoization, Tabulation, State Space Search, Helper recursion patterns). Make sure to activate this skill whenever the user mentions algorithms, data structures, LeetCode, coding interview questions, time complexity, space complexity, Big-O analysis, or asks to solve any algorithmic problem.
---

# Algorithm Skill

Consolidated expert skill for solving Data Structures and Algorithms (DSA) problems, analyzing Big-O time and space complexity, and delivering clean coding interview solutions.

---

## 5-Step Coding Problem-Solving Framework

Use this workflow to structure any algorithmic response or interview solution. For complete guidance, see [`references/problem_solving_framework.md`](references/problem_solving_framework.md).

```
   +------------------------------+      1. Clarify parameters, return types, memory constraints,
   | 1. Understand & Clarify      | ---> scale of inputs ($N \le 10^5$), and potential edge cases.
   +------------------------------+
                  |
                  v
   +------------------------------+      2. Walk through basic example, minimum input, max bounds,
   | 2. Examples & Edge Cases     | ---> empty/null inputs, negative numbers, duplicates.
   +------------------------------+
                  |
                  v
   +------------------------------+      3. Start with naive brute-force approach, identify bottleneck,
   | 3. High-Level Approach       | ---> select optimal data structure/pattern (e.g. Heap, HashMap, 2-Pointers).
   +------------------------------+
                  |
                  v
   +------------------------------+      4. Outline step-by-step logic, state variables, and bounds
   | 4. Dry Run & Pseudocode      | ---> before writing real code to prevent off-by-one errors.
   +------------------------------+
                  |
                  v
   +------------------------------+      5. Implement modular, clean code; verify time complexity $O(f(N))$
   | 5. Code & Complexity Analysis| ---> and space complexity $O(g(N))$.
   +------------------------------+
```

---

## Topic Reference Map

Refer to specialized reference guides for detailed code patterns, complexity trade-offs, and source documents:

| Topic Area | Reference Guide | Key Highlights Covered |
| --- | --- | --- |
| **Problem Solving Framework** | [`references/problem_solving_framework.md`](references/problem_solving_framework.md) | 5-step problem solving workflow, input constraints $N$ cheat sheet, edge cases checklist. |
| **Arrays & Pointers** | [`references/arrays_and_pointers.md`](references/arrays_and_pointers.md) | Two Pointers, Binary Search (arrays & solution space), Sliding Window (Fixed/Variable), Prefix Sum, Intervals, Greedy. |
| **Data Structures** | [`references/data_structures.md`](references/data_structures.md) | Linked Lists (fast/slow pointers, reversal), Stacks & Monotonic Stacks, Heaps / Priority Queues, Tries, Matrix traversal. |
| **Trees & Graphs** | [`references/trees_and_graphs.md`](references/trees_and_graphs.md) | BFS, DFS, Topological Sort (Kahn's algorithm), Shortest Path Algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall). |
| **Dynamic Programming** | [`references/dynamic_programming.md`](references/dynamic_programming.md) | DP 5-Step process, Memoization vs Tabulation, 1D/2D/Knapsack DP, Backtracking, Helper function recursion patterns. |

---

## Executable Algorithm Scripts & Doctests

Fully tested Python implementations with `doctest` validation examples are located in `scripts/`:

- [`scripts/arrays_pointers.py`](scripts/arrays_pointers.py) - Two Pointers, Binary Search, Sliding Window, Prefix Sum, Intervals, Greedy.
- [`scripts/data_structures.py`](scripts/data_structures.py) - Reverse Linked List, Valid Parentheses, Monotonic Stack, Kth Largest Heap, Trie, Rotate Matrix.
- [`scripts/trees_graphs.py`](scripts/trees_graphs.py) - BFS Level Order, DFS Connected Components, Topological Sort (Kahn's), Dijkstra Shortest Path.
- [`scripts/dynamic_programming.py`](scripts/dynamic_programming.py) - Climbing Stairs, House Robber, Coin Change, LCS, Subsets, Permutations.
- [`scripts/run_doctests.py`](scripts/run_doctests.py) - Master runner to execute all doctests (`uv run python scripts/run_doctests.py`).

---

## Algorithm Choice & Constraints Matrix

Deduce the optimal algorithm pattern from input size $N$:

| Input Constraint ($N$) | Time Complexity Target | Preferred Pattern / Data Structure |
| --- | --- | --- |
| $N \le 12$ | $O(N!)$ or $O(2^N \cdot N)$ | Exponential Backtracking, Permutations, Subsets |
| $N \le 20-25$ | $O(2^N)$ | Bitmask DP, Recursive Backtracking |
| $N \le 500$ | $O(N^3)$ | 3D DP, Matrix Chain Multiplication, Floyd-Warshall |
| $N \le 2,000$ | $O(N^2)$ | 2D DP, Double Loops, $O(N^2)$ Sorting |
| $N \le 10^5 - 10^6$ | $O(N \log N)$ or $O(N)$ | Two Pointers, Binary Search, Sliding Window, Monotonic Stack, Heap, Hash Map, BFS/DFS, Trie, Topological Sort |
| $N \ge 10^9$ | $O(\log N)$ or $O(1)$ | Binary Search on Answer Space, Math formulas |

---

## Preserved Source Documents

Full untruncated source markdown documents are preserved in `references/sources/`:

- **Arrays & Pointers**: [`two-pointers.md`](references/sources/arrays-pointers/two-pointers.md), [`binary-search.md`](references/sources/arrays-pointers/binary-search.md), [`sliding-window-fixed.md`](references/sources/arrays-pointers/sliding-window-fixed.md), [`sliding-window-variable.md`](references/sources/arrays-pointers/sliding-window-variable.md), [`prefix-sum.md`](references/sources/arrays-pointers/prefix-sum.md), [`intervals.md`](references/sources/arrays-pointers/intervals.md), [`greedy.md`](references/sources/arrays-pointers/greedy.md)
- **Data Structures**: [`linked-list.md`](references/sources/data-structures/linked-list.md), [`stack.md`](references/sources/data-structures/stack.md), [`monotonic-stack.md`](references/sources/data-structures/monotonic-stack.md), [`heap.md`](references/sources/data-structures/heap.md), [`trie.md`](references/sources/data-structures/trie.md), [`matrix.md`](references/sources/data-structures/matrix.md)
- **Trees & Graphs**: [`bfs-introduction.md`](references/sources/trees-graphs/bfs-introduction.md), [`bfs-fundamentals.md`](references/sources/trees-graphs/bfs-fundamentals.md), [`dfs.md`](references/sources/trees-graphs/dfs.md), [`graphs.md`](references/sources/trees-graphs/graphs.md), [`topological-sort.md`](references/sources/trees-graphs/topological-sort.md), [`shortest-path-algorithms.md`](references/sources/trees-graphs/shortest-path-algorithms.md)
- **Dynamic Programming**: [`dynamic-programming-fundamentals.md`](references/sources/dynamic-programming/dynamic-programming-fundamentals.md), [`solving-questions-with-dp.md`](references/sources/dynamic-programming/solving-questions-with-dp.md), [`backtracking.md`](references/sources/dynamic-programming/backtracking.md), [`solution-space-trees.md`](references/sources/dynamic-programming/solution-space-trees.md), [`passing-values-and-helper-functions.md`](references/sources/dynamic-programming/passing-values-and-helper-functions.md), [`return-values.md`](references/sources/dynamic-programming/return-values.md)
