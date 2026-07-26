"""Trees and Graphs Algorithms with doctests."""

from collections import deque
import heapq


def bfs_level_order(graph: dict, start: int) -> list[int]:
    """Perform BFS level-order traversal on unweighted graph.

    >>> graph = {0: [1, 2], 1: [2], 2: [0, 3], 3: [3]}
    >>> bfs_level_order(graph, 2)
    [2, 0, 3, 1]
    """
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order


def dfs_components_count(n: int, edges: list[list[int]]) -> int:
    """Find number of connected components in undirected graph.

    >>> dfs_components_count(5, [[0, 1], [1, 2], [3, 4]])
    2
    >>> dfs_components_count(5, [[0, 1], [1, 2], [2, 3], [3, 4]])
    1
    """
    adj = {i: [] for i in range(n)}
    for u, v in edges:
        adj[u].append(v)
        adj[v].append(u)

    visited = set()

    def dfs(node):
        visited.add(node)
        for neighbor in adj[node]:
            if neighbor not in visited:
                dfs(neighbor)

    count = 0
    for i in range(n):
        if i not in visited:
            count += 1
            dfs(i)
    return count


def topological_sort(num_courses: int, prerequisites: list[list[int]]) -> list[int]:
    """Topological sort using Kahn's algorithm (BFS in-degree).

    >>> topological_sort(2, [[1, 0]])
    [0, 1]
    >>> topological_sort(4, [[1, 0], [2, 0], [3, 1], [3, 2]])
    [0, 1, 2, 3]
    >>> topological_sort(2, [[1, 0], [0, 1]])
    []
    """
    adj = {i: [] for i in range(num_courses)}
    in_degree = [0] * num_courses
    for dest, src in prerequisites:
        adj[src].append(dest)
        in_degree[dest] += 1

    queue = deque([i for i in range(num_courses) if in_degree[i] == 0])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return order if len(order) == num_courses else []


def dijkstra_shortest_path(n: int, edges: list[list[int]], src: int) -> dict[int, int]:
    """Single-source shortest path using Dijkstra's algorithm.

    >>> edges = [[0, 1, 4], [0, 2, 1], [2, 1, 2], [1, 3, 1], [2, 3, 5]]
    >>> dijkstra_shortest_path(4, edges, 0)
    {0: 0, 1: 3, 2: 1, 3: 4}
    """
    adj = {i: [] for i in range(n)}
    for u, v, w in edges:
        adj[u].append((v, w))

    distances = {i: float("inf") for i in range(n)}
    distances[src] = 0
    pq = [(0, src)]

    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]:
            continue
        for v, w in adj[u]:
            if curr_dist + w < distances[v]:
                distances[v] = curr_dist + w
                heapq.heappush(pq, (distances[v], v))

    return {k: int(v) for k, v in distances.items()}


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
