---
title: "Passing Values Down and Helper Functions"
source: "https://www.hellointerview.com/learn/code/depth-first-search/global-variables"
author:
published:
created: 2026-07-25
description: "Use helper functions and global variables to pass values down recursion with clear DFS patterns."
tags:
  - "clippings"
---
###### Depth-First Search

---

In the Return Values section, we covered how return values allow us to solve binary tree problems from the "bottom-up".

In some cases, questions require us to pass information "down" from parents to child nodes, which we do via the parameters of our recursive function. If we need more parameters than the original function signature allows, then we need to introduce a helper function to help us recurse.

Let's look at an example of a question that requires a helper function.

###### DESCRIPTION (inspired by Leetcode.com)

Given the root node of a binary tree, write a function to find the number of "good nodes" in the tree. A node X in the tree is considered "good" if in the path from the root to the node X, there are no nodes with a value greater than X's value.

**Example** Input: <svg width="100%" height="300px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 300"><g transform="translate(0, 60)"><circle cx="350" cy="0" r="26" fill="#299a8d" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">4</text> <line x1="350" y1="26" x2="275" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="275" cy="70" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">2</text> <line x1="275" y1="96" x2="237.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="237.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">1</text> <line x1="275" y1="96" x2="312.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="312.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">3</text> <line x1="350" y1="26" x2="425" y2="44" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="425" cy="70" r="26" fill="#299a8d" stroke-width="2" opacity="1"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">7</text> <line x1="425" y1="96" x2="387.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="387.5" cy="140" r="26" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">6</text> <line x1="425" y1="96" x2="462.5" y2="114" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="462.5" cy="140" r="26" fill="#299a8d" stroke-width="2" opacity="1"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">9</text></g><g transform="translate(350, 280)"></g></svg>

Output:

```
# The good nodes are highlighted in green (4, 7, 9)
```

| Node | Path | Is Good Node? | Explanation |
| --- | --- | --- | --- |
| 4 | \[4\] | Yes | The root node is a "good node" since there are no nodes with a value greater than 4 in the path from the root to the node. |
| 2 | \[4, 2\] | No | 4 is greater than 2. |
| 1 | \[4, 2, 1\] | No | Both 4 and 2 are greater than 1. |
| 3 | \[4, 2, 3\] | No | 4 is greater than 3. |
| 7 | \[4, 7\] | Yes | There are no nodes with a value greater than 7, so it is a "good node". |
| 6 | \[4, 7, 6\] | No | 7 is greater than 6. |
| 9 | \[4, 7, 9\] | Yes | There are no nodes with a value greater than 9, so it is a "good node". |

Code Editor

Python

---

Run your code to see results here

Have suggestions or found something wrong?

**Define the Return Value** If I'm at a node in the tree, what values do I need from my left and right children to calculate the number of good nodes in the subtree rooted at the current node?

I need to know the number of good nodes in my left subtree and the number of good nodes in my right subtree, which tells me that each recursive call should return the number of good nodes in the subtree rooted at the current node.

If I know those two values, then I can return the number of good nodes in my subtree by adding them together, and then adding 1 if the current node is a good node. We'll figure out how to tell if the current node is a good node next, but first let's figure out the base case.

**Base Case** The number of good nodes in an empty tree is 0.

**Extra Step: Determining if a Node is "Good"**

In order to tell if a root node is "good", we need to know the maximum value of any node on the path starting from the original root of the tree to the current node. Since this is a value that must be passed down from parent nodes to children, we need to introduce a helper function that introduces an extra parameter max\_, which represents the maximum value seen so far on the current path from the root.

To check if the current node is a good node, we compare the current node's value to max\_. If the current node's value is greater than or equal to max\_, then the current node is a good node, and we increment our count by 1.

Two subtleties are worth calling out here, since they trip people up. Whether a node is good depends on the running max along the path, not on whether its *parent* is good.

Picture a path like 3 → 1 → 3. The middle 1 isn't good (the root 3 is larger), but max\_ never drops, so it's still 3 by the time we reach the leaf. That leaf 3 *is* good: nothing on the path from the root is larger than it. A node can be good even when the node right above it isn't. And because the check is "greater than *or equal to* ", a node that ties the running max counts as good too.

Here's what the helper function looks like:

```
def dfs(root, max_):
    # base case
    if root is None:
        return 0

    count = 0
    if root.val >= max_:
        # good node found, update count and max_
        count += 1
        max_ = root.val

    # recurse and pass down updated max_
    # to the left and right children
    left = dfs(root.left, max_)
    right = dfs(root.right, max_)           

    # return the number of good nodes in the
    # subtree rooted at the current node
    return count + left + right
```

In our main function, we can make the initial call to our helper function with max\_ set to -infinity to kick off the recursion.

The animation below visualizes each step of the solution. Pay attention to how the max value seen so far on the current path from the root is passed down from parent to child nodes via the parameter in the helper function.

Visualization

