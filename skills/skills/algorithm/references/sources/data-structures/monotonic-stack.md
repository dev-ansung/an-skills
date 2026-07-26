---
title: "Monotonic Stack | Hello Interview"
source: "https://www.hellointerview.com/learn/code/stack/monotonic-stack"
author:
published:
created: 2026-07-25
description: "Master monotonic stack pattern to find next greater/smaller elements with interactive stack visualization."
tags:
  - "clippings"
---
###### Stack

## Monotonic Stack

---

![Monotonic Stack](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/monotonic-stack/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002635Z&X-Amz-Expires=7200&X-Amz-Signature=9c057dd7407993b4a1596679787e088beb317f528ee37818f298def2f728ea1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

5:26

Monotonic Stack

6 chapters • 3 interactive checkpoints

A **monotonic stack** is a special type of stack in which all elements on the stack are sorted in either descending or ascending order. The ordering can be **strict** (no duplicates allowed) or **non-strict** (duplicates allowed), which variant you use depends on the problem. In most problems, including the ones below, a non-strict monotonic stack works. It is used to solve problems that require finding the next greater or next smaller element in an array.

<svg width="100%" height="100%"><g transform="translate(0, 250)"><g opacity="1"><g stroke="#454F5B" stroke-width="3"><line x1="0" y1="0" x2="0" y2="-240"></line><line x1="300" y1="0" x2="300" y2="-240"></line><line x1="0" y1="0" x2="300" y2="0"></line></g><g transform="translate(0, -7.199999999999999)"><g opacity="1" transform="translate(0, 0)"><g transform="translate(45, 7.199999999999999)"><rect x="0" y="-48" width="210" height="33.599999999999994" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="150" y="-24" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">73</text></g> <g opacity="1" transform="translate(0, -48)"><g transform="translate(45, 7.199999999999999)"><rect x="0" y="-48" width="210" height="33.599999999999994" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="150" y="-24" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">72</text></g> <g opacity="1" transform="translate(0, -96)"><g transform="translate(45, 7.199999999999999)"><rect x="0" y="-48" width="210" height="33.599999999999994" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="150" y="-24" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">72</text></g> <g opacity="1" transform="translate(0, -144)"><g transform="translate(45, 7.199999999999999)"><rect x="0" y="-48" width="210" height="33.599999999999994" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="150" y="-24" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">68</text></g></g> <text x="150" y="12" text-anchor="middle" dominant-baseline="middle" stroke="#161C24" font-size="18" font-family="monospace">stack</text></g></g></svg>

A monotonically decreasing stack (non-strict i.e. duplicates like 72 are allowed)

### Problem: Next Greater Element

###### DESCRIPTION

Given an array of integers, find the next greater element for each element in the array. The next greater element of an element x is the first element to the right of x that is greater than x. If there is no such element, then the next greater element is -1.

**Example** Input: \[2, 1, 3, 2, 4, 3\] Output: \[3, 3, 4, 4, -1, -1\]

The solution iterates over each index in the input array. For each index, it checks if the element at that index is the next greater element for any previous elements in the array. In order to perform that check efficiently, we'll use a **monotonic decreasing stack**.

##### Initialization

We start by initializing our stack and our results array, with each value in the results array initialized to -1. Our stack stores the indexes of the elements in the input array that have not yet found their next greater element.

Visualization

Python

```
def nextGreaterElement(nums):
  n = len(nums)
  result = [-1] * n
  stack = []

  for i in range(n):
    while stack and nums[i] > nums[stack[-1]]:
      index = stack.pop()
      result[index] = nums[i]
    stack.append(i)

  return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 0)"><g transform="translate(0, 109.22708333333331)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">4</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">3</text></g> <g><text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="133.21875" y="58.21249999999998">0</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="181.43125" y="58.21249999999998">1</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="229.64374999999998" y="58.21249999999998">2</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="277.85625" y="58.21249999999998">3</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="326.06874999999997" y="58.21249999999998">4</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="374.28125" y="58.21249999999998">5</text></g></g></g><g transform="translate(35, 360)"></g></svg>

0 / 1

1x

##### Iteration

We then iterate over the input array. To check if the current element nums\[i\] is the next greater element for any of the previous elements in the array, we compare the current element with the element at the index at the top of the stack nums\[stack\[-1\]\].

If the stack is empty, or if nums\[i\] is less than nums\[stack\[-1\]\], we push the current index onto the stack.

Visualization

Python

```
def nextGreaterElement(nums):
  n = len(nums)
  result = [-1] * n
  stack = []

  for i in range(n):
    while stack and nums[i] > nums[stack[-1]]:
      index = stack.pop()
      result[index] = nums[i]
    stack.append(i)

  return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 0)"><g transform="translate(0, 109.22708333333331)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">4</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">3</text></g> <g><text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="133.21875" y="58.21249999999998">0</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="181.43125" y="58.21249999999998">1</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="229.64374999999998" y="58.21249999999998">2</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="277.85625" y="58.21249999999998">3</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="326.06874999999997" y="58.21249999999998">4</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="374.28125" y="58.21249999999998">5</text></g></g> <g transform="translate(0, 242.56041666666664)" opacity="1"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">-1</text></g> <text x="398.38749999999993" y="60.265625" text-anchor="end" dominant-baseline="middle" font-size="18" font-family="monospace">result</text></g></g> <g transform="translate(35, 360)"><g opacity="1"><g stroke="#454F5B" stroke-width="3"><line x1="0" y1="0" x2="0" y2="-320"></line><line x1="122.50000000000003" y1="0" x2="122.50000000000003" y2="-320"></line><line x1="0" y1="0" x2="122.50000000000003" y2="0"></line></g><g transform="translate(0, -4.8)"></g><text x="61.250000000000014" y="16" text-anchor="middle" dominant-baseline="middle" stroke="#161C24" font-size="18" font-family="monospace">stack</text></g></g></svg>

0 / 4

1x

Pushing indexes 0 and 1 onto the stack

Recall that the stack contains the indexes of the elements in the input array that have not yet found their next greater element. At this point, we can see that the values at each of the indexes on the stack (i.e. nums\[0\] and nums\[1\]) are monotonically decreasing. This property allows us to check if nums\[i\] is the next greater element for any of the indexes on the stack efficiently.

If nums\[i\] is smaller than nums\[stack\[-1\]\], because the stack is monotonically decreasing, **we also know that nums\[i\] is not the next greater element for any of the other indexes on the stack as well**, so we can push index i onto the stack.

##### Processing Next Greater Elements

If the nums\[i\] is greater than nums\[stack\[-1\]\], then we have found the next greater element for the index stack\[-1\]. So we pop that index from the stack (idx), and update results\[idx\] to be nums\[i\].

Because it is still possible for nums\[i\] to be the next greatest element for the remaining indexes on the stack, we have to repeat this processing operation until nums\[i\] is not greater than nums\[stack\[-1\]\], at which point we have finished processing all the indexes for which nums\[i\] is the next greatest element, so we push i onto the stack.

Visualization

Python

```
def nextGreaterElement(nums):
  n = len(nums)
  result = [-1] * n
  stack = []

  for i in range(n):
    while stack and nums[i] > nums[stack[-1]]:
      index = stack.pop()
      result[index] = nums[i]
    stack.append(i)

  return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 0)"><g transform="translate(0, 109.22708333333331)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">4</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">3</text></g> <g><text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="133.21875" y="58.21249999999998">0</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="181.43125" y="58.21249999999998">1</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="229.64374999999998" y="58.21249999999998">2</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="277.85625" y="58.21249999999998">3</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="326.06874999999997" y="58.21249999999998">4</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="374.28125" y="58.21249999999998">5</text></g> <g transform="translate(157.325, 0)" opacity="1"><rect height="48.2125" width="48.2125" rx="2" fill="none" stroke="#161C24" stroke-width="4.017708333333333"></rect><text x="24.10625" y="-10" text-anchor="middle" font-size="15" font-family="monospace" stroke="#161C24" fill="#161C24">i</text></g></g> <g transform="translate(0, 242.56041666666664)" opacity="1"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">-1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#4a7c8f" fill="#7ea4b3" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">-1</text></g> <text x="398.38749999999993" y="60.265625" text-anchor="end" dominant-baseline="middle" font-size="18" font-family="monospace">result</text></g></g> <g transform="translate(35, 360)"><g opacity="1"><g stroke="#454F5B" stroke-width="3"><line x1="0" y1="0" x2="0" y2="-320"></line><line x1="122.50000000000003" y1="0" x2="122.50000000000003" y2="-320"></line><line x1="0" y1="0" x2="122.50000000000003" y2="0"></line></g><g transform="translate(0, -4.8)"><g opacity="1" transform="translate(0, 0)"><g transform="translate(18.375000000000004, 4.8)"><rect x="0" y="-32" width="85.75000000000001" height="22.4" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="61.250000000000014" y="-16" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">0</text></g> <g opacity="1" transform="translate(0, -32)"><g transform="translate(18.375000000000004, 4.8)"><rect x="0" y="-32" width="85.75000000000001" height="22.4" fill="none" stroke="#454F5B" stroke-width="2" rx="4"></rect></g><text x="61.250000000000014" y="-16" dy="1" text-anchor="middle" stroke="#161C24" dominant-baseline="middle">1</text></g></g> <text x="61.250000000000014" y="16" text-anchor="middle" dominant-baseline="middle" stroke="#161C24" font-size="18" font-family="monospace">stack</text></g></g></svg>

0 / 4

1x

Processing indexes for which 3 is the next greatest element

Popping all the elements that are smaller than nums\[i\] from the stack before pushing i ensures that the stack stays monotonically decreasing.

This process continues until the end of the input array, at which point the results array contains the next greater element for each element in the input array, or -1 if there is no such element.

#### Solution

Visualization

Python

Try these examples:

```
def nextGreaterElement(nums):
  n = len(nums)
  result = [-1] * n
  stack = []

  for i in range(n):
    while stack and nums[i] > nums[stack[-1]]:
      index = stack.pop()
      result[index] = nums[i]
    stack.append(i)

  return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 0)"><g transform="translate(0, 109.22708333333331)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">4</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">3</text></g> <g><text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="133.21875" y="58.21249999999998">0</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="181.43125" y="58.21249999999998">1</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="229.64374999999998" y="58.21249999999998">2</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="277.85625" y="58.21249999999998">3</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="326.06874999999997" y="58.21249999999998">4</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="374.28125" y="58.21249999999998">5</text></g></g></g><g transform="translate(35, 360)"></g></svg>

0 / 18

1x

#### Next Smaller Element

Following the same pattern, we can use a **monotonically increasing stack** to solve problems that require finding the next smaller element in an array.

Visualization

Python

Try these examples:

```
def nextSmallerElement(nums):
  n = len(nums)
  result = [-1] * n
  stack = []

  for i in range(n):
    while stack and nums[i] < nums[stack[-1]]:
      index = stack.pop()
      result[index] = nums[i]
    stack.append(i)

  return result
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(192.50000000000003, 0)"><g transform="translate(0, 109.22708333333331)"><g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="109.11250000000001"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="133.21875" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="157.325"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="181.43125" y="24.10624999999999">1</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="205.53750000000002"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="229.64374999999998" y="24.10624999999999">3</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="253.75"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="277.85625" y="24.10624999999999">2</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="301.9625"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="326.06874999999997" y="24.10624999999999">4</text></g> <g transform="translate(0, 0)" opacity="1"><rect rx="2" stroke-width="4.017708333333331" stroke="#065f46" fill="#299a8d" height="48.21249999999998" width="48.21249999999998" opacity="0.85" stroke-opacity="0.85" x="350.17499999999995"></rect><text fill="#FFFFFF" font-weight="700" font-size="24.10624999999999" text-anchor="middle" dominant-baseline="middle" x="374.28125" y="24.10624999999999">3</text></g> <g><text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="133.21875" y="58.21249999999998">0</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="181.43125" y="58.21249999999998">1</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="229.64374999999998" y="58.21249999999998">2</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="277.85625" y="58.21249999999998">3</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="326.06874999999997" y="58.21249999999998">4</text> <text font-style="italic" fill="grey" opacity="0.75" font-size="16.070833333333326" text-anchor="middle" dominant-baseline="hanging" x="374.28125" y="58.21249999999998">5</text></g></g></g><g transform="translate(35, 360)"></g></svg>

0 / 17

1x

### Practice Problems

For more practice with problems that use a monotonic stack, try:

**Daily Temperatures** [Leetcode](https://www.leetcode.com/problems/daily-temperatures/) | [Solution](https://www.hellointerview.com/learn/code/stack/daily-temperatures)

**Largest Rectangle in Histogram** [Leetcode](https://www.leetcode.com/problems/largest-rectangle-in-histogram/) | [Solution](https://www.hellointerview.com/learn/code/stack/largest-rectangle-in-histogram)

**Buildings with an Ocean View** [Leetcode](https://www.leetcode.com/problems/buildings-with-an-ocean-view/)

Reading Progress

On This Page