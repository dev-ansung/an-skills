# an-skills

A collection of Claude Code skills, organized by category.

## Install a skill

```
npx skills add <your-github-username>/an-skills
```

Or install a single skill directly by path, if the CLI you're using supports it:

```
npx skills add <your-github-username>/an-skills/skills/skills/skill-creator
```

## Skills

### skills

- [`skill-creator`](skills/skills/skill-creator/SKILL.md) - vendored from
  [anthropics/skills](https://github.com/anthropics/skills) (Apache 2.0, see
  its `LICENSE.txt`). Helps create new skills and iteratively improve existing
  ones, including running evals and benchmarking triggering accuracy.

## Layout

Skills are organized as `skills/<category>/<name>/SKILL.md`, which the
[skills CLI](https://github.com/vercel-labs/skills) discovers as a catalog layout.
