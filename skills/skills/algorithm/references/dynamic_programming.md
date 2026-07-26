# Dynamic Programming & Recursion Cheat Sheet

Reference guide for DP state design, memoization vs tabulation, backtracking, tree recursion, and helper function patterns.

Source References:
- DP Fundamentals: [`sources/dynamic-programming/dynamic-programming-fundamentals.md`](sources/dynamic-programming/dynamic-programming-fundamentals.md)
- Solving Questions with DP: [`sources/dynamic-programming/solving-questions-with-dp.md`](sources/dynamic-programming/solving-questions-with-dp.md)
- Backtracking: [`sources/dynamic-programming/backtracking.md`](sources/dynamic-programming/backtracking.md)
- Solution Space Trees: [`sources/dynamic-programming/solution-space-trees.md`](sources/dynamic-programming/solution-space-trees.md)
- Passing Values & Helper Functions: [`sources/dynamic-programming/passing-values-and-helper-functions.md`](sources/dynamic-programming/passing-values-and-helper-functions.md)
- Return Values: [`sources/dynamic-programming/return-values.md`](sources/dynamic-programming/return-values.md)

---

## 1. The 5-Step Dynamic Programming Framework

1. **Define State**: What parameters uniquely describe a subproblem? (e.g. `dp[i]` = min cost at index $i$; or `dp[i][j]` = longest common subsequence of `A[0..i]` and `B[0..j]`).
2. **State Transition**: How do you express the answer to a subproblem using answers to smaller subproblems? (e.g. `dp[i] = min(dp[i-1], dp[i-2]) + cost[i]`).
3. **Base Cases**: What are the smallest non-divisible subproblems? (e.g. `dp[0] = cost[0]`, `dp[1] = cost[1]`).
4. **Order of Computation**: Bottom-up loop direction or top-down recursive order ensuring dependencies are computed first.
5. **Target State**: Which state represents the final answer? (e.g. `dp[N-1]`).

---

## 2. Memoization vs Tabulation

| Approach | Mechanics | Advantages | Disadvantages |
| --- | --- | --- | --- |
| **Top-Down Memoization** | Recursion + Cache (`functools.lru_cache` or hash map) | Only computes reachable states; intuitive translation from recursive definition | Call stack memory overhead; risk of recursion depth error |
| **Bottom-Up Tabulation** | Iterative loop filling DP array/table | No call stack overhead; enables space optimization (e.g. reducing $O(N^2)$ space to $O(N)$) | Computes all table states regardless of whether needed |

---

## 3. Standard DP Patterns

- **1D DP**: Climbing Stairs, House Robber, Coin Change, Longest Increasing Subsequence (LIS).
- **Knapsack DP**:
  - 0/1 Knapsack (item used at most once): Loop items outer, weight inner **backwards**.
  - Unbounded Knapsack (item reused infinitely): Loop weight inner **forwards**.
- **String / 2D DP**: Longest Common Subsequence (LCS), Edit Distance, Unique Paths.
- **Interval DP**: Matrix Chain Multiplication, Burst Balloons (Loop interval length $L$ from $1 \dots N$).

---

## 4. Backtracking & State Space Trees

Backtracking systematically searches solution spaces (trees/DAGs of decisions):
1. **Choose**: Make a decision (add element to path).
2. **Explore**: Recurse down decision tree.
3. **Unchoose (Backtrack)**: Revert decision (pop element from path) to explore alternative choices.

```python
def backtrack(start_idx: int, path: list):
    if is_solution(path):
        result.append(path.copy())
        return
        
    for i in range(start_idx, len(candidates)):
        # 1. Choose
        path.append(candidates[i])
        # 2. Explore
        backtrack(i + 1, path)
        # 3. Unchoose
        path.pop()
```

---

## 5. Recursion Helper Patterns: Passing Values Down vs Returning Up

- **Passing Values Down (Top-Down Flow)**:
  - Pass accumulated state (e.g. `current_sum`, `path`) down as function arguments.
  - Used when base case handles result collection or printing.
- **Returning Values Up (Bottom-Up Flow)**:
  - Base cases return primitive values (e.g. $0$, $1$, or `True`/`False`).
  - Parent nodes combine results returned from children (e.g. `1 + max(left_depth, right_depth)`).
