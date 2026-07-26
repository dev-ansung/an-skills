---
title: "Fixed Length Sliding Window"
source: "https://www.hellointerview.com/learn/code/sliding-window/fixed-length"
author:
published:
created: 2026-07-25
description: "Learn fixed-length sliding window technique through animated examples and hands-on coding practice."
tags:
  - "clippings"
---
###### Sliding Window

---

![Fixed-Length Sliding Window](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/fixed-length-sliding-window/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002322Z&X-Amz-Expires=7200&X-Amz-Signature=7e6ceea07b9f11cf328cf1a46a832d2ba18ae1f281e307e021b1e49cd1ad6fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

3:37

Fixed-Length Sliding Window

5 chapters • 2 interactive checkpoints

This technique refers to creating a window that "slides" through an input sequence (typically an array or string).

Sliding windows can be either variable or fixed length. On this page, we'll cover **fixed-length** sliding windows.

---

## Fixed-Length Sliding Window

When you know the length of the subarray/substring you are looking for, you can use a fixed-length sliding window. The concept is similar to the variable-length sliding window, but the implementation is a bit simpler, as during each iteration, you both add and remove an element from the window to maintain its fixed size.

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 150"><g font-family="monospace" transform="translate(0, 50)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="175"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="200" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="225"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="250" y="25">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="275"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="300" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="325"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="350" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="375"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="400" y="25">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="425"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="450" y="25">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.166666666666667" stroke="#195045" fill="white" height="50" width="50" opacity="0.85" stroke-opacity="0.85" x="475"></rect><text fill="#299a8d" font-weight="700" font-size="25" text-anchor="middle" dominant-baseline="middle" x="500" y="25">0</text></g><g opacity="1"><g transform="translate(175, 0)"><rect width="100.73347559219161" height="50" fill="rgb(99, 194, 120)" stroke="rgb(99, 194, 120)" stroke-opacity="1" opacity="0.5"></rect></g></g><g transform="translate(0, 50)"></g></g></svg>

fixed-length sliding window of size 3

### Problem: Maximum Sum of Subarray with Size K

###### DESCRIPTION

Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k.

**Example**: Input: nums = \[2, 1, 5, 1, 3, 2\], k = 3 Output: 9 Explanation: The subarray with the maximum sum is \[5, 1, 3\] with a sum of 9.

We start by extending the window to size k. Whenever our window is of size k, we first compute the sum of the window and update max\_sum if it is larger than max\_sum. Then, we contract the window by removing the leftmost element to prepare for the next iteration. Note how we calculate the sum of the window incrementally by adding the new element and removing from the previous sum.

#### Solution

Visualization

Python

Try these examples:

```
def max_subarray_sum(nums, k):
  max_sum = float('-inf')
  state = 0
  start = 0

  for end in range(len(nums)):
    state += nums[end]

    if end - start + 1 == k:
      max_sum = max(max_sum, state)
      state -= nums[start]
      start += 1

  return max_sum
```

<svg width="100%" height="80%" preserveAspectRatio="xMidYMin meet" viewBox="0 0 700 500"><g font-family="monospace" transform="translate(0, 210)"><g transform="translate(0, -80)"></g><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="110"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="150" y="40">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="190"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="230" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="270"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="310" y="40">5</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="350"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="390" y="40">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="430"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="470" y="40">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="6.666666666666667" stroke="#195045" fill="white" height="80" width="80" opacity="0.85" stroke-opacity="0.85" x="510"></rect><text fill="#299a8d" font-weight="700" font-size="40" text-anchor="middle" dominant-baseline="middle" x="549.9999999999999" y="40">2</text></g><g transform="translate(0, 80)"></g></g></svg>

max subarray sum of size k

0 / 16

1x

### Template

Here's a template you can use as a starting point for solving problems with a fixed-length sliding window.

```
def fixed_length_sliding_window(nums, k):
  state = # choose appropriate data structure
  start = 0
  max_ = 0

  for end in range(len(nums)):
    # extend window
    # add nums[end] to state in O(1) in time

    if end - start + 1 == k:
      # INVARIANT: size of the window is k here.
      max_ = max(max_, contents of state)

      # contract window
      # remove nums[start] from state in O(1) in time
      start += 1

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

### Fixed-Length

<table><thead><tr><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th></tr></thead><tbody><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/sliding-window/maximum-sum-of-subarrays-of-size-k">Maximum Sum of Subarrays of Size K</a></p></td><td></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/sliding-window/maximum-points-you-can-obtain-from-cards">Max Points You Can Obtain From Cards</a></p></td><td></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/sliding-window/maximum-sum-of-distinct-subarrays-with-length-k">Max Sum of Distinct Subarrays Length k</a></p></td><td></td></tr></tbody></table>

###### Test Your Knowledge

Answer the question below to find your gaps.

Question 1 of 15

When is a fixed-length sliding window the right variant to reach for?

1

When the input array is sorted in ascending order

2

When you know the exact length of the subarray or substring you're looking for

3

When the elements you need aren't contiguous in the input

4

When the window's validity depends on satisfying a constraint rather than reaching a known size