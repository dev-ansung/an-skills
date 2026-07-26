---
title: "Matrix Traversal & Manipulation | Hello Interview"
source: "https://www.hellointerview.com/learn/code/depth-first-search/matrices"
author:
published:
created: 2026-07-25
description: "Explore matrix DFS patterns with grid traversal visualizations and boundary handling."
tags:
  - "clippings"
---
###### Depth-First Search

## Matrices

---

Another common way to represent a graph is as a matrix (2D-grid). Each cell in the grid represents a node. The neighbors of each node are the cells that are adjacent to it (in the up, down, left, and right directions).

```
grid = [
      [1, 0, 1],      
      [1, 0, 0],
      [0, 0, 1]
]
```

<svg viewBox="0 0 500 500"><defs><linearGradient id="color-2" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.559217, 0, 0, 0.869119, -440.564952, -1002.70618)" bx:pinned="true"><stop style="stop-color: rgb(191, 218, 227);"></stop></linearGradient><linearGradient id="color-1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.559217, 0, 0, 0.869119, -440.564952, -1002.706241)" bx:pinned="true"><stop style="stop-color: rgb(41, 154, 141);"></stop></linearGradient></defs><g transform="matrix(1, 0, 0, 1, -111.28714752197264, 92.11788177490234)"><g><g transform="matrix(1, 0, 0, 1, 0, 29.166666)"><g transform="translate(0, 0)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">1</text></g></g> <g transform="translate(0, 58.333333333333336)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">0</text></g></g> <g transform="translate(0, 116.66666666666667)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">1</text></g></g><g opacity="1"></g></g><path d="M 140.665 258.851 H 166.089 L 166.089 248.013 L 186.617 262.464 L 166.089 276.914 L 166.089 266.076 H 140.665 V 258.851 Z" transform="matrix(-0.999999, -0.001607, 0.001607, -0.999999, 478.751099, 378.255219)" bx:shape="arrow 140.665 248.013 45.952 28.901 7.225 20.528 0 1@a9313812" style="stroke: url(&quot;#color-1&quot;); stroke-width: 2px; stroke-opacity: 0;"></path><path d="M -113.627 -237.175 H -93.09 L -93.09 -248.013 L -76.508 -233.563 L -93.09 -219.112 L -93.09 -229.95 H -113.627 V -237.175 Z" transform="matrix(0.999999, 0.001607, 0.001607, -0.999999, 477.187135, -118.027796)" bx:shape="arrow -113.627 -248.013 37.119 28.901 7.225 16.582 0 1@f64861ba" style="stroke: url(&quot;#color-1&quot;); stroke-width: 2px; stroke-opacity: 0;"></path><path d="M 117.081 264.411 H 138.243 L 138.243 253.34 L 155.329 268.101 L 138.243 282.862 L 138.243 271.791 H 117.081 V 264.411 Z" transform="matrix(0.010775, -0.999942, 0.999942, 0.010775, 213.520137, -188.818351)" bx:shape="arrow 117.081 253.34 38.248 29.522 7.38 17.086 0 1@cd63d6c4" style="stroke: url(&quot;#color-1&quot;); stroke-width: 2px; stroke-opacity: 0; transform-box: fill-box; transform-origin: 50% 50%;"></path><path d="M -106.656 -242.269 H -87.379 L -87.379 -253.34 L -71.814 -238.579 L -87.379 -223.818 L -87.379 -234.889 H -106.656 V -242.269 Z" transform="matrix(-0.010775, 0.999942, 0.999942, 0.010775, 439.056761, 388.494659)" bx:shape="arrow -106.656 -253.34 34.842 29.522 7.38 15.565 0 1@715005ce" style="stroke: url(&quot;#color-1&quot;); stroke-width: 2px; stroke-opacity: 0;"></path></g><g transform="translate(350, 233.33333333333334)"><g transform="translate(0, 25)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="22"></g></g><g transform="translate(0, 60)"></g></g></g></svg>

grid\[1\]\[1\] is a node. Its neighbors are grid\[0\]\[1\], grid\[2\]\[1\], grid\[1\]\[0\], and grid\[1\]\[2\]

#### DFS on a Matrix

DFS on a matrix is similar to DFS on an adjacency list. We still have to keep track of visited nodes, and we recursively call DFS on each neighbor of the current node.

The main difference is that each cell can have at most 4 neighbors (up, down, left, right), and that we need to check if the neighbor is within the bounds of the grid before visiting it.

```
matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]
```

Visualization

Python

```
def dfs(matrix):
  visited = set()
  # up, down, left, right
  directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

  def dfs_helper(r, c):
    if (r, c) in visited:
      return

    # check if the cell is out of bounds
    if r < 0 or r >= len(matrix) or c < 0 or c >= len(matrix[0]):
      return

    visited.add((r, c))
    for dr, dc in directions:
      dfs_helper(r + dr, c + dc)
    return

   dfs_helper(0, 0)
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 29.166666666666668)"><g transform="translate(0, 0)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">1</text></g></g> <g transform="translate(0, 58.333333333333336)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">0</text></g></g> <g transform="translate(0, 116.66666666666667)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="262.5"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="291.66666666666663" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="320.83333333333337"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="350" y="29.166666666666686">0</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.861111111111114" stroke="#299a8d" fill="#59b9b0" height="58.33333333333337" width="58.33333333333337" opacity="0.85" stroke-opacity="0.85" x="379.16666666666663"></rect><text fill="#FFFFFF" font-weight="700" font-size="29.166666666666686" text-anchor="middle" dominant-baseline="middle" x="408.33333333333337" y="29.166666666666686">1</text></g></g><g opacity="1"></g><g transform="translate(350, 200)"><g transform="translate(0, 25)"></g></g></g></svg>

DFS on a matrix

0 / 85

1x

#### Summary

- Use a set to keep track of visited nodes. Each time you visit a node, add it to the set.
- If you encounter a node that has already been visited, return immediately without making any further recursive calls.
- Use a for loop to iterate over each neighbor of the current node, and recursively call dfs on each neighbor. Before visiting the neighbor, check if it is within the bounds of the grid.

Reading Progress

On This Page