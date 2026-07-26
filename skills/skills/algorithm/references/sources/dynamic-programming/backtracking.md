---
title: "Backtracking Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/backtracking/overview"
author:
published:
created: 2026-07-25
description: "Learn backtracking fundamentals with decision tree exploration and recursive search patterns."
tags:
  - "clippings"
---
###### Backtracking

## Backtracking Overview

---

![Backtracking Overview](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/backtracking-overview/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002410Z&X-Amz-Expires=7200&X-Amz-Signature=62bb60ea3af1a72387f956a1ac89c609038dc9fcf2ead430e4aee9b8f2b855c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

5:37

Backtracking Overview

8 chapters • 1 interactive checkpoints

**Pre-Requisite**: [Depth-First Search](https://www.hellointerview.com/learn/code/depth-first-search/introduction)

Backtracking algorithms use [Depth-First Search](https://www.hellointerview.com/learn/code/depth-first-search/introduction) to search all possible paths for a solution to a path. The animation below shows how a backtracking algorithm finds the word "HELLO" using cells that are adjacent to each other in a 2D-grid.

The algorithm starts with "H" and explores all possible word paths by adding adjacent cells to the current word. As soon as the current word doesn't match "HELLO", the algorithm backtracks to the previous cell and tries the next path.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 350"><g transform="translate(0, 66.66666666666667)"><g><g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="216.66666666666666" y="0"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="250" y="33.333333333333336">H</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="283.33333333333337" y="0"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="316.66666666666663" y="33.333333333333336">M</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="350" y="0"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="383.33333333333337" y="33.333333333333336">O</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="416.6666666666667" y="0"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="450" y="33.333333333333336">I</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="216.66666666666666" y="66.66666666666667"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="250" y="100">E</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="283.33333333333337" y="66.66666666666667"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="316.66666666666663" y="100">L</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="350" y="66.66666666666667"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="383.33333333333337" y="100">L</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="416.6666666666667" y="66.66666666666667"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="450" y="100">P</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="216.66666666666666" y="133.33333333333334"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="250" y="166.66666666666669">T</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="283.33333333333337" y="133.33333333333334"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="316.66666666666663" y="166.66666666666669">K</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="350" y="133.33333333333334"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="383.33333333333337" y="166.66666666666669">C</text></g> <g opacity="0.85"><rect rx="2" stroke-width="5.555555555555556" stroke="#299a8d" fill="#59b9b0" height="66.66666666666667" width="66.66666666666667" opacity="0.85" stroke-opacity="0.85" x="416.6666666666667" y="133.33333333333334"></rect><text fill="white" font-weight="700" font-size="33.333333333333336" text-anchor="middle" dominant-baseline="middle" x="450" y="166.66666666666669">A</text></g></g><g opacity="1"></g></g></svg>

word search backtracking

0 / 11

2x

This example demonstrates key characteristics of backtracking algorithms:

- It finds a solution for the problem by exploring all possible paths.
- It "backtracks" to the previous path as soon as the current path doesn't lead to a solution.

Let's now look at an example of how to use Depth-First Search to solve backtracking problems.

## Example: Path Sum

###### DESCRIPTION

Given a binary tree and a target sum, find all root-to-leaf paths where the sum of the values along the path equals the given sum. For this example, all nodes have positive integer values.

**Example:** Target: 7

<svg viewBox="33 87.3805 432.8125 300" width="432.8125" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="350" cy="0" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(126, 164, 179);"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">7</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="425" cy="70" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(126, 164, 179);"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">2</text> <line x1="425" y1="96" x2="387.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="387.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">6</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="462.5" cy="140" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(126, 164, 179);"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">1</text></svg>

Output:

```
[[4, 2, 1]]
```

<svg viewBox="33 87.3805 432.8125 300" width="432.8125" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="350" cy="0" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(41, 154, 141);"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">7</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="425" cy="70" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(41, 154, 141);"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">2</text> <line x1="425" y1="96" x2="387.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="387.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">6</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)"></line><circle cx="462.5" cy="140" r="26" stroke-width="2" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="fill: rgb(41, 154, 141);"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1" transform="matrix(1.562499943095963, 0, 0, 1.562499943095963, -297.4687341543089, 128.0055270451397)" style="white-space: pre;">1</text></svg>

This problem is a good backtracking candidate because it requires exploring all root-to-leaf paths to see if they sum to the given target.

The animation below visualizes the different paths the backtracking algorithm explores on the binary tree below with target = 11:

Visualization

<svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 80)"><circle cx="350" cy="0" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="350" y1="30" x2="210" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="210" cy="70" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="210" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="210" y1="100" x2="140" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="140" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="140" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">1</text> <line x1="140" y1="170" x2="105" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="105" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="105" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="140" y1="170" x2="175" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="175" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="175" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">5</text> <line x1="210" y1="100" x2="280" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="280" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="280" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text> <line x1="280" y1="170" x2="245" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="245" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="245" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="280" y1="170" x2="315" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="315" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="315" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="350" y1="30" x2="490" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="490" cy="70" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="490" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="490" y1="100" x2="420" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="420" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="420" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="420" y1="170" x2="385" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="385" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="385" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="420" y1="170" x2="455" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="455" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="455" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text></g></svg>

path sum backtracking

0 / 34

1x

Watch for the steps where we stop exploring a path before reaching a leaf node because the running total exceeds the target sum. This is known as "pruning" — it lets us skip entire subtrees we know can't lead to a valid solution.

### Backtracking Solution

To implement this algorithm, we'll use **depth-first search** to explore all possible root-to-leaf paths.

We define a helper function backtrack that performs the depth-first search. backtrack takes the current node, the current path, and the current sum as arguments.

Each recursive call of backtrack explores the current node by adding the node's value to the path and incrementing the total sum.

If the current node is a leaf node, we check if the total sum equals the target sum. If it does, we add the path to the result list. We then backtrack to the previous node in the tree.

Otherwise, it makes recursive calls to explore the left and right children of the current node.

```
def pathSum(root, target):
    def backtrack(node, path, total):
        if not node:
            return
        
        path.append(node.val)
        total += node.val

        # KEY STEP 2
        # current sum exceeds target
        # so pop to remove the current node from the path
        # return to backtrack to previous node on the call stack
        if total > target:
            path.pop()
            return
        
        if not node.left and not node.right:
            # add the path to the result
            # note we have to make a copy (path[:]) of the path
            # since future recursive calls modify path
            if total == target:
                result.append(path[:])
        else:
            backtrack(node.left, path, total)
            backtrack(node.right, path, total)

        # KEY STEP 1
        # we have finished exploring all paths containing the current node
        # so pop to remove the current node from the path
        # return to backtrack to previous node on the call stack.
        path.pop()

    result = [] 
    backtrack(root, [], 0)
    return result
```

### Key Steps

The key to understanding backtracking algorithms is to understand what happens when a recursive call returns.

**KEY STEP 1: Backtracking**

The animation below shows how the algorithm "backtracks" after processing the first leaf node (Node 2 at the bottom left of the tree).

Step 1: The function first adds the value of the leaf node to the path and increments the total of the path.

Step 2: Since we're at a leaf node, the function checks if the current sum equals the target sum. It doesn't here, the function first pops the leaf node from the path list before the function call returns and **backtracks** to the previous node in the tree.

Step 3: The next function on the call stack then resumes and explores its right child (Node 5).

Visualization

Python

```
def pathSum(root, target):
    result = []
    backtrack(root, [], 0)
    return result
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 4
path: [4]
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 6
path: [4,2]
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 7
path: [4,2,1]
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 7
path: [4,2,1]
```

<svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 600 400"><g transform="translate(0, 80)"><circle cx="300" cy="0" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="300" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="300" y1="30" x2="175" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="175" cy="70" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="175" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="175" y1="100" x2="112.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="112.5" cy="140" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="112.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">1</text> <line x1="112.5" y1="170" x2="81.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="81.25" cy="210" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="81.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="112.5" y1="170" x2="143.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="143.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="143.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">5</text> <line x1="175" y1="100" x2="237.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text> <line x1="237.5" y1="170" x2="206.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="206.25" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="206.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="237.5" y1="170" x2="268.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="268.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="268.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="300" y1="30" x2="425" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="425" y1="100" x2="362.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="362.5" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="362.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="362.5" y1="170" x2="331.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="331.25" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="331.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="362.5" y1="170" x2="393.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="393.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="393.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text></g> <g transform="translate(300, 360)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="20"><text font-weight="500" x="0" y="20" font-family="monospace" fill="#161C24">result</text></g> <g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="#454F5B"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[]</text></g></g></svg>

recursive call

0 / 3

1x

**Key Step 2: Pruning**

The animation below shows how the algorithm "prunes" paths when the current sum exceeds the target sum at Node 8.

Step 1: The function first adds the value of the current node to the path and increments the total of the path.

Step 2: The function checks if the current sum exceeds the target sum. It does here, so the function immediately pops the current node from the path list before the function call returns and **backtracks** to the previous node in the tree.

Step 3: The next function on the call stack then resumes (Node 2). Since all paths containing Node 2 have been explored, the function pops Node 2 from the path and backtracks to the previous node in the tree.

Visualization

Python

```
def pathSum(root, target):
    result = []
    backtrack(root, [], 0)
    return result
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 4
path: [4]
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 6
path: [4,2]
```

```
def backtrack(node, path, total):
    if not node:
        return
        
    path.append(node.val)
    total += node.val

    if total > target:
        path.pop()
        return

    if not node.left and not node.right:
        if total == target:
            result.append(path[:])
    else:
        backtrack(node.left, path, total)
        backtrack(node.right, path, total)
    path.pop()
```

```
total: 6
path: [4,2]
```

<svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 600 400"><g transform="translate(0, 80)"><circle cx="300" cy="0" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="300" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="300" y1="30" x2="175" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="175" cy="70" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="175" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="175" y1="100" x2="112.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="112.5" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="112.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">1</text> <line x1="112.5" y1="170" x2="81.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="81.25" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="81.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="112.5" y1="170" x2="143.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="143.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="143.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">5</text> <line x1="175" y1="100" x2="237.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#7ea4b3" stroke-width="2"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text> <line x1="237.5" y1="170" x2="206.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="206.25" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="206.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">4</text> <line x1="237.5" y1="170" x2="268.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="268.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="268.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="300" y1="30" x2="425" y2="40" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="425" y1="100" x2="362.5" y2="110" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="362.5" cy="140" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="362.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">3</text> <line x1="362.5" y1="170" x2="331.25" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="331.25" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="331.25" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">2</text> <line x1="362.5" y1="170" x2="393.75" y2="180" stroke="rgb(203, 213, 225)" stroke-width="2" opacity="0.75"></line><circle cx="393.75" cy="210" r="30" fill="rgb(203, 213, 225)" stroke-width="2"></circle><text x="393.75" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20">8</text></g> <g transform="translate(300, 360)"><g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="20"><text font-weight="500" x="0" y="20" font-family="monospace" fill="#161C24">result</text></g> <g opacity="1" dominant-baseline="middle" text-anchor="middle" font-size="18" fill="#454F5B"><text x="0" y="47.5" font-family="monospace" dominant-baseline="middle">[]</text></g></g></svg>

recursive call

0 / 3

1x

#### Key Takeaways

1. Returning from a function corresponds to backtracking to the previous node in the tree.
2. Since we use a single list to store the current path across all recursive calls, before returning, we have to pop the current node from that path to backtrack.

#### Time and Space Complexity

**Time Complexity:** O(n <sup>2</sup>), where n is the number of nodes in the binary tree. The DFS visits each node once. Path copying only happens at leaf nodes — each copy takes O(h) time where h is the depth of that leaf. The total cost of all path copies is the sum of all root-to-leaf path lengths, which is O(n <sup>2</sup>) in the worst case (a skewed tree with leaves at varying depths). For a balanced tree, this reduces to O(n log n) since every leaf sits at depth O(log n).

**Space Complexity:** O(n <sup>2</sup>), where n is the number of nodes in the binary tree. This is dominated by the result list, which can hold up to O(n) paths each up to O(n) nodes long. The recursion stack adds O(h) space where h is the height of the tree.

### Summary

The above algorithm is a good example of a backtracking algorithm because:

- It *explores all possible root-to-leaf paths* in the binary tree to find the paths that sum to the target sum.
- Whenever we reach a leaf node, we *backtrack* to the previous node in the tree to explore the next path.
- It "prunes" paths by returning immediately when the sum exceeds the target sum.

Reading Progress

On This Page