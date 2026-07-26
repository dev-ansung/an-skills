"""Dynamic Programming and Backtracking Algorithms with doctests."""

def climb_stairs(n: int) -> int:
    """Find number of distinct ways to climb n stairs taking 1 or 2 steps.

    >>> climb_stairs(2)
    2
    >>> climb_stairs(3)
    3
    >>> climb_stairs(5)
    8
    """
    if n <= 2:
        return n
    prev, curr = 1, 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr


def house_robber(nums: list[int]) -> int:
    """Find maximum money that can be robbed without alerting police (no adjacent houses).

    >>> house_robber([1, 2, 3, 1])
    4
    >>> house_robber([2, 7, 9, 3, 1])
    12
    """
    if not nums:
        return 0
    rob1, rob2 = 0, 0
    for n in nums:
        new_rob = max(rob1 + n, rob2)
        rob1 = rob2
        rob2 = new_rob
    return rob2


def coin_change(coins: list[int], amount: int) -> int:
    """Find fewest number of coins needed to make up amount.

    >>> coin_change([1, 2, 5], 11)
    3
    >>> coin_change([2], 3)
    -1
    >>> coin_change([1], 0)
    0
    """
    dp = [float("inf")] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if i - coin >= 0:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != float("inf") else -1


def longest_common_subsequence(text1: str, text2: str) -> int:
    """Find length of longest common subsequence of two strings.

    >>> longest_common_subsequence("abcde", "ace")
    3
    >>> longest_common_subsequence("abc", "abc")
    3
    >>> longest_common_subsequence("abc", "def")
    0
    """
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]


def subsets(nums: list[int]) -> list[list[int]]:
    """Generate all possible subsets (the power set) using backtracking.

    >>> subsets([1, 2])
    [[], [1], [1, 2], [2]]
    """
    res = []

    def backtrack(start, path):
        res.append(path.copy())
        for i in range(start, len(nums)):
            path.append(nums[i])
            backtrack(i + 1, path)
            path.pop()

    backtrack(0, [])
    return res


def permute(nums: list[int]) -> list[list[int]]:
    """Generate all possible permutations using backtracking.

    >>> permute([1, 2])
    [[1, 2], [2, 1]]
    """
    res = []

    def backtrack(path, visited):
        if len(path) == len(nums):
            res.append(path.copy())
            return
        for num in nums:
            if num not in visited:
                visited.add(num)
                path.append(num)
                backtrack(path, visited)
                path.pop()
                visited.remove(num)

    backtrack([], set())
    return res


if __name__ == "__main__":
    import doctest
    doctest.testmod(verbose=True)