Python

```
def goodNodes(root):
  def dfs(root, max_):
    if root is None:
        return 0
    
    count = 0
    if root.val >= max_:
      count += 1
      max_ = root.val
    
    left = dfs(root.left, max_)
    right = dfs(root.right, max_)
    return left + right + count

  return dfs(root, -float("inf"))
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 80)"><circle cx="350" cy="0" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">4</text> <line x1="350" y1="30" x2="275" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="275" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="275" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">2</text> <line x1="275" y1="100" x2="237.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="237.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="237.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">1</text> <line x1="275" y1="100" x2="312.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="312.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="312.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">3</text> <line x1="350" y1="30" x2="425" y2="40" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="425" cy="70" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="425" y="70" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">7</text> <line x1="425" y1="100" x2="387.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="387.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="387.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">6</text> <line x1="425" y1="100" x2="462.5" y2="110" stroke="#59b9b0" stroke-width="2" opacity="0.75"></line><circle cx="462.5" cy="140" r="30" fill="#299a8d" stroke-width="2" stroke="#59b9b0" opacity="0.75"></circle><text x="462.5" y="140" dominant-baseline="middle" text-anchor="middle" fill="#FFFFFF" font-size="20" opacity="1">9</text></g><g transform="translate(350, 280)"></g></svg>

visible nodes in binary tree

0 / 37

1x

In this implementation, notice that the helper function dfs is defined within the body of the main goodNodes function. While not strictly necessary, we recommend this approach as it allows for a cleaner way to use **global variables**, which we cover below.

Questions involving **root-to-leaf** paths are common examples of where using helper functions are necessary, as we can use the helper function to introduce extra parameters that store the state of our current path.

#### Summary

Some questions require that nodes have values that are passed down to them via their parents. These values are passed via the parameters of the recursive function. If we need more values than the original function signature allows, then we need to introduce a helper function to help us recurse.

### Global Variables

In some cases, using a global variable that all recursive calls access can simplify the code. Recalling the Good Nodes question from the previous section, Let's say that instead of returning only returning the count of all good nodes, we want to return a list of all good nodes in the tree.

To do so, we can initialize a single list that all recursive calls have access to, and append the current node to that list if it's visible:

```
def goodNodes(root):
    nodes = []
    def dfs(root, max_):
        nonlocal nodes
        if root is None:
            return
        
        if root.val >= max_:
            max_ = root.val
            nodes.append(root)
        
        dfs(root.left, max_)
        dfs(root.right, max_)           

    dfs(root, -float('inf'))
    return nodes
```

Note that there are no return values in the recursive function. We use depth-first search to traverse each node in the tree, and at each node, we check if the node is visible. If it is, we append it to the global list of visible nodes.

Since the "global variable" nodes is declared within the body of the main goodNodes function, it's not truly global - only the recursive dfs function has access to it. This is preferred, as it protects the variable from being accidentally modified by code outside of the goodNodes function.

Although something like that most likely won't happen in the context of an interview, it's a good bit of knowledge that you can mention during your interview to demonstrate your understanding of scope.

##### Alternative Approach 1

Compare that approach to the following, where each recursive call returns a list of visible nodes in its subtree, and the parent node combines them to return the final list of visible nodes:

```
def goodNodes(root):
    def dfs(root, max_):
        if root is None:
            return []
        
        result = []
        if root.val >= max_:
            max_ = root.val
            result.append(root)
        
        left = dfs(root.left, max_)
        right = dfs(root.right, max_)           
        return result + left + right

    return dfs(root, -float('inf'))
```

While this approach avoids a global variable, it has a one major drawback: it requires us to merge lists returned by each subtree at each node into a new list in every call, which adds both time and space complexity. In the worst case, when every node in the tree is visible, we end up copying up to N nodes at each of the N nodes in the tree, resulting in a time complexity of O(n <sup>2</sup>).

##### Alternative Approach 2

Another alternative approach is to pass a single list of visible nodes as an extra parameter to the recursive function and update it as we recurse. While this is more time and space efficient than merging lists, it is cumbersome and error-prone, as we need to both pass the list down to each recursive call, and correctly return it to the parent node.

```
def goodNodes(root):
    def dfs(root, max_, nodes):
        if root is None:
            return nodes
        
        if root.val >= max_:
            max_ = root.val
            nodes.append(root)
        
        left = dfs(root.left, max_, nodes)
        # need to pass the result from the
        # left to the right subtree
        right = dfs(root.right, max_, left)
        return right
    return dfs(root, -float('inf'), [])
```

For these reasons, global variables are preferred whenever we need to collect values in a list as we traverse the binary tree. Global variables are also useful when the return values of each recursive function differs from what the question is asking. We'll cover a few such examples in the practice problems.

###### What is the time complexity of this solution?

1

O(m \* n)

2

O(n)

3

O(n \* logn)

4

O(n!)

Reading Progress

On This Page[Global Variables](#global-variables)