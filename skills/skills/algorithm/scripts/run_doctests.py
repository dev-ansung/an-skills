"""Test runner script for all algorithm doctests."""

import doctest
import sys
from pathlib import Path

# Add scripts directory to sys.path
SCRIPTS_DIR = Path(__file__).parent
if str(SCRIPTS_DIR) not in sys.path:
    sys.path.insert(0, str(SCRIPTS_DIR))

import arrays_pointers
import data_structures
import trees_graphs
import dynamic_programming


MODULES = [
    arrays_pointers,
    data_structures,
    trees_graphs,
    dynamic_programming,
]


def run_all_doctests():
    total_failed = 0
    total_attempted = 0

    print("=== Running Algorithm Doctests ===")

    for mod in MODULES:
        failed, attempted = doctest.testmod(mod, verbose=False)
        total_failed += failed
        total_attempted += attempted
        status = "PASSED" if failed == 0 else "FAILED"
        print(f"[{status}] {mod.__name__}: {attempted - failed}/{attempted} tests passed.")

    print("==================================")
    print(f"Total: {total_attempted - total_failed}/{total_attempted} doctests passed.")

    return total_failed == 0


if __name__ == "__main__":
    success = run_all_doctests()
    sys.exit(0 if success else 1)
