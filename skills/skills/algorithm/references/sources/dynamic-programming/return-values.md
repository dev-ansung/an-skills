---
title: "Return Values | Hello Interview"
source: "https://www.hellointerview.com/learn/code/depth-first-search/return-values"
author:
published:
created: 2026-07-25
description: "Learn how to structure DFS return values with subtree summaries and recursive composition."
tags:
  - "clippings"
---
###### Depth-First Search

## Return Values

---

![DFS Return Values](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/dfs-return-values/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002717Z&X-Amz-Expires=7200&X-Amz-Signature=e0970d48b22fc1f716339e2be74642dd0b043af8db02ee34992156f26a7f2169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

3:50

DFS Return Values

7 chapters • 3 interactive checkpoints

In the previous section, we learned how Depth-First Search traverses each node in a binary tree via a series of recursive calls. To solve binary tree interview problems, the next step is to have each recursive call to DFS return a value.

In this unit, we will:

1. Walkthrough an example to demonstrate how recursion and return values are used to solve binary tree problems with Depth-First Search.
2. Cover a general approach we can use to determine return values when faced with a binary tree problem.
3. Practice!

## Recursion

This template is a starting point for solving binary tree problems with Depth-First Search, which takes the base implementation of DFS from the previous section and adds **return values** to each recursive call.

```
def dfs(node):
    # base case
    if node is None:
        return some value
    
    ...
    
    left = dfs(node.left)
    right = dfs(node.right)
    return value based on left and right
```

To solve binary tree problems with DFS, we have to get used to solving problems recursively, which we do in the problem below:

## Problem: Sum of Nodes

###### DESCRIPTION

Given a binary tree, use Depth-First Search to find the sum of all nodes in the tree.

**Input** <svg width="100%" height="250" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 70)"><circle cx="350" cy="0" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="387.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="387.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">6</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="30" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text></g></svg>

**Output**

```
4 + 2 + 1 + 3 + 7 + 6 + 9 = 32
```

#### Thinking Recursively

To solve this problem, let's start with an observation:

In the binary tree below, the sum of all nodes equals the value of the root node (4) + the sum of all nodes in the left subtree (6) + the sum of all nodes in the right subtree (22).

<svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 60)"><text font-family="monospace" x="210" y="55" font-size="16">6</text> <text font-family="monospace" x="475" y="55" font-size="16">22</text> <circle cx="350" cy="0" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="397.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="397.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">6</text> <line x1="425" y1="96" x2="397.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text><rect x="200" y="30" width="145" height="155" fill="#7EA4B3" opacity=".25" rx="10"></rect><rect x="365" y="30" width="135" height="155" fill="#227D70" opacity=".25" rx="10"></rect></g><g transform="translate(0,80)"><g opacity="1"></g></g></svg>

The sum of all the nodes in the binary tree is 4 + 6 + 22 = 32.

Note this applies to every subtree in the tree. The sum of the subtree rooted at Node(2) is equal to 2 + the sum of its left subtree (1) + the sum of its right subtree (3).

<svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 60)"><text font-family="monospace" x="205" y="50" font-size="16">6</text> <text font-family="monospace" x="335" y="125" font-size="16">3</text> <text font-family="monospace" x="205" y="125" font-size="16">1</text> <circle cx="350" cy="0" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="397.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="397.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">6</text> <line x1="425" y1="96" x2="397.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text><rect x="200" y="30" width="145" height="150" fill="#7EA4B3" opacity=".35" rx="10"></rect><rect x="280" y="105" width="65" height="75" fill="#227D70" opacity=".25" rx="10"></rect><rect x="200" y="105" width="65" height="75" fill="#7EA4B3" opacity=".25" rx="10"></rect></g></svg>

The sum of the left subtree 2 + 1 + 3 = 6. *Recursion!*

The subtrees rooted at the leaf nodes are equal to the value of the leaf nodes, since their left and right subtrees are empty.

In other words, if we know the sum of our left and right subtrees, then we know the sum of our subtree.

```
sum(node) = sum(node.left) + sum(node.right) + node.val
```

What we've done is expressed the solution to the problem recursively: in terms of smaller subproblems to the same problem (the sum of a tree in terms of its left and right subtrees).

So how can we leverage this observation to solve the problem? By using Depth-First Search!

### Depth-First Search Approach

Let's recall a key point about Depth-First Search: when a recursive call to dfs on a subtree returns, execution returns to the parent of that subtree.

If each recursive call to dfs returns with the sum of its subtree, then the parent node will *receive that value as the sum of either its left or right subtree*. It can then use that value as part of its own subtree sum based on the recursive equation from above.

