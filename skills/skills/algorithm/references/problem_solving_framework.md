# Coding Interview Problem-Solving Framework

A battle-tested 5-step framework for tackling algorithm and data structure problems in interviews and technical assessments.

---

## 5-Step Execution Workflow

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

## 1. Input Constraints to Algorithm Choice Cheat Sheet

Use constraints $N$ (input size) to immediately deduce acceptable time complexities:

| Input Constraint ($N$) | Max Allowed Time Complexity | Candidate Algorithms & Data Structures |
| --- | --- | --- |
| $N \le 10-12$ | $O(N!)$ or $O(2^N \cdot N)$ | Backtracking, Permutations, Subsets, TSP |
| $N \le 20-25$ | $O(2^N)$ | Bitmask DP, Exponential Backtracking |
| $N \le 100$ | $O(N^4)$ or $O(N^3)$ | 3D/4D Matrix DP, Floyd-Warshall |
| $N \le 500$ | $O(N^3)$ | Matrix Multiplication, Interval DP |
| $N \le 2,000$ | $O(N^2)$ | 2D DP, Nested Loops, $O(N^2)$ Sorting |
| $N \le 10^5 - 10^6$ | $O(N \log N)$ or $O(N)$ | Sorting, Binary Search, Two Pointers, Monotonic Stack, Heap, Sliding Window, Hash Maps, BFS/DFS, Trie, Topological Sort |
| $N \ge 10^9$ | $O(\log N)$ or $O(1)$ | Binary Search on Answer, Mathematical formulas, Matrix Exponentiation |

---

## 2. Common Edge Cases Checklist

Always explicitly verify your solution against these edge cases:
- **Arrays & Lists**: Empty array `[]`, single element `[1]`, two elements `[1, 2]`, all duplicate elements `[5, 5, 5]`, sorted vs reverse-sorted arrays, negative values.
- **Strings**: Empty string `""`, single char `"a"`, all identical chars `"aaaa"`, spaces/punctuation, case sensitivity.
- **Trees & Graphs**: Empty tree (`null`), single node, skewed tree (linked list line), disconnected graph components, cycles.
- **Numbers / Off-by-One**: Zero `0`, negative numbers, integer overflow bounds ($2^{31}-1$).

---

## 3. Communication Strategy
- **Talk Out Loud**: Explain trade-offs before typing. Compare $O(N^2)$ brute-force space/time to $O(N \log N)$ or $O(N)$ optimal approach.
- **Test Before Declaring Complete**: Hand-trace a non-trivial example step-by-step with state variables before informing the interviewer you are finished.
