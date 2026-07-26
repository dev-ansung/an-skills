---
title: "Intervals Overview | Hello Interview"
source: "https://www.hellointerview.com/learn/code/intervals/overview"
author:
published:
created: 2026-07-25
description: "Learn interval algorithms through visual timeline representations and step-by-step problem solutions."
tags:
  - "clippings"
---
###### Intervals

## Intervals Overview

---

![Intervals Overview](https://b1be528ac540eb1c77e93beeed000a6c.r2.cloudflarestorage.com/hellointerview-files/public-content/coding-videos/intervals-overview/thumbnail.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=95ecb0a901e86377617caf7f3477127c%2F20260726%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260726T002330Z&X-Amz-Expires=7200&X-Amz-Signature=3eaa1d2700f1663c38e3f511fcc1269127edebb56e7546ae7d755c1c333946c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

0:00

/

4:10

Intervals Overview

5 chapters • 1 interactive checkpoints

This page covers problems involving intervals, which are given as a list of \[start, end\] times.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 300"><g transform="translate(0, 245.625)"><g transform="translate(0, -31.875)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="50" width="163.63636363636363" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="213.63636363636363" dx="12.5" text-anchor="end">]</text> <text x="50" dx="-12.5" text-anchor="start">[</text><text x="213.63636363636363" dx="-2.5" text-anchor="end">7</text> <text x="50" dx="2.5" text-anchor="start">1</text></g></g><g transform="translate(0, -223.125)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="268.1818181818182" width="81.81818181818181" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="350" dx="12.5" text-anchor="end">]</text> <text x="268.1818181818182" dx="-12.5" text-anchor="start">[</text><text x="350" dx="-2.5" text-anchor="end">12</text> <text x="268.1818181818182" dx="2.5" text-anchor="start">9</text></g></g><g transform="translate(0, -95.625)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="104.54545454545455" width="81.81818181818183" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="186.36363636363637" dx="12.5" text-anchor="end">]</text> <text x="104.54545454545455" dx="-12.5" text-anchor="start">[</text><text x="186.36363636363637" dx="-2.5" text-anchor="end">6</text> <text x="104.54545454545455" dx="2.5" text-anchor="start">3</text></g></g><g transform="translate(0, -159.375)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="240.9090909090909" width="81.81818181818184" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="322.72727272727275" dx="12.5" text-anchor="end">]</text> <text x="240.9090909090909" dx="-12.5" text-anchor="start">[</text><text x="322.72727272727275" dx="-2.5" text-anchor="end">11</text> <text x="240.9090909090909" dx="2.5" text-anchor="start">8</text></g></g></g></svg>

Sorting intervals by start time.

Interval problems typically involve sorting the given intervals, and then processing each interval in sorted each order. On this page, we'll cover:

1. Sorting intervals by start time
2. Sorting intervals by end time

## Sorting by Start Time

Sorting intervals by their start times **makes it easy to merge two intervals that are overlapping.**

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 550 380"><g transform="translate(0, 234.0454545454545)"><g transform="translate(0, -29.363636363636363)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="5.872727272727273" x="68.75" width="48.529411764705884" height="46.981818181818184" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 29.363636363636363)"><text x="117.27941176470588" dx="12.5" text-anchor="end">]</text> <text x="68.75" dx="-12.5" text-anchor="start">[</text><text x="117.27941176470588" dx="-2.5" text-anchor="end">3</text> <text x="68.75" dx="2.5" text-anchor="start">1</text></g></g><g transform="translate(0, -88.0909090909091)" opacity="0.75" stroke="#59b9b0" fill="#59b9b0"><rect y="5.872727272727273" x="93.01470588235294" width="97.05882352941178" height="46.981818181818184" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 29.363636363636363)"><text x="190.07352941176472" dx="12.5" text-anchor="end">]</text> <text x="93.01470588235294" dx="-12.5" text-anchor="start">[</text><text x="190.07352941176472" dx="-2.5" text-anchor="end">6</text> <text x="93.01470588235294" dx="2.5" text-anchor="start">2</text></g></g><g transform="translate(0, -146.8181818181818)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="5.872727272727273" x="238.60294117647058" width="48.529411764705884" height="46.981818181818184" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 29.363636363636363)"><text x="287.13235294117646" dx="12.5" text-anchor="end">]</text> <text x="238.60294117647058" dx="-12.5" text-anchor="start">[</text><text x="287.13235294117646" dx="-2.5" text-anchor="end">10</text> <text x="238.60294117647058" dx="2.5" text-anchor="start">8</text></g></g><g transform="translate(0, -205.54545454545456)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="5.872727272727273" x="408.45588235294116" width="72.79411764705884" height="46.981818181818184" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 29.363636363636363)"><text x="481.25" dx="12.5" text-anchor="end">]</text> <text x="408.45588235294116" dx="-12.5" text-anchor="start">[</text><text x="481.25" dx="-2.5" text-anchor="end">18</text> <text x="408.45588235294116" dx="2.5" text-anchor="start">15</text></g></g></g> <g transform="translate(0, 322.1363636363636)"><g opacity="0.5" transform="translate(0, -44.04545454545455)"><line x2="550" stroke="#161C24" stroke-width="2"></line><text dx="-10" dy="-15" x="550" text-anchor="end" alignment-baseline="middle" dominant-baseline="auto" font-size="20" font-family="monospace" font-weight="500" fill="#161C24">merged</text></g><g transform="translate(0, -29.363636363636363)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="5.872727272727273" x="68.75" width="48.529411764705884" height="46.981818181818184" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 29.363636363636363)"><text x="117.27941176470588" dx="12.5" text-anchor="end">]</text> <text x="68.75" dx="-12.5" text-anchor="start">[</text><text x="117.27941176470588" dx="-2.5" text-anchor="end">3</text> <text x="68.75" dx="2.5" text-anchor="start">1</text></g></g></g></svg>

