# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Yuan Luna (yuanluna.com) — a dark, AI/matrix-inspired single-page portfolio with feminine elegance. Built with Jekyll 4.4.1, hosted on GitHub Pages.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local dev server (auto-reloads on changes, EXCEPT _config.yml)
bundle exec jekyll serve

# Build the site (outputs to _site/)
bundle exec jekyll build
```

Note: Changes to `_config.yml` require restarting the server.

## Architecture

**Design system:** "Elegant Matrix" — dark deep backgrounds (#0a0a0f), rose/lavender/gold accents, JetBrains Mono for terminal/UI elements, Inter for body text.

### Layout System
- **`_layouts/default.html`** — Base layout with head, terminal-style nav (`yuan.luna_` logo + monospace links), footer, font imports, JS includes (cursor.js, terminal.js)
- **`_layouts/home.html`** — Extends `default.html`. Adds particle canvas, and includes particles.js, scroll.js, quiz.js
- **`_layouts/post.html`** — Extends `default.html`. Blog post layout with terminal-styled metadata

### Pages
- **`index.markdown`** — Homepage with 6 sections: Entry (particle grid + terminal menu), Whoami (portrait + bio), Skills (3-card grid), Faith (scripture + reflection), Contact (availability badge + email), Quiz (hidden easter egg)
- **`blog.html`** — Blog index with terminal-styled post list
- **`404.html`** — Terminal-themed 404 page

### CSS & JS
- **`assets/css/main.css`** — Complete design system with CSS custom properties. No Sass. Organized by: variables, reset, typography, navigation, sections, components, responsive, reduced-motion, print
- **`assets/js/cursor.js`** — Custom rose glow cursor with trail (desktop only, respects prefers-reduced-motion)
- **`assets/js/particles.js`** — Animated particle grid on canvas (respects prefers-reduced-motion)
- **`assets/js/scroll.js`** — Intersection Observer scroll reveal + typing animation for entry tagline + smooth anchor scrolling
- **`assets/js/quiz.js`** — Coffee reward quiz logic (extracted from inline JS). Perfect score generates QR code
- **`assets/js/terminal.js`** — Interactive terminal overlay. Toggle via `_` button or backtick key. Commands: help, whoami, ls, cat skills.md, source .core, ping yuan, clear, exit, brew coffee (secret)

## Key Design Patterns

- **Color palette** via CSS custom properties: `--bg-deep`, `--bg-surface`, `--accent-rose`, `--accent-lavender`, `--accent-gold`, `--text-primary`, `--text-muted`, `--glow-rose`
- **Terminal aesthetic**: section headers use `> command` format with rose accent, nav links show `~/` prefix on hover
- **Scroll reveal**: elements with class `reveal` animate in via Intersection Observer (add `visible` class)
- **Responsive breakpoints**: 768px (mobile), 1024px (tablet). Mobile nav uses smaller font, portrait becomes circular
- **Reduced motion**: all animations disabled when `prefers-reduced-motion: reduce` is set
- **Quiz easter egg**: discoverable via terminal `brew coffee` command or by scrolling to bottom

## Static Assets

- `assets/images/portrait.JPG` — Portrait photo (case-sensitive filename)
- `assets/favicon/favicon.svg` — Dark-themed favicon with rose accent
- `assets/css/main.css` — All styles
- `assets/js/` — All JavaScript modules
