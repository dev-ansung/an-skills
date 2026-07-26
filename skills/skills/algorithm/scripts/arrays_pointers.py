"""Arrays, Pointers, and Searching Algorithms with doctests."""

def two_sum_sorted(nums: list[int], target: int) -> list[int]:
    """Find 1-based indices of two numbers in sorted array that add up to target.

    >>> two_sum_sorted([2, 7, 11, 15], 9)
    [1, 2]
    >>> two_sum_sorted([2, 3, 4], 6)
    [1, 3]
    >>> two_sum_sorted([-1, 0], -1)
    [1, 2]
    """
    left, right = 0, len(nums) - 1
    while left < right:
        curr = nums[left] + nums[right]
        if curr == target:
            return [left + 1, right + 1]
        elif curr < target:
            left += 1
        else:
            right -= 1
    return []


def binary_search(nums: list[int], target: int) -> int:
    """Find index of target in sorted array, or -1 if not found.

    >>> binary_search([-1, 0, 3, 5, 9, 12], 9)
    4
    >>> binary_search([-1, 0, 3, 5, 9, 12], 2)
    -1
    """
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1


def max_sub_array_of_size_k(nums: list[int], k: int) -> int:
    """Find maximum sum of any contiguous subarray of size k.

    >>> max_sub_array_of_size_k([2, 1, 5, 1, 3, 2], 3)
    9
    >>> max_sub_array_of_size_k([2, 3, 4, 1, 5], 2)
    7
    """
    if len(nums) < k or k <= 0:
        return 0
    window_sum = sum(nums[:k])
    max_sum = window_sum
    for i in range(k, len(nums)):
        window_sum += nums[i] - nums[i - k]
        max_sum = max(max_sum, window_sum)
    return max_sum


def length_of_longest_substring(s: str) -> int:
    """Find length of longest substring without repeating characters.

    >>> length_of_longest_substring("abcabcbb")
    3
    >>> length_of_longest_substring("bbbbb")
    1
    >>> length_of_longest_substring("pwwkew")
    3
    """
    char_map = {}
    left = 0
    max_len = 0
    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_len = max(max_len, right - left + 1)
    return max_len


def subarray_sum_equals_k(nums: list[int], k: int) -> int:
    """Find total number of contiguous subarrays whose sum equals k.

    >>> subarray_sum_equals_k([1, 1, 1], 2)
    2
    >>> subarray_sum_equals_k([1, 2, 3], 3)
    2
    """
    prefix_counts = {0: 1}
    curr_sum = 0
    count = 0
    for num in nums:
        curr_sum += num
        count += prefix_counts.get(curr_sum - k, 0)
        prefix_counts[curr_sum] = prefix_counts.get(curr_sum, 0) + 1
    return count


def merge_intervals(intervals: list[list[int]]) -> list[list[int]]:
    """Merge overlapping intervals.

    >>> merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]])
    [[1, 6], [8, 10], [15, 18]]
    >>> merge_intervals([[1, 4], [4, 5]])
    [[1, 5]]
    """
    if not intervals:
        return []
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
    return merged


def can_jump(nums: list[int]) -> bool:
    """Determine if you can reach the last index from the first index.

    >>> can_jump([2, 3, 1, 1, 4])
    True
    >>> can_jump([3, 2, 1, 0, 4])
    False
    """
    max_reach = 0
    for i, jump in enumerate(nums):
        if i > max_reach:
            return False
        max_reach = max(max_reach, i + jump)
    return True


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