Merging two overlapping intervals.

### Overlapping Intervals

After sorting by start time, an interval overlaps with the previous interval if it starts before the end time of the previous interval.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 500 160"><g transform="translate(0, 131)"><g transform="translate(0, -17)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="3.4000000000000004" x="62.5" width="50" height="27.200000000000003" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 17)"><text x="112.5" dx="12.5" text-anchor="end">]</text> <text x="62.5" dx="-12.5" text-anchor="start">[</text><text x="112.5" dx="-2.5" text-anchor="end">2</text> <text x="62.5" dx="2.5" text-anchor="start">0</text></g></g><g transform="translate(0, -51)" opacity="0.75" stroke="#59b9b0" fill="#59b9b0"><rect y="3.4000000000000004" x="137.5" width="125" height="27.200000000000003" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 17)"><text x="262.5" dx="12.5" text-anchor="end">]</text> <text x="137.5" dx="-12.5" text-anchor="start">[</text><text x="262.5" dx="-2.5" text-anchor="end">8</text> <text x="137.5" dx="2.5" text-anchor="start">3</text></g></g><g transform="translate(0, -85)" opacity="0.75" stroke="#59b9b0" fill="#59b9b0"><rect y="3.4000000000000004" x="212.5" width="99.99999999999994" height="27.200000000000003" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 17)"><text x="312.49999999999994" dx="12.5" text-anchor="end">]</text> <text x="212.5" dx="-12.5" text-anchor="start">[</text><text x="312.49999999999994" dx="-2.5" text-anchor="end">10</text> <text x="212.5" dx="2.5" text-anchor="start">6</text></g></g><g transform="translate(0, -119)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="3.4000000000000004" x="362.5" width="75" height="27.200000000000003" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 17)"><text x="437.5" dx="12.5" text-anchor="end">]</text> <text x="362.5" dx="-12.5" text-anchor="start">[</text><text x="437.5" dx="-2.5" text-anchor="end">15</text> <text x="362.5" dx="2.5" text-anchor="start">12</text></g></g></g></svg>

Overlapping intervals shown in green.

