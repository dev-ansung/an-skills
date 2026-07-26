---
title: "Breadth-First Search Fundamentals | Hello Interview"
source: "https://www.hellointerview.com/learn/code/breadth-first-search/fundamentals"
author:
published:
created: 2026-07-25
description: "Learn BFS fundamentals with queue-based traversal and level-order exploration visualizations."
tags:
  - "clippings"
---
###### Breadth-First Search

## Breadth-First Search Fundamentals

---

![Breadth-First Search Fundamentals](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/bfs-fundamentals/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002401Z&X-Amz-Expires=7200&X-Amz-Signature=160b1f68abbebca856b084b1e46f80aee529470bc7e2d86e150c14b698ae0e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

5:21

Breadth-First Search Fundamentals

7 chapters • 2 interactive checkpoints

BFS is a level-by-level traversal algorithm. It starts at the root node of the binary tree and visits all nodes at the current level before moving to the next level of the tree.

Visualization

Python

```
def bfs(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        curr_node = queue.popleft()
        result.append(curr_node.val)
        
        if curr_node.left:
            queue.append(curr_node.left)
        if curr_node.right:
            queue.append(curr_node.right)

    return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 50)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">7</text> <line x1="425" y1="100" x2="387.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="387.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">6</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">9</text></g><g transform="translate(350, 260)"></g><g transform="translate(350, 340)"></g></svg>

breadth-first search

0 / 15

1x

The order in which BFS visits the nodes in a binary tree.

#### BFS Procedure

BFS uses a **queue** to keep track of the nodes it needs to visit, and follows these steps:

- Start at the root node and add it to the queue.
- While the queue is not empty, remove the node at the front of the queue and visit it.
- Add the children of the node to the back queue.
- Repeat steps 2 and 3 until the queue is empty, which means you've processed all nodes in the tree.

**Queues in Python**

In Python, you can use the deque class from the collections module to create a queue.

The deque class provides an append method to add elements to the end of the queue and a popleft method to remove elements from the front of the queue, both of which run in O(1) time.

#### Implementation

Below is a basic implementation of BFS on a binary tree. The result list stores the nodes in the order in which they are visited.

Visualization

Python

```
def bfs(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        curr_node = queue.popleft()
        result.append(curr_node.val)
        
        if curr_node.left:
            queue.append(curr_node.left)
        if curr_node.right:
            queue.append(curr_node.right)

    return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 50)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">7</text> <line x1="425" y1="100" x2="387.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="387.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">6</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">9</text></g><g transform="translate(350, 260)"></g><g transform="translate(350, 340)"></g></svg>

breadth-first search

0 / 15

1x

#### Summary

- BFS is a traversal algorithm that **visits all nodes at a particular level** before moving to the next level.
- BFS uses a **queue** to keep track of the nodes it needs to visit.

## Processing Levels

The distinguishing feature of BFS is that it visits all nodes at a particular level before moving onto the nodes at the next level.

Compared to depth-first search, **BFS makes it much easier to tell when we have finished processing all nodes at a particular level**. This makes it a natural candidate for questions that ask something about the nodes at each level, which is shown below in the **Level-Order Traversal** algorithm.

###### DESCRIPTION

Given a binary tree, return the level-order traversal of its nodes' values. (i.e., from left to right, level by level).

**Input** <svg width="100%" height="250" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 70)"><circle cx="350" cy="0" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="387.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="387.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">6</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text></g></svg>

**Output** \[\[4\], \[2, 7\], \[1, 3, 6, 9\]\]

We can extend our basic BFS algorithm to calculate the number of nodes at each level by adding a for-loop that iterates over the size of the queue at the beginning of each level.

- Each time the for-loop runs, we add the current node to the current\_level list.
- When the for-loop finishes, we have finished processing all nodes at that level, and we can add the current\_level list to the result list. We can reset the current\_level list to an empty list to prepare for the next level.

```
from collections import deque
    
def level_order(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        # number of nodes at the current level
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            curr = queue.popleft()
            current_level.append(curr.val)
            
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
        
        # IMPORTANT
        # we have finished processing all nodes at the current level
        result.append(current_level)
        
    return result
```

To help you visualize how this algorithm works, the diagram below shows the state of the queue after we have finished processing the 2nd level of the tree.

Notice that queue contains the nodes at the 3rd level of the tree, \[1, 3, 6, 9\]. When we enter the next iteration of the while loop, the for loop will run 4 times to process these nodes.

```
from collections import deque
    
def level_order(root):
    if not root:
        return []

    result = []
    queue = deque([root])

    while queue:
        # number of nodes at current level
        level_size = len(queue)
        current_level = []
        
        for _ in range(level_size):
            curr = queue.popleft()
            current_level.append(curr.val)
            
            if curr.left:
                queue.append(curr.left)
            if curr.right:
                queue.append(curr.right)
        
        # IMPORTANT
        # we have finished processing all
        # nodes at the current level
        result.append(current_level)
        
    return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="150 0 400 400"><g transform="translate(0, 45)"><circle cx="350" cy="0" r="30" fill="rgb(126, 164, 179)" stroke-width="2"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="rgb(126, 164, 179)" stroke-width="2"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="rgb(203 213 225)" stroke-width="2"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="rgb(203 213 225)" stroke-width="2"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="rgb(126, 164, 179)" stroke-width="2"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">7</text> <line x1="425" y1="100" x2="387.5" y2="110" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="387.5" cy="140" r="30" fill="rgb(203 213 225)" stroke-width="2"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">6</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="rgb(203 213 225)" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="rgb(203 213 225)" stroke-width="2"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">9</text> <g opacity="1"><circle cx="425" cy="70" r="26" fill="none" stroke="#296E9A" stroke-width="5"></circle></g></g><g transform="translate(350, 230)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="24"><text font-weight="500" x="0" y="20" font-family="monospace">queue</text></g> <g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="22" fill="#637381"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[1,3,6,9]</text></g> <g opacity="0" dominant-baseline="middle" text-anchor="middle" font-size="22" fill="#637381"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[1,3,6]</text></g></g> <g transform="translate(350, 310)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="24"><text font-weight="500" x="0" y="20" font-family="monospace">current_level</text></g> <g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="22" fill="#637381"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[2,7]</text></g></g> <g transform="translate(350, 390)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="24"><text font-weight="500" x="0" y="20" font-family="monospace">result</text></g> <g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="22" fill="#637381"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[[4]]</text></g></g></svg>

The state of the aglorithm after we have finished processing the nodes at the 2nd level of the tree.

Using a for-loop to iterate over the nodes at each level is such a common pattern that it is the version of BFS on binary trees you need to know for interviews. The practice problems we will look at next all use this version of BFS.

###### What is the time complexity of this solution?

1

O(n)

2

O(n log n)

3

O(4ⁿ)

4

O(n²)

Reading Progress

On This Page[Processing Levels](#processing-levels)