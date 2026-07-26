---
title: "Variable Length Sliding Window"
source: "https://www.hellointerview.com/learn/code/sliding-window/variable-length"
author:
published:
created: 2026-07-25
description: "Master variable-length sliding window problems with dynamic visualizations and interactive coding challenges."
tags:
  - "clippings"
---
###### Sliding Window

---

![Variable-Length Sliding Window](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/variable-length-sliding-window/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002326Z&X-Amz-Expires=7200&X-Amz-Signature=e966de2b12b6354aafd1c9ff9c2bf55eed3c5685260448a1a08d3ed6dbf945d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

6:26

Variable-Length Sliding Window

7 chapters • 3 interactive checkpoints

This technique refers to creating a window that "slides" through an input sequence (typically an array or string).

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 150"><g font-family="monospace" transform="translate(0, 50)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="175"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="200" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="225"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="250" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="275"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="300" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="325"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="350" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="375"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="400" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="425"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="450" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="475"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="500" y="25">0</text></g><g opacity="1"><g transform="translate(175, 0)"><rect width="62.791274932245585" height="50" fill="rgb(99, 194, 120)" stroke="rgb(99, 194, 120)" stroke-opacity="1" opacity="0.5"></rect></g></g><g transform="translate(0, 50)"></g></g></svg>

variable-length sliding window

Sliding windows can be either variable or fixed length. On this page, we'll cover **variable-length** sliding windows by looking at:

1. An example problem that illustrates the motivation for each type of sliding window, as well as how to implement it.
2. The types of problems for which each type of sliding window is useful, as well as templates you can use as a starting point.
3. A list of practice problems (with animated solutions and explanations!) for you to try to build upon the concepts covered here.

---

### Problem: Fruit Into Baskets

###### DESCRIPTION (inspired by Leetcode.com)

Write a function to calculate the maximum number of fruits you can collect from an integer array fruits, where each element represents a type of fruit. You can start collecting fruits from any position in the array, but you must stop once you encounter a third distinct type of fruit. The goal is to find the longest subarray where at most two different types of fruits are collected.

**Example**: Input: fruits = \[3, 3, 2, 1, 2, 1, 0\] Output: 4 Explanation: We can pick up 4 fruit from the subarray \[2, 1, 2, 1\]

We'll walkthrough how to use the sliding window to solve this problem when fruits = \[3, 3, 2, 1, 2, 1, 0\].

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 150"><g font-family="monospace" transform="translate(0, 50)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="175"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="200" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="225"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="250" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="275"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="300" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="325"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="350" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="375"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="400" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="425"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="450" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="475"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="500" y="25">0</text></g><g transform="translate(0, 50)"></g></g></svg>

The answer for the given input array is 4.

#### Naive Approach

To understand the motivation behind the sliding window pattern, let's start by looking at a naive approach to this problem, which considers every possible subarray in the input, and chooses the longest one with at most 2 distinct fruits.

```
def fruit_into_baskets(fruits):

    max_length = 0

    # i and j are the start and end indices of the subarray
    for i in range(len(fruits)):
        for j in range(i, len(fruits)):
            if len(set(fruits[i:j + 1])) <= 2:
                max_length = max(max_length, j - i + 1)
            else:
                # the subarray starting at i is invalid
                # so we break and move to the next one
                break
    
    return max_length
```

This approach considers O(n <sup>2</sup>) subarrays. For each subarray, it checks if it contains at most 2 distinct fruits by converting it to a set and checking its length, which takes O(n) time, for a total a time complexity of O(n <sup>3</sup>). We'll gradually improve this approach until we reach the sliding window pattern, which solves this problem in O(n) time.

##### Improvement 1: Build Incrementally

The first improvement is to use a variable to store the contents of the current subarray. We'll use a dictionary state that maps each fruit in the current subarray to the number of times it appears.

This choice of state is key as it allows us to:

1. Build the contents of the subarray incrementally. Each time we expand the subarray to include a new fruit, we'll increment the count of that fruit in state, which reuses work from the previous subarray.
2. Check if the subarray is valid by checking if state has 2 keys or less.

Since both of these operations take O(1) time, we can now check if a new subarray is valid in O(1) time. This brings the total time complexity of the solution down to O(n <sup>2</sup>).

```
def fruit_into_baskets(fruits):

    max_length = 0

    # i and j are the start and end indices of the subarray
    for i in range(len(fruits)):
        state = {}
        for j in range(i, len(fruits)):
            state[fruits[j]] = state.get(fruits[j], 0) + 1
            if len(state) <= 2:
                max_length = max(max_length, j - i + 1)
            else:
                # the subarray starting at i is invalid
                # so we break and move to the next one
                break
    
    return max_length
```

##### Improvement 2: Don't Blow It All Up!

In the above approach, we reset state each time we reach an invalid subarray and break from the inner loop. When the outer loop increments i, we end up rebuilding parts of the same subarray from the previous iteration, which we can see by visualizing the first few steps of the algorithm:

After incrementing i, we end up rebuilding the same subarrays (\[1\], \[1, 2\], \[1, 2, 3\]) from the previous iteration.

Rather than resetting the contents of state each time we reach an invalid subarray, **we can instead think about removing fruits from the start of the subarray until it is valid again**. This allows us to move onto the next valid subarray while also preserving work we've already done - which brings us to the sliding window pattern.

#### The Sliding Window

We now have enough context to understand the motivation behind the sliding window pattern. The "window" in the sliding window refers to a subarray we are considering to contain the maximum number of fruits we can collect.

##### Initialization

We use two pointers, start and end, to represent the start and end indices of the window. The window is initially empty, and so is the dictionary state that represents the contents of the window. We also initialize a variable max\_fruit that represents the maximum amount of fruit we can collect.

Visualization

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"></g><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="70"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="110" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="150"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="190" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="230"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="270" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="310"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="350" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="390"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="430.00000000000006" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="470"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="510" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="550"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="590" y="40">0</text></g><g transform="translate(0, 80)"></g></g></svg>

fruit into baskets

0 / 1

1x

##### Iteration

Next we repeatedly extend the current window incrementing end. Each time we do so, we add the fruit at end to state by incrementing its count in the dictionary, and then we compare the length of the window to the current value of max\_fruit, and update it if its greater.

Visualization

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"><g opacity="1" transform="translate(0, -5)"><text font-size="20" y="0" dy="16" x="74" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">{}</text> <text font-size="17.77777777777778" y="0" dy="40" x="74" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">state</text></g></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="70"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="110" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="150"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="190" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="230"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="270" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="310"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="350" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="390"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="430.00000000000006" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="470"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="510" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="550"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="590" y="40">0</text></g> <g opacity="1"><g transform="translate(70, 0)"><rect width="8" height="80" fill="#63c278" stroke="#63c278" stroke-opacity="1" opacity="0.5"></rect></g></g><g transform="translate(0, 80)"><g opacity="1" stroke="#299a8d" stroke-width="2"><line x1="77" y1="6.666666666666666" x2="77" y2="26.666666666666664"></line><line x1="77" y1="26.666666666666664" x2="63" y2="26.666666666666664"></line><line x1="63" y1="6.666666666666666" x2="63" y2="26.666666666666664"></line></g><g opacity="1"><circle cx="70" cy="26.666666666666664" r="10" fill="white"></circle><text font-size="20" y="26.666666666666664" x="70" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="middle">0</text> <text font-size="20" y="26.666666666666664" dy="20" x="70" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">max_fruit</text></g></g></g></svg>

start: 0 | end: -

initialize variables

0 / 6

1x

##### Contracting the Window

Eventually, we reach a window that is invalid because it contains 3 distinct fruits. Here, we contract the window by decrementing the count of the fruit at start in state, and then incrementing start to contract the window. We contract the window until it is valid again.

Visualization

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"><g opacity="1" transform="translate(0, -5)"><text font-size="20" y="0" dy="16" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">{3:2, 2:1}</text> <text font-size="17.77777777777778" y="0" dy="40" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">state</text></g></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="70"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="110" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="150"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="190" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="230"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="270" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="310"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="350" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="390"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="430.00000000000006" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="470"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="510" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="550"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="590" y="40">0</text></g> <g opacity="1"><g transform="translate(70, 0)"><rect width="240" height="80" fill="#63c278" stroke="#63c278" stroke-opacity="1" opacity="0.5"></rect></g></g><g transform="translate(0, 80)"><g opacity="1" stroke="#299a8d" stroke-width="2"><line x1="77" y1="6.666666666666666" x2="77" y2="26.666666666666664"></line><line x1="77" y1="26.666666666666664" x2="303" y2="26.666666666666664"></line><line x1="303" y1="6.666666666666666" x2="303" y2="26.666666666666664"></line></g><g opacity="1"><circle cx="190" cy="26.666666666666664" r="10" fill="white"></circle><text font-size="20" y="26.666666666666664" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="middle">3</text> <text font-size="20" y="26.666666666666664" dy="20" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">max_fruit</text></g></g></g></svg>

start: 0 | end: 2

update max\_fruit

0 / 3

1x

At this point, our window is ready to expand again, so we continue iterating until we reach the end of the array, at which point we return max\_fruit.

Visualization

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"><g opacity="1" transform="translate(0, -5)"><text font-size="20" y="0" dy="16" x="310" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">{2:1, 1:1}</text> <text font-size="17.77777777777778" y="0" dy="40" x="310" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">state</text></g></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="70"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="110" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="150"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="190" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="230"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="270" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="310"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="350" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="390"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="430.00000000000006" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="470"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="510" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="550"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="590" y="40">0</text></g> <g opacity="1"><g transform="translate(230, 0)"><rect width="160" height="80" fill="#63c278" stroke="#63c278" stroke-opacity="1" opacity="0.5"></rect></g></g><g transform="translate(0, 80)"><g opacity="1" stroke="#299a8d" stroke-width="2"><line x1="77" y1="6.666666666666666" x2="77" y2="26.666666666666664"></line><line x1="77" y1="26.666666666666664" x2="303" y2="26.666666666666664"></line><line x1="303" y1="6.666666666666666" x2="303" y2="26.666666666666664"></line></g><g opacity="1"><circle cx="190" cy="26.666666666666664" r="10" fill="white"></circle><text font-size="20" y="26.666666666666664" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="middle">3</text> <text font-size="20" y="26.666666666666664" dy="20" x="190" fill="#299a8d" text-anchor="middle" font-family="monospace" dominant-baseline="hanging">max_fruit</text></g></g></g></svg>

start: 2 | end: 3

contract window

0 / 11

1x

#### Solution

Here's what the final solution looks like:

Visualization

Python

Try these examples:

```
def fruit_into_baskets(fruits):
  start = 0
  state = {}
  max_fruit = 0

  for end in range(len(fruits)):
    state[fruits[end]] = state.get(fruits[end], 0) + 1

    while len(state) > 2:
      state[fruits[start]] -= 1
      if state[fruits[start]] == 0:
        del state[fruits[start]]
      start += 1

    max_fruit = max(max_fruit, end - start + 1)

  return max_fruit
```

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"></g><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="70"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="110" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="150"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="190" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="230"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="270" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="310"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="350" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="390"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="430.00000000000006" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="470"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="510" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="550"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="590" y="40">0</text></g><g transform="translate(0, 80)"></g></g></svg>

fruit into baskets

0 / 21

1x

- The length of the window at any time is end - start + 1.
- When we decrement the count of a fruit in state as part of contracting the window, we need to delete the fruit from state if its count is 0. This is because we rely on the number of keys in state to check if the window is valid.

#### Complexity

- The time complexity of this algorithm is O(n), where n is the length of the input array. end iterates through the array once, and start iterates through the array at most once. Each time either moves, we arrive at a new window, which requires O(1) time to check if its valid.
- The space complexity of this algorithm is O(1), since state never contains more than 3 keys.

For this specific problem (at most 2 fruit types), there's actually a way to skip the one-by-one contraction entirely. Instead of storing counts in state, you can store the last index where each fruit was seen. When a third fruit appears, find the fruit with the smallest last-seen index, jump start directly past it, and remove it from state. This makes each step O(1) worst-case instead of O(1) amortized.

That said, the one-by-one contraction shown above is the general pattern that works for all variable-length sliding window problems — it's the approach worth internalizing.

### Template

Here's a template you can use as a starting point for solving problems with a variable-length sliding window.

```
def variable_length_sliding_window(nums):
  state = # choose appropriate data structure
  start = 0
  max_ = 0

  for end in range(len(nums)):
    # extend window
    # add nums[end] to state in O(1) in time

    while state is not valid:
      # repeatedly contract window until it is valid again
      # remove nums[start] from state in O(1) in time
      start += 1

    # INVARIANT: state of current window is valid here.
    max_ = max(max_, end - start + 1)

  return max_
```

## When Do I Use This?

Consider using the sliding window pattern for questions that involve **searching for a continuous subarray/substring** in an array or string that satisfies a certain constraint.

If you know the length of the subarray/substring you are looking for, use a fixed-length sliding window. Otherwise, use a variable-length sliding window.

*Examples:*

- Finding the largest substring without repeating characters in a given string (variable-length).
- Finding the largest substring containing a single character that can be made by replacing at most k characters in a given string (variable-length).
- Finding the largest sum of a subarray of size k without duplicate elements in a given array (fixed-length).

## Practice Problems

When practicing these problems, it is important to think about the appropriate data structure state to store the contents of the current window. Make sure it supports both:

- Adding and removing elements from the window in O(1) time.
- Checking if the window is valid in O(1) time.

Dictionaries and sets are often the best choices.