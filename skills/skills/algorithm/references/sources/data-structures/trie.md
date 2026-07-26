---
title: "Trie Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/trie/overview"
author:
published:
created: 2026-07-25
description: "Learn trie data structure basics with character node traversal and prefix visualization."
tags:
  - "clippings"
---
###### Trie

## Trie Overview

---

0:00

/

6:46

Trie Overview

8 chapters • 1 interactive checkpoints

A trie (also known as a Prefix Tree) stores a set of strings in a tree-like data structure. The trie below stores the strings APPLE, APP, BAT, BALL, BATS, and BALL:

<svg width="400" height="460" viewBox="0 0 400 460"><g><circle cx="200" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="200" y1="50" x2="135" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="130" x2="135" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="210" x2="135" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="135" y1="290" x2="135" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="370" x2="135" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="135" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="135" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="135" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="200" y1="50" x2="265" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="130" x2="265" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="210" x2="200" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="200" y1="290" x2="200" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="200" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="200" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g opacity="1"><line x1="265" y1="210" x2="330" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="330" y1="290" x2="330" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="330" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="330" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="265" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="265" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg>

Strings with a common prefix share the same nodes in the trie. For example, the strings APPLE and APP share the nodes A, P, and P.

A trie allows us to efficiently search if a given word exists in the trie. For example, we can search for the word APPLE by starting at the root of the trie and following the nodes along the path animated below:

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 600"><g transform="translate(0, 40)"><text x="200" y="0" text-anchor="middle" font-size="24" dominant-baseline="middle" font-family="monospace">APPLE</text> <g opacity="1"><rect x="163.87631225585938" width="0" y="-17.493096590042114" height="34.98619318008423" fill="#59b9b0" stroke-width="5" rx="4" opacity="0.5"></rect></g></g><g transform="translate(0, 70)"><svg width="400" height="460" viewBox="0 0 400 460"><g><circle cx="200" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="200" y1="50" x2="135" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="130" x2="135" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="210" x2="135" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="135" y1="290" x2="135" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="370" x2="135" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="135" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="135" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="135" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="200" y1="50" x2="265" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="130" x2="265" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="210" x2="200" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="200" y1="290" x2="200" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="200" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="200" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g opacity="1"><line x1="265" y1="210" x2="330" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="330" y1="290" x2="330" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="330" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="330" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="265" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="265" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg></g></svg>

A trie is commonly used to implement features like spell checkers and auto-complete. For example, if we type in the string "BA", then our trie can suggest "BALL" and "BAT" as possible completions.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 600"><g transform="translate(0, 40)"><text x="200" y="0" text-anchor="middle" font-size="24" dominant-baseline="middle" font-family="monospace">BA</text> <g opacity="1"><rect x="185.55052185058594" width="0" y="-17.493096590042114" height="34.98619318008423" fill="#59b9b0" stroke-width="5" rx="4" opacity="0.5"></rect></g></g><g transform="translate(0, 70)"><svg width="400" height="460" viewBox="0 0 400 460"><g><circle cx="200" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="200" y1="50" x2="135" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="130" x2="135" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="210" x2="135" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="135" y1="290" x2="135" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="135" y1="370" x2="135" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="135" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="135" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="135" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="135" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="135" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="200" y1="50" x2="265" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="130" x2="265" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="265" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="265" y1="210" x2="200" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="200" y1="290" x2="200" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="200" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="200" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="200" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g opacity="1"><line x1="265" y1="210" x2="330" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="330" y1="290" x2="330" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="330" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="330" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="330" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="265" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="265" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg></g></svg>

This section covers the basics of tries that you should know for the coding interview. In particular, we will learn how to visualize the most common operations on a trie: search, insert, and delete.

### Basics

- A trie consists of a series of nodes arranged in a tree. Each node in the trie represents a character in one of the strings in the trie, and its children represent the next character in the string.
- Each node also has a boolean value that indicates whether the node represents the end of a word. Nodes where this boolean value is true are colored blue in this guide.
- A trie supports 3 main operations: *search(word)*, *insert(word)*, and *delete(word)*.

#### Trie Class

A trie is typically implemented as a class with a reference to root of the trie of type TrieNode. The class has methods to search, insert, and delete words from the trie.

```
class Trie:
    def __init__(self):
        self.root = TrieNode()
        
    def search(self, word):
        # return True if word is in trie, False otherwise
        pass
    
    def insert(self, word):
        # insert word into trie
        pass
    
    def delete(self, word):
        # delete word from trie
        pass
```

