---
title: "Graphs Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/breadth-first-search/graphs-overview"
author:
published:
created: 2026-07-25
description: "Master graph fundamentals with interactive node-edge visualization and traversal pattern exploration."
tags:
  - "clippings"
---
###### Breadth-First Search

## Graphs Overview

---

![BFS Graphs Overview](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/bfs-graphs-overview/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002406Z&X-Amz-Expires=7200&X-Amz-Signature=4e03be11cec5573b483fa7db6712d98cf2b246886caf09f78f1c0f8b98262612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

3:55

BFS Graphs Overview

8 chapters • 3 interactive checkpoints

Like Depth-First Search, breadth-first search is also used to traverse graphs. In this section, we'll cover how to implement BFS on both adjacency lists and matrices, as well as the types of problems that are best solved using BFS.

Just like with depth-first search, the most important thing to remember when implementing BFS on a graph is to keep track of visited nodes to avoid infinite loops. If we try to enqueue a node that has already been visited, we should skip it instead of adding it to the queue.

## BFS on an Adjacency List

To traverse a graph represented with an adjacency list with BFS:

- Choose a starting node and add it to the queue (we start with the first node in the adjacency list Node "1" in the example below).
- While the queue is not empty, remove the node at the front of the queue and add it to the set of visited nodes.
- Add the children of the node to the back of the queue (if they haven't been visited yet).
- Repeat steps 2 and 3 until the queue is empty.

The animation shows how BFS traverses the graph represented by:

```
adjList = {
    "1": ["2", "4"],
    "2": ["1", "3"],
    "3": ["2", "4"],
    "4": ["1", "3", "5"],
    "5": ["4"]
}
```

Visualization

Python

```
from collections import deque

def bfs(start):
  visited = set([start])
  queue = deque([start])

  while queue:
    node = queue.popleft()
    for neighbor in adjList[node]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append(neighbor)
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, -40)"><circle cx="550" cy="200" r="26" fill="#299a8d"></circle><text x="550" y="200" text-anchor="middle" dy=".3em" fill="white">5</text> <circle cx="467.55705045849464" cy="361.8033988749895" r="26" fill="#299a8d"></circle><text x="467.55705045849464" y="361.8033988749895" text-anchor="middle" dy=".3em" fill="white">4</text> <circle cx="288.19660112501055" cy="390.21130325903073" r="26" fill="#299a8d"></circle><text x="288.19660112501055" y="390.21130325903073" text-anchor="middle" dy=".3em" fill="white">3</text> <circle cx="159.7886967409693" cy="261.8033988749895" r="26" fill="#299a8d"></circle><text x="159.7886967409693" y="261.8033988749895" text-anchor="middle" dy=".3em" fill="white">2</text> <circle cx="188.1966011250105" cy="82.4429495415054" r="26" fill="#299a8d"></circle><text x="188.1966011250105" y="82.4429495415054" text-anchor="middle" dy=".3em" fill="white">1</text><line x1="538.1962470067718" y1="223.16616962889756" x2="479.36080345172286" y2="338.6372292460919" stroke="#454F5B" stroke-width="2"></line><line x1="449.17227414764443" y1="343.4186225641393" x2="206.58137743586073" y2="100.82772585235564" stroke="#454F5B" stroke-width="2"></line><line x1="441.87715360302104" y1="365.8706949660355" x2="313.87649798048415" y2="386.14400716798474" stroke="#454F5B" stroke-width="2"></line><line x1="479.36080345172286" y1="338.6372292460919" x2="538.1962470067718" y2="223.16616962889756" stroke="#454F5B" stroke-width="2"></line><line x1="269.81182481416033" y1="371.8265269481805" x2="178.17347305181954" y2="280.1881751858397" stroke="#454F5B" stroke-width="2"></line><line x1="313.87649798048415" y1="386.14400716798474" x2="441.87715360302104" y2="365.8706949660355" stroke="#454F5B" stroke-width="2"></line><line x1="163.8559928320153" y1="236.12350201951594" x2="184.1293050339645" y2="108.12284639697899" stroke="#454F5B" stroke-width="2"></line><line x1="178.17347305181954" y1="280.1881751858397" x2="269.81182481416033" y2="371.8265269481805" stroke="#454F5B" stroke-width="2"></line><line x1="184.1293050339645" y1="108.12284639697899" x2="163.8559928320153" y2="236.12350201951594" stroke="#454F5B" stroke-width="2"></line><line x1="206.58137743586073" y1="100.82772585235563" x2="449.17227414764443" y2="343.4186225641393" stroke="#454F5B" stroke-width="2"></line></g><g transform="translate(350, 60)"></g><g transform="translate(350, 120)"></g></svg>

0 / 11

1x

## BFS on an Matrix (2D Grid)

To traverse a graph represented as a matrix with BFS:

- Choose a starting node and add it to the queue (we start with top left node in the example below).
- While the queue is not empty, remove the node at the front of the queue and add it to the set of visited nodes.
- Add the four neighbors of the node to the back of the queue (if they haven't been visited yet and are within the bounds of the matrix).
- Repeat steps 2 and 3 until the queue is empty.

The animation shows how BFS traverses the graph represented by:

```
matrix = [
    [0, 0, 0],
    [0, 1, 1],
    [0, 1, 0]
]
```

Visualization

Python

```
from collections import deque

def bfs(grid):
  visited = set()
  # up, down, left, right
  directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

  queue = deque([(0, 0)])
  visited.add((0, 0))

  while queue:
    row, col = queue.popleft()

    # enqueue neighbors
    for dr, dc in directions:
      n_row = row + dr
      m_col = col + dc

      # check bounds and if neighbor is visited
      if 0 <= n_row < len(grid) \
                and 0 <= m_col < len(grid[0]) \
                and (n_row, m_col) not in visited:
        queue.append((n_row, m_col))
        visited.add((n_row, m_col))
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g><g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="140" y="0"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="210" y="70">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="280" y="0"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="350" y="70">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="420" y="0"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="490" y="70">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="140" y="140"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="210" y="210">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="280" y="140"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="350" y="210">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="420" y="140"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="490" y="210">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="140" y="280"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="210" y="350">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="280" y="280"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="350" y="350">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="11.666666666666666" stroke="#299a8d" fill="#59b9b0" height="140" width="140" opacity="0.85" stroke-opacity="0.85" x="420" y="280"></rect><text fill="white" font-weight="700" font-size="70" text-anchor="middle" dominant-baseline="middle" x="490" y="350">0</text></g></g><g opacity="1"><g opacity="1"></g><g transform="translate(350, 400)"><g transform="translate(0, 25)"></g></g></g></svg>

0 / 20

1x

## Nodes at a Level

Like binary trees, graphs can also have levels. In a graph, a level is defined as the number of edges between the root node and the current node, which is also known as the "distance" between the two nodes.

This is the primary use case of BFS in graphs: to solve questions that involve traversing the graph level-by-level, so we should be familiar with this pattern for both adjacency lists and matrices.

<svg viewBox="117.2573 106.0381 263.3334 263.3333" width="233.3334" height="233.3333" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, -101.0760498046875, 121.03812408447266)"><g><g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="29.166666666666668" style="white-space: pre;">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="0" style="fill: rgb(78, 167, 162);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="29.166666666666668" style="white-space: pre;">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="0" style="fill: rgb(67, 148, 149);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="29.166666666666668" style="white-space: pre;">2</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="0" style="fill: rgb(58, 129, 135);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="29.166666666666668" style="white-space: pre;">3</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="58.333333333333336" style="fill: rgb(78, 167, 162);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="87.5" style="white-space: pre;">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="58.333333333333336" style="fill: rgb(67, 148, 149);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="87.5" style="white-space: pre;">2</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="58.333333333333336" style="fill: rgb(58, 129, 135);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="87.5" style="white-space: pre;">3</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="58.333333333333336" style="fill: rgb(49, 110, 121);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="87.5" style="white-space: pre;">4</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="116.66666666666667" style="fill: rgb(67, 148, 149);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="145.83333333333334" style="white-space: pre;">2</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="116.66666666666667" style="fill: rgb(58, 129, 135);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="145.83333333333334" style="white-space: pre;">3</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="116.66666666666667" style="fill: rgb(49, 110, 121);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="145.83333333333334" style="white-space: pre;">4</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="116.66666666666667" style="fill: rgb(40, 91, 107);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="145.83333333333334" style="white-space: pre;">5</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="175" style="fill: rgb(58, 129, 135);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="204.16666666666666" style="white-space: pre;">3</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="175" style="fill: rgb(49, 110, 121);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="204.16666666666666" style="white-space: pre;">4</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="175" style="fill: rgb(40, 91, 107);"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="204.16666666666666" style="white-space: pre;">5</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="175" style="fill: rgb(31, 72, 94);"></rect><text x="437.50000000000006" y="204.16666666666666" text-anchor="middle" font-weight="700" font-size="29.166666666666668" fill="white" dominant-baseline="middle" style="white-space: pre;">6</text></g></g></g></svg>

Nodes in a 2D-grid labeled with their distance from the top-left node.

<svg viewBox="-36.0993 9.1518 502.2113 429.7684" width="442.2113" height="359.7684" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -99.4010009765625, 65.01300048828125)"><g transform="matrix(1, 0, 0, 1, -10.288414, -52.304161)"><line x1="550" y1="200" x2="467.55705045849464" y2="361.8033988749895" stroke="#919EAB" stroke-width="1.5"></line><line x1="467.55705045849464" y1="361.8033988749895" x2="188.19660112501052" y2="82.4429495415054" stroke="#919EAB" stroke-width="1.5"></line><line x1="467.55705045849464" y1="361.8033988749895" x2="288.19660112501055" y2="390.21130325903073" stroke="#919EAB" stroke-width="1.5"></line><line x1="467.55705045849464" y1="361.8033988749895" x2="550" y2="200" stroke="#919EAB" stroke-width="1.5"></line><line x1="288.19660112501055" y1="390.21130325903073" x2="159.7886967409693" y2="261.8033988749895" stroke="#919EAB" stroke-width="1.5"></line><line x1="288.19660112501055" y1="390.21130325903073" x2="467.55705045849464" y2="361.8033988749895" stroke="#919EAB" stroke-width="1.5"></line><line x1="159.7886967409693" y1="261.8033988749895" x2="188.19660112501052" y2="82.4429495415054" stroke="#919EAB" stroke-width="1.5"></line><line x1="159.7886967409693" y1="261.8033988749895" x2="288.19660112501055" y2="390.21130325903073" stroke="#919EAB" stroke-width="1.5"></line><line x1="188.19660112501052" y1="82.4429495415054" x2="159.7886967409693" y2="261.8033988749895" stroke="#919EAB" stroke-width="1.5"></line><line x1="188.19660112501052" y1="82.4429495415054" x2="467.55705045849464" y2="361.8033988749895" stroke="#919EAB" stroke-width="1.5"></line><circle cx="550" cy="200" r="26" fill="#299a8d"></circle><text x="550" y="200" text-anchor="middle" dy=".3em" fill="white" style="white-space: pre;">2</text> <circle cx="467.55705045849464" cy="361.8033988749895" r="26" fill="#299a8d"></circle><text x="467.55705045849464" y="361.8033988749895" text-anchor="middle" dy=".3em" fill="white" style="white-space: pre;">1</text> <circle cx="288.19660112501055" cy="390.21130325903073" r="26" fill="#299a8d"></circle><text x="288.19660112501055" y="390.21130325903073" text-anchor="middle" dy=".3em" fill="white" style="white-space: pre;">2</text> <circle cx="159.7886967409693" cy="261.8033988749895" r="26" fill="#299a8d"></circle><text x="159.7886967409693" y="261.8033988749895" text-anchor="middle" dy=".3em" fill="white" style="white-space: pre;">1</text> <circle cx="188.19660112501052" cy="82.4429495415054" r="26" fill="#299a8d"></circle><text x="188.19660112501052" y="82.4429495415054" text-anchor="middle" dy=".3em" fill="white" style="white-space: pre;">0</text></g><g transform="matrix(1, 0, 0, 1, 339.711578, 47.695839)"></g></g></svg>

Nodes in graph labeled with their distance from the top-left node (Node(0)).

And just like binary trees, the BFS algorithm can be extended to know when we have finished processing all nodes at a level. We can do this by adding a for-loop that iterates over the size of the queue at the beginning of each level.

### Adjacency List Level-By-Level

```
from collections import deque

def bfs_levels(graph, start):
    queue = deque([start])
    visited = set()
    visited.add(start)
    levels = []

    while queue:
        level_size = len(queue)
        current_level = []

        for _ in range(level_size):
            node = queue.popleft()
            current_level.append(node)
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
        
        # IMPORTANT
        # we have finished processing all nodes at the current level
        levels.append(current_level)

    return levels
```

### Matrix Level-By-Level

```
from collections import deque

def bfs_level_by_level(matrix):
    rows, cols = len(matrix), len(matrix[0])
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    # start at the top-left corner
    queue = deque([(0, 0)])
    visited = set([(0, 0)])

    levels = []
    while queue:
        level_size = len(queue)
        current_level = []

        for _ in range(level_size):
            row, col = queue.popleft()
            current_level.append((row, col))
            for dr, dc in directions:
                r, c = row + dr, col + dc
                if 0 <= r < rows and 0 <= c < cols and (r, c) not in visited:
                    visited.add((r, c))
                    queue.append((r, c))

        # IMPORTANT
        # we have finished processing all nodes at this level
        levels.append(current_level)

    return levels
```

### Shortest Path in a Graph

A consequence of the level-by-level nature of BFS traversal is that we can use it to find the shortest path between two nodes in a graph. Because BFS traverses the graph level-by-level, the first time we reach the destination node will be on the shortest path between the two nodes.

The animation below shows how BFS finds the shortest path between the top left node in the matrix and the first node with value "1":

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 350"><g transform="translate(0, 87.5)"><g><g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="87.5">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="204.16666666666666">0</text></g></g><g opacity="1"></g></g></svg>

0 / 8

1x

Compare this to depth-first search, where the first path it encounters might not be the shortest path between two nodes:

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 350"><g transform="translate(0, 87.5)"><g><g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="0"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="29.166666666666668">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="87.5">1</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="58.333333333333336"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="87.5">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="116.66666666666667"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="145.83333333333334">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="233.33333333333331" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="262.5" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="291.6666666666667" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="320.8333333333333" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="350" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="379.1666666666667" y="204.16666666666666">0</text></g> <g opacity="0.85"><rect rx="2" stroke-width="4.861111111111112" stroke="#299a8d" fill="#59b9b0" height="58.333333333333336" width="58.333333333333336" opacity="0.85" stroke-opacity="0.85" x="408.3333333333333" y="175"></rect><text fill="white" font-weight="700" font-size="29.166666666666668" text-anchor="middle" dominant-baseline="middle" x="437.50000000000006" y="204.16666666666666">0</text></g></g><g opacity="1"></g></g></svg>

simple matrix DFS traversal

0 / 19

1x

To find the shortest path using DFS, we would have to explore all possible paths and then compare the lengths of each path to find the shortest one at the end. This makes BFS a better choice for any question that involves finding the shortest path between two nodes in a graph.