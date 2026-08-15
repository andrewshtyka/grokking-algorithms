# Algorithms practicing

Based on "Grokking Algorithms" book by Aditya Y. Bhargava. \
Check folders to find examples with functionality (from the table below).

Another source of truth for complexity of [sorting] algorithms is [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm)

<br />

| Type | Time (worst ... average) | Space | Comment |
|-|-|-|-|
| **Binary search** | `O(log n)`| `O(1)` | - |
| **Binary search (recursive)** | `O(log n)` | `O(log n)` | worse than iterative approach |
| **Selection sort** | `O(n^2)` | `O(1)` | - |
| **Quicksort** | `O(n^2)` ... `O(n log n)` | `O(log n)` | depends on chosen "pivot". But in average, average case will happen |
| **Hash tables (Map)** | `O(n)` ... `O(1)` | `O(n)` | depends on collisions, and on expanding hash table (takes time of `O(n)`), [wiki](https://en.wikipedia.org/wiki/Hash_table) |
| **Breadth-first search (BFS)** | `O(V+E)` | `O(V)` | V - vertices (nodes), E - edges (lines that connect Vertices) |
| **Dijkstra algorithm** | `O((V^2) log V)` ... `O((V + E) log V)` | `O(V)` | E weight must be >= 0 |