Here's how to visualize the steps of the Depth-First Search solution to this problem:

It starts by making recursive calls down the left subtree until reaching the first leaf node, Node(1):

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 80)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">5</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text><g opacity="1"><circle cx="350" cy="0" r="30" fill="none" stroke="#4a7c8f" stroke-width="4"></circle></g></g><g transform="translate(350, 280)"></g></svg>

sum of nodes in binary tree

0 / 2

1x

Node(1) returns the sum of its subtree to its parent Node(2), which receives this value as the sum of its left subtree. 1/2

Node(2) then makes a recursive call to its right subtree, Node(3). 2/2

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 80)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">5</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text><g opacity="1"><circle cx="237.5" cy="140" r="30" fill="none" stroke="#4a7c8f" stroke-width="4"></circle></g></g><g transform="translate(350, 280)"></g></svg>

0 / 2

1x

Node(3) returns the sum of its subtree to its parent, which receives this value as the sum of its right subtree. 1/9

Now, the parent node Node(2) can calculate the sum of its subtree, and return that value to its parent, Node(4). 2/9

This process continues until the root node receives the sum of both its left and right subtrees, and can calculate the sum of the entire tree. 3/9 to 9/9

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 80)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">5</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text><g opacity="1"><circle cx="237.5" cy="140" r="30" fill="none" stroke="#4a7c8f" stroke-width="4"></circle></g></g><g transform="translate(350, 280)"></g></svg>

0 / 9

1x

Note how the answer "bubbles up" from the leaf nodes up to the parent nodes until we reach the root node, which is true of all binary tree problems that are solved with Depth-First Search.

### Implementation

Now that we know that each recursive call should return the sum of its subtree, we can implement our solution:

The base cases are the subproblems we can solve directly (without making any recursive calls):

- An empty subtree has a sum of 0.
- The subtree rooted at a leaf node has a sum equal to the value of the leaf node.

Otherwise, we make recursive calls to get the sum of our left and right subtrees. We then return the sum of the left subtree, right subtree, and the current node's value.

```
def dfs(node):
    # base case: empty subtree
    if node is None:
        return 0
    
    # base case: leaf node
    if node.left is None and node.right is None:
        return node.val
    
    left = dfs(node.left)
    right = dfs(node.right)
    return left + right + node.val
```

### Solving Problems with Recursion

When solving a binary tree problem with recursion, the first step is to figure out the return value of each recursive call. In the problem above, each recursive call returned the sum of the subtree rooted at the current node.

To determine what the return value should be for a different problem, imagine you're at a node in the tree and ask yourself: "What information do I need from my left and right subtrees to solve the problem for my subtree?"

**Problem** Find the maximum value in a binary tree

**Explanation** If I'm at a node in the tree, what values do I need from my left and right subtrees to find the maximum value for my subtree?

I need to know the maximum value in my left subtree, and the maximum value in my right subtree. The maximum value in my subtree is the maximum of those two values and the value of my node.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 80)"><text font-family="monospace" x="210" y="55" font-size="16">3</text> <text font-family="monospace" x="475" y="55" font-size="16">9</text> <circle cx="350" cy="0" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text><rect x="200" y="30" width="145" height="155" fill="#7EA4B3" opacity=".25" rx="10"></rect><rect x="365" y="30" width="135" height="155" fill="#227D70" opacity=".25" rx="10"></rect></g><g transform="translate(0,80)"><g opacity="1"></g></g></svg>

The maximum value in the tree above is equal to max(3, 4, 9) = 9

This tells me that each recursive call should return the maximum value in the subtree rooted at the current node.

In code, I'll get the max values of my left and right subtrees via recursive calls, and the return statement of each recursive function becomes:

```
def maxValue(node):
    ... 

    left = maxValue(node.left)
    right = maxValue(node.right)
    return max(left, right, node.val)
```

Finally, we need to add our base case, which are the subproblems we can solve directly:

- An empty subtree has a maximum value of negative infinity.
- The subtree rooted at a leaf node has a maximum value equal to the value of the leaf node.

```
def maxValue(node):
    if node is None:
        return float('-inf')
    
    if node.left is None and node.right is None:
        return node.val

    left = maxValue(node.left)
    right = maxValue(node.right)
    return max(left, right, node.val)
```

### Common Mistakes

**Returns Value** Not being able to clearly define what each recursive call returns in terms of the node it is called on. This leads to incorrect return values, particulary in the base cases.

**Base Cases** Make sure that the return value of the base case and the return value of the recursive case are of the same type. A common mistake is to return None for the base case and an integer in the recursive case.