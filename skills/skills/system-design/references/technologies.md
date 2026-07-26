# Key Technologies Cheat Sheet

Selection guide, trade-off matrix, and architecture placement for core distributed systems infrastructure technologies.

Source References:
- PostgreSQL: [`sources/key-technologies/postgresql.md`](sources/key-technologies/postgresql.md)
- Redis: [`sources/key-technologies/redis.md`](sources/key-technologies/redis.md)
- Kafka: [`sources/key-technologies/kafka.md`](sources/key-technologies/kafka.md)
- DynamoDB: [`sources/key-technologies/dynamodb.md`](sources/key-technologies/dynamodb.md)
- Cassandra: [`sources/key-technologies/cassandra.md`](sources/key-technologies/cassandra.md)
- Elasticsearch: [`sources/key-technologies/elasticsearch.md`](sources/key-technologies/elasticsearch.md)
- Flink: [`sources/key-technologies/flink.md`](sources/key-technologies/flink.md)
- ZooKeeper: [`sources/key-technologies/zookeeper.md`](sources/key-technologies/zookeeper.md)
- API Gateway: [`sources/key-technologies/api-gateway.md`](sources/key-technologies/api-gateway.md)

---

## Technology Selection Matrix

| Infrastructure | Primary Paradigm | Strengths | Trade-offs / Limitations | Common Use Cases |
| --- | --- | --- | --- | --- |
| **PostgreSQL** | Relational RDBMS | ACID transactions, complex SQL, PostGIS geospatial, indexing | Vertical scale limit without sharding | Financial systems, core metadata, user accounts |
| **Redis** | In-Memory Data Structure Store | Ultra-fast (<1ms), rich data structures (Strings, Hashes, Lists, Sets, Sorted Sets, HyperLogLog, Pub/Sub, Geo) | RAM dataset size limits; persistence data loss risk if misconfigured | Caching, session management, rate limiting, leaderboard min-heaps, realtime Pub/Sub |
| **Kafka** | Distributed Event Streaming Log | Massive write throughput, replayable event log, consumer groups | Complex operations, message ordering only guaranteed within partition | Event-driven architecture, activity tracking, log aggregation, async decoupling |
| **DynamoDB** | Managed NoSQL Key-Value / Document | Seamless auto-scaling, predictable single-digit ms latency, fully managed | Query limitations (must query by Partition/Sort Key or GSI), expensive scan operations | High-throughput web applications, shopping carts, session state |
| **Cassandra** | Wide-Column Distributed NoSQL | Linear write scale, masterless peer-to-peer ring architecture, zero single point of failure | No joins/ACID transactions across partitions; query patterns must be known upfront | Heavy write-intensive systems, time-series data, metric logging |
| **Elasticsearch** | Inverted Index Search Engine | Full-text search, fuzzy search, aggregation queries, log analytics | High memory overhead, eventual consistency, re-indexing costs | Product search (Yelp/Amazon), log monitoring (ELK), auto-complete |
| **Apache Flink** | Stateful Stream Processing | Sub-second event time windowing, exactly-once processing guarantees | Steeper learning curve, operational complexity | Ad click aggregations, fraud detection, real-time metrics |
| **ZooKeeper** | Distributed Coordination Service | Strong consistency (ZAB protocol), consensus management, configuration management | Write throughput limits (all writes go through single leader) | Master election, cluster metadata coordination (Kafka/HBase control plane) |
| **API Gateway** | Edge Routing Middleware | Rate limiting, authentication, SSL termination, request routing, CORS | Potential single point of failure if not scaled | Unified entry point for microservice architectures |

---

## Storage Paradigm Decision Rules

1. **Structured Data + Complex Relationships + ACID Required** -> **Relational DB (Postgres)**
2. **Key-Value Lookup + Low Latency + Simple Queries** -> **Key-Value Store (Redis / DynamoDB)**
3. **High Write Throughput + Simple Partition Queries** -> **Wide-Column Store (Cassandra)**
4. **Full-Text Search / Fuzzy Search / Log Aggregation** -> **Inverted Index (Elasticsearch)**
5. **Decoupled Event Streaming / Asynchronous Processing** -> **Distributed Log (Kafka)**
