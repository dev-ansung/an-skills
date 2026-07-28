# an-skills

A collection of Claude Code skills.

[skills.sh listing](https://www.skills.sh/dev-ansung/an-skills)

## Installation

Install all skills in this repo:

```bash
npx skills add dev-ansung/an-skills
```

List available skills without installing anything:

```bash
npx skills add dev-ansung/an-skills --list
```

Install a single skill by name:

```bash
npx skills add dev-ansung/an-skills --skill <skill-name>
```

For example, to install `system-design`:

```bash
npx skills add dev-ansung/an-skills --skill system-design
```

## Skills

- [`algorithm`](skills/skills/algorithm/SKILL.md) - Master Data Structures and Algorithms skill covering coding interview problem-solving frameworks, core patterns (Two Pointers, Binary Search, Sliding Window, Prefix Sum, Monotonic Stack, Intervals, Greedy), data structures (Heaps, Tries, Matrices, Linked Lists), tree & graph algorithms (BFS, DFS, Topological Sort, Shortest Path/Dijkstra), and Dynamic Programming & Backtracking (Memoization, Tabulation, State Space Search).
- [`cloudflare`](skills/skills/cloudflare/SKILL.md) - Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags, networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code (Terraform, Pulumi). Includes deep per-product reference docs under `references/`. (Source: [cloudflare/skills](https://github.com/cloudflare/skills))
- [`create-readme`](skills/skills/create-readme/SKILL.md) - Creates a comprehensive, well-structured README.md for a project, following GFM conventions and drawing inspiration from strong open source examples.
- [`daisyui`](skills/skills/daisyui/SKILL.md) - Official daisyUI component library skill for Tailwind CSS - full component reference, config, colors, and usage patterns. (Source: [saadeghi/daisyui](https://github.com/saadeghi/daisyui/tree/master/skills/daisyui))
- [`fastapi`](skills/skills/fastapi/SKILL.md) - Official FastAPI skill for APIs, Pydantic models, dependencies, streaming responses (SSE), and serving frontend apps. (Source: [fastapi/fastapi](https://github.com/fastapi/fastapi))
- [`mediabunny`](skills/skills/mediabunny/SKILL.md) - High-performance JavaScript/TypeScript media toolkit using WebCodecs and NodeAV for reading, writing, multiplexing (muxing), demultiplexing (demuxing), transcoding, and converting video/audio files (MP4, WebM, MKV, MOV, FLAC, MP3, WAV, HLS) in browser and server environments.
- [`shadcn`](skills/skills/shadcn/SKILL.md) - Manages shadcn components and projects - adding, searching, fixing, debugging, styling, and composing UI, including chat interfaces, CLI usage, customization, MCP, and component registry. (Source: [shadcn-ui/ui](https://github.com/shadcn-ui/ui))
- [`skill-creator`](skills/skills/skill-creator/SKILL.md) - Helps create new skills and iteratively improve existing ones, including running evals and benchmarking triggering accuracy. (Source: [anthropics/skills](https://github.com/anthropics/skills))
- [`system-design`](skills/skills/system-design/SKILL.md) - Comprehensive System Design skill covering interview delivery framework, core concepts (CAP, caching, sharding, indexing), architecture patterns (realtime, long tasks, contention, scaling, blobs, proximity), technology selection (Kafka, Redis, Postgres, DynamoDB, Cassandra, Elasticsearch, Flink, ZooKeeper), and 28+ real-world problem breakdowns (Uber, WhatsApp, YouTube, Google Docs, Stripe, LeetCode, etc.).
- [`threejs`](skills/skills/threejs/SKILL.md) - Comprehensive Three.js skill covering 3D scene setup, cameras, renderers, geometries, materials, textures, lighting, animation, interaction, asset loading (GLTF/HDR), custom GLSL shaders, and post-processing visual effects. (Source: [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills))
- [`uv`](skills/skills/uv/SKILL.md) - Extremely fast Python package and project manager guide, covering pip replacement, virtualenvs, tool management, and script execution. (Source: [astral-sh/claude-code-plugins](https://github.com/astral-sh/claude-code-plugins))
- [`wrangler`](skills/skills/wrangler/SKILL.md) - Cloudflare Workers CLI skill for deploying, developing, and managing Workers, KV, R2, D1, Vectorize, Hyperdrive, Workers AI, Containers, Queues, Workflows, Pipelines, and Secrets Store. (Source: [cloudflare/skills](https://github.com/cloudflare/skills))