# Core Concepts Cheat Sheet

Detailed technical reference for foundational distributed systems concepts, trade-offs, and design rules.

Source References:
- CAP Theorem: [`sources/core-concepts/CAP Theorem for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/CAP%20Theorem%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Caching: [`sources/core-concepts/Caching for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/Caching%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Sharding: [`sources/core-concepts/Sharding in System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/Sharding%20in%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Database Indexing: [`sources/core-concepts/Database Indexing for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/Database%20Indexing%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Consistent Hashing: [`sources/core-concepts/Consistent Hashing for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/Consistent%20Hashing%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Numbers to Know: [`sources/core-concepts/Numbers to Know for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/core-concepts/Numbers%20to%20Know%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)

---

## 1. CAP Theorem & PACELC

- **CAP Theorem**: In the presence of a network Partition ($P$), a distributed system must choose between Consistency ($C$) or Availability ($A$).
  - **CP Systems**: Block reads/writes when nodes lose connectivity to maintain strong consistency (e.g. HBase, Redis Cluster in default mode, MongoDB with majority read/write concern).
  - **AP Systems**: Return stale or local data during network partitions to guarantee uptime (e.g. Cassandra, DynamoDB with eventual consistency).
- **PACELC Extension**:
  - **If Partition ($P$)**: Choose Availability ($A$) or Consistency ($C$).
  - **Else ($E$)**: Choose Latency ($L$) or Consistency ($C$).
  - Example: DynamoDB ($PA/EL$) vs PostgreSQL/RDBMS ($PC/EC$).

---

## 2. Caching Strategies & Eviction

| Pattern | Read Path | Write Path | Use Case |
| --- | --- | --- | --- |
| **Cache-Aside** | App reads cache; on miss, reads DB, populates cache, returns. | App writes directly to DB, invalidates cache key. | Read-heavy workloads; resilient to cache failure. |
| **Read-Through** | App reads cache; cache automatically fetches from DB on miss. | App writes to DB. | Simplifies app logic, managed by middleware. |
| **Write-Through** | N/A | App writes to cache; cache synchronously writes to DB before returning. | Strong consistency between cache and DB; higher write latency. |
| **Write-Back (Write-Behind)** | N/A | App writes to cache; cache asynchronously batch-writes to DB. | Ultra-high write throughput (e.g. view count aggregations); risk of data loss on cache crash. |

### Eviction Policies
- **LRU (Least Recently Used)**: Default choice; evicts key accessed furthest in the past.
- **LFU (Least Frequently Used)**: Evicts key with lowest overall hit count.
- **TTL (Time to Live)**: Automatic key expiration for transient data.

---

## 3. Database Indexing

- **B-Tree / B+ Tree Indexes**:
  - Balanced tree search: $O(\log N)$ point lookups and range queries.
  - Used in RDBMS (PostgreSQL, MySQL InnoDB).
  - High read performance; write overhead due to tree page splitting.
- **LSM-Tree (Log-Structured Merge-Tree)**:
  - Writes buffered in memory (MemTable) and flushed sequentially to SSTables on disk.
  - Used in Cassandra, RocksDB, LevelDB.
  - Superior write throughput; read path requires Bloom filters and compaction to mitigate read amplification.
- **Composite Indexes**: Index order matters (`WHERE A = 1 AND B > 2` requires index `(A, B)`).

---

## 4. Sharding & Consistent Hashing

- **Horizontal Partitioning (Sharding)**: Distributes rows across multiple independent database nodes.
- **Partition Key Selection**:
  - High Cardinality (e.g. `user_id` or `uuid`) to avoid hot shards.
  - Uniform distribution; avoid keys based on timestamps or low-cardinality flags (e.g. `gender` or `status`).
- **Consistent Hashing**:
  - Maps nodes and key hashes to a continuous $2^{32}-1$ ring.
  - Minimizes key reassignment when nodes are added or removed ($K/N$ keys remapped).
  - **Virtual Nodes (Tokens)**: Each physical node manages multiple ring locations to prevent hot spots and balance heterogeneous hardware.

---

## 5. Numbers to Know

### Latency Estimates (Mental Model)

| Operation | Latency |
| --- | --- |
| CPU L1 Cache Reference | ~1 ns |
| RAM Access | ~100 ns |
| NVMe SSD Read | ~20-100 µs |
| Redis In-Memory Cache Read | ~0.5 - 1 ms |
| RDBMS Indexed Read (SSD) | ~1-5 ms |
| Same-DC Network Round-trip | ~0.5 ms |
| Cross-Country Network RTT (US East to West) | ~40-80 ms |
| International RTT (US to Europe) | ~100-150 ms |

### Capacity Calculation Rules of Thumb
- $1 \text{ Million Daily Active Users (DAU)} \approx 12 \text{ requests/sec average}$ (assuming 1 request per user per day).
- $100 \text{ Million DAU} \approx 1,200 \text{ QPS average} \ (12,000 \text{ QPS peak at } 10\times)$.
- $1 \text{ Byte/sec} \approx 8 \text{ bits/sec}$; $1 \text{ TB} = 10^{12} \text{ bytes}$.
