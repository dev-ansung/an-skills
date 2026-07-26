# Trees & Graphs Algorithms Cheat Sheet

Reference guide for BFS, DFS, Graph traversals, Topological Sort, and Shortest Path algorithms.

Source References:
- BFS Introduction: [`sources/trees-graphs/bfs-introduction.md`](sources/trees-graphs/bfs-introduction.md)
- BFS Fundamentals: [`sources/trees-graphs/bfs-fundamentals.md`](sources/trees-graphs/bfs-fundamentals.md)
- DFS: [`sources/trees-graphs/dfs.md`](sources/trees-graphs/dfs.md)
- Graphs: [`sources/trees-graphs/graphs.md`](sources/trees-graphs/graphs.md)
- Topological Sort: [`sources/trees-graphs/topological-sort.md`](sources/trees-graphs/topological-sort.md)
- Shortest Path Algorithms: [`sources/trees-graphs/shortest-path-algorithms.md`](sources/trees-graphs/shortest-path-algorithms.md)

---

## 1. Breadth-First Search (BFS)

- Uses a **Queue (FIFO)** (`collections.deque`).
- Explores level-by-level; guarantees **shortest path** in unweighted graphs.
```python
from collections import deque

def bfs(root):
    if not root:
        return
    queue = deque([root])
    visited = {root}
    
    while queue:
        level_size = len(queue)
        for _ in range(level_size):
            node = queue.popleft()
            for neighbor in node.neighbors:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
```

---

## 2. Depth-First Search (DFS)

- Uses a **Stack / Recursion**.
- Dives as deep as possible along each branch before backtracking.
- Used for: Connected components, Tree path sum, Cycle detection, Flood fill.

---

## 3. Topological Sort (DAG Only)

Used for task scheduling, dependency ordering, and build systems.

### Kahn's Algorithm (BFS-based)
1. Calculate **In-degree** (number of incoming edges) for every node.
2. Initialize queue with nodes having `in_degree == 0`.
3. Pop node from queue, append to result list, decrease in-degree of all neighbors by 1.
4. If neighbor in-degree becomes 0, push neighbor to queue.
5. If result length equals total nodes, valid topological order exists; else graph has a cycle.

---

## 4. Shortest Path Algorithms

| Algorithm | Graph Type | Time Complexity | Best Used For |
| --- | --- | --- | --- |
| **BFS** | Unweighted Graph | $O(V + E)$ | Unweighted shortest path |
| **Dijkstra** | Non-negative Weighted Graph | $O((V + E) \log V)$ | Single-source shortest path (using Min-Heap Priority Queue) |
| **Bellman-Ford** | Graphs with Negative Weights | $O(V \cdot E)$ | Detects negative weight cycles |
| **Floyd-Warshall** | All-Pairs Shortest Path | $O(V^3)$ | Dense graphs with small $V$ ($V \le 500$) |

### Dijkstra's Algorithm Implementation Template
```python
import heapq

def dijkstra(graph: dict, start: int) -> dict:
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    pq = [(0, start)]  # (dist, node)
    
    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]:
            continue
            
        for v, weight in graph[u]:
            distance = curr_dist + weight
            if distance < distances[v]:
                distances[v] = distance
                heapq.heappush(pq, (distance, v))
                
    return distances
```
