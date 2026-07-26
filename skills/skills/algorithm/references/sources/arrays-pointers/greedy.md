---
title: "Greedy Algorithms Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/greedy/overview"
author:
published:
created: 2026-07-25
description: "Learn greedy strategy patterns and when optimal local choices lead to global solutions."
tags:
  - "clippings"
---
###### Greedy Algorithms

## Greedy Algorithms Overview

---

![Greedy Algorithms Overview](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/greedy-overview/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002933Z&X-Amz-Expires=7200&X-Amz-Signature=fd043f62370606302675ee1a061f1975698f3240141a0d533f7a4383ee78a715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

4:36

Greedy Algorithms Overview

8 chapters • 2 interactive checkpoints

In this section, we'll learn about the basic characteristics of a greedy algorithm by looking at a classic greedy algorithm. We'll then compare and contrast greedy algorithms with dynamic programming algorithm to understand when to use each.

###### DESCRIPTION (inspired by Leetcode.com)

You are given two integer arrays:

- greeds (of size n), where each element represents the minimum size of a cookie that a child needs to be satisfied.
- cookies (of size m), where each element represents the size of a cookie.

Your task is to assign cookies to children such that as many children as possible are satisfied. A child is satisfied if the cookie they receive is equal to or greater than their greed factor. Each child can receive at most one cookie, and each cookie can be given to only one child. Write a function to return the maximum number of children that can be satisfied.

**Example 1**: Input:

```
greeds = [1, 2, 3]
cookies = [1, 1]
```

Output: 1

Explanation:

The first child with a greed of 1 can be satisfied with the first cookie of size 1. The second cookie of size 1 cannot satisfy the second child with a greed of 2. Therefore, only one child can be satisfied.

**Example 2**:

Input:

```
greeds = [1, 2]
cookies = [1, 2, 3]
```

Output: 2

Explanation:

The first child with a greed of 1 can be satisfied with the first cookie of size 1. The second child with a greed of 2 can be satisfied with the second cookie of size 2. The third cookie of size 3 is not needed as both children are already satisfied. Therefore, both children (2 in total) can be satisfied.

### Intuition

Intiutively, we want to give each child the smallest cookie that satisfies them. This allows us to save the larger cookies for the greedier children and allows us to maximize the number of satisfied children.

### Greedy Algorithm

The greedy algorithm sorts both the greeds and cookies arrays in ascending order. This places the child with the smallest greed and the smallest cookie at the front of each array.

For example:

```
greeds = [1, 3, 3, 4]
cookies = [2, 2, 3, 4]
```

We then initialize two pointers i and j to the start of the greeds and cookies arrays, respectively. i represents the current child and j represents the current cookie.

If cookies\[j\] >= greeds\[i\], that means the current cookie can satisfy the current child. We increment the number of satisfied children and move to the next child and cookie.

<svg viewBox="-8.0556 107.2565 355.7587 351.4486" width="100%" height="300.4486" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, -35.5468521118164, 204.34355163574222)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g opacity="1"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 150.5 -61.625 L 150.5 -30"></path><g transform="translate(150.5, -30)"><polygon points="-10,0 0,12.5 10,0" fill="#227d70"></polygon></g><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="151.149" y="-62.587" dy="-12.5" style="white-space: pre; font-size: 24px;">i</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 150.5 -61.625 L 150.5 -30"></path><g transform="translate(150.5, -30)"><polygon points="-10,0 0,12.5 10,0" fill="#227d70"></polygon></g><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="151.149" y="-62.587" dy="-12.5" style="white-space: pre; font-size: 24px;">j</text> <text x="32.636" y="37.202" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">cookies</text> <text x="38.461" y="-149.579" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">greeds</text></g></g></svg> <svg viewBox="-8.0556 106.8673 355.7587 351.8379" width="100%" height="300.8379" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, -35.5468521118164, 204.3435516357422)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, 68.222397, -0.389256)"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 150.5 -61.625 L 150.5 -30"></path><g transform="translate(150.5, -30)"><polygon points="-10,0 0,12.5 10,0" fill="#227d70"></polygon></g><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="151.149" y="-62.587" dy="-12.5" style="white-space: pre; font-size: 24px;">i</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g transform="matrix(1, 0, 0, 1, 68.024185, 1.067467)"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 145.355 126.237 L 145.355 157.862" transform="matrix(1, 0, 0, 1, -0.000037, 0)" style="transform-box: fill-box; transform-origin: 50% 50%;"></path><polygon points="135.355 157.862 145.355 170.362 155.355 157.862" fill="#227d70"></polygon><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="146.004" y="125.275" dy="-12.5" style="white-space: pre; font-size: 24px;">j</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><g transform="translate(150.5, -30)"></g><text x="32.636" y="37.202" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">cookies</text> <text x="38.461" y="-149.579" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">greeds</text></g></g></svg>

Moving i and j

If cookies\[j\] < greeds\[i\], that means the current cookie *cannot* satisfy the current child, so we move to the next cookie to see if it can.