Detecting overlapping intervals is the basis of the question [**Can Attend Meetings**](https://www.hellointerview.com/learn/code/intervals/can-attend-meetings), in which we are given a list of intervals representing the start and end times of meetings, and we need to determine if a person can attend all meetings.

We sort the intervals by their start times and iterate over each meeting. If the current meeting overlaps with the previous one, we return False. If we make it through the entire list without finding any overlaps, we return True.

Visualization

Python

Try these examples:

```
def canAttendMeetings(intervals):
    if not intervals:
        return True
    
    intervals.sort(key=lambda x: x[0])
    
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False
    
    return True
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 327.5)"><g transform="translate(0, -42.5)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="8.5" x="87.5" width="80.76923076923077" height="68" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 42.5)"><text x="168.26923076923077" dx="12.5" text-anchor="end">]</text> <text x="87.5" dx="-12.5" text-anchor="start">[</text><text x="168.26923076923077" dx="-2.5" text-anchor="end">4</text> <text x="87.5" dx="2.5" text-anchor="start">2</text></g></g><g transform="translate(0, -127.5)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="8.5" x="370.1923076923076" width="121.15384615384625" height="68" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 42.5)"><text x="491.34615384615387" dx="12.5" text-anchor="end">]</text> <text x="370.1923076923076" dx="-12.5" text-anchor="start">[</text><text x="491.34615384615387" dx="-2.5" text-anchor="end">12</text> <text x="370.1923076923076" dx="2.5" text-anchor="start">9</text></g></g><g transform="translate(0, -212.5)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="8.5" x="249.03846153846155" width="121.15384615384608" height="68" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 42.5)"><text x="370.1923076923076" dx="12.5" text-anchor="end">]</text> <text x="249.03846153846155" dx="-12.5" text-anchor="start">[</text><text x="370.1923076923076" dx="-2.5" text-anchor="end">9</text> <text x="249.03846153846155" dx="2.5" text-anchor="start">6</text></g></g><g transform="translate(0, -297.5)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="8.5" x="531.7307692307692" width="80.76923076923083" height="68" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 42.5)"><text x="612.5" dx="12.5" text-anchor="end">]</text> <text x="531.7307692307692" dx="-12.5" text-anchor="start">[</text><text x="612.5" dx="-2.5" text-anchor="end">15</text> <text x="531.7307692307692" dx="2.5" text-anchor="start">13</text></g></g></g></svg>

can attend meetings

0 / 5

1x

### Merging Intervals

When an interval overlaps with the previous interval in a list of intervals sorted by start times, they can be merged into a single interval.

To merge an interval into a previous interval, we set the end time of the previous interval to be the max of either end time.

```
prev_interval[1] = max(prev_interval[1], interval[1])
```

Python code for merging interval into prev\_interval

In [**Merge Intervals**](https://www.hellointerview.com/learn/code/intervals/merge-intervals), we are given a list of intervals and need to return a list with all overlapping intervals merged together. We create a new list containing the merged intervals, sort the intervals by their start times, and then iterate over each interval. If the current interval overlaps with the last interval in the merged list, we merge the current interval into the last interval in the merged list. Otherwise, we add the current interval to the merged list.

Visualization

Python

Try these examples:

```
def mergeIntervals(intervals):
    sortedIntervals = sorted(intervals, key=lambda x: x[0])
    merged = []
        
    for interval in sortedIntervals:
        if not merged or interval[0] > merged[-1][1]:
            merged.append(interval)
        else:
            merged[-1][1] = max(interval[1], merged[-1][1])

    return merged
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 246.36363636363635)"><g transform="translate(0, -30.90909090909091)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.1818181818181825" x="87.5" width="123.52941176470588" height="49.45454545454546" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 30.90909090909091)"><text x="211.02941176470588" dx="12.5" text-anchor="end">]</text> <text x="87.5" dx="-12.5" text-anchor="start">[</text><text x="211.02941176470588" dx="-2.5" text-anchor="end">5</text> <text x="87.5" dx="2.5" text-anchor="start">1</text></g></g><g transform="translate(0, -92.72727272727273)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.1818181818181825" x="149.26470588235293" width="92.64705882352942" height="49.45454545454546" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 30.90909090909091)"><text x="241.91176470588235" dx="12.5" text-anchor="end">]</text> <text x="149.26470588235293" dx="-12.5" text-anchor="start">[</text><text x="241.91176470588235" dx="-2.5" text-anchor="end">6</text> <text x="149.26470588235293" dx="2.5" text-anchor="start">3</text></g></g><g transform="translate(0, -154.54545454545456)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.1818181818181825" x="303.67647058823525" width="61.764705882352985" height="49.45454545454546" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 30.90909090909091)"><text x="365.44117647058823" dx="12.5" text-anchor="end">]</text> <text x="303.67647058823525" dx="-12.5" text-anchor="start">[</text><text x="365.44117647058823" dx="-2.5" text-anchor="end">10</text> <text x="303.67647058823525" dx="2.5" text-anchor="start">8</text></g></g><g transform="translate(0, -216.36363636363637)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.1818181818181825" x="519.8529411764706" width="92.64705882352939" height="49.45454545454546" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 30.90909090909091)"><text x="612.5" dx="12.5" text-anchor="end">]</text> <text x="519.8529411764706" dx="-12.5" text-anchor="start">[</text><text x="612.5" dx="-2.5" text-anchor="end">18</text> <text x="519.8529411764706" dx="2.5" text-anchor="start">15</text></g></g></g></svg>