#### TrieNodes

The TrieNode class can be defined as:

```
class TrieNode:
    def __init__(self, children = None, eow = False):
        if children is None:
            self.children = {}
        else:
            self.children = children
        self.is_end_of_word = eow
```

The children dictionary is a mapping from characters to TrieNode objects. For example, the code snippet below shows what the children dictionary looks like for a node with two children, "A" and "B":

In practice, we won't be manually creating TrieNode objects. Instead, we'll use the Trie class to interact with the trie. This snippet is only included to help you understand the structure of a trie.

```
root = TrieNode()

root.children = {
    'A': TrieNode(),
    'B': TrieNode()
}
```

<svg width="200" height="140" viewBox="0 0 200 140"><g><circle cx="100" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="rgba(145, 158, 171, 0.24)"></circle><g opacity="1"><line x1="100" y1="50" x2="35" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="35" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="rgba(145, 158, 171, 0.24)"></circle></g><text x="35" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="100" y1="50" x2="165" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="165" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="rgba(145, 158, 171, 0.24)"></circle></g><text x="165" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg>

Next, we'll learn how to visualize the 3 main operations on a trie: *search*, *insert*, and *delete*.

## Trie Operations

This section focuses on how to visualize each operation to get a feel for how they work. We'll cover the implementation in-depth in the first [practice problem](https://www.hellointerview.com/learn/code/trie/implement-trie).

### Search

The search operation takes a search term as input and returns whether the term exists in the trie.

We start from the root node and the first character of the search term. We then traverse down the trie by checking if any of the children of the current node match the next character in the search term. If they do, we move to that node and continue the search with the next character in the search term.

The animation below visualizes the search operation for an input (case sensitive) of your choice, with a trie storing APPLE, APP, BAT, BALL, BATS, and BALL.

Try different search terms to get a feel for how the search operation works.

BALL returns true BA returns false, as BA is not marked as the end of a word

Visualization

Try these examples:

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 560"><g transform="translate(0, 40)"><text x="350" y="0" text-anchor="middle" font-size="24" dominant-baseline="middle" font-family="monospace">BATH</text> <g opacity="1"><rect x="321.10205078125" width="0" y="-17.414965629577637" height="34.82993125915527" fill="#59b9b0" stroke-width="5" rx="4" opacity="0.5"></rect></g></g><g transform="translate(0, 70)"><svg width="700" height="460" viewBox="0 0 700 460"><g><circle cx="350" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="350" y1="50" x2="285" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="285" y1="130" x2="285" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="285" y1="210" x2="285" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="285" y1="290" x2="285" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="285" y1="370" x2="285" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="285" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="285" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="285" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="350" y1="50" x2="415" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="415" y1="130" x2="415" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="415" y1="210" x2="350" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g opacity="1"><line x1="350" y1="290" x2="350" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="350" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="350" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g opacity="1"><line x1="415" y1="210" x2="480" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="480" y1="290" x2="480" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="480" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="480" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="415" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="415" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg></g></svg>

search for BATH

0 / 5

2x

#### Time Complexity

O(L), where L is the length of the word being searched in the worst case we need to traverse L nodes in the Trie to find the word. Each node traversal takes constant time O(1), for a total of O(L) operations.

### Insertion

The insert operation takes a word as input and adds it to the trie.

We traverse the trie until we reach the last character of the search term. From there, we add the nodes that don't exist already in the trie, and mark the last node as the end of a word.

The animation visualizes the insert operation for a word of your choice (case-sensitive) into a trie containing APPLE, APP, BAT, BATS, and BALLET.

The animation resets back to the original trie after each insertion - the trie does not accumulate words as you insert them.

Some example words to insert:

APPLE (already exists) BALL (no new nodes created, but "L" is marked as the end of a word) COAL (creates a new branch in the trie from the root)

Visualization

Try these examples:

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 590"><g transform="translate(0, 30)"><svg width="700" height="540" viewBox="0 0 700 540"><g><circle cx="350" cy="30" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="350" y1="50" x2="285" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="110" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="130" x2="285" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="190" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="210" x2="285" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g><line x1="285" y1="290" x2="285" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="370" x2="285" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="430" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="285" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="285" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="285" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g><line x1="350" y1="50" x2="415" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="110" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="415" y1="130" x2="415" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="190" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="415" y1="210" x2="350" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g><line x1="350" y1="290" x2="350" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="350" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="350" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g><line x1="415" y1="210" x2="480" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="480" y1="290" x2="480" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="480" y1="370" x2="480" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="430" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="480" y1="450" x2="480" y2="510" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="510" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="480" y="510" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g></g> <text x="480" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="480" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="480" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="415" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="415" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg></g></svg>