<svg viewBox="-8.0556 106.8673 355.7587 351.8379" width="100%" height="300.8379" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1, 0, 0, 1, -35.5468521118164, 204.3435516357422)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, 68.222397, -0.389256)"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 150.5 -61.625 L 150.5 -30"></path><g transform="translate(150.5, -30)"><polygon points="-10,0 0,12.5 10,0" fill="#227d70"></polygon></g><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="151.149" y="-62.587" dy="-12.5" style="white-space: pre; font-size: 24px;">i</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="117.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="150.5" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="183.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="217" y="33.25" style="white-space: pre;">2</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="250.25"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="283.5" y="33.25" style="white-space: pre;">3</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><rect rx="2" stroke-width="5.541666666666667" stroke="#195045" fill="#59b9b0" height="66.5" width="66.5" opacity="0.85" stroke-opacity="0.85" x="316.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="33.25" text-anchor="middle" dominant-baseline="middle" x="350" y="33.25" style="white-space: pre;">4</text></g> <g transform="matrix(1, 0, 0, 1, 130.295517, 0.093134)"><path stroke="#227d70" fill="#227d70" stroke-width="7" d="M 145.355 126.237 L 145.355 157.862" transform="matrix(1, 0, 0, 1, -0.000037, 0)" style="transform-box: fill-box; transform-origin: 50% 50%;"></path><polygon points="135.355 157.862 145.355 170.362 155.355 157.862" fill="#227d70"></polygon><text fill="#227d70" font-size="24" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto" x="146.004" y="125.275" dy="-12.5" style="white-space: pre; font-size: 24px;">j</text></g> <g opacity="1" transform="matrix(1, 0, 0, 1, -5.144741, 187.861618)"><g transform="translate(150.5, -30)"></g><text x="32.636" y="37.202" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">cookies</text> <text x="38.461" y="-149.579" style="fill: rgb(158, 158, 158); font-family: &quot;Andale Mono&quot;; font-size: 18px; white-space: pre;">greeds</text></g></g></svg>

Moving j

We can continue this process until we reach the end of either the greeds or cookies arrays, and return the number of satisfied children as the result.

```
def findContentChildren(greeds, cookies):
    greeds.sort()
    cookies.sort()

    count = 0
    i, j = 0, 0
    while i < len(greeds) and j < len(cookies):
        # current cookie can satisfy current child
        if cookies[j] >= greeds[i]:
            count += 1
            i += 1
        j += 1
    
    return count
```

###### What is the time complexity of this solution?

1

O(n \* logn)

2

O(m \* n \* 4^L)

3

O(n!)

4

O(n log n + m log m)

### What Makes this a Greedy Algorithm?

There are a few characteristics of this algorithm that make it a greedy algorithm:

**Greedy Choice Property** By repeatedly making a *locally* optimal choice, we can arrive at a *globally* optimal solution.

In this case, after sorting the arrays, the locally optimal (or "greedy") choice is to give each child the smallest cookie that will satisfy them. After iterating over the array, we will have maximized the number of satisfied children (the global optimal solution).

In other words, we always make the best possible choice without worrying about the future consequences of that choice. When we do need to worry about future consequences, we often need to use dynamic programming instead.

**Optimal Substructure** The optimal solution to the problem can be constructed from the optimal solutions to its subproblems.

For this question, once we have assigned a cookie to a child, we can safely remove the child and the cookie from the arrays, and the problem reduces to assigning the remaining cookies to the remaining children. This allows us to solve the problem by making a series of locally optimal choices.

**No Backtracking** Greedy algorithms make a decision once and do not revisit it. In this case, once we have assigned a cookie to a child, we never revisit that decision by taking the cookie back and giving it to another child, or giving the child a different cookie.

### Greedy vs. Dynamic Programming

Greedy algorithms and [dynamic programming](https://www.hellointerview.com/learn/code/dynamic-programming/fundamentals) are both used to solve optimization problems, so it's useful to build an understanding of when to use each approach.

We'll take a brief look at a problem in which a greedy approach do not work, and how dynamic programming solves the issues that greedy algorithms face.

###### DESCRIPTION

Given an array of integers, find the longest increasing subsequence (LIS) in the array. The subsequence does not have to be contiguous.

**Example**: Input:

```
nums = [10, 13, 2, 5, 3, 7, 101, 18]
```

Output: 4. The longest increasing subsequence is \[2, 3, 7, 101\].

A greedy approach to this problem might involve choosing the first element in the array as the start of the subsequence, and then iterating over the array to add the next element to the subsequence if it is greater than the last element in the subsequence.

For example, if nums = \[10, 13, 2, 5, 3, 7, 101, 18\], this would yield the subsequence \[10, 13, 101\].

**The issue with this approach is that choosing the first element 10 affects our ability to actually choose the optimal subsequence later on**, which starts with 2. This means that the *greedy choice* does not yield the *globally optimal solution*.

The dynamic programming approach instead involves iterating through the array and keeping track of the length of the longest increasing subsequence ending at each element, allowing us to consider all possible sequences and choose the longest one. You can learn more about the dynamic programming solution [here](https://www.hellointerview.com/learn/code/dynamic-programming/longest-increasing-subsequence).

If you're faced with an optimization problem, first try to identify whether the greedy choice property holds.

The most straightforward way to do so is to try to find a **counter example** in which following the greedy choice does not lead to the optimal solution. The above example of the longest increasing subsequence is a counter example that shows that a greedy approach does not work.

If you can find a counter example, it's often a sign that you need a dynamic programming approach instead, which allows you to consider all possible choices and make the best one.

Reading Progress

On This Page