---
title: "Linked List Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/linked-list/overview"
author:
published:
created: 2026-07-25
description: "Understand linked list fundamentals with pointer visualizations and interactive operations."
tags:
  - "clippings"
---
###### Linked List

## Linked List Overview

---

This page covers common operations and strategies that frequently show up in linked list problems for the coding interview.

## Basics

A linked list is a data structure consisting of sequence of a nodes, where each node contains a value and reference to the next node in the sequence.

In Python, we can represent a linked list node with a ListNode class, where val is a piece of data and next is a reference to the next node in the linked list.

```
# Definition of a ListNode
class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next
```

We can visualize a linked list as a sequence of nodes connected by arrows that point to the next node in the sequence. The first node in a linked list is referred to as the head, and the last node is referred to as the tail. The next field of the tail node is None (unless the linked list contains a cycle) which indicates the end of the linked list.

Visualization

Python

```
# Visualizing linked lists
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
```

0 / 4

1x

Visualizing a linked list with 4 nodes.

## Basic Operations

These operations demonstrate some of the fundamentals of working with linked lists.

### Traversing a Linked List

When traversing a linked list, we initialize a pointer current that starts at the head node of the linked list and follows next pointers until it is None. This allows us to visit each node in the linked list, and perform operations such as finding the length of the linked list.

Visualization

Python

```
def findLength(head):
    length = 0
    current = head
    while current:
        length += 1
        current = current.next
    return length
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(175, 156.25)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g opacity="1"><g opacity="1"><line x1="43.75" y1="-35.53125" x2="43.75" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="36.75,-2 50.75,-2 43.75,7" fill="#299a8d"></polygon><g opacity="1"><rect x="22.75" y="-57.53125" width="42" height="18" rx="4" fill="#299a8d"></rect><text x="43.75" y="-44.53125" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">head</text></g></g></g></g></g><g transform="translate(350, 300)"></g></svg>

0 / 6

1x

Traversing a linked list to find its length.

#### Complexity Analysis

**Time Complexity**: The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. The algorithm iterates through each node in the linked list once. **Space Complexity**: The space complexity of this algorithm is O(1) since we only use one pointer to traverse the linked list regardless of the number of nodes in the linked list.

### Deleting a Node With a Given Target

To delete a node with a given target, we need a reference to both the node we want to delete, and the node right before it.

We'll keep two pointers, curr and prev, and update curr until it reaches the target node, or None. We'll also update prev to be the node before curr at each step. When curr reaches the target node, we can delete it by setting prev.next = curr.next.

We have to handle deleting the head of the linked list as a special case, because there is no node before the head. We can simplify this by using a [dummy node](#dummy-nodes), which we'll cover later.

Visualization

Python

Try these examples:

```
def deleteNode(head, target):
    if head.val == target:
        return head.next
    
    prev = None
    curr = head
    
    while curr:
        if curr.val == target:
            prev.next = curr.next
            break
        prev = curr
        curr = curr.next
    
    return head
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(150, 150)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g><g opacity="1"></g></g></g></svg>

delete node with target value

0 / 6

1x

#### Complexity Analysis

**Time Complexity**: The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. The algorithm iterates through each node in the linked list once in the worst case (when the target does not exist in the linked list). **Space Complexity**: The space complexity of this algorithm is O(1) since we only use two pointers to traverse the linked list regardless of the number of nodes in the linked list.

## Operations to Know for Interviews

Linked list interview questions require manipulating pointers in specific ways that depend entirely on the requirements of the problem. However, there are a few core operations that you should be familiar with, as they show up in multiple linked list questions.

This section covers those operations. At the end, we'll look at problems that will give you more practice with these operations.

### 1\. Fast and Slow Pointers