merge intervals

0 / 10

1x

## Sorting by End Time

To see why we sometimes want to sort by end times instead of start time, let's consider the question of finding the maximum number of non-overlapping intervals in a given list of intervals.

Our solution will sort the intervals, and then greedily try to add each interval to the set of non-overlapping intervals.

If we sort by start time, we risk adding an interval that starts early but ends late, which will block us from adding other intervals until that interval ends.

For example, given the following intervals, if we sort by start time, choosing the first interval prevents us from adding another interval until after time 18. This blocks the remaining intervals from being added to the set of non-overlapping intervals, even though none of those intervals overlap with each other.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 300"><g transform="translate(0, 245.625)"><g transform="translate(0, -31.875)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="87.5" width="37.5" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="125" dx="12.5" text-anchor="end">]</text> <text x="87.5" dx="-12.5" text-anchor="start">[</text><text x="125" dx="-2.5" text-anchor="end">6</text> <text x="87.5" dx="2.5" text-anchor="start">4</text></g></g><g transform="translate(0, -95.625)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="218.75" width="112.5" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="331.25" dx="12.5" text-anchor="end">]</text> <text x="218.75" dx="-12.5" text-anchor="start">[</text><text x="331.25" dx="-2.5" text-anchor="end">17</text> <text x="218.75" dx="2.5" text-anchor="start">11</text></g></g><g transform="translate(0, -159.375)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="50" width="300" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="350" dx="12.5" text-anchor="end">]</text> <text x="50" dx="-12.5" text-anchor="start">[</text><text x="350" dx="-2.5" text-anchor="end">18</text> <text x="50" dx="2.5" text-anchor="start">2</text></g></g><g transform="translate(0, -223.125)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="143.75" width="56.25" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="200" dx="12.5" text-anchor="end">]</text> <text x="143.75" dx="-12.5" text-anchor="start">[</text><text x="200" dx="-2.5" text-anchor="end">10</text> <text x="143.75" dx="2.5" text-anchor="start">7</text></g></g></g></svg>

Sorting by start time yields 1 non-overlapping interval.

If instead we sort by end time, we can start by adding the intervals that end the earliest. Intuitively, this frees time for us to add more intervals as early as possible, and yields the correct answer.

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 400 300"><g transform="translate(0, 245.625)"><g transform="translate(0, -31.875)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="87.5" width="37.5" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="125" dx="12.5" text-anchor="end">]</text> <text x="87.5" dx="-12.5" text-anchor="start">[</text><text x="125" dx="-2.5" text-anchor="end">6</text> <text x="87.5" dx="2.5" text-anchor="start">4</text></g></g><g transform="translate(0, -95.625)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="218.75" width="112.5" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="331.25" dx="12.5" text-anchor="end">]</text> <text x="218.75" dx="-12.5" text-anchor="start">[</text><text x="331.25" dx="-2.5" text-anchor="end">17</text> <text x="218.75" dx="2.5" text-anchor="start">11</text></g></g><g transform="translate(0, -159.375)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="50" width="300" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="350" dx="12.5" text-anchor="end">]</text> <text x="50" dx="-12.5" text-anchor="start">[</text><text x="350" dx="-2.5" text-anchor="end">18</text> <text x="50" dx="2.5" text-anchor="start">2</text></g></g><g transform="translate(0, -223.125)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="6.375" x="143.75" width="56.25" height="51" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 31.875)"><text x="200" dx="12.5" text-anchor="end">]</text> <text x="143.75" dx="-12.5" text-anchor="start">[</text><text x="200" dx="-2.5" text-anchor="end">10</text> <text x="143.75" dx="2.5" text-anchor="start">7</text></g></g></g></svg>

Sorting by end time correctly yields 3 non-overlapping intervals.

### Non-Overlapping Intervals

This is the basis for the question [**Non-Overlapping Intervals**](https://www.hellointerview.com/learn/code/intervals/non-overlapping-intervals), in which we are given a list of intervals and **asked to find the minimum number of intervals to remove to eliminate any overlap**.

We sort the intervals by their end times, and then iterate over each interval, keeping a count of all intervals that DO NOT overlap with the last interval in the non-overlapping set. We return the total number of intervals minus the count of NON-overlapping intervals.

Visualization

Python

Try these examples:

```
def nonOverlappingIntervals(intervals):
    if not intervals:
        return 0

    intervals.sort(key=lambda x: x[1])
    end = intervals[0][1]
    count = 1

    for i in range(1, len(intervals)):
        # Non-overlapping interval found
        if intervals[i][0] >= end:
            end = intervals[i][1]
            count += 1

    return len(intervals) - count
```

<svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 700 400"><g transform="translate(0, 263.75)"><g transform="translate(0, -21.25)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="4.25" x="153.125" width="65.625" height="34" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 21.25)"><text x="218.75" dx="12.5" text-anchor="end">]</text> <text x="153.125" dx="-12.5" text-anchor="start">[</text><text x="218.75" dx="-2.5" text-anchor="end">6</text> <text x="153.125" dx="2.5" text-anchor="start">4</text></g></g><g transform="translate(0, -63.75)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="4.25" x="382.8125" width="196.875" height="34" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 21.25)"><text x="579.6875" dx="12.5" text-anchor="end">]</text> <text x="382.8125" dx="-12.5" text-anchor="start">[</text><text x="579.6875" dx="-2.5" text-anchor="end">17</text> <text x="382.8125" dx="2.5" text-anchor="start">11</text></g></g><g transform="translate(0, -106.25)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="4.25" x="87.5" width="525" height="34" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 21.25)"><text x="612.5" dx="12.5" text-anchor="end">]</text> <text x="87.5" dx="-12.5" text-anchor="start">[</text><text x="612.5" dx="-2.5" text-anchor="end">18</text> <text x="87.5" dx="2.5" text-anchor="start">2</text></g></g><g transform="translate(0, -148.75)" opacity="0.75" stroke="rgba(145, 158, 171, 0.24)" fill="rgba(145, 158, 171, 0.24)"><rect y="4.25" x="251.5625" width="98.4375" height="34" rx="4"></rect><g font-weight="500" opacity="1" font-family="monospace" dominant-baseline="middle" alignment-baseline="middle" fill="#454F5B" stroke="#454F5B" font-size="20" transform="translate(0, 21.25)"><text x="350" dx="12.5" text-anchor="end">]</text> <text x="251.5625" dx="-12.5" text-anchor="start">[</text><text x="350" dx="-2.5" text-anchor="end">10</text> <text x="251.5625" dx="2.5" text-anchor="start">7</text></g></g></g><g transform="translate(0, 348.75)"><g transform="translate(0, 0)"></g></g></svg>

non-overlapping intervals

0 / 8

1x

## Practice Problems

Working through these questions will give you more practice with intervals:

<table><thead><tr><th colspan="1"></th><th colspan="1"></th><th colspan="1"></th></tr></thead><tbody><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/intervals/can-attend-meetings">Can Attend Meetings</a></p></td><td></td></tr><tr><td><input></td><td></td><td></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/intervals/non-overlapping-intervals">Non-Overlapping Intervals</a></p></td><td></td></tr><tr><td><input></td><td><p><a href="https://www.hellointerview.com/learn/code/intervals/merge-intervals">Merge Intervals</a></p></td><td></td></tr><tr><td><input></td><td></td><td></td></tr></tbody></table>

###### Test Your Knowledge

Answer the question below to find your gaps.

Question 1 of 15

After sorting intervals by start time, how do you know the current interval overlaps with the previous one?