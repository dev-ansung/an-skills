---
title: "Solution Space Trees | Hello Interview"
source: "https://www.hellointerview.com/learn/code/backtracking/solution-space-trees"
author:
published:
created: 2026-07-25
description: "Visualize backtracking solution space with interactive decision tree exploration and path tracking."
tags:
  - "clippings"
---
###### Backtracking

## Solution Space Trees

---

![Solution-Space Trees](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/solution-space-trees/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002415Z&X-Amz-Expires=7200&X-Amz-Signature=90b6943b3b067dda6f5574d87caf89385423945910265b8ed8458fcae3ef98a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

2:50

Solution-Space Trees

6 chapters • 1 interactive checkpoints

In the Overview section, we use Depth-First Search to explore all valid root-to-leaf paths in a binary tree that we are given. In most backtracking problems, we won't be given an explicit tree to traverse. Instead, our algorithm needs to construct the tree based on the problem.

## Example: Letter Combinations of a Phone Number

###### DESCRIPTION

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

```
2: "abc"
3: "def"
4: "ghi"
5: "jkl"
6: "mno"
7: "pqrs"
8: "tuv"
9: "wxyz"
```

**Example:**

Input:

```
"23"
```

Output:

```
["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
```

We can think about solving this problem incrementally, using the input "23" as an example.

We start with an empty string, and form all possible combinations that can be made using the first digit.

"2" -> \["a", "b", "c"\]

Now we take each of these combinations above and add the letters corresponding to the second digit, "3".

Since "3" maps to "def", we add "d" to "a", "b", and "c", then "e" to "a", "b", and "c", and finally "f" to "a", "b", and "c".

"23" -> \["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"\]

If we were to visualize this process a tree, it would look like this, where the leaf nodes represent the final combinations:

<svg width="100%" height="400"><g transform="translate(0, 25)"><line x1="300" y1="0" x2="100" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="300" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="500" y2="150" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="50" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="100" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="150" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="250" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="300" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="350" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="450" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="500" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="550" y2="300" stroke="#C4C4C4"></line><g transform="translate(300,0)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="0"></circle></g><g transform="translate(100,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">a</text></g> <g transform="translate(300,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">b</text></g> <g transform="translate(500,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">c</text></g> <g transform="translate(50,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">ad</text></g> <g transform="translate(100,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">ae</text></g> <g transform="translate(150,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">af</text></g> <g transform="translate(250,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">bd</text></g> <g transform="translate(300,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">be</text></g> <g transform="translate(350,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">bf</text></g> <g transform="translate(450,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">cd</text></g> <g transform="translate(500,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">ce</text></g> <g transform="translate(550,300)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">cf</text></g></g></svg>

This tree conceptually represents the "solution space" of all possible letter combinations of the phone number. If we can traverse this tree, we can find all valid combinations.

So how do we do so without an explicit tree to traverse? Let's break it down.

### Writing a Backtracking Algorithm

Now that we can visualize the "solution-space" tree, our next step is to write a backtracking solution which uses depth-first search to explore all possible paths in the tree.

**Defining the Recursive Function**

Conceptually, each node in the tree corresponds to a single recursive call. Each recursive call will make additional recursive calls, which are represented by the edges in the tree.

To define our recursive function, we need to figure out what information we need to pass to each recursive call / node so that it can reach its neighbors, as this determines the parameters of our recursive function.

Let's illustrate with the example of "23":

At the root node, we start with an empty string. The children of the root node are "a", "b", and "c", which correspond to the digit 2. So we can label the root node with 2 parameters, the empty string, and 0, which represents the index of the digit in the input phone number we are currently processing.

<svg width="90%" height="200" viewBox="200 0 200 100"><g transform="translate(0, 35)"><line x1="300" y1="0" x2="100" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="300" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="500" y2="150" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="50" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="100" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="150" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="250" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="300" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="350" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="450" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="500" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="550" y2="300" stroke="#C4C4C4"></line><g transform="translate(300,0)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"", 0</text></g></g></svg>

This suggests that our recursive function should have two arguments: the current combination, and the index of the digit we are currently processing.

```
def backtrack(path, idx):
```

Next, we need to figure out how to explore the neighbors of the root node, which are "a", "b", and "c". We can get "a", "b", "c" by iterating over the letters corresponding to our digit "2", and adding each letter to our current combination (which right now is the empty string). For each of these letters, we make a recursive call with the updated combination and the next digit in the phone number.

<svg width="100%" height="200" viewBox="50 0 500 250"><g transform="translate(0, 30)"><line x1="300" y1="0" x2="100" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="300" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="500" y2="150" stroke="#C4C4C4"></line><g transform="translate(300,0)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"", 0</text></g> <g transform="translate(100,150)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"a", 1</text></g> <g transform="translate(300,150)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"b", 1</text></g> <g transform="translate(500,150)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"c", 1</text></g></g></svg>

Since each edge in our tree corresponds to a recursive call, this suggests that the body of our recursive function should iterate over the letters corresponding to the current digit, and make a recursive call for each letter with the updated combination and the next digit in the phone number.

```
def backtrack(path, idx):
    # base case
    ...

    for letter in phone[digits[idx]]:
        backtrack(path + letter, idx + 1)
```

Those recursive calls lead us to the last level of the tree, which are the leaf nodes. At the leaf nodes, we should add the current combination to our list of valid combinations.

<svg width="100%" height="400"><g transform="translate(0, 25)"><line x1="300" y1="0" x2="100" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="300" y2="150" stroke="#C4C4C4"></line><line x1="300" y1="0" x2="500" y2="150" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="50" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="100" y2="300" stroke="#C4C4C4"></line><line x1="100" y1="150" x2="150" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="250" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="300" y2="300" stroke="#C4C4C4"></line><line x1="300" y1="150" x2="350" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="450" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="500" y2="300" stroke="#C4C4C4"></line><line x1="500" y1="150" x2="550" y2="300" stroke="#C4C4C4"></line><g transform="translate(300,0)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"", 0</text></g> <g transform="translate(100,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"a", 1</text></g> <g transform="translate(300,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"b", 1</text></g> <g transform="translate(500,150)"><circle r="25" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="16px" fill="white" style="text-anchor: middle;">"c", 1</text></g> <g transform="translate(50,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"ad", 2</text></g> <g transform="translate(100,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"ae", 2</text></g> <g transform="translate(150,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"af", 2</text></g> <g transform="translate(250,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"bd", 2</text></g> <g transform="translate(300,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"be", 2</text></g> <g transform="translate(350,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"bf", 2</text></g> <g transform="translate(450,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"cd", 2</text></g> <g transform="translate(500,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"ce", 2</text></g> <g transform="translate(550,300)"><circle r="28" fill="#59b9b0" stroke="#195045" stroke-width="2"></circle><text dy="3" font-size="12px" fill="white" style="text-anchor: middle;">"cf", 2</text></g></g></svg>

We know we are at a leaf node when the index of the digit we are processing is equal to the length of the phone number. So we can add a base case to our recursive function to check if the index is equal to the length of the phone number. If it is, we add the current combination to our list of valid combinations.

```
def backtrack(path, idx):
    # base case: we have reached a leaf node
    if idx == len(digits):
        result.append(path)
        return

    for letter in phone[digits[idx]]:
        backtrack(path + letter, idx + 1)
```

Finally, in the main function, we kick off the call to our recursive function with the empty string and the index 0 (the root node of our tree).

```
def letterCombinations(digits):
    phone = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    def backtrack(path, idx):
        if idx == len(digits):
            result.append(path)
            return

        for letter in phone[digits[idx]]:
            backtrack(path + letter, idx + 1)

    result = []
    if digits:
        backtrack("", 0)
    return result
```

### Summary

The first step in solving a backtracking problem is to visualize the solution-space tree.

- Each node in the solution-space tree corresponds to a single recursive call.
- The parameters of the recursive function correspond to the information needed to reach the neighbors of a node.
- The body of the recursive function should iterate over the neighbors of a node and make recursive calls for each neighbor.

###### What is the time complexity of this solution?

where n = the number of digits in the input phone number

1

O(4ⁿ)

2

O(n \* logn)

3

O(1)

4

O(4^L)

## Solution-Space Tree Examples

The solution-space tree will look different for each backtracking problem, but one common type is a binary tree, where each node in the tree represents a "choose" or "don't choose" decision at that level.

This tree can be used to generate all possible subsets of a list of integers, which we breakdown below:

###### DESCRIPTION

Given a set of distinct integers, nums, return all possible subsets (the power set), without duplicates.

**Example:**

Input: nums = \[1,2,3\]

Output: \[\[\],\[1\],\[2\],\[1,2\],\[3\],\[1,3\],\[2,3\],\[1,2,3\]\]

The solution-space tree for this problem is a binary tree. Each node in the binary tree represents a different subset of the input.

<svg width="100%" height="350px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 50)"><circle cx="350" cy="0" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="350" y="0" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[]</text> <line x1="350" y1="30" x2="210" y2="40" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="210" cy="70" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="210" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1]</text> <line x1="210" y1="100" x2="140" y2="110" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="140" cy="140" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="140" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1,2]</text> <line x1="140" y1="170" x2="105" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="105" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="105" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1,2,3]</text> <line x1="140" y1="170" x2="175" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="175" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="175" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1,2]</text> <line x1="210" y1="100" x2="280" y2="110" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="280" cy="140" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="280" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1]</text> <line x1="280" y1="170" x2="245" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="245" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="245" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1,3]</text> <line x1="280" y1="170" x2="315" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="315" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="315" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[1]</text> <line x1="350" y1="30" x2="490" y2="40" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="490" cy="70" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="490" y="70" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[]</text> <line x1="490" y1="100" x2="420" y2="110" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="420" cy="140" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="420" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[2]</text> <line x1="420" y1="170" x2="385" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="385" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="385" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[2, 3]</text> <line x1="420" y1="170" x2="455" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="455" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="455" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[2]</text> <line x1="490" y1="100" x2="560" y2="110" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="560" cy="140" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="560" y="140" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[]</text> <line x1="560" y1="170" x2="525" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="525" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="525" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[3]</text> <line x1="560" y1="170" x2="595" y2="180" stroke="#7EA4B3" stroke-width="2" opacity="1"></line><circle cx="595" cy="210" r="32" fill="#7EA4B3" stroke-width="2" opacity="1"></circle><text x="595" y="210" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" opacity="1">[]</text></g><g transform="translate(350, 320)"></g></svg>

So how do we go from one node to its children in this tree? Each level in the tree corresponds to a different element in the input set, and each child node corresponds to either **including** (left) or **excluding** (right) the current element in the subset represented by the parent node.

At the root node, where current subset = \[\], and the current element is 1:

1. Left Child: We take the current subset and *include* 1. This gives us the subset \[1\].
2. Right Child: We take the current subset and *exclude* 1. This gives us the subset \[\].

For the subset \[1\], we repeat the process, now with current element 2:

1. Left Child: We take the current subset and *include* 2. This gives us the subset \[1, 2\].
2. Right Child: We take the current subset and *exclude* 2. This gives us the subset \[1\].

Given that information, try writing a backtracking solution for this problem on your own!