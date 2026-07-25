# an-skills

A collection of Claude Code skills, organized by category.

## Install

Install all skills in this repo:

```
npx skills add dev-ansung/an-skills
```

List available skills without installing anything:

```
npx skills add dev-ansung/an-skills --list
```

Install just one skill by name:

```
npx skills add dev-ansung/an-skills --skill skill-creator
```

## Skills

### skills

- [`skill-creator`](skills/skills/skill-creator/SKILL.md) - vendored from
  [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0, see
  its `LICENSE.txt`). Helps create new skills and iteratively improve existing
  ones, including running evals and benchmarking triggering accuracy.

### cloudflare

- [`cloudflare`](skills/cloudflare/cloudflare/SKILL.md) - vendored from
  [cloudflare/skills](https://github.com/cloudflare/skills) (Apache 2.0, see
  its `LICENSE.txt`). Comprehensive Cloudflare platform skill covering
  Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents
  SDK), feature flags, networking (Tunnel, Spectrum), security (WAF, DDoS),
  and infrastructure-as-code (Terraform, Pulumi).
- [`cloudflare-quickstart`](skills/cloudflare/cloudflare-quickstart/SKILL.md) -
  original, distilled from building and shipping a real production Worker
  (`tts-flared`) end to end. A fast-start playbook (scaffolding,
  vitest-pool-workers test setup, custom domain + static assets routing,
  deploy/verify loop) plus a case study of three real bugs hit while
  porting an external binary protocol into a Worker.

### frontend

- [`daisyui-quickstart`](skills/frontend/daisyui-quickstart/SKILL.md) -
  original, distilled from shipping a daisyUI + Tailwind CDN page in
  production (no build step). Covers the exact working CDN tags, the
  correct fieldset/label markup, the one-line `theme-controller` dark
  mode toggle, and when to graduate to a real build setup instead.

## Layout

Skills are organized as `skills/<category>/<name>/SKILL.md`, which the
[skills CLI](https://github.com/vercel-labs/skills) discovers as a catalog layout.
