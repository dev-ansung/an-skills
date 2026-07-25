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

For example, to install `threejs`:

```bash
npx skills add dev-ansung/an-skills --skill threejs
```

## Skills

- [`cloudflare`](skills/skills/cloudflare/SKILL.md) - Comprehensive Cloudflare platform skill covering Workers, Pages, storage (KV, D1, R2), AI (Workers AI, Vectorize, Agents SDK), feature flags, networking (Tunnel, Spectrum), security (WAF, DDoS), and infrastructure-as-code (Terraform, Pulumi). Includes deep per-product reference docs under `references/`. (Source: [cloudflare/skills](https://github.com/cloudflare/skills))
- [`daisyui`](skills/skills/daisyui/SKILL.md) - Official daisyUI component library skill for Tailwind CSS - full component reference, config, colors, and usage patterns. (Source: [saadeghi/daisyui](https://github.com/saadeghi/daisyui/tree/master/skills/daisyui))
- [`shadcn`](skills/skills/shadcn/SKILL.md) - Manages shadcn components and projects - adding, searching, fixing, debugging, styling, and composing UI, including chat interfaces, CLI usage, customization, MCP, and component registry. (Source: [shadcn-ui/ui](https://github.com/shadcn-ui/ui))
- [`skill-creator`](skills/skills/skill-creator/SKILL.md) - Helps create new skills and iteratively improve existing ones, including running evals and benchmarking triggering accuracy. (Source: [anthropics/skills](https://github.com/anthropics/skills))
- [`threejs`](skills/skills/threejs/SKILL.md) - Comprehensive Three.js skill covering 3D scene setup, cameras, renderers, geometries, materials, textures, lighting, animation, interaction, asset loading (GLTF/HDR), custom GLSL shaders, and post-processing visual effects. (Source: [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills))