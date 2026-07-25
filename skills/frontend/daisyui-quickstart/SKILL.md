---
name: daisyui-quickstart
description: Personal fast-start guide for building a self-contained HTML page styled with daisyUI + Tailwind CSS loaded via CDN - no npm install, no build step, no PostCSS config. Use whenever building a quick demo page, internal tool, form, or admin UI as a single static HTML file (e.g. served from a Cloudflare Worker's Assets binding, a GitHub Pages page, or any static host) and daisyUI's component classes are wanted without setting up a frontend build pipeline. Distilled from actually shipping a daisyUI CDN page in production - covers the exact working CDN tags, the correct label/fieldset markup pattern, the one-line theme-controller dark mode toggle, and the specific styling choice of leaving buttons unstyled (plain `btn`, no color modifier) rather than defaulting to `btn-primary`.
---

# daisyUI Quickstart (CDN, no build step)

A fast-start guide for one specific, narrow situation: you want a real,
componentized-looking UI in a single static HTML file, with zero npm
install and zero build step. This is the right tool when the whole
"frontend" is one page - a demo, an internal form, a small admin tool -
and setting up a bundler for it would be overkill.

This is scoped to exactly what was tested in production (a demo page
served from a Cloudflare Worker's static Assets binding), not the full
daisyUI feature set. For everything else - the full component catalog,
themes beyond light/dark, framework integrations (React, Vue, etc.) - go
to daisyUI's own docs or a general daisyUI skill; this one is intentionally
narrow.

## The exact working setup

Two tags in `<head>`, nothing else needed:

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

That's it. No `tailwind.config.js` (deprecated in Tailwind v4 anyway), no
`npm install`, no build command. Tailwind utility classes and daisyUI
component classes both work immediately in the HTML you write below these
tags. This is genuinely the whole setup - resist the urge to add more.

## The form-field pattern

The correct daisyUI markup wraps each field in a `<fieldset>`, with the
`<label>` **outside** the input as a sibling, not wrapping it:

```html
<fieldset class="fieldset">
  <label class="label" for="name">Name</label>
  <input type="text" id="name" class="input" placeholder="Name" />
</fieldset>
```

This is easy to get wrong by writing `<label class="fieldset-label">` and
putting everything inside it, or by nesting the input inside the label
tag - neither is the pattern daisyUI's own docs actually show, and it
produces subtly different (and less consistent) results across daisyUI's
component styles.

## Components actually used and verified working

| Need | Class | Notes |
|---|---|---|
| Text input | `input` | Add `w-full` for full-width in a form layout |
| Multi-line text | `textarea` | Same `w-full` pattern |
| Dropdown | `select` | Supports `<optgroup>` for grouped options |
| Slider | `range` | Requires `min`/`max` attributes on the `<input type="range">` itself - daisyUI's class alone doesn't set a range |
| Searchable/filterable text field | Plain `<input type="text" list="myOptions">` + `<datalist id="myOptions">` | Not a daisyUI-specific component - this is standard HTML, but pairs well with daisyUI's `input` styling. Use this over a giant `<select>` when there are many options and the user benefits from typing to filter (e.g. 300+ items) |
| Button | `btn` | See styling note below - don't reach for `btn-primary` by default |
| Status/error message | `alert alert-error` (or `-success`, `-warning`, `-info`) | The color modifier here is meaningful (signals severity), unlike decorative button coloring |
| Card/panel layout | `card` with a `card-body` inside | Good default container for a single-purpose form or panel |
| Light/dark theme toggle | `theme-controller` | See below - this is the one-line trick that makes this whole approach worth it for a quick page |

## The one-line dark/light toggle

daisyUI ties the page theme to any checked checkbox/radio carrying the
`theme-controller` class, with its `value` naming the target theme:

```html
<input type="checkbox" value="dark" class="theme-controller toggle" />
```

Unchecked = the page's default theme (light, if you haven't set one).
Checked = switches the whole page to `dark`. No JavaScript required for
the switch itself - this is genuinely the entire mechanism.

## Styling choice: don't default to colored buttons

daisyUI's `btn` class alone renders a neutral, unstyled-looking button.
It's tempting to reach for `btn-primary` (or `-secondary`, `-accent`, etc.)
by default to make it "look designed," but that's an opinionated choice
that should be deliberate, not automatic. Plain `btn` is a safer default
for internal tools and demo pages where you don't want to imply a design
system decision that hasn't actually been made. Reserve color modifiers
(`alert-error`, `alert-success`) for cases where the color itself is
carrying meaning (status, severity) rather than pure decoration.

## When this approach stops being the right one

This CDN-only setup is deliberately not meant to scale to a real
application. Reach for a proper build step (npm + `@tailwindcss/vite` or
similar + `@plugin "daisyui"` in your CSS) once:

- You have more than roughly one page/file of markup to maintain.
- You want tree-shaking / a smaller shipped CSS bundle instead of loading
  all of Tailwind and daisyUI from a CDN on every page load.
- You need custom theme colors beyond the built-in daisyUI theme names.
- You're integrating with a component framework (React/Vue/Svelte) rather
  than hand-writing HTML.

For a single demo page or internal tool, none of that matters, and the
CDN approach's simplicity wins outright.
