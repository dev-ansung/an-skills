---
name: system-design
description: Master System Design skill covering end-to-end interview delivery frameworks, core distributed systems concepts (CAP theorem, PACELC, caching strategies, database indexing, sharding, consistent hashing, numbers to know), architectural design patterns (realtime updates, long-running tasks, contention, read/write scaling, large blobs, multi-step workflows, proximity search), technology selection deep-dives (PostgreSQL, Redis, Kafka, DynamoDB, Cassandra, Elasticsearch, Flink, ZooKeeper, API Gateways), and 28+ real-world system architecture breakdowns (Uber, WhatsApp, YouTube, Google Docs, Stripe, LeetCode, Dropbox, Ticketmaster, Bitly, Yelp, Tinder, etc.). Make sure to activate this skill whenever the user mentions system design, distributed systems, software architecture, microservices, backend system scaling, or asks how to design any scale app or service.
---

# System Design Skill

Consolidated expert skill for designing distributed systems, backend architectures, microservices, and delivering high-scoring system design interviews.

---

## 5-Step Delivery Framework Cheat Sheet

Use this sequence to structure any system design response or interview solution. For a complete timing breakdown and detailed guidance, see [`references/framework.md`](references/framework.md).

```
   +-----------------------+      ~5 mins: Functional & Non-functional requirements, CAP choice, SLAs
   | 1. Requirements       | ---> Quantify latency, throughput, DAU, read:write ratios.
   +-----------------------+
               |
               v
   +-----------------------+      ~2 mins: Define 3-5 core domain entities (e.g. User, Tweet, Follow).
   | 2. Core Entities      | ---> Avoid listing secondary DB columns upfront.
   +-----------------------+
               |
               v
   +-----------------------+      ~5 mins: Define REST / GraphQL / gRPC interface contracts.
   | 3. API Contract       | ---> Derive user identity from auth tokens, not request body.
   +-----------------------+
               |
               v
   +-----------------------+      ~15 mins: Draw component flow sequentially endpoint-by-endpoint.
   | 4. High-Level Design  | ---> Client -> API Gateway -> App Server -> Cache / Queue -> Database.
   +-----------------------+
               |
               v
   +-----------------------+      ~10 mins: Resolve bottlenecks, single points of failure, edge cases,
   | 5. Deep Dives         | ---> applying sharding, caching, atomic locking, or message queues.
   +-----------------------+
```

---

## Topic Reference Map

Refer to specialized reference guides for detailed code patterns, architectural recipes, trade-offs, and source documents:

| Topic Area | Reference Guide | Key Highlights Covered |
| --- | --- | --- |
| **Delivery Framework** | [`references/framework.md`](references/framework.md) | 5-step delivery process, timing roadmap, SLA quantification, capacity math rules. |
| **Core Concepts** | [`references/core_concepts.md`](references/core_concepts.md) | CAP & PACELC, Cache-Aside/Write-Through/Write-Back, B-Trees vs LSM-Trees, Sharding, Consistent Hashing, Latency Numbers. |
| **Design Patterns** | [`references/patterns.md`](references/patterns.md) | Realtime push (WebSockets/SSE), Long-running async workers, Contention/Locking, Read/Write scaling, Presigned S3 uploads, Proximity Geohashing. |
| **Key Technologies** | [`references/technologies.md`](references/technologies.md) | Tech selection matrix: Postgres, Redis, Kafka, DynamoDB, Cassandra, Elasticsearch, Flink, ZooKeeper, API Gateways. |
| **Problem Index** | [`references/problem_breakdowns.md`](references/problem_breakdowns.md) | Architectural blueprints & source references for **28 real-world systems** (Uber, WhatsApp, YouTube, Stripe, etc.). |

---

## Quick Architecture Decision Matrix

### 1. API Protocol Selection
- **REST**: Default choice for standard web/mobile CRUD applications.
- **GraphQL**: Diverse clients with variable field requirements to eliminate over-fetching/under-fetching.
- **gRPC / Protobuf**: High-performance, low-latency inter-microservice internal RPCs.
- **WebSockets / SSE**: Real-time server-to-client streaming push updates.

### 2. Database Selection
- **Relational (PostgreSQL)**: ACID compliance, structured schemas, relational joins, geospatial PostGIS queries.
- **Key-Value / Cache (Redis)**: Sub-millisecond reads/writes, ephemeral session storage, rate limiting, leaderboards.
- **Managed Document / KV (DynamoDB)**: Predictable single-digit ms scale, zero ops, partition/sort key lookups.
- **Wide-Column NoSQL (Cassandra)**: Massive write scale, time-series metrics, multi-region masterless replication.
- **Search Engine (Elasticsearch)**: Full-text search, fuzzy matching, faceted filtering, log analytics.

### 3. Realtime Push Mechanism
- **HTTP Polling**: Simple, stateless, inefficient for high frequency.
- **Server-Sent Events (SSE)**: Unidirectional server-to-client push over standard HTTP/2. Ideal for feeds & news.
- **WebSockets**: Bidirectional persistent full-duplex TCP connection. Ideal for chat & collaborative editing.

---

## Problem Breakdown Source Files

Full untruncated source markdown documents for all 28 problems are preserved in `references/sources/problems/`:

- **Social & Chat**: [`WhatsApp`](references/sources/problems/whatsapp.md), [`Instagram`](references/sources/problems/instagram.md), [`Facebook News Feed`](references/sources/problems/facebook-news-feed.md), [`Live Comments`](references/sources/problems/facebook-live-comments.md), [`Post Search`](references/sources/problems/facebook-post-search.md)
- **Media & Video**: [`YouTube Video Streaming`](references/sources/problems/youtube-video-streaming.md), [`Top K Videos`](references/sources/problems/youtube-top-k-videos.md), [`Google News Aggregator`](references/sources/problems/google-news.md)
- **Logistics & Commerce**: [`Uber`](references/sources/problems/uber.md), [`Gopuff`](references/sources/problems/gopuff.md), [`Stripe`](references/sources/problems/stripe.md), [`Ticketmaster`](references/sources/problems/ticketmaster.md), [`eBay`](references/sources/problems/ebay.md), [`Tinder`](references/sources/problems/tinder.md)
- **Platforms & Infra**: [`Distributed Cache`](references/sources/problems/distributed-cache.md), [`Distributed Job Scheduler`](references/sources/problems/distributed-job-scheduler.md), [`Rate Limiter`](references/sources/problems/distributed-rate-limiter.md), [`Dropbox`](references/sources/problems/dropbox.md), [`Web Crawler`](references/sources/problems/web-crawler.md), [`Ad Click Aggregator`](references/sources/problems/ad-click-aggregator.md)
- **Productivity & Finance**: [`Google Docs`](references/sources/problems/google-docs.md), [`LeetCode`](references/sources/problems/leetcode.md), [`Chess Platform`](references/sources/problems/chess-platform.md), [`Robinhood`](references/sources/problems/robinhood.md), [`CamelCamelCamel`](references/sources/problems/camelcamelcamel.md), [`Strava`](references/sources/problems/strava.md), [`Yelp`](references/sources/problems/yelp.md), [`Bitly`](references/sources/problems/bitly.md)
