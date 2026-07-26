# Architectural Patterns Cheat Sheet

Detailed recipes, trade-offs, and implementation strategies for core system design patterns.

Source References:
- Realtime Updates: [`sources/patterns/Real-time Updates Pattern for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/patterns/Real-time%20Updates%20Pattern%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Long-Running Tasks: [`sources/patterns/Managing Long Running Tasks Pattern for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/patterns/Managing%20Long%20Running%20Tasks%20Pattern%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Contention: [`sources/patterns/Dealing with Contention Pattern for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/patterns/Dealing%20with%20Contention%20Pattern%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Scaling Reads: [`sources/patterns/How to scale reads in your system design interview  Hello Interview System Design in a Hurry.md`](sources/patterns/How%20to%20scale%20reads%20in%20your%20system%20design%20interview%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Scaling Writes: [`sources/patterns/How to scale writes in your system design interview  Hello Interview System Design in a Hurry.md`](sources/patterns/How%20to%20scale%20writes%20in%20your%20system%20design%20interview%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Large Blobs: [`sources/patterns/Handling Large Blobs Pattern for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/patterns/Handling%20Large%20Blobs%20Pattern%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Multi-Step Processes: [`sources/patterns/Multi-step Processes Pattern for System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/patterns/Multi-step%20Processes%20Pattern%20for%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)
- Proximity Search: [`sources/advanced-topics/Proximity Search in System Design Interviews  Hello Interview System Design in a Hurry.md`](sources/advanced-topics/Proximity%20Search%20in%20System%20Design%20Interviews%20%20Hello%20Interview%20System%20Design%20in%20a%20Hurry.md)

---

## 1. Pushing Real-Time Updates

| Mechanism | Protocol | Direction | Statefulness | Best For |
| --- | --- | --- | --- | --- |
| **Short Polling** | HTTP | Client -> Server | Stateless | Simple implementations, low frequency |
| **Long Polling** | HTTP | Client -> Server | Holds Connection | Low frequency push, fallback |
| **Server-Sent Events (SSE)**| HTTP/2 | Server -> Client | Persistent HTTP | News feeds, ticker updates, dashboards |
| **WebSockets** | WS / WSS | Full-Duplex | Stateful Server | Interactive chat, collaborative editing, gaming |

### Architecture Recipe (WebSockets / SSE)
- **API Gateway / Connection Servers**: Maintain persistent TCP/WS connections to clients.
- **Pub/Sub Broker (Redis Pub/Sub or Kafka)**: Decouples application workers from WebSocket servers.
- **User Gateway Router**: Hash ring or Redis KV store tracking `user_id -> connection_server_id`.

---

## 2. Managing Long-Running Tasks

### Architecture Recipe
1. Client sends request to API Server.
2. Server validates request, enqueues job payload to Message Queue (Kafka/SQS/RabbitMQ), generates `job_id`, and immediately returns HTTP 202 Accepted with `job_id`.
3. Background Worker Pool pulls jobs, processes execution (video encoding, PDF generation).
4. Worker updates status database or pushes completion event via WebSockets/SSE to Client.
5. **Dead Letter Queue (DLQ)**: Failed tasks after max retries are moved to DLQ for manual inspection/alerting.

---

## 3. Dealing with Contention

### Strategies for High Concurrency (Ticketmaster, Flash Sales, Auctions)

1. **Pessimistic Locking**: `SELECT ... FOR UPDATE` locks database row until transaction completes. High safety, poor throughput under scale.
2. **Optimistic Concurrency Control (OCC)**: `UPDATE inventory SET count = count - 1, version = version + 1 WHERE id = 1 AND version = @current_version`. Retries on version mismatch. High performance when contention is low/moderate.
3. **Redis Atomic Operations / Distributed Lock (Redlock)**: Atomic `DECRBY` or Lua script in Redis. Ultra-low latency guard before writing to persistent storage.
4. **Queue-Based Serialization**: Route conflicting requests for the same item (`item_id`) to a single worker or single partition (Kafka partition keyed by `item_id`).

---

## 4. Scaling Reads

1. **Database Indexing & Denormalization**: Avoid complex joins.
2. **Read Replicas**: Primary handles writes, multiple read replicas handle read traffic. Replication lag must be handled for read-your-own-writes (route user's own read request to primary for $N$ seconds after write).
3. **External Caching (Redis/Memcached)**: Cache hot records.
4. **Content Delivery Network (CDN)**: Cache static assets and edge dynamic API responses.
5. **Hot Key Mitigation**: Local in-memory caching at app servers + key scatter/random salt suffix.

---

## 5. Scaling Writes

1. **Horizontal Sharding**: Partition data across database nodes by partition key.
2. **Batching / Write Buffering**: Buffer writes in memory or queue before batch inserting into database.
3. **LSM-Tree Storage Engine**: Use databases optimized for sequential writes (Cassandra, RocksDB).
4. **Load Shedding & Rate Limiting**: Return 429 Too Many Requests during extreme traffic spikes.

---

## 6. Handling Large Blobs (S3 Direct Uploads)

### Direct Client-to-Storage Architecture
1. Client requests presigned upload URL from App Server (`POST /v1/assets/presign`).
2. App Server verifies permissions and generates presigned S3 URL with short TTL (e.g. 15 mins) and cryptographic signature.
3. Client uploads payload directly to S3 / Blob Storage via `PUT` request.
4. S3 fires `ObjectCreated` event notification to SQS/EventBridge, which triggers a background worker to update database metadata and initiate processing (e.g. media transcoding).
5. Downloads served via **CDN** with signed cookies/URLs for access control.

---

## 7. Multi-Step Workflows (Saga Pattern & Durable Execution)

- **Saga Pattern**: Sequence of local transactions where each step updates its local DB and publishes an event. On failure, compensating transactions execute in reverse.
- **Durable Workflow Engines**: Use systems like Temporal or AWS Step Functions to manage execution history, retries, time-outs, and state machine persistence automatically.

---

## 8. Proximity-Based Services

- **Geohash**: Encodes 2D lat/long into alphanumeric string (e.g. `9q8yy`). Prefix matching locates nearby items.
- **Quadtree**: Hierarchical tree splitting 2D space into 4 quadrants when node density exceeds threshold. Held in memory for ultra-fast spatial search.
- **Google S2 Geometry**: Maps 3D spherical space onto 1D Hilbert space curve for multi-resolution cell indexing.
- **PostGIS / Redis Geo**: PostGIS (`ST_DWithin`), Redis (`GEOADD`, `GEOSEARCH`).
