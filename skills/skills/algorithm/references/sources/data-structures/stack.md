---
title: "Stack Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/stack/overview"
author:
published:
created: 2026-07-25
description: "Master stack data structure with interactive visualizations and real-time code execution examples."
tags:
  - "clippings"
---
###### Stack

## Stack Overview

---

![Stack Overview](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/stacks-overview/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002334Z&X-Amz-Expires=7200&X-Amz-Signature=5f684f4bd0d1ec5636f33264f971f38e6874bdafcc74f618ba549429b8a4e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

3:32

Stack Overview

7 chapters • 1 interactive checkpoints

This page covers the types of problems that can be solved using a stack data structure.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500"><g transform="translate(192.50000000000003, 233.92916666666667)" opacity="1"><line x1="173.39583333333331" x2="141.25416666666663" y1="22" y2="22" fill="none" stroke="#161C24" opacity="0.8240595867001245" stroke-width="2"></line><text x="157.325" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#299a8d" fill="#299a8d" font-weight="bold">{</text> <text x="189.46666666666664" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">(</text><text x="221.60833333333335" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">{</text> <text x="253.75" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">}</text><text x="285.89166666666665" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">)</text> <text x="318.0333333333333" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">}</text></g> <g transform="translate(35, 450)"><g opacity="1"><g stroke="#454F5B" stroke-width="3"><line x1="0" y1="0" x2="0" y2="-400"></line><line x1="122.50000000000003" y1="0" x2="122.50000000000003" y2="-400"></line><line x1="0" y1="0" x2="122.50000000000003" y2="0"></line></g><g transform="translate(0, -6)"><g opacity="0.8240595867001245" transform="translate(0, 0)"><g transform="translate(18.375000000000004, 6)"><rect x="0" y="-40" width="85.75000000000001" height="28" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="61.250000000000014" y="-20" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">{</text></g></g> <text x="61.250000000000014" y="20" text-anchor="middle" dominant-baseline="middle" stroke="#161C24" font-size="18" font-family="monospace">stack</text></g></g></svg>

A stack being used to validate parentheses.

## Fundamentals

The stack data structure is a collection of elements that follow the Last-In, First-Out (LIFO) principle, which means that the last element added to the stack is the first one to be removed.

Elements that are added to the stack are said to be "pushed" onto the stack, while elements that are removed are said to be "popped" from the stack. Both of these operations take O(1) time.

We can visualize as a stack as a vertical column of elements, where elements are both pushed and popped from the top of the stack.

<svg width="100%" height="100%"><g transform="translate(0, 250)"><g opacity="1"><g stroke="#454F5B" stroke-width="3"><line x1="0" y1="0" x2="0" y2="-240"></line><line x1="300" y1="0" x2="300" y2="-240"></line><line x1="0" y1="0" x2="300" y2="0"></line></g><g transform="translate(0, -7.199999999999999)"></g><text x="150" y="12" text-anchor="middle" dominant-baseline="middle" stroke="#161C24" font-size="18" font-family="monospace">stack</text></g></g></svg>

A sequence of push() and pop() operations.

### Using an Array as a Stack

Arrays are frequently used to implement stacks, with the end of the array acting as the top of the stack.

In Python, the append and pop array methods can be used to push and pop elements from the stack, respectively:

Visualization

Python

```
# Using an array as a stack
stack = []
stack.append(9)
stack.append(8)
stack.pop()
stack.append(7)
stack.pop()
```

0 / 6

1x

## Nested Sequences

Stacks are effective for managing the ordering of nested sequences, as the order in which we must process the sequences matches the order in which they are popped from the stack.

### Problem: Valid Parentheses

###### DESCRIPTION (inspired by Leetcode.com)

Given an input string s consisting solely of the characters '(', ')', '{', '}', '\[' and '\]', determine whether s is a valid string. A string is considered valid if every opening bracket is closed by a matching type of bracket and in the correct order, and every closing bracket has a corresponding opening bracket of the same type.

**Example** Input: s = "(){({})}" Output: true

**Example** Input: s = "(){({}})" Output: false

A valid input string with nested parentheses follows the Last-In, First-Out (LIFO) principle: the most recently opened parentheses is the first one that should be closed. For example, if our input string is {\[, then the closing \] must come before the closing }. This property makes it a natural candidate for a stack.

The solution iterates through the each character in the input string.

- If the current character is an opening bracket, it is pushed onto the stack.
- If the current character is a closing bracket, it checks if it is the corresponding closing bracket for the bracket at the top of the stack.
	- If it is, the bracket is popped from the stack, and the iteration continues.
		- If it is not, the input string is invalid.

If the stack is empty at the end of the iteration, then the input string is valid.

#### Solution

Visualization

Python

Try these examples:

```
def isValid(s):
  stack = []
  mapping = {")": "(", "}": "{", "]": "["}

  for char in s:
    if char in mapping:
      if not stack or stack[-1] != mapping[char]:
        return False
      stack.pop()
    else:
      stack.append(char)

  return len(stack) == 0
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 183.92916666666667)" opacity="1"><text x="125.18333333333334" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">(</text><text x="157.325" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">)</text> <text x="189.46666666666667" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">{</text> <text x="221.60833333333335" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">(</text><text x="253.75" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">{</text> <text x="285.89166666666665" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">}</text><text x="318.03333333333336" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">)</text> <text x="350.175" y="0" dominant-baseline="middle" font-size="40" text-anchor="middle" font-family="monospace" stroke="#161C24" fill="#161C24" font-weight="normal">}</text></g><g transform="translate(35, 360)"></g></svg>

valid parentheses

0 / 18

1x

### Practice Problems

For more practice with problems that use a stack to manage the ordering of nested sequences, try:

**Decode String** [Leetcode](https://www.leetcode.com/problems/decode-string/) | [Solution](https://www.hellointerview.com/learn/code/stack/decode-string)

**Longest Valid Parentheses** [Leetcode](https://www.leetcode.com/problems/longest-valid-parentheses/)

Reading Progress

On This Page