![](https://www.youtube.com/watch?v=dS_uggp-F2c)

Fast and slow pointers is a technique that is used to find the middle node in a linked list. We initialize two pointers, slow and fast, that start at the head of the linked list. We then iterate until fast reaches the end of the list. During each iteration, the slow pointer advances by one node, while the fast pointer advances by two nodes. When the fast pointer reaches tail of the list, the slow pointer points to the middle node.

Visualization

Python

```
def fastAndSlow(head):
    fast = head
    slow = head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    return slow
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(131.25, 156.25)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g><g opacity="1"></g></g></g></svg>

fast and slow pointers

0 / 4

1x

When there are an even number of nodes, there are two possible choices for the middle node, and this technique will find the second of those two nodes.

Visualization

Python

```
def fastAndSlow(head):
    fast = head
    slow = head
    while fast and fast.next:
        fast = fast.next.next
        slow = slow.next
    return slow
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(175, 156.25)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g><g opacity="1"></g></g></g></svg>

fast and slow pointers

0 / 4

1x

It helps to make the connection between the position of the fast pointer when the iteration finishes and the condition of the while loop. For example, in the case of an odd number of nodes, the fast pointer reaches the last node of the linked list, so the while fast.next part of the loop condition is false, and the loop terminates.

<svg width="90%" height="200" preserveAspectRatio="xMidYMid meet" viewBox="0 0 525 200"><g transform="translate(0, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g opacity="1"><g opacity="1"><line x1="393.75" y1="-35.53125" x2="393.75" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="386.75,-2 400.75,-2 393.75,7" fill="#299a8d"></polygon><g opacity="1"><rect x="372.75" y="-57.53125" width="42" height="18" rx="4" fill="#299a8d"></rect><text x="393.75" y="-44.53125" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">fast</text></g></g></g></g></g></svg>

In the case of an even number of nodes, the fast pointer is None (via the next pointer of the last node), so the while fast part of the loop condition is false, and the loop terminates.

<svg width="90%" height="200" preserveAspectRatio="xMidYMid meet" viewBox="0 0 525 200"><g transform="translate(0, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g opacity="1"><g opacity="1"><line x1="393.75" y1="-35.53125" x2="393.75" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="386.75,-2 400.75,-2 393.75,7" fill="#299a8d"></polygon><g opacity="1"><rect x="372.75" y="-57.53125" width="42" height="18" rx="4" fill="#299a8d"></rect><text x="393.75" y="-44.53125" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">fast</text></g></g></g></g></g></svg>

In general, when working with linked list questions, having a clear understanding of what each pointer in your algorithm represents, and being able to visualize where they should end up when the iteration finishes will help you avoid off-by-one errors and null pointer exceptions.

#### Complexity Analysis

**Time Complexity**: The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. The algorithm terminates when the fast pointer reaches the end. Since fast advances two nodes per iteration, the loop runs approximately n/2 times, which is O(n). **Space Complexity**: The space complexity of this algorithm is O(1) since we only use two pointers to traverse the linked list regardless of the number of nodes in the linked list.

#### Cycle Detection

The same fast and slow pointers technique can also be used to determine if a linked list contains a cycle. If we follow the same iteration pattern and the linked list contains a cycle, the fast pointer will eventually overlap the slow pointer and they will point to the same node.

Visualization

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(131.25, 156.25)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(19.6875, 106.25)" stroke="#59b9b0" stroke-width="4"><line x1="0" x2="0" y1="0" y2="-32.96875"></line><line x1="0" x2="-175" y1="-2" y2="-2"></line><g transform="translate(-175, 0)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 v -32.96875"></path><polygon transform="translate(0, -25.677083333333336)" points="-6.25,0 0,-7.291666666666666 6.25,0" fill="#59b9b0"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">0</text></g><g opacity="1"></g></g></g></svg>

linked list cycle

0 / 5

1x

This is a common interview question, and a good problem to practice using the fast and slow pointers technique (see question #1, Leetcode 141 in [Practice Problems](#practice-problems)).

### 2\. Reversing a Linked List

![](https://www.youtube.com/watch?v=rH0BMUcIAIk)

Reversing a linked list involves changing the direction of the next pointers in a linked list so the last node becomes the head of the reversed linked list.

The algorithm for reversing a linked list is an iterative algorithm which involves 3 pointers, prev, current, and next\_.

1. current points to the node we are currently reversing.
2. prev is the last node that was reversed, and also the node that current.next will point to after reversing.
3. next\_ is the next node we will reverse. We need a pointer to this node before we overwrite the current.next so we can continue reversing the list in the next iteration.

When the iteration completes, current will be None, and prev will be the new head of the linked list.

Visualization

Python

```
def reverse(head):
    prev = None
    current = head
    while current:
        next_ = current.next
        current.next = prev
        prev = current
        current = next_
    return prev
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(131.25, 156.25)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g><g opacity="1"></g></g></g></svg>

reverse linked list

0 / 17

1x

#### Complexity Analysis

**Time Complexity**: The time complexity of this algorithm is O(n) where n is the number of nodes in the linked list. The algorithm iterates through each node in the linked list once. **Space Complexity**: The space complexity of this algorithm is O(1) since we only use three pointers to reverse the linked list regardless of the number of nodes in the linked list.

### 3\. Merging Two Linked Lists

The last operation is merging two linked lists. As an example of this operation, we'll look at how to merge two sorted linked lists.

As an input to this problem, we are given the heads of two sorted linked lists, l1 and l2, and we need to return the head of a new linked list that contains all the nodes from the two input linked lists in sorted order.

To merge two sorted linked lists, we start by determining the head of the merged linked list by comparing the values of l1 and l2, and setting the head to the smaller of the two nodes. We then advance l1 = l1.next or l2 = l2.next depending on which node we chose as the head of the merged linked list.

Visualization

Python

```
def merge_lists(l1, l2):
    if not l1: return l2
    if not l2: return l1

    if l1.val < l2.val:
        head = l1
        l1 = l1.next
    else:
        head = l2
        l2 = l2.next

    current = head
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next

    current.next = l1 or l2
    return head
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500"><g opacity="1"><g transform="translate(175, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(140, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">6</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="21.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l1</text></g></g></g></g></g> <g transform="translate(175, 200)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="21.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l2</text></g></g></g></g></g></g><g transform="translate(0, 0)"><g transform="translate(175, 350)"><g><g opacity="1"></g></g></g></g></svg>

merge two linked lists

0 / 1

1x

Now, we can initialize a pointer current, which represents the last node of the merged linked list. We then iterate through the two input linked lists, comparing the values of l1 and l2 at each step. We append the smaller of the two nodes to the tail of the merged linked list, and advance the pointer of the node we appended.

Visualization

Python

```
def merge_lists(l1, l2):
    if not l1: return l2
    if not l2: return l1

    if l1.val < l2.val:
        head = l1
        l1 = l1.next
    else:
        head = l2
        l2 = l2.next

    current = head
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next

    current.next = l1 or l2
    return head
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500"><g opacity="1"><g transform="translate(175, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(140, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">6</text></g> <g opacity="1"><g opacity="1"><line x1="105" y1="-29.625" x2="105" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="98,-2 112,-2 105,7" fill="#299a8d"></polygon><g opacity="1"><rect x="91.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="105" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l1</text></g></g></g></g></g> <g transform="translate(175, 200)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="21.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l2</text></g></g></g></g></g></g> <g transform="translate(0, 0)"><g transform="translate(175, 350)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="14" y="-51.625" width="42" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">head</text></g></g></g></g></g></g></svg>

head = l1; l1 = l1.next

0 / 5

1x

When either l1 or l2 is None, we can append the remaining nodes of the other linked list to the merged linked list, and return head.

Visualization

Python

```
def merge_lists(l1, l2):
    if not l1: return l2
    if not l2: return l1

    if l1.val < l2.val:
        head = l1
        l1 = l1.next
    else:
        head = l2
        l2 = l2.next

    current = head
    while l1 and l2:
        if l1.val < l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next

    current.next = l1 or l2
    return head
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500"><g opacity="1"><g transform="translate(175, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(140, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">6</text></g> <g opacity="1"><g opacity="1"><line x1="105" y1="-29.625" x2="105" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="98,-2 112,-2 105,7" fill="#299a8d"></polygon><g opacity="1"><rect x="91.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="105" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l1</text></g></g></g></g></g> <g transform="translate(175, 200)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g opacity="1"><g opacity="1"><line x1="175" y1="-29.625" x2="175" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="168,-2 182,-2 175,7" fill="#299a8d"></polygon><g opacity="1"><rect x="161.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="175" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l2</text></g></g></g></g></g></g> <g transform="translate(0, 0)"><g transform="translate(175, 350)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(140, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="14" y="-51.625" width="42" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">head</text></g></g> <g opacity="1"><line x1="175" y1="-29.625" x2="175" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="168,-2 182,-2 175,7" fill="#299a8d"></polygon><g opacity="1"><rect x="142.75" y="-51.625" width="64.5" height="18" rx="4" fill="#299a8d"></rect><text x="175" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">current</text></g></g></g></g></g></g></svg>

current = current.next

0 / 2

1x

###### What is the time complexity of this solution?

1

O(n log n)

2

O(x \* y)

3

O(V + E)

4

O(n + m)

### Practice Problems

These practice problems will give you practice with these core operations:

**Linked List Cycle** [Leetcode #141](https://www.leetcode.com/problems/linked-list-cycle/) | [Solution](https://www.hellointerview.com/learn/code/linked-list/linked-list-cycle)

Hint: Use fast and slow pointers to determine if a linked list contains a cycle.

**Palindrome Linked List** [Leetcode #234](https://www.leetcode.com/problems/palindrome-linked-list) | [Solution](https://www.hellointerview.com/learn/code/linked-list/palindrome-linked-list)

Hint: Use fast and slow pointers to find the middle of the linked list, and reverse the second half of the linked list, and compare the values of the nodes in the first half and the reversed second half.

**Reorder List** [Leetcode #143](https://www.leetcode.com/problems/reorder-list) | [Solution](https://www.hellointerview.com/learn/code/linked-list/reorder-list)

Hint: Use fast and slow pointers to find the middle of the linked list, reverse the second half of the linked list, and merge the two halves of the linked list together.

## Dummy Nodes

Merging two sorted linked lists is an example of a problem where using a dummy node can simplify the logic of the code.

Notice that in the solution for merging two lists above, the logic for choosing the head of the merged linked list is the same as the logic for choosing the next node to append. We need to handle it as a special case because without it, we wouldn't have a starting point for the merged linked list.

We can avoid this by creating a dummy node to represent the starting point of the merged linked list. This allows us to move directly into the iteration processes without having to introduce a special case to initialize the head of the merged linked list. When the iteration finishes we return dummy.next as the head of the merged linked list.

Note: The term "dummy node" refers to creating a new node that isn't part of the input linked list(s) (line 2 in the code below).

Visualization

Python

```
def merge_two_lists(l1, l2):
    dummy = ListNode()
    tail = dummy
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 500"><g opacity="1"><g transform="translate(175, 75)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(140, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">6</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="21.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l1</text></g></g></g></g></g> <g transform="translate(175, 200)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"><g transform="translate(47.25, 35)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 22.749999999999996"></path><g transform="translate(14.249999999999996, 0)"><polygon points="0,-4.375 5,0 0,4.375" fill="#227d70"></polygon></g></g></g></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(70, 0)" opacity="1"><rect transform="translate(11.374999999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="11.374999999999998" width="47.25" height="47.25" rx="6"></rect><g opacity="1" transform="translate(11.374999999999998, 0)"></g><text x="35" y="35" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g opacity="1"><g opacity="1"><line x1="35" y1="-29.625" x2="35" y2="-2" stroke="#299a8d" stroke-width="2"></line><polygon points="28,-2 42,-2 35,7" fill="#299a8d"></polygon><g opacity="1"><rect x="21.5" y="-51.625" width="27" height="18" rx="4" fill="#299a8d"></rect><text x="35" y="-38.625" fill="white" font-size="12" font-weight="700" font-family="monospace" text-anchor="middle" dominant-baseline="auto">l2</text></g></g></g></g></g></g><g transform="translate(0, 0)"><g transform="translate(175, 350)"><g><g opacity="1"></g></g></g></g></svg>

merge two linked lists

0 / 9

1x

### Advantages of a Dummy Node

The advantage of using a dummy node for this question is that it allows us to avoid having to initializing the head of the merged linked list as a special case. This simplifies the logic of the code, and also reduces the need to check if either of the merged linked lists are None (which we need to do if we don't use a dummy node because we reference either l1.next or l2.next as part of initializing the head of the merged linked list. If either l1 or l2 are None, then that reference would throw a null pointer exception).

### When to Use a Dummy Node

If you find yourself writing a solution where you need to introduce a special case to initialize the head of a linked list, and the logic for handling the head is the same as the logic for handling the rest of the linked list, you should consider using a dummy node to simplify your solution.

Using a dummy node under these conditions involves the following 3 steps:

1. Creating the dummy node to represent the head of the linked list you are constructing.
2. Now, you can iteratively append nodes to the end that linked list based on the logic of the problem.
3. Returning dummy.next as the head of the linked list you constructed.

This might be confusing, so the best way to understand this concept is through practice.

#### Other Use Cases

Dummy nodes can also simplify the logic of removing a node in a linked list. As we saw above, removing a node in a linked list requires a reference to the previous node of the node you want to remove. By prepending a dummy node to the head of the link list, we can ensure that each node (including the head) has a previous node, and we can avoid handling the head of the linked list as a special case.

#### Removing a Node in a Linked List With a Dummy Node

Visualization

Python

Try these examples:

```
def deleteNode(head, target):
    dummy = ListNode(0)
    dummy.next = head
    
    prev = dummy
    curr = head
    
    while curr:
        if curr.val == target:
            prev.next = curr.next
            break
        prev = curr
        curr = curr.next
    
    return dummy.next
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(150, 150)"><g><g transform="translate(0, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">5</text></g> <g transform="translate(87.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">4</text></g> <g transform="translate(175, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">3</text></g> <g transform="translate(262.5, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"><g transform="translate(59.06250000000001, 43.75)"><g stroke="#59b9b0" stroke-width="4"><path d="M 0,0 h 28.437499999999996"></path><g transform="translate(18.687499999999996, 0)"><polygon points="0,-5.46875 6.25,0 0,5.46875" fill="#227d70"></polygon></g></g></g></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">2</text></g> <g transform="translate(350, 0)" opacity="1"><rect transform="translate(14.218749999999998, 0)" stroke="#299a8d" stroke-width="3.5" fill="#b5e0dd" y="14.218749999999998" width="59.06250000000001" height="59.06250000000001" rx="6"></rect><g opacity="1" transform="translate(14.218749999999998, 0)"></g><text x="43.75" y="43.75" text-anchor="middle" dominant-baseline="middle" font-family="monospace" fill="#FFFFFF" font-size="20" font-weight="600">1</text></g><g opacity="1"></g></g></g></svg>

delete node with target value

0 / 7

1x

### Practice Problems

**Swap Nodes in Pairs** [Leetcode #24](https://www.leetcode.com/problems/swap-nodes-in-pairs) | [Solution](https://www.hellointerview.com/learn/code/linked-list/swap-nodes-in-pairs)

Hint: Start by figuring out the pointers you need to manipulate in order to swap two nodes in the middle of a linked list, then think about how using a dummy node can simplify your solution.

**Partition List** [Leetcode #86](https://www.leetcode.com/problems/partition-list)

Hint: Use two dummy nodes!

**Remove Nth Node From End of List** [Leetcode #19](https://www.leetcode.com/problems/remove-nth-node-from-end-of-list) | [Solution](https://www.hellointerview.com/learn/code/linked-list/remove-nth-node-from-end-of-list)

Hint: Use a dummy node to avoid handling the case of removing the head of the linked list as a special case.

Reading Progress

On This Page[Basics](#basics)

[

Basic Operations

](#basic-operations)[

Traversing a Linked List

](#traversing-a-linked-list)[

Deleting a Node With a Given Target

](#deleting-a-node-with-a-given-target)[

Operations to Know for Interviews

](#operations-to-know-for-interviews)[

1\. Fast and Slow Pointers

](#1-fast-and-slow-pointers)[

2\. Reversing a Linked List

](#2-reversing-a-linked-list)[

3\. Merging Two Linked Lists

](#3-merging-two-linked-lists)[

Practice Problems

](#practice-problems)[

Dummy Nodes

](#dummy-nodes)[

Advantages of a Dummy Node

](#advantages-of-a-dummy-node)[

When to Use a Dummy Node

](#when-to-use-a-dummy-node)[

Practice Problems

](#practice-problems-1)