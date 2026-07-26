---
title: "Breadth-First Search Introduction | Hello Interview"
source: "https://www.hellointerview.com/learn/code/breadth-first-search/introduction"
author:
published:
created: 2026-07-25
description: "Master breadth-first search with animated graph traversals and interactive coding exercises."
tags:
  - "clippings"
---
[![Hello Interview](https://www.hellointerview.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoAndNamePrimaryPremium.2btr7egjipkd9.png&w=384&q=75&dpl=a537155f35232743a4d30b17497eeffa61306bdc)](https://www.hellointerview.com/dashboard)

Learn Code

## Breadth First Search

Breadth-First Search (BFS) is a level-by-level traversal algorithm for trees and graphs. Unlike DFS which dives deep into one path before backtracking, BFS explores all nodes at the current level before moving to the next level. This makes BFS the go-to algorithm when you need shortest paths or level-order processing.

bfs(root)

queue = \[root\]

while queue not empty

node = queue.shift()

visit(node)

queue.add(node.left)

queue.add(node.right)

<svg viewBox="-230 -70 460 290" style="max-height: 320px;"><line x1="0" y1="0" x2="-120" y2="80" stroke="#59b9b0" stroke-width="2"></line><line x1="0" y1="0" x2="120" y2="80" stroke="#59b9b0" stroke-width="2"></line><line x1="-120" y1="80" x2="-180" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="-120" y1="80" x2="-60" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="120" y1="80" x2="60" y2="160" stroke="#59b9b0" stroke-width="2"></line><line x1="120" y1="80" x2="180" y2="160" stroke="#59b9b0" stroke-width="2"></line><g transform="translate(0, 0)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">A</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">1</text></g> <g transform="translate(-120, 80)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">B</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">2</text></g> <g transform="translate(120, 80)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">C</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">3</text></g> <g transform="translate(-180, 160)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">D</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">4</text></g> <g transform="translate(-60, 160)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">E</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">5</text></g> <g transform="translate(60, 160)"><circle r="26" fill="#299a8d" stroke="none" stroke-width="0"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">F</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">6</text></g> <g transform="translate(180, 160)"><circle r="32" fill="none" stroke="#e76f51" stroke-width="3" opacity="0.4"></circle><circle r="26" fill="#e76f51" stroke="#e76f51" stroke-width="3"></circle><text y="6" text-anchor="middle" font-size="16" font-weight="600" fill="#FFFFFF">G</text> <text x="36" y="0" font-size="12" font-weight="700" fill="#299a8d">7</text></g></svg>

Watch how BFS visits the tree level by level: first A, then B and C (level 2), then D, E, F, and G (level 3). The queue ensures nodes are processed in the order they were discovered, creating this breadth-first behavior. We will explore BFS in-depth in upcoming lessons.

This module teaches you how to solve coding interview questions using breadth-first search **by focusing on questions that are best solved using BFS rather than Depth-First Search**. It's divided into 2 sections:

#### Binary Trees

We start by learning how breadth-first search traverses the nodes in a binary tree, which will teach us the fundamentals of the algorithm. We then look at practice problems that are best solved using BFS.

#### Graphs

We then look at the two most common ways graphs are represented during the coding interview, and how to traverse both representations with BFS. Then we work through problems that give us practice with the different types of graph problems that are best solved using BFS.

Reading Progress

On This Page

###### Contact

[About Us](https://www.hellointerview.com/aboutus) [Product Support](https://www.hellointerview.com/support)

7511 Greenwood Ave North Unit #4238 Seattle WA 98103

Breadth-First Search Introduction | Hello Interview