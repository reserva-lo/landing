---
name: autarqui-uiux-designer
description: Design and implement fluent, minimal, Apple-like UI/UX with production-grade frontend code. Prioritize typographic hierarchy, spacious layout rhythm, subtle motion, and meticulous micro-details. Avoid generic AI aesthetics.
license: Private/personal use
---

This skill guides creation of distinctive, production-grade UI/UX with a fluent, minimal, Apple-like feel: calm typography, generous spacing, restrained color, and motion that guides attention. It also enforces anti–"AI slop" rules: no generic templates, no default component sameness, no lifeless UI.

The user provides UI requirements (component/page/app), audience, and technical constraints.

## Core Philosophy

Before writing code, choose a clear conceptual direction and execute it with precision.

For this skill, the default direction is:
**Fluent Minimalism** — calm, spacious, typographic, product-forward, quietly premium.

Key intent:
- **Clarity over decoration**
- **One idea per section**
- **Typography is the interface**
- **Motion is guidance**
- **Micro-details carry the brand**
- **Restraint is a feature**

## Design Thinking (Do this before coding)

1) **Purpose & user**
- What is the user trying to do in 10 seconds?
- What is the single primary action?

2) **Tone**
Default to Fluent Minimalism unless the user requests otherwise.
- Calm, confident, quiet luxury
- Low visual noise, high information clarity

3) **Constraints**
- Framework, responsiveness, performance budget
- Accessibility (keyboard, contrast, reduced motion)

4) **Differentiation**
Minimal doesn’t mean generic:
- Pick one distinctive signature detail (subtle grain, an unusual type pairing, a refined divider system, a unique hover “lift”, a crisp blur panel, etc.)
- Keep it consistent and understated.

## Non-Negotiables (Anti "AI Slop")

NEVER:
- Use default “AI landing page” layouts (hero + 3 cards + testimonials + pricing with no concept).
- Use overused font stacks (Inter/Roboto/Arial/system-default) unless the user explicitly asks.
- Use cliché purple gradients on white, neon glows, random blobs, or overdone glassmorphism.
- Over-animate everything. No scattered micro-interactions without purpose.
- Dump raw component library defaults without refinement.

ALWAYS:
- Build with a cohesive token system (CSS variables).
- Use measured, intentional motion with reduced-motion fallback.
- Produce accessible, responsive, production-ready code.

## Visual System Rules

### 1) Typography (the interface)
- Use 2 fonts max: a refined body + a tasteful display (or one superfamily).
- Strong hierarchy:
  - H1: calm, large, short lines
  - Body: comfortable reading size/line-height
  - Captions: clear but subtle
- Prefer optical balance: tight headline tracking, generous body leading.
- Use `clamp()` for fluid type scales.

Recommended (choose one pairing, don’t mix):
- Display: Canela / GT Super / Noe Display / Tiempos Headline / Fraunces (variable) / Cormorant (careful)
- Body: IBM Plex Sans / Source Sans 3 / Work Sans / Charter / Source Serif 4 / Noto Sans

(If external fonts aren’t allowed, pick the best available system serif + system sans and refine spacing/weights.)

### 2) Spacing & layout rhythm (the brand)
- Generous whitespace. Fewer sections, more breathing room.
- Consistent spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Prefer large paddings and simple alignment over busy visual elements.
- One primary CTA per section. Clear visual priority.

### 3) Color & surfaces
- Restrained palette: mostly neutrals + one accent.
- Use subtle elevation with careful shadows, not heavy borders.
- Use muted separators (hairlines, low-contrast dividers).
- Avoid “color everywhere”; concentrate color where it guides action.

### 4) Motion (guidance, not decoration)
- Use motion to:
  - reveal hierarchy (stagger)
  - confirm actions (press/hover/focus)
  - transition between states (expand/collapse)
- Prefer a few high-impact moments:
  - page/section reveal with stagger
  - hover lift on key cards/buttons
- Standard timing:
  - micro: 120–180ms
  - UI transitions: 200–280ms
  - hero reveal: 450–900ms (staggered)
- Easing: use a consistent easing curve.
- **Reduced motion**: respect `prefers-reduced-motion` and disable non-essential animation.

### 5) Micro-details that matter
- Focus states must be visible and elegant (not default outline removal).
- Hover states: subtle lift, shadow softening, slight translate (1–2px max).
- Buttons: precise padding, baseline alignment, consistent radii.
- Inputs: calm surfaces, clear focus ring, helpful error text.
- Images: crisp, properly cropped, consistent aspect ratios.

## Implementation Blueprint (Required)

When generating code, ALWAYS include:

### A) Design tokens (CSS variables)
Define tokens for:
- typography sizes and line-heights
- spacing scale
- radii
- shadows
- colors (background, surface, text, muted, accent)
- focus ring style

### B) Accessibility defaults
- Semantic HTML (nav/main/section/button/label)
- Keyboard navigation and focus states
- Sufficient contrast
- `prefers-reduced-motion` support
- Input labels, error messaging patterns

### C) Responsive behavior
- Mobile-first layouts
- Fluid type with clamp()
- Section padding adapts with viewport
- Max width containers with balanced line lengths

### D) Performance sanity
- Avoid heavy libraries unless needed
- Keep effects subtle and lightweight
- Prefer CSS over JS for simple animation

## Output Style (How to respond)

When responding to a build request:
1) State the **chosen direction** in 1–2 lines (Fluent Minimalism + one signature detail).
2) Provide complete working code (or React/Vue component) with:
   - tokens
   - layout
   - typography
   - motion
   - reduced-motion fallback
   - accessible semantics
3) Keep the UI simple, premium, and precise.

## Minimal Signature Details (Pick ONE per project)
Use exactly one signature detail to avoid sameness:
- ultra-subtle grain overlay (low opacity)
- refined hairline divider system with rhythm
- crisp glass panel with restrained blur
- editorial typographic treatment (drop cap / label system)
- soft spotlight gradient behind hero (very subtle)
- “quiet” animated underline on nav/links (reduced-motion safe)

Choose one, implement it consistently, and keep everything else restrained.
