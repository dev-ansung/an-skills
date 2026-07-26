# System Design Problem Breakdowns Index

Detailed mapping of 28 real-world system design interview problems to their architectural patterns, core components, and full source documents.

Source Folder: [`references/sources/problems/`](sources/problems/)

---

## Social, Messaging & Feeds

| Problem | Primary Patterns | Key Technologies | Source File Reference |
| --- | --- | --- | --- |
| **WhatsApp / Messaging** | Realtime Updates, Contention | WebSockets, Erlang/Elixir, Redis, Cassandra | [`Design a Messaging App Like WhatsApp`](sources/problems/Design%20a%20Messaging%20App%20Like%20WhatsApp%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Instagram / Photo Sharing** | Scaling Reads, Large Blobs | S3, CDN, Postgres, Redis | [`Design a Photo Sharing App Like Instagram`](sources/problems/Design%20a%20Photo%20Sharing%20App%20Like%20Instagram%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Facebook News Feed** | Scaling Reads, Fanout-on-Write vs Read | Redis Sorted Sets, Postgres, Kafka | [`Design Facebook's News Feed`](sources/problems/Design%20Facebook's%20News%20Feed%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Facebook Live Comments** | Realtime Updates, Contention | SSE / WebSockets, Redis Pub/Sub, Kafka | [`Design Facebook's Live Comments System`](sources/problems/Design%20Facebook's%20Live%20Comments%20System%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Facebook Post Search** | Scaling Reads, Search Indexing | Elasticsearch, Kafka, HBase | [`Design Facebook's Post Search`](sources/problems/Design%20Facebook's%20Post%20Search%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |

---

## Streaming, Video & Content

| Problem | Primary Patterns | Key Technologies | Source File Reference |
| --- | --- | --- | --- |
| **YouTube Video Streaming** | Large Blobs, Long-Running Tasks | S3, CDN, HLS/DASH Transcoding Workers | [`Design a Video Streaming Platform Like YouTube`](sources/problems/Design%20a%20Video%20Streaming%20Platform%20Like%20YouTube%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **YouTube Top K Videos** | Contention, Heavy Aggregation | Count-Min Sketch, Heavy Hitters, Flink, Redis | [`Design YouTube's Top K Videos Feature`](sources/problems/Design%20YouTube's%20Top%20K%20Videos%20Feature%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Google News Aggregator** | Scaling Writes, Search Indexing | Web Crawler, Elasticsearch, Kafka | [`Design a News Aggregator like Google News`](sources/problems/Design%20a%20News%20Aggregator%20like%20Google%20News%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |

---

## Mobility, Logistics & E-Commerce

| Problem | Primary Patterns | Key Technologies | Source File Reference |
| --- | --- | --- | --- |
| **Uber / Ride-Sharing** | Proximity Search, Realtime Updates | Geohash/Quadtree, WebSockets, Redis, Postgres | [`Design a Ride-Sharing Service Like Uber`](sources/problems/Design%20a%20Ride-Sharing%20Service%20Like%20Uber%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Gopuff Delivery** | Proximity Search, Multi-Step Process | PostGIS, Redis, Kafka, SQS | [`Design a Local Delivery Service like Gopuff`](sources/problems/Design%20a%20Local%20Delivery%20Service%20like%20Gopuff%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Stripe Payment System** | Multi-Step Process, Contention | Idempotency Keys, Postgres, Two-Phase Commit | [`Design a Payment System like Stripe`](sources/problems/Design%20a%20Payment%20System%20like%20Stripe%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Ticketmaster Booking** | Contention, High Concurrency | Optimistic Concurrency, Distributed Lock, Redis | [`Design a Ticket Booking Site Like Ticketmaster`](sources/problems/Design%20a%20Ticket%20Booking%20Site%20Like%20Ticketmaster%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **eBay Online Auction** | Realtime Updates, Contention | WebSockets, Redis Atomic Decr/Incr, Postgres | [`Design an Online Auction Platform Like eBay`](sources/problems/Design%20an%20Online%20Auction%20Platform%20Like%20eBay%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Tinder Dating App** | Proximity Search, Matching Engine | Geohash, ElasticSearch, DynamoDB | [`Design a Dating App Like Tinder`](sources/problems/Design%20a%20Dating%20App%20Like%20Tinder%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |

---

## Infrastructure & Distributed Platforms

| Problem | Primary Patterns | Key Technologies | Source File Reference |
| --- | --- | --- | --- |
| **Distributed Cache (Redis)** | Scaling Reads, Consistent Hashing | LRU Eviction, Consistent Hash Ring | [`Design a Distributed Cache Like Redis`](sources/problems/Design%20a%20Distributed%20Cache%20Like%20Redis%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Distributed Job Scheduler** | Long-Running Tasks, Multi-Step | DAG Executor, ZooKeeper, Worker Pools | [`Design a Distributed Job Scheduler Like Airflow`](sources/problems/Design%20a%20Distributed%20Job%20Scheduler%20Like%20Airflow%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Distributed Rate Limiter** | Contention, High Throughput | Token Bucket / Sliding Window Log, Redis Lua | [`Design a Distributed Rate Limiter`](sources/problems/Design%20a%20Distributed%20Rate%20Limiter%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Dropbox File Storage** | Large Blobs, Multi-Step Process | Chunking, S3, Metadata DB, Sync Protocol | [`Design a File Storage Service Like Dropbox`](sources/problems/Design%20a%20File%20Storage%20Service%20Like%20Dropbox%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Web Crawler** | Multi-Step Process, Long-Running Tasks | URL Frontier, Deduplication (Bloom Filter), S3 | [`Design a Web Crawler`](sources/problems/Design%20a%20Web%20Crawler%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Ad Click Aggregator** | Heavy Writes, Stream Aggregation | Kafka, Apache Flink, Cassandra | [`Design an Ad Click Aggregator`](sources/problems/Design%20an%20Ad%20Click%20Aggregator%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |

---

## Productivity & Financial Applications

| Problem | Primary Patterns | Key Technologies | Source File Reference |
| --- | --- | --- | --- |
| **Google Docs Editor** | Realtime Updates, Contention | Operational Transformation (OT) / CRDTs, WebSockets | [`Design a Collaborative Document Editor Like Google Docs`](sources/problems/Design%20a%20Collaborative%20Document%20Editor%20Like%20Google%20Docs%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **LeetCode Coding Platform** | Long-Running Tasks, Isolation | Sandbox Execution (Docker/gVisor), SQS, Redis | [`Design a Coding Platform Like LeetCode`](sources/problems/Design%20a%20Coding%20Platform%20Like%20LeetCode%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Online Chess Platform** | Realtime Updates, Contention | WebSockets, Game State Engine, Redis | [`Design an Online Chess Platform`](sources/problems/Design%20an%20Online%20Chess%20Platform%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Robinhood Stock Trading** | Contention, Low Latency | Matching Engine, Order Book, Kafka, Postgres | [`Design a Stock Trading Platform Like Robinhood`](sources/problems/Design%20a%20Stock%20Trading%20Platform%20Like%20Robinhood%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **CamelCamelCamel Price Tracker**| Long-Running Tasks, Scaling Reads | Web Scraper, Time-Series DB, Redis | [`Design a Price Tracking Service like CamelCamelCamel`](sources/problems/Design%20a%20Price%20Tracking%20Service%20like%20CamelCamelCamel%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Strava Fitness Tracking** | Proximity Search, Blob Storage | GPX File Parsing, S3, PostGIS | [`Design a Fitness Tracking App Like Strava`](sources/problems/Design%20a%20Fitness%20Tracking%20App%20Like%20Strava%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Yelp Business Reviews** | Proximity Search, Scaling Reads | Geohash / Elasticsearch, Redis, Read Replicas | [`Design a Local Business Review Site Like Yelp`](sources/problems/Design%20a%20Local%20Business%20Review%20Site%20Like%20Yelp%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
| **Bitly URL Shortener** | Scaling Reads, High Throughput | Base62 Encoding, KGS (Key Generation Service), Redis | [`Design a URL Shortener Like Bitly`](sources/problems/Design%20a%20URL%20Shortener%20Like%20Bitly%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md) |