insert BALLOON

0 / 3

2x

#### Time Complexity

O(L) where L is the length of the word being inserted. In the worst case, such as when the trie is empty or the word being inserted has no common prefixes with existing words, we need to insert L nodes, each of which takes constant time O(1).

### Deletion

The delete operation deletes a word from the trie.

We traverse down to the last character of the word we want to delete, set the "end of word" flag to false, and then remove any nodes that are not part of any other words in the trie.

The animation visualizes a delete operation from a trie containing APPLE, APP, BAT, BATS, BALL, and BALLET.

The animation resets back to the original trie after each deletion - meaning the trie does not continuously shrink as you delete words.

Some example words to delete:

BALL (removes the EOW marker from the "L" node) COAL (does nothing, as the word does not exist in the trie) BATS (removes the "S" node)

Visualization

Try these examples:

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 590"><g transform="translate(0, 30)"><svg width="700" height="540" viewBox="0 0 700 540"><g><circle cx="350" cy="30" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="350" y1="50" x2="285" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="110" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="130" x2="285" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="190" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="210" x2="285" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g><line x1="285" y1="290" x2="285" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="285" y1="370" x2="285" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="285" cy="430" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="285" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="285" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="285" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="285" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g><line x1="350" y1="50" x2="415" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="110" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="415" y1="130" x2="415" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="415" cy="190" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="415" y1="210" x2="350" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g><line x1="350" y1="290" x2="350" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="350" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="350" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">S</text></g></g> <text x="350" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g> <g><line x1="415" y1="210" x2="480" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="270" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="480" y1="290" x2="480" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="350" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle><g><line x1="480" y1="370" x2="480" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="430" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g><line x1="480" y1="450" x2="480" y2="510" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="480" cy="510" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="480" y="510" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">T</text></g></g> <text x="480" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="480" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="480" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="415" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="415" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g></g></svg></g></svg>

delete BALLET

0 / 5

2x

#### Time Complexity

O(L). In the worst case, such as when the word to delete is the only word in the trie, we need to first traverse L nodes in the trie to find the word to delete, and then delete L nodes. Each node traversal takes constant time O(1), for a total 2L operations, which is O(L).

### Summary

| Operation | Description | Time Complexity |
| --- | --- | --- |
| Search | Search for a word in the trie | O(L) |
| Insert | Insert a word in the trie | O(L) |
| Delete | Delete a word from the trie | O(L) |

### Space Complexity

The space complexity of a trie is O(C), where C is the total number of characters between all the words stored in the trie. This is due to the worst case, which happens when there are no common prefixes between the words stored in the trie.

<svg width="350" height="460" viewBox="0 0 350 460"><g><circle cx="175" cy="30" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="175" y1="50" x2="45" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="45" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="45" y1="130" x2="45" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="45" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="45" y1="210" x2="45" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="45" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="45" y1="290" x2="45" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="45" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="45" y1="370" x2="45" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="45" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="45" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">E</text></g></g> <text x="45" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="45" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="45" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">P</text></g></g> <text x="45" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g> <g opacity="1"><line x1="175" y1="50" x2="175" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="175" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="175" y1="130" x2="175" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="175" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="175" y1="210" x2="175" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="175" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="175" y1="290" x2="175" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="175" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="175" y1="370" x2="175" y2="430" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="175" cy="430" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="175" y="430" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">D</text></g></g> <text x="175" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">R</text></g></g> <text x="175" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="175" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">O</text></g></g> <text x="175" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">B</text></g> <g opacity="1"><line x1="175" y1="50" x2="305" y2="110" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="305" cy="110" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="305" y1="130" x2="305" y2="190" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="305" cy="190" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="305" y1="210" x2="305" y2="270" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="305" cy="270" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#FFFFFF"></circle><g opacity="1"><line x1="305" y1="290" x2="305" y2="350" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2"></line><g><circle cx="305" cy="350" opacity="1" r="20" stroke="rgba(145, 158, 171, 0.24)" stroke-width="2" fill="#5c9eff"></circle></g><text x="305" y="350" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">L</text></g></g> <text x="305" y="270" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">A</text></g></g> <text x="305" y="190" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">O</text></g></g> <text x="305" y="110" text-anchor="middle" dominant-baseline="middle" fill="#161C24" font-size="20">C</text></g></g></svg>

A trie in which there are no shared nodes.