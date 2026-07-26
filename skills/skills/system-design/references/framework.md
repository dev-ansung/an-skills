# System Design Delivery Framework

A structured, battle-tested approach to delivering working, robust system architectures in interview and real-world design scenarios.

Source Reference: [`references/sources/in-a-hurry/delivery-framework.md`](sources/in-a-hurry/delivery-framework.md)

---

## Recommended Timing (45-Minute Interview)

| Phase | Time | Primary Objective |
| --- | --- | --- |
| **1. Requirements** | ~5 min | Functional features, Non-functional constraints, scope bounds |
| **2. Core Entities** | ~2 min | Primary domain models & resources |
| **3. API Design** | ~5 min | Public/internal contract definition (REST/GraphQL/gRPC) |
| **4. High-Level Design** | ~15 min | End-to-end component flow, state updates, databases |
| **5. Deep Dives** | ~10 min | Bottlenecks, failure modes, scaling trade-offs, edge cases |

---

## 1. Requirements Phase (~5 Minutes)

### Functional Requirements
- Write 3-4 concise "Users/Clients should be able to..." statements.
- Focus strictly on core user flows (e.g. for Twitter: post tweet, follow user, view timeline feed).
- Avoid feature creep; prioritize top features first.

### Non-Functional Requirements
- Quantify targets wherever possible rather than vague statements like "low latency".
- Key dimensions checklist:
  1. **Availability vs Consistency**: CAP theorem choice (prioritize Availability or Consistency; Partition tolerance is assumed).
  2. **Scalability & Traffic Ratios**: Read-to-write ratio (e.g. 100:1 read heavy), DAU/MAU, peak burst traffic.
  3. **Latency SLA**: Specific response bounds (e.g. Feed fetch < 200ms p99).
  4. **Durability & Data Loss Tolerance**: Financial/payment (zero data loss allowed) vs social media feeds (transient data loss acceptable).
  5. **Environment & Security**: Mobile bandwidth/battery constraints, compliance (GDPR/HIPAA), auth scopes.

### Capacity Estimation (When to do Math)
- **Do NOT** compute trivial math upfront just to show arithmetic skills.
- **DO** perform estimation when it directly impacts architecture decisions (e.g. calculating if a data structure fits in a single Redis node memory vs requiring sharded cluster; or video storage calculations over 5 years).

---

## 2. Core Entities (~2 Minutes)

- Define 3-5 high-level domain nouns/resources (e.g. `User`, `Tweet`, `Follow`).
- Focus on key attributes that impact storage/indexing.
- Avoid documenting standard columns like `created_at` or `email` upfront; add attributes during database design in the High-Level Design phase.

---

## 3. API & System Interface (~5 Minutes)

Choose protocol based on client requirements:
- **REST**: Default choice for standard CRUD and web/mobile clients. Use plural resource nouns (`/v1/tweets`). Derive identity from auth tokens, never request body parameters.
- **GraphQL**: Ideal for multi-device clients requiring granular field selection to avoid over-fetching.
- **gRPC / Protocol Buffers**: High-performance inter-service communication (low overhead, typed schema, bidirectional streaming).
- **WebSockets / SSE**: Real-time server-push operations.

---

## 4. High-Level Design (~15 Minutes)

- Build architecture sequentially by walking through API endpoints one by one.
- Trace end-to-end data flow: Client -> Load Balancer / API Gateway -> App Server -> Cache / Queue -> Database.
- Document storage schemas visually next to database boxes.
- Verbally flag future optimizations (caching, queues) without getting stuck on them prematurely.

---

## 5. Deep Dives (~10 Minutes)

Drive deep dives proactively based on non-functional requirements:
1. **Identify Bottlenecks**: Single points of failure, hot keys, database write bottlenecks.
2. **Apply Architectural Patterns**: Caching strategies, sharding keys, asynchronous worker queues, distributed locking.
3. **Handle Edge Cases & Failures**: Network partitions, message duplication (idempotency), retry storms, dead letter queues.
