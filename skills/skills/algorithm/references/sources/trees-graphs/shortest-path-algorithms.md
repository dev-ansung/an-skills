---
title: "Shortest Path Algorithms | Hello Interview"
source: "https://www.hellointerview.com/learn/code/graphs/shortest-path-algorithms"
author:
published:
created: 2026-07-25
description: "Master shortest path algorithms including BFS, Dijkstra, Bellman-Ford, and Floyd-Warshall with clear decision frameworks."
tags:
  - "clippings"
---
[![Hello Interview](https://www.hellointerview.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoAndNamePrimaryPremium.2btr7egjipkd9.png&w=384&q=75&dpl=a537155f35232743a4d30b17497eeffa61306bdc)](https://www.hellointerview.com/dashboard)

Learn Code

Search

⌘K

[Pricing](https://www.hellointerview.com/pricing)

Tutor

###### Graphs

## Shortest Path Algorithms

---

**Pre-Requisite**: [Depth-First Search](https://www.hellointerview.com/learn/code/depth-first-search/introduction), [Breadth-First Search](https://www.hellointerview.com/learn/code/breadth-first-search/introduction)

---

Finding shortest paths is one of the most fundamental graph problems. The algorithm you choose depends on one thing: **what are the edge weights?**

Shortest path algorithm decision tree

Let's have a look on each algorithm below.

---

## 1\. BFS: When All Edges Are Equal

If every edge has the same cost (or weight = 1), BFS *is* your shortest path algorithm. If you're unfamiliar with BFS, start with [our BFS introduction](https://www.hellointerview.com/learn/code/breadth-first-search/introduction).

### How BFS Finds Shortest Paths

BFS explores nodes level by level using a queue. The first time you reach a node, you've found the shortest path to it and no other path can be shorter because all edges cost the same.

<svg viewBox="0 0 560 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg"><g transform="translate(10, 20)"><rect x="0" y="0" width="150" height="76" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="75" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">1. Initialize</text> <text x="75" y="40" text-anchor="middle" font-size="10" fill="currentColor">dist[start] = 0</text> <text x="75" y="55" text-anchor="middle" font-size="10" fill="currentColor">queue = [start]</text></g> <g transform="translate(165, 45)"><line x1="0" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="25,10 18,5 18,15" fill="currentColor"></polygon></g><g transform="translate(195, 20)"><rect x="0" y="0" width="150" height="76" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="75" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">2. Dequeue</text> <text x="75" y="40" text-anchor="middle" font-size="10" fill="currentColor">node = queue.pop()</text> <text x="75" y="55" text-anchor="middle" font-size="10" fill="currentColor">explore neighbors</text></g> <g transform="translate(350, 45)"><line x1="0" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="25,10 18,5 18,15" fill="currentColor"></polygon></g><g transform="translate(380, 20)"><rect x="0" y="0" width="170" height="76" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="85" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">3. Update</text> <text x="85" y="38" text-anchor="middle" font-size="10" fill="currentColor">if neighbor unvisited:</text><text x="85" y="52" text-anchor="middle" font-size="10" fill="currentColor">dist[neighbor] = dist[node] + 1</text> <text x="85" y="66" text-anchor="middle" font-size="10" fill="currentColor">queue.add(neighbor)</text></g> <g transform="translate(195, 95)"><path d="M 290 0 L 290 15 L 0 15 L 0 0" fill="none" stroke="currentColor" stroke-width="1.5"></path><polygon points="0,0 -5,8 5,8" fill="currentColor"></polygon><text x="145" y="30" text-anchor="middle" font-size="10" fill="currentColor">repeat until queue empty</text></g></svg>

Why does this work? The queue processes nodes in order of discovery. Nodes discovered first (closer to source) get processed before nodes discovered later (farther from source). This layer-by-layer exploration guarantees shortest paths.

### Walkthrough

Let's trace through BFS on this graph in the visual below, starting from node 0:

1. **Initialize**: Set dist\[0\] = 0 and add 0 to the queue
2. **Process 0**: Discover neighbors 1 and 2 → set dist\[1\] = 1, dist\[2\] = 1, add both to queue
3. **Process 1**: Discover neighbor 3 → set dist\[3\] = 2
4. **Process 2**: Neighbors 3 and 4 → 3 already visited, set dist\[4\] = 2
5. **Continue** until queue empty

Notice how BFS finds all nodes at distance 1 before any node at distance 2. This layer-by-layer exploration is what guarantees shortest paths.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 450 340"><g opacity="1"><g><g><line x1="244.05255888325766" y1="72.2" x2="300.1710050484893" y2="104.6" stroke="#919EAB" stroke-width="1.5"></line><polygon points="300.1710050484893,104.6 291.5107510106449,104.6 295.84087802956714,97.1" fill="#919EAB"></polygon></g><g><line x1="236" y1="80.25255888325765" x2="308.2235639317469" y2="205.34744111674232" stroke="#919EAB" stroke-width="1.5"></line><polygon points="308.2235639317469,205.34744111674232 300.7235639317469,201.0173140978201 308.2235639317469,196.68718707889792" fill="#919EAB"></polygon></g><g><line x1="300.1710050484893" y1="104.6" x2="244.05255888325766" y2="72.2" stroke="#919EAB" stroke-width="1.5"></line><polygon points="244.05255888325766,72.2 252.71281292110206,72.2 248.38268590217987,79.7" fill="#919EAB"></polygon></g><g><line x1="308.2235639317469" y1="134.65255888325765" x2="236" y2="259.7474411167424" stroke="#919EAB" stroke-width="1.5"></line><polygon points="236,259.7474411167424 236,251.08718707889798 243.5,255.41731409782017" fill="#919EAB"></polygon></g><g><line x1="308.2235639317469" y1="205.34744111674235" x2="236" y2="80.25255888325765" stroke="#919EAB" stroke-width="1.5"></line><polygon points="236,80.25255888325765 243.5,84.58268590217983 236,88.91281292110203" fill="#919EAB"></polygon></g><g><line x1="300.1710050484893" y1="235.39999999999998" x2="244.05255888325763" y2="267.8" stroke="#919EAB" stroke-width="1.5"></line><polygon points="244.05255888325763,267.8 248.38268590217984,260.3 252.71281292110203,267.8" fill="#919EAB"></polygon></g><g><line x1="297.2235639317469" y1="224.39999999999998" x2="152.77643606825308" y2="224.40000000000003" stroke="#919EAB" stroke-width="1.5"></line><polygon points="152.77643606825308,224.40000000000003 160.27643606825308,220.06987298107785 160.27643606825308,228.73012701892222" fill="#919EAB"></polygon></g><g><line x1="236" y1="259.7474411167424" x2="308.2235639317469" y2="134.65255888325765" stroke="#919EAB" stroke-width="1.5"></line><polygon points="308.2235639317469,134.65255888325765 308.2235639317469,143.31281292110205 300.7235639317469,138.98268590217987" fill="#919EAB"></polygon></g><g><line x1="244.05255888325763" y1="267.8" x2="300.1710050484893" y2="235.39999999999998" stroke="#919EAB" stroke-width="1.5"></line><polygon points="300.1710050484893,235.39999999999998 295.84087802956714,242.89999999999998 291.5107510106449,235.39999999999998" fill="#919EAB"></polygon></g><g><line x1="214" y1="259.7474411167424" x2="141.77643606825308" y2="134.65255888325765" stroke="#919EAB" stroke-width="1.5"></line><polygon points="141.77643606825308,134.65255888325765 149.27643606825308,138.98268590217987 141.77643606825308,143.31281292110205" fill="#919EAB"></polygon></g><g><line x1="152.77643606825308" y1="224.40000000000003" x2="297.2235639317469" y2="224.39999999999998" stroke="#919EAB" stroke-width="1.5"></line><polygon points="297.2235639317469,224.39999999999998 289.7235639317469,228.73012701892216 289.7235639317469,220.0698729810778" fill="#919EAB"></polygon></g><g><line x1="130.77643606825308" y1="202.40000000000003" x2="130.77643606825308" y2="137.6" stroke="#919EAB" stroke-width="1.5"></line><polygon points="130.77643606825308,137.6 135.10656308717526,145.1 126.44630904933088,145.1" fill="#919EAB"></polygon></g><g><line x1="141.77643606825308" y1="134.65255888325765" x2="214" y2="259.7474411167424" stroke="#919EAB" stroke-width="1.5"></line><polygon points="214,259.7474411167424 206.5,255.41731409782017 214,251.08718707889798" fill="#919EAB"></polygon></g><g><line x1="130.77643606825308" y1="137.6" x2="130.77643606825308" y2="202.40000000000003" stroke="#919EAB" stroke-width="1.5"></line><polygon points="130.77643606825308,202.40000000000003 126.44630904933088,194.90000000000003 135.10656308717526,194.90000000000003" fill="#919EAB"></polygon></g><g><circle cx="225" cy="61.2" r="27" fill="none" stroke="#f4a261" stroke-width="3" stroke-dasharray="4 2"></circle><circle cx="225" cy="61.2" r="22" fill="#f4a261" stroke="#eb8d5b" stroke-width="2"></circle><text x="225" y="61.2" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">0</text> <text x="225" y="94.2" text-anchor="middle" fill="#454F5B" font-size="10">0</text></g> <g><circle cx="319.2235639317469" cy="115.6" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="319.2235639317469" y="115.6" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">1</text> <text x="319.2235639317469" y="148.6" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="319.2235639317469" cy="224.39999999999998" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="319.2235639317469" y="224.39999999999998" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">2</text> <text x="319.2235639317469" y="257.4" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="225" cy="278.8" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="225" y="278.8" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">3</text> <text x="225" y="311.8" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="130.77643606825308" cy="224.40000000000003" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="130.77643606825308" y="224.40000000000003" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">4</text> <text x="130.77643606825308" y="257.40000000000003" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="130.77643606825308" cy="115.6" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="130.77643606825308" y="115.6" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">5</text> <text x="130.77643606825308" y="148.6" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g></g></g></svg>

Initialize: set dist\[0\] = 0, enqueue 0

0 / 12

1x

Click **Show Code** in the visualization above to see the whole implementation.

You might wonder: shouldn't we use min(dist\[neighbor\], dist\[node\] + 1) instead of just assigning? No -- the if neighbor not in distances check handles this. We only set a distance the **first** time we reach a node, and in BFS, the first discovery is always the shortest path (because we process all nodes at distance *d* before any node at distance *d+1*). Once a node has a distance, we skip it entirely. No relaxation needed.

### Complexity

**Time**: O(V + E) as each node is dequeued once, and each edge is examined once when we check neighbors.

**Space**: O(V) as the queue can hold at most V nodes, and we store distances for V nodes.

### When to Use BFS

- Grid navigation (moving up/down/left/right)
- Unweighted graph traversal
- Finding minimum number of steps/moves

### Problems That Use BFS for Shortest Path

- [Minimum Knight Moves](https://www.hellointerview.com/learn/code/breadth-first-search/minimum-knight-moves) is a classic grid BFS
- [Rotting Oranges](https://www.hellointerview.com/learn/code/breadth-first-search/rotting-oranges) is a multi-source BFS
- [01-Matrix](https://www.hellointerview.com/learn/code/breadth-first-search/01-matrix) finds distance from each cell to nearest 0

If a problem asks for "minimum moves" or "shortest path" in a grid or unweighted graph, try BFS first. It's simpler and often sufficient.

---

## 2\. Dijkstra's Algorithm: Non-Negative Weights

Dijkstra's is the **most important shortest path algorithm for interviews**. It handles graphs where edges have **non-negative** weights.

The idea is to always explore the cheapest unexplored node. We can use a min-heap (priority queue) to efficiently find it.

### How Dijkstra Works

<svg viewBox="0 0 520 200" width="100%" height="200" xmlns="http://www.w3.org/2000/svg"><g transform="translate(20, 20)"><rect x="0" y="0" width="150" height="75" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="75" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">1. Initialize</text> <text x="75" y="40" text-anchor="middle" font-size="10" fill="currentColor">dist[source] = 0</text> <text x="75" y="55" text-anchor="middle" font-size="10" fill="currentColor">dist[others] = ∞</text> <text x="75" y="70" text-anchor="middle" font-size="10" fill="currentColor">heap = [(0, source)]</text></g> <g transform="translate(175, 45)"><line x1="0" y1="12" x2="25" y2="12" stroke="currentColor" stroke-width="2"></line><polygon points="25,12 18,7 18,17" fill="currentColor"></polygon></g><g transform="translate(205, 20)"><rect x="0" y="0" width="150" height="75" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="75" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">2. Pop minimum</text> <text x="75" y="40" text-anchor="middle" font-size="10" fill="currentColor">(d, node) = heap.pop()</text> <text x="75" y="55" text-anchor="middle" font-size="10" fill="currentColor">if d &gt; dist[node]: skip</text> <text x="75" y="70" text-anchor="middle" font-size="10" fill="#637381">(stale entry)</text></g> <g transform="translate(360, 45)"><line x1="0" y1="12" x2="25" y2="12" stroke="currentColor" stroke-width="2"></line><polygon points="25,12 18,7 18,17" fill="currentColor"></polygon></g><g transform="translate(390, 20)"><rect x="0" y="0" width="110" height="75" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="55" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">3. Relax</text> <text x="55" y="40" text-anchor="middle" font-size="10" fill="currentColor">for each neighbor:</text><text x="55" y="55" text-anchor="middle" font-size="10" fill="currentColor">new = d + weight</text> <text x="55" y="70" text-anchor="middle" font-size="10" fill="currentColor">if new &lt; dist: update</text></g> <g transform="translate(205, 100)"><path d="M 250 0 L 250 20 L 0 20 L 0 0" fill="none" stroke="currentColor" stroke-width="1.5"></path><polygon points="0,0 -5,8 5,8" fill="currentColor"></polygon><text x="125" y="38" text-anchor="middle" font-size="10" fill="currentColor">repeat until heap empty</text></g> <g transform="translate(120, 145)"><rect x="0" y="0" width="280" height="45" fill="#299a8d" fill-opacity="0.15" stroke="#299a8d" stroke-width="2" rx="6"></rect><text x="140" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">4. Return result</text> <text x="140" y="38" text-anchor="middle" font-size="11" fill="currentColor">dist[] now contains shortest paths from source</text></g></svg>

The key insight is **relaxation**: for each edge, we ask "can we reach this neighbor faster by going through the current node?" If yes, we update the distance and add the neighbor to the heap.

### Walkthrough

Let's trace Dijkstra on this weighted graph below, starting from node 0. The edges are: 0→1 (weight 4), 0→2 (weight 1), 2→1 (weight 2), 2→3 (weight 5), 1→3 (weight 1), 3→4 (weight 3).

1. **Initialize**: dist\[0\] = 0, all others = ∞. Heap = \[(0, 0)\]
2. **Pop (0, 0)**: Process node 0. Check edges:
	- 0→1: dist\[1\] = 0 + 4 = 4. Add (4, 1) to heap.
		- 0→2: dist\[2\] = 0 + 1 = 1. Add (1, 2) to heap.
3. **Pop (1, 2)**: Process node 2 (smallest distance!). Check edges:
	- 2→1: 1 + 2 = 3 < 4. Update dist\[1\] = 3. Add (3, 1) to heap.
		- 2→3: dist\[3\] = 1 + 5 = 6. Add (6, 3) to heap.
4. **Pop (3, 1)**: Process node 1. Check edges:
	- 1→3: 3 + 1 = 4 < 6. Update dist\[3\] = 4. Add (4, 3) to heap.
5. **Pop (4, 3)**: Process node 3. dist\[4\] = 4 + 3 = 7. Add (7, 4) to heap.
6. **Continue** until heap empty.

Notice how we found a shorter path to node 1: the direct path 0→1 costs 4, but going 0→2→1 costs only 3. Dijkstra discovered this by always processing the **cheapest node** first.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 450 340"><g opacity="1"><g><g><line x1="242.79837387624883" y1="68.7312755504344" x2="301.5464325402304" y2="111.41423860757081" stroke="#919EAB" stroke-width="1.5"></line><polygon points="301.5464325402304,111.41423860757081 292.9336202801427,110.50899556148745 298.02398988469395,103.50270286926708" fill="#919EAB"></polygon><g transform="translate(272.17240320823964, 90.0727570790026)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">4</text></g></g> <g><line x1="231.79837387624883" y1="76.72324335849338" x2="276.5099231511645" y2="214.3312424835014" stroke="#919EAB" stroke-width="1.5"></line><polygon points="276.5099231511645,214.3312424835014 270.07410017562074,208.53640144793684 278.31049121108407,205.86023577463865" fill="#919EAB"></polygon><g transform="translate(254.15414851370667, 145.5272429209974)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">1</text></g></g> <g><line x1="301.5464325402304" y1="137.27678970843962" x2="184.4900768488355" y2="222.32321029156037" stroke="#919EAB" stroke-width="1.5"></line><polygon points="184.4900768488355,222.32321029156037 188.012519504372,214.41167455325663 193.10288910892328,221.417967245477" fill="#919EAB"></polygon><g transform="translate(243.01825469453297, 179.8)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">1</text></g></g> <g><line x1="290.1066709036622" y1="214.3312424835014" x2="312.5464325402304" y2="145.2687575164986" stroke="#919EAB" stroke-width="1.5"></line><polygon points="312.5464325402304,145.2687575164986 314.34700060014995,153.73976422536134 306.1106095646866,151.06359855206316" fill="#919EAB"></polygon><g transform="translate(301.3265517219463, 179.8)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">2</text></g></g> <g><line x1="261.30829702741335" y1="235.25448584199478" x2="188.69170297258668" y2="235.25448584199478" stroke="#919EAB" stroke-width="1.5"></line><polygon points="188.69170297258668,235.25448584199478 196.19170297258668,230.9243588230726 196.19170297258668,239.58461286091696" fill="#919EAB"></polygon><g transform="translate(225, 235.25448584199478)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">5</text></g></g> <g><line x1="159.89332909633782" y1="214.3312424835014" x2="137.45356745976963" y2="145.2687575164986" stroke="#919EAB" stroke-width="1.5"></line><polygon points="137.45356745976963,145.2687575164986 143.8893904353134,151.06359855206316 135.6529993998501,153.73976422536134" fill="#919EAB"></polygon><g transform="translate(148.67344827805374, 179.8)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">3</text></g></g> <g><circle cx="225" cy="55.8" r="27" fill="none" stroke="#f4a261" stroke-width="3" stroke-dasharray="4 2"></circle><circle cx="225" cy="55.8" r="22" fill="#f4a261" stroke="#eb8d5b" stroke-width="2"></circle><text x="225" y="55.8" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">0</text> <text x="225" y="88.8" text-anchor="middle" fill="#454F5B" font-size="10">0</text></g> <g><circle cx="319.34480641647923" cy="124.34551415800522" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="319.34480641647923" y="124.34551415800522" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">1</text> <text x="319.34480641647923" y="157.34551415800522" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="283.30829702741335" cy="235.25448584199478" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="283.30829702741335" y="235.25448584199478" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">2</text> <text x="283.30829702741335" y="268.2544858419948" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="166.69170297258668" cy="235.25448584199478" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="166.69170297258668" y="235.25448584199478" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">3</text> <text x="166.69170297258668" y="268.2544858419948" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="130.65519358352077" cy="124.34551415800523" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="130.65519358352077" y="124.34551415800523" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">4</text> <text x="130.65519358352077" y="157.34551415800524" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g></g> <g transform="translate(0, 310)"><text x="225" y="16" text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B"><tspan font-weight="600" fill="#299a8d">Min-Heap:</tspan> [(0,0)]</text></g></g></svg>

Initialize: set dist\[0\] = 0, push (0, 0) to min-heap

0 / 18

1x

### Why It Works

Dijkstra is **greedy**: it always processes the node with the smallest known distance. Because all edge weights are non-negative, once we've processed a node, we've found its shortest path. No later discovery can improve it as for any other path would have to go through a node with equal or greater distance, then add more non-negative weight.

Dijkstra **fails** with negative edge weights. If an edge can reduce the total cost, the greedy assumption breaks down and we might find a shorter path after we've already "finalized" a node.

### Complexity

**Time**: O((V + E) log V) with a binary heap

- Each edge might trigger a heap push: O(E log V)
- Each pop from the heap is O(log V), with at most O(E) entries

**Space**: O(V + E) — O(V) for the distances map, and the heap can grow to O(E) since stale entries aren't removed

### When to Use Dijkstra

- Weighted graphs with non-negative edges
- Finding shortest path from one source to all nodes
- Problems involving "minimum cost" or "minimum time"

### Classic Dijkstra Problems

- [Network Delay Time](https://www.hellointerview.com/learn/code/graphs/network-delay-time): how long until all nodes receive a signal?
- [Path With Minimum Effort](https://www.hellointerview.com/learn/code/graphs/path-minimum-effort): find a hiking path with least elevation change
- [Cheapest Flights Within K Stops](https://www.hellointerview.com/learn/code/graphs/cheapest-flights-k-stops): modified Dijkstra with state

---

## 3\. Bellman-Ford: When Negative Weights Exist

Bellman-Ford handles graphs with **negative edge weights** and can detect **negative cycles**.

### How Bellman-Ford Works

The algorithm repeatedly **relaxes** every edge: for each edge, check "if we can reach the destination faster by going through this edge?" If yes, update the distance. Repeat this for all edges, V-1 times.

<svg viewBox="0 0 520 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg"><g transform="translate(20, 20)"><rect x="0" y="0" width="140" height="60" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="70" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">1. Initialize</text> <text x="70" y="38" text-anchor="middle" font-size="10" fill="currentColor">dist[source] = 0</text> <text x="70" y="52" text-anchor="middle" font-size="10" fill="currentColor">dist[others] = ∞</text></g> <g transform="translate(165, 40)"><line x1="0" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="25,10 18,5 18,15" fill="currentColor"></polygon></g><g transform="translate(195, 20)"><rect x="0" y="0" width="180" height="60" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="90" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">2. Relax all edges</text> <text x="90" y="38" text-anchor="middle" font-size="10" fill="currentColor">for each edge (u, v, w):</text><text x="90" y="52" text-anchor="middle" font-size="10" fill="currentColor">if dist[u] + w &lt; dist[v]: update</text></g> <g transform="translate(195, 85)"><path d="M 180 0 L 180 15 L 0 15 L 0 0" fill="none" stroke="currentColor" stroke-width="1.5"></path><polygon points="0,0 -5,8 5,8" fill="currentColor"></polygon><text x="90" y="32" text-anchor="middle" font-size="10" fill="currentColor">repeat V-1 times</text></g> <g transform="translate(390, 20)"><rect x="0" y="0" width="110" height="60" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="55" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">3. Check cycles</text> <text x="55" y="38" text-anchor="middle" font-size="10" fill="currentColor">relax once more</text> <text x="55" y="52" text-anchor="middle" font-size="10" fill="currentColor">any change = cycle</text></g><g transform="translate(375, 40)"><line x1="0" y1="10" x2="12" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="12,10 5,5 5,15" fill="currentColor"></polygon></g></svg>

### Why V-1 Iterations?

The longest possible shortest path visits every node exactly once, which means it has at most V-1 edges. Each iteration of Bellman-Ford can discover shortest paths that are one edge longer than before. So after V-1 iterations, we've found every possible shortest path.

### Walkthrough

Let's trace Bellman-Ford on the below given graph with edges: 0→1 (weight 5), 1→2 (weight **\-2**), 2→3 (weight 1), 3→4 (weight 1). Starting from node 0.

While Dijkstra happens to produce correct results on this particular chain graph (there's only one path to each node), it isn't guaranteed to work with negative edges in general. When alternative routes exist, Dijkstra might "finalize" a node before discovering a cheaper path through a negative edge. Bellman-Ford's repeated relaxation handles negative weights correctly regardless of graph structure.

1. **Initialize**: dist\[0\] = 0, all others = ∞
2. **Iteration 1**: Relax all edges. Only 0→1 can improve (other edges start from nodes with ∞ distance): dist\[1\] = 0 + 5 = 5
3. **Iteration 2**: Edge 1→2 can now improve: dist\[2\] = 5 + (-2) = 3
4. **Iteration 3**: Edge 2→3: dist\[3\] = 3 + 1 = 4
5. **Iteration 4**: Edge 3→4: dist\[4\] = 4 + 1 = 5

How many distances update per iteration depends on the order edges are processed. In the worst case (like above), only one new distance is found per pass — which is exactly why the algorithm needs V-1 iterations.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 450 340"><g opacity="1"><g><g><line x1="242.79837387624883" y1="74.13127555043441" x2="310.67657509666384" y2="123.44767546157132" stroke="#919EAB" stroke-width="1.5"></line><polygon points="310.67657509666384,123.44767546157132 302.06376283657613,122.54243241548797 307.1541324411274,115.5361397232676" fill="#919EAB"></polygon><g transform="translate(276.73747448645634, 98.78947550600287)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">5</text></g></g> <g><line x1="321.67657509666384" y1="157.3021943704991" x2="295.7494093256699" y2="237.0978056295009" stroke="#919EAB" stroke-width="1.5"></line><polygon points="295.7494093256699,237.0978056295009 293.94884126575033,228.62679892063815 302.18523230121366,231.30296459393634" fill="#919EAB"></polygon><g transform="translate(308.71299221116686, 197.2)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">-2</text></g></g> <g><line x1="266.95103544942106" y1="258.0210489879943" x2="183.04896455057894" y2="258.0210489879943" stroke="#919EAB" stroke-width="1.5"></line><polygon points="183.04896455057894,258.0210489879943 190.54896455057894,253.6909219690721 190.54896455057894,262.3511760069165" fill="#919EAB"></polygon><g transform="translate(225, 258.0210489879943)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">1</text></g></g> <g><line x1="154.25059067433008" y1="237.0978056295009" x2="128.32342490333613" y2="157.3021943704991" stroke="#919EAB" stroke-width="1.5"></line><polygon points="128.32342490333613,157.3021943704991 134.7592478788799,163.09703540606367 126.52285684341659,165.77320107936185" fill="#919EAB"></polygon><g transform="translate(141.2870077888331, 197.2)"><rect x="-10" y="-9" width="20" height="18" fill="#FFFFFF" rx="3"></rect><text text-anchor="middle" dy=".35em" font-size="11" fill="#454F5B" font-weight="normal">1</text></g></g> <g><circle cx="225" cy="61.2" r="22" fill="#2c9c59" stroke="#0b9d42" stroke-width="2"></circle><text x="225" y="61.2" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">0</text> <text x="225" y="94.2" text-anchor="middle" fill="#454F5B" font-size="10">0</text></g> <g><circle cx="328.47494897291267" cy="136.37895101200573" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="328.47494897291267" y="136.37895101200573" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">1</text> <text x="328.47494897291267" y="169.37895101200573" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="288.95103544942106" cy="258.0210489879943" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="288.95103544942106" y="258.0210489879943" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">2</text> <text x="288.95103544942106" y="291.0210489879943" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="161.04896455057894" cy="258.0210489879943" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="161.04896455057894" y="258.0210489879943" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">3</text> <text x="161.04896455057894" y="291.0210489879943" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g> <g><circle cx="121.52505102708729" cy="136.37895101200573" r="22" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="121.52505102708729" y="136.37895101200573" text-anchor="middle" dy=".35em" fill="white" font-size="14" font-weight="600">4</text> <text x="121.52505102708729" y="169.37895101200573" text-anchor="middle" fill="#454F5B" font-size="10">∞</text></g></g></g></svg>

Initialize: dist\[0\] = 0, all other distances = ∞. Will run V-1 = 4 iterations.

0 / 26

1x

### Complexity

**Time**: O(V · E) as it is much slower than Dijkstra for large graphs, but handles negative weights

**Space**: O(V) for the distances array

### When to Use Bellman-Ford

- Graph has negative edge weights
- Need to detect negative cycles
- Problems involving arbitrage or exchange rates

In interviews, Bellman-Ford is more commonly discussed than implemented. Know *why* Dijkstra fails with negative weights and *how* Bellman-Ford fixes it.

---

## 4\. Floyd-Warshall: All Pairs Shortest Path

What if you need the shortest path between **every pair of nodes**? Running Dijkstra V times works (for non-negative weights), but Floyd-Warshall is a simpler solution for dense graphs or small V.

### How Floyd-Warshall Works

We can solve this with [dynamic programming](https://www.hellointerview.com/learn/code/dynamic-programming/fundamentals). The idea is for each node k, check if using k as an intermediate improves the path from i to j.

<svg viewBox="0 0 560 130" width="100%" height="130" xmlns="http://www.w3.org/2000/svg"><g transform="translate(10, 20)"><rect x="0" y="0" width="150" height="70" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="75" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">1. Initialize</text> <text x="75" y="40" text-anchor="middle" font-size="10" fill="currentColor">dist[i][i] = 0</text> <text x="75" y="55" text-anchor="middle" font-size="10" fill="currentColor">dist[i][j] = edge weight or ∞</text></g> <g transform="translate(165, 45)"><line x1="0" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="25,10 18,5 18,15" fill="currentColor"></polygon></g><g transform="translate(195, 20)"><rect x="0" y="0" width="240" height="70" fill="none" stroke="currentColor" stroke-width="1" rx="6"></rect><text x="120" y="20" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">2. Try each intermediate k</text> <text x="120" y="40" text-anchor="middle" font-size="10" fill="currentColor">for all pairs (i, j):</text><text x="120" y="55" text-anchor="middle" font-size="10" fill="currentColor">dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])</text></g> <g transform="translate(195, 95)"><path d="M 240 0 L 240 15 L 0 15 L 0 0" fill="none" stroke="currentColor" stroke-width="1.5"></path><polygon points="0,0 -5,8 5,8" fill="currentColor"></polygon><text x="120" y="30" text-anchor="middle" font-size="10" fill="currentColor">for k = 0 to V-1</text></g> <g transform="translate(440, 45)"><line x1="0" y1="10" x2="25" y2="10" stroke="currentColor" stroke-width="2"></line><polygon points="25,10 18,5 18,15" fill="currentColor"></polygon></g><g transform="translate(470, 20)"><rect x="0" y="0" width="80" height="70" fill="#299a8d" fill-opacity="0.15" stroke="#299a8d" stroke-width="2" rx="6"></rect><text x="40" y="25" text-anchor="middle" font-size="12" fill="currentColor" font-weight="700">Done!</text><text x="40" y="45" text-anchor="middle" font-size="10" fill="currentColor">dist[i][j] =</text> <text x="40" y="58" text-anchor="middle" font-size="10" fill="currentColor">shortest i→j</text></g></svg>

The DP recurrence: dist\[i\]\[j\] = min(dist\[i\]\[j\], dist\[i\]\[k\] + dist\[k\]\[j\]). After considering node k as an intermediate, dist\[i\]\[j\] holds the shortest path using only nodes 0 through k.

### Walkthrough

Let's trace Floyd-Warshall on a 4-node graph with edges: 0→1 (3), 0→2 (8), 1→2 (2), 1→3 (7), 2→3 (1).

1. **Initialize**: Fill matrix with edge weights, ∞ for no edge, 0 on diagonal
2. **k=0**: Try node 0 as intermediate. For example, is 1→0→2 shorter than 1→2? No, because there's no edge 1→0.
3. **k=1**: Try node 1 as intermediate. Is 0→1→2 shorter than 0→2? Yes! 3+2=5 < 8. Update dist\[0\]\[2\] = 5.
4. **k=2**: Try node 2 as intermediate. Is 0→2→3 shorter than 0→3? Yes! 5+1=6 < ∞. Also 1→2→3 = 2+1=3 < 7.
5. **k=3**: Try node 3. No improvements found.

The matrix now contains shortest paths between all pairs.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 450 280"><g opacity="1"><g><g><line x1="112.72792206135786" y1="82.72792206135786" x2="157.27207793864216" y2="127.27207793864214" stroke="#919EAB" stroke-width="1.5" marker-end="url(#arrowhead)"></line><rect x="118.09116882454315" y="89.09116882454315" width="16" height="14" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="0.5" rx="2"></rect><text x="126.09116882454315" y="96.09116882454315" text-anchor="middle" dy=".35em" font-size="9" fill="#454F5B" font-weight="normal">3</text></g> <g><line x1="100" y1="88" x2="100" y2="192" stroke="#919EAB" stroke-width="1.5" marker-end="url(#arrowhead)"></line><rect x="92" y="112.2" width="16" height="14" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="0.5" rx="2"></rect><text x="100" y="119.2" text-anchor="middle" dy=".35em" font-size="9" fill="#454F5B" font-weight="normal">8</text></g> <g><line x1="157.27207793864216" y1="152.72792206135784" x2="112.72792206135786" y2="197.27207793864216" stroke="#919EAB" stroke-width="1.5" marker-end="url(#arrowhead)"></line><rect x="135.90883117545687" y="159.09116882454313" width="16" height="14" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="0.5" rx="2"></rect><text x="143.90883117545687" y="166.09116882454313" text-anchor="middle" dy=".35em" font-size="9" fill="#454F5B" font-weight="normal">2</text></g> <g><line x1="87.27207793864214" y1="197.27207793864216" x2="42.72792206135786" y2="152.72792206135784" stroke="#919EAB" stroke-width="1.5" marker-end="url(#arrowhead)"></line><rect x="65.90883117545685" y="176.90883117545687" width="16" height="14" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="0.5" rx="2"></rect><text x="73.90883117545685" y="183.90883117545687" text-anchor="middle" dy=".35em" font-size="9" fill="#454F5B" font-weight="normal">1</text></g> <g><line x1="152" y1="140" x2="48" y2="140" stroke="#919EAB" stroke-width="1.5" marker-end="url(#arrowhead)"></line><rect x="112.8" y="133" width="16" height="14" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="0.5" rx="2"></rect><text x="120.8" y="140" text-anchor="middle" dy=".35em" font-size="9" fill="#454F5B" font-weight="normal">7</text></g> <g><circle cx="100" cy="70" r="18" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="100" y="70" text-anchor="middle" dy=".35em" fill="white" font-size="12" font-weight="600">0</text></g> <g><circle cx="170" cy="140" r="18" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="170" y="140" text-anchor="middle" dy=".35em" fill="white" font-size="12" font-weight="600">1</text></g> <g><circle cx="100" cy="210" r="18" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="100" y="210" text-anchor="middle" dy=".35em" fill="white" font-size="12" font-weight="600">2</text></g> <g><circle cx="30" cy="140" r="18" fill="#7ea4b3" stroke="#4a7c8f" stroke-width="2"></circle><text x="30" y="140" text-anchor="middle" dy=".35em" fill="white" font-size="12" font-weight="600">3</text></g></g> <g><text x="297" y="44" text-anchor="middle" fill="#454F5B" font-size="11" font-weight="normal">0</text> <text x="335" y="44" text-anchor="middle" fill="#454F5B" font-size="11" font-weight="normal">1</text> <text x="373" y="44" text-anchor="middle" fill="#454F5B" font-size="11" font-weight="normal">2</text> <text x="411" y="44" text-anchor="middle" fill="#454F5B" font-size="11" font-weight="normal">3</text> <g><text x="268" y="69" text-anchor="middle" dy=".35em" fill="#454F5B" font-size="11" font-weight="normal">0</text> <g><rect x="278" y="50" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="297" y="69" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="316" y="50" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="335" y="69" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="354" y="50" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="373" y="69" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="392" y="50" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="411" y="69" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g></g> <g><text x="268" y="107" text-anchor="middle" dy=".35em" fill="#454F5B" font-size="11" font-weight="normal">1</text> <g><rect x="278" y="88" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="297" y="107" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="316" y="88" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="335" y="107" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="354" y="88" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="373" y="107" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="392" y="88" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="411" y="107" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g></g> <g><text x="268" y="145" text-anchor="middle" dy=".35em" fill="#454F5B" font-size="11" font-weight="normal">2</text> <g><rect x="278" y="126" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="297" y="145" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="316" y="126" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="335" y="145" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="354" y="126" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="373" y="145" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="392" y="126" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="411" y="145" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g></g> <g><text x="268" y="183" text-anchor="middle" dy=".35em" fill="#454F5B" font-size="11" font-weight="normal">3</text> <g><rect x="278" y="164" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="297" y="183" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="316" y="164" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="335" y="183" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="354" y="164" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="373" y="183" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g> <g><rect x="392" y="164" width="38" height="38" fill="#FFFFFF" stroke="rgba(145, 158, 171, 0.24)" stroke-width="1"></rect><text x="411" y="183" text-anchor="middle" dy=".35em" fill="#161C24" font-size="12">∞</text></g></g></g><defs><marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#919EAB"></polygon></marker><marker id="arrowhead-highlight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#f4a261"></polygon></marker></defs></g></svg>

Initialize distance matrix: set dist\[i\]\[j\] = edge weight if edge exists, ∞ otherwise, dist\[i\]\[i\] = 0

0 / 10

1x

### Complexity

**Time**: O(V³) because of three nested loops over all vertices

**Space**: O(V²) because of the distance matrix

### When to Use Floyd-Warshall

- Need distances between all pairs
- Small number of nodes (V ≤ 400 or so)
- Dense graphs where E ≈ V²

### Classic Floyd-Warshall Problem

- [Find City with Fewest Reachable](https://www.hellointerview.com/learn/code/graphs/find-city-fewest-reachable): find reachable cities within a threshold distance

---

## Quick Reference

Here's your cheat sheet for interviews:

### Algorithm Selection

| Situation | Use This |
| --- | --- |
| All edges weight 1 | BFS |
| Non-negative weights | Dijkstra |
| Negative weights possible | Bellman-Ford |
| Need all pairs | Floyd-Warshall |
| Weights are 0 or 1 only | 0-1 BFS (optimization) |

### Complexity Comparison

| Algorithm | Time | Space |
| --- | --- | --- |
| BFS | O(V + E) | O(V) |
| Dijkstra | O((V + E) log V) | O(V + E) |
| Bellman-Ford | O(V · E) | O(V) |
| Floyd-Warshall | O(V³) | O(V²) |

---

## Key Takeaways

1. **BFS handles unweighted graphs**: It's simpler than you think. Many "shortest path" problems are just BFS.
2. **Dijkstra is your default for weighted graphs**: Learn and practice it. It appears in ~70% of weighted shortest path interview problems.
3. **Know when algorithms fail**: Dijkstra fails with negative weights. BFS fails with varying weights. Understanding *why* is more valuable than memorizing implementations.
4. **State modification is common**: Real interview problems often add constraints that require tracking extra state beyond just the current node.

---

## Practice Problems

Ready to apply these concepts? Work through these problems:

<table><thead><tr><th colspan="1"><p>Done</p></th><th colspan="1"><p>Question</p></th><th colspan="1"><p>Difficulty</p></th></tr></thead><tbody><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/graphs/network-delay-time">Network Delay Time</a></p></td><td><p>Medium</p></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/graphs/cheapest-flights-k-stops">Cheapest Flights Within K Stops</a></p></td><td><p>Medium</p></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/graphs/path-minimum-effort">Path With Minimum Effort</a></p></td><td><p>Medium</p></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/graphs/find-city-fewest-reachable">Find City with Fewest Reachable</a></p></td><td><p>Medium</p></td></tr></tbody></table>

Reading Progress

On This Page[1\. BFS: When All Edges Are Equal](#1-bfs-when-all-edges-are-equal)

[

How BFS Finds Shortest Paths

](#how-bfs-finds-shortest-paths)[

Walkthrough

](#walkthrough)[

Complexity

](#complexity)[

When to Use BFS

](#when-to-use-bfs)[

Problems That Use BFS for Shortest Path

](#problems-that-use-bfs-for-shortest-path)[

2\. Dijkstra's Algorithm: Non-Negative Weights

](#2-dijkstra-s-algorithm-non-negative-weights)[

How Dijkstra Works

](#how-dijkstra-works)[

Walkthrough

](#walkthrough-1)[

Why It Works

](#why-it-works)[

Complexity

](#complexity-1)[

When to Use Dijkstra

](#when-to-use-dijkstra)[

Classic Dijkstra Problems

](#classic-dijkstra-problems)[

3\. Bellman-Ford: When Negative Weights Exist

](#3-bellman-ford-when-negative-weights-exist)[

How Bellman-Ford Works

](#how-bellman-ford-works)[

Why V-1 Iterations?

](#why-v-1-iterations)[

Walkthrough

](#walkthrough-2)[

Complexity

](#complexity-2)[

When to Use Bellman-Ford

](#when-to-use-bellman-ford)[

4\. Floyd-Warshall: All Pairs Shortest Path

](#4-floyd-warshall-all-pairs-shortest-path)[

How Floyd-Warshall Works

](#how-floyd-warshall-works)[

Walkthrough

](#walkthrough-3)[

Complexity

](#complexity-3)[

When to Use Floyd-Warshall

](#when-to-use-floyd-warshall)[

Classic Floyd-Warshall Problem

](#classic-floyd-warshall-problem)[

Quick Reference

](#quick-reference)[

Algorithm Selection

](#algorithm-selection)[

Complexity Comparison

](#complexity-comparison)[

Key Takeaways

](#key-takeaways)[

Practice Problems

](#practice-problems)

###### Contact

[About Us](https://www.hellointerview.com/aboutus) [Product Support](https://www.hellointerview.com/support)

7511 Greenwood Ave North Unit #4238 Seattle WA 98103

Shortest Path Algorithms | Hello Interview