---
title: "Depth-First Search Fundamentals | Hello Interview"
source: "https://www.hellointerview.com/learn/code/depth-first-search/introduction"
author:
published:
created: 2026-07-25
description: "Learn depth-first search through interactive tree and graph visualizations with step-by-step explanations."
tags:
  - "clippings"
---
###### Depth-First Search

## Introduction

---

Depth-First Search (DFS) is a traversal algorithm for trees and graphs. It's called "depth-first" because it explores as far down a path as possible before backtracking to try another path. This makes DFS incredibly versatile, and it's arguably the most important algorithm to master for coding interviews.

dfs(node)

if node == null

return

visit(node)

dfs(node.left)

dfs(node.right)

<svg viewBox="-230 -70 460 290" style="max-height: 320px;"><defs><marker id="dfs-arrow" markerWidth="5" markerHeight="4" refX="4" refY="2" orient="auto"><polygon points="0 0, 5 2, 0 4" fill="#227d70"></polygon></marker></defs><line x1="0" y1="0" x2="-120" y2="80" stroke="#59b9b0" stroke-width="2"></line><line x1="0" y1="0" x2="120" y2="80" stroke="#59b9b0" stroke-width="2"></line><line x1="-120" y1="80" x2="-180" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="-120" y1="80" x2="-60" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="120" y1="80" x2="60" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="120" y1="80" x2="180" y2="160" stroke="#59b9b0" stroke-width="2"></line><g transform="translate(0, 0)"><circle r="32" fill="none" stroke="#e76f51" stroke-width="3" opacity="0.4"></circle><circle r="26" fill="#e76f51" stroke="#e76f51" stroke-width="3"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">A</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">1</text></g> <g transform="translate(-120, 80)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">B</text></g> <g transform="translate(120, 80)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">C</text></g> <g transform="translate(-180, 160)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">D</text></g> <g transform="translate(-60, 160)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">E</text></g> <g transform="translate(60, 160)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">F</text></g> <g transform="translate(180, 160)"><circle r="26" fill="#b5e0dd" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#637381">G</text></g></svg>

Watch how DFS goes all the way down the left side (A → B → D) before backtracking to visit E, then finally exploring C's subtree. This "go deep, then backtrack" behavior is what separates DFS from Breadth-First Search, which explores all nodes at one level before moving to the next. We will explore DFS in-depth in upcoming lessons.

### Basic DFS Pattern

At its core, DFS follows this simple pattern:

```
dfs(node)
    if node is null
        return
    
    // process the current node
    
    dfs(node.left)
    dfs(node.right)
```

For graphs, you also need to track visited nodes to avoid infinite loops:

```
dfs(node, visited)
    if node in visited
        return
    
    visited.add(node)
    
    for neighbor in node.neighbors
        dfs(neighbor, visited)
```

## Module Overview

This module teaches you how to solve coding interview questions using depth-first search. It's divided into two main sections:

### Binary Trees

We start with DFS on binary trees because they're the simplest structure to work with. Trees have no cycles, so you don't need to track visited nodes. You'll learn:

- How the call stack enables backtracking
- How to use return values to aggregate information from subtrees
- Common patterns like finding depth, validating structure, and path problems

### Graphs

Graph problems add complexity: you need to handle cycles, different representations (adjacency lists and matrices), and sometimes disconnected components. You'll practice:

- DFS on adjacency list representations
- DFS on 2D matrix grids
- Patterns like connected components, boundary traversal, and cycle detection

After completing this module, continue to [Breadth-First Search](https://www.hellointerview.com/learn/code/breadth-first-search/introduction) and [Backtracking](https://www.hellointerview.com/learn/code/backtracking/overview). Understanding when to use DFS vs BFS is critical. In short: use DFS when you need to explore all paths or find any valid solution, use BFS when you need the shortest path or level-by-level traversal.

## Common DFS Problem Patterns

You'll encounter a few recurring patterns in DFS problems. Recognizing these patterns quickly will help you identify the right approach during interviews.

### Counting Connected Components

One of the most common DFS applications is counting distinct groups or regions in a grid or graph. Think of it as "flood filling" each region and counting how many times you had to start a new fill.

Take this grid where 1 represents land and 0 represents water. The goal is to count distinct islands (groups of connected 1s):

```
[0, 1, 0, 0, 0, 0]
[0, 1, 1, 0, 1, 0]
[0, 0, 0, 1, 1, 0]
[1, 1, 0, 0, 0, 1]
[1, 1, 0, 0, 0, 1]
```

The answer is 4 because there are four separate islands.

The approach works like this: scan every cell in the grid from top-left to bottom-right. When you hit an unvisited 1, you've found a new island, so increment your count. Then run DFS to "flood" that entire island, marking every connected 1 as visited (typically by setting it to 0). When DFS returns, that island is fully consumed and won't be counted again.

Watch the visualization below to see this in action. Notice how DFS explores deeply in one direction before backtracking, and how the count variable only increases when we discover an entirely new island.

Visualization

Python

```
def count_islands(grid):
    rows, cols = len(grid), len(grid[0])
    visited = set()
    count = 0
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    def dfs(r, c):
        if (r, c) in visited:
            return
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if grid[r][c] != 1:
            return
        visited.add((r, c))
        for dr, dc in directions:
            dfs(r + dr, c + dc)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 1 and (r, c) not in visited:
                dfs(r, c)
                count += 1

    return count
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 520 400"><defs><marker id="arrowhead-dfs" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="#195045"></polygon></marker></defs><text x="6.399999999999999" y="57.599999999999994" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">0</text> <text x="6.399999999999999" y="115.19999999999999" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">1</text> <text x="6.399999999999999" y="172.8" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">2</text> <text x="6.399999999999999" y="230.39999999999998" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">3</text> <text x="6.399999999999999" y="288" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">4</text> <text x="43.199999999999996" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">0</text> <text x="100.8" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">1</text> <text x="158.39999999999998" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">2</text> <text x="216" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">3</text> <text x="273.59999999999997" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">4</text> <text x="331.2" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">5</text> <g transform="translate(14.399999999999999, 28.799999999999997)"><g><rect x="0" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="0" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="288" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="172.79999999999998" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="288" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="115.19999999999999" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="230.39999999999998" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="288" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="57.599999999999994" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="288" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="0" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="57.599999999999994" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="288" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g></g> <g transform="translate(384.4, 46.08)"><rect x="-8" y="-8" width="120" height="160" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1" rx="6"></rect><text x="52" y="8" text-anchor="middle" font-size="11" font-weight="600" fill="#454F5B">Variables</text> <g transform="translate(0, 28)"><text x="8" y="0" font-size="10" fill="#454F5B" font-family="monospace">position</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="700" fill="#299a8d" font-family="monospace">(-, -)</text></g> <g transform="translate(0, 48)"><text x="8" y="0" font-size="11" fill="#454F5B" font-family="monospace">row</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="600" fill="#161C24" font-family="monospace">-</text></g> <g transform="translate(0, 66)"><text x="8" y="0" font-size="11" fill="#454F5B" font-family="monospace">col</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="600" fill="#161C24" font-family="monospace">-</text></g> <line x1="8" y1="80" x2="96" y2="80" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></line><g transform="translate(0, 98)"><text x="8" y="0" font-size="13" fill="#e76f51" font-family="monospace" font-weight="600">count</text> <text x="96" y="0" text-anchor="end" font-size="15" font-weight="700" fill="#e76f51" font-family="monospace">0</text></g> <g transform="translate(0, 124)"><rect x="8" y="0" width="12" height="12" fill="#e76f51" rx="2"></rect><text x="24" y="10" font-size="9" fill="#454F5B">Start</text> <rect x="56" y="0" width="12" height="12" fill="#59b9b0" rx="2"></rect><text x="72" y="10" font-size="9" fill="#454F5B">Visited</text></g></g></svg>

Initialize count = 0. Scan the grid to find islands.

0 / 60

1x

DFS marks each island as visited, preventing double-counting

The outer loop finds new islands; the DFS consumes each one so we don't count it twice. This pattern applies to any "count distinct regions" problem, whether it's islands, rooms in a building, or connected components in a graph.

### Boundary DFS

Some problems ask you to find cells that are connected to the edge of a grid, i.e. all connected cells which are on boundary of the matrix. The naive way is to check every cell and finding "can this cell reach the boundary?" But that's inefficient.

The trick is to flip the question: instead of checking if each cell can reach the border, start from the border and see which cells can be reached from this boundary cell. Run DFS from each relevant cell on the boundary, and everything you visit is "connected to the edge."

Visualization

Python

```
def find_boundary_connected(grid):
    rows, cols = len(grid), len(grid[0])
    visited = set()
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    def dfs(r, c):
        if (r, c) in visited:
            return
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if grid[r][c] != 1:
            return
        visited.add((r, c))
        for dr, dc in directions:
            dfs(r + dr, c + dc)

    # Start DFS from boundary cells with value 1
    for r in range(rows):
        if grid[r][0] == 1: dfs(r, 0)
        if grid[r][cols-1] == 1: dfs(r, cols-1)
    for c in range(cols):
        if grid[0][c] == 1: dfs(0, c)
        if grid[rows-1][c] == 1: dfs(rows-1, c)
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 520 470"><defs><marker id="arrowhead-boundary" markerWidth="6" markerHeight="5" refX="5" refY="2.5" orient="auto"><polygon points="0 0, 6 2.5, 0 5" fill="#195045"></polygon></marker></defs><text x="6.399999999999999" y="57.599999999999994" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">0</text> <text x="6.399999999999999" y="115.19999999999999" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">1</text> <text x="6.399999999999999" y="172.8" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">2</text> <text x="6.399999999999999" y="230.39999999999998" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">3</text> <text x="6.399999999999999" y="288" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">4</text> <text x="6.399999999999999" y="345.6" text-anchor="end" dominant-baseline="central" font-size="16.128" fill="#454F5B" font-family="monospace">5</text> <text x="43.199999999999996" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">0</text> <text x="100.8" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">1</text> <text x="158.39999999999998" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">2</text> <text x="216" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">3</text> <text x="273.59999999999997" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">4</text> <text x="331.2" y="20.799999999999997" text-anchor="middle" dominant-baseline="auto" font-size="16.128" fill="#454F5B" font-family="monospace">5</text> <g transform="translate(14.399999999999999, 28.799999999999997)"><g><rect x="0" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="56.599999999999994" y="-1" width="59.599999999999994" height="59.599999999999994" fill="none" stroke="#f4a261" stroke-width="2" rx="5" opacity="0.6"></rect><rect x="57.599999999999994" y="0" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="229.39999999999998" y="-1" width="59.599999999999994" height="59.599999999999994" fill="none" stroke="#f4a261" stroke-width="2" rx="5" opacity="0.6"></rect><rect x="230.39999999999998" y="0" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="288" y="0" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="28.799999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="172.79999999999998" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="288" y="57.599999999999994" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="86.39999999999999" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="115.19999999999999" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="172.79999999999998" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="288" y="115.19999999999999" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="144" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="0" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="287" y="171.79999999999998" width="59.599999999999994" height="59.599999999999994" fill="none" stroke="#f4a261" stroke-width="2" rx="5" opacity="0.6"></rect><rect x="288" y="172.79999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="201.59999999999997" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="0" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="57.599999999999994" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="115.19999999999999" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="172.79999999999998" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="287" y="229.39999999999998" width="59.599999999999994" height="59.599999999999994" fill="none" stroke="#f4a261" stroke-width="2" rx="5" opacity="0.6"></rect><rect x="288" y="230.39999999999998" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="259.2" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="-1" y="287" width="59.599999999999994" height="59.599999999999994" fill="none" stroke="#f4a261" stroke-width="2" rx="5" opacity="0.6"></rect><rect x="0" y="288" width="57.599999999999994" height="57.599999999999994" fill="#b5e0dd" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="28.799999999999997" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#FFFFFF">1</text></g> <g><rect x="57.599999999999994" y="288" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="86.39999999999999" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="115.19999999999999" y="288" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="144" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="172.79999999999998" y="288" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="201.59999999999997" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="230.39999999999998" y="288" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="259.2" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g> <g><rect x="288" y="288" width="57.599999999999994" height="57.599999999999994" fill="#F1F7F6" stroke="#299a8d" stroke-width="1" rx="4"></rect><text x="316.8" y="316.8" text-anchor="middle" dominant-baseline="central" font-size="23.04" font-weight="600" fill="#919EAB">0</text></g></g> <g transform="translate(384.4, 46.08) scale(1.2)"><rect x="-8" y="-8" width="120" height="135" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1" rx="6"></rect><text x="52" y="8" text-anchor="middle" font-size="11" font-weight="600" fill="#454F5B">Variables</text> <g transform="translate(0, 28)"><text x="8" y="0" font-size="10" fill="#454F5B" font-family="monospace">position</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="700" fill="#299a8d" font-family="monospace">(-, -)</text></g> <g transform="translate(0, 48)"><text x="8" y="0" font-size="11" fill="#454F5B" font-family="monospace">row</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="600" fill="#161C24" font-family="monospace">-</text></g> <g transform="translate(0, 66)"><text x="8" y="0" font-size="11" fill="#454F5B" font-family="monospace">col</text> <text x="96" y="0" text-anchor="end" font-size="12" font-weight="600" fill="#161C24" font-family="monospace">-</text></g> <line x1="8" y1="80" x2="96" y2="80" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></line><g transform="translate(0, 100)"><rect x="8" y="0" width="12" height="12" fill="#e76f51" rx="2"></rect><text x="24" y="10" font-size="11" fill="#454F5B">Start</text> <rect x="56" y="0" width="12" height="12" fill="#59b9b0" rx="2"></rect><text x="72" y="10" font-size="11" fill="#454F5B">Visited</text></g></g></svg>

Boundary DFS: Start from edges of the grid to find all land connected to boundaries.

0 / 38

1x

DFS starts from the boundary and marks everything connected to it

This pattern appears in problems like "Surrounded Regions" and "Pacific Atlantic Water Flow." The key insight is always the same: start from the boundary and work inward.

## When to Use DFS

DFS excels when you need to:

- **Explore all possible paths** (like finding all solutions or any valid solution)
- **Traverse hierarchical structures** (trees, nested data)
- **Find connected components** in graphs or grids
- **Detect cycles** in graphs
- **Process nodes in a specific order** (pre-order, in-order, post-order)

If you need the **shortest path** in an unweighted graph, use BFS instead. DFS finds *a* path, not necessarily the shortest one.