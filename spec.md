# Simran Suri Nutrition

## Current State

A 6-page nutrition consultancy website (Home, About, Services, Testimonials, Resources/Blog, Contact) with a clean healthcare aesthetic. The design uses:
- OKLCH color tokens: sage green primary (`0.48 0.085 145`), warm beige backgrounds, cream sections, olive accents
- Playfair Display (serif headings) + Plus Jakarta Sans (body)
- Section backgrounds are either flat cream, flat background, or solid inline OKLCH values
- Cards have subtle sage/40 borders on hover only; no green borders at rest
- Primary buttons: `bg-primary` (sage green solid)
- Secondary buttons: `border-sage text-sage` outline style
- Section dividers are minimal (a single `h-px` or border)
- The footer uses `bg-foreground` (near-black) with white text
- Icons inside cards use `text-sage` on a `bg-sage/10` container

The design is clean but reads as somewhat plain and monochromatic — greens are muted and not sufficiently differentiated across sections.

## Requested Changes (Diff)

### Add
- Richer green gradient backgrounds for alternating content sections — subtle, not solid blocks
- Visible green borders (`border-sage/25` or `border-sage/35`) on cards at rest (not just on hover)
- Thin green separator/divider lines between major sections (a gradient line or a sage tinted `h-px`)
- Green left-accent bars on section headings (a short `w-1 h-8 bg-sage rounded` marker before key headings)
- Hover states on primary buttons: transition from sage to a deeper forest green (`--primary-dark` token)
- A new CSS token `--primary-dark` for deeper forest green (`0.35 0.09 148`) used in button hover states
- A new CSS token `--forest-green` (`0.38 0.10 150`) for strong accent use
- Subtle green tint on page hero sections (`bg-gradient-to-br from-background to-sage-light/20`)
- Green icon containers: bump resting opacity from `/10` to `/15`, hover from `/20` to `/30`
- Green top-border accent on service and resource cards (already partially present; make consistent across all cards)
- Olive/warm brown secondary palette introduced more deliberately in the Approach section
- Section backgrounds revised:
  - "Areas I Support": `oklch(0.965 0.022 135)` → subtle sage-tinted gradient
  - "My Approach": warm cream with a soft olive gradient edge
  - "Testimonials": light sage wash (`oklch(0.97 0.018 130)`)
  - "Free Resources" CTA block: keep solid sage but enrich it slightly (`oklch(0.44 0.09 145)`)
  - Final CTA: keep dark but add a sage-green gradient overlay
  - About page philosophy: enhance the green left-border block
  - Blog cards: more visible sage background tint and green border at rest

### Modify
- CSS tokens in `index.css`:
  - Add `--primary-dark: 0.35 0.09 148` and `--forest: 0.38 0.10 150`
  - Slightly increase chroma on `--sage`: `0.48 0.085 145` → `0.50 0.095 145` for more presence
  - Add `--sage-muted: 0.92 0.030 135` for section background washes
  - Update `--border: 0.88 0.015 90` → `0.90 0.018 120` (shift border towards green-neutral)
- `tailwind.config.js`: add `primary-dark` and `forest` color tokens; add `sage-muted` token
- Button component hover states: primary buttons should use `hover:bg-[oklch(var(--primary-dark))]` or a CSS class
- Section dividers: replace plain `h-px bg-border/60` with `h-px bg-gradient-to-r from-transparent via-sage/40 to-transparent`
- Card borders: add `border-sage/20` at rest to all `rounded-2xl` cards (support cards, resource cards, testimonial cards, service cards)
- Section heading accent bars: add small green vertical bar before `h2` headings in most sections using a `before:` or a sibling `div`

### Remove
- No features or content to remove

## Implementation Plan

1. Update `index.css` OKLCH tokens: add `--primary-dark`, `--forest`, `--sage-muted`; tweak `--sage` chroma; update `--border` hue
2. Update `tailwind.config.js`: register new `primary-dark`, `forest`, `sage-muted` color tokens; add utility classes in `index.css`
3. Update `index.css` utilities: add `.bg-sage-muted`, `.bg-forest`, `.text-forest`, `.border-forest`, `.bg-primary-dark` classes
4. `HomePage.tsx`: update section backgrounds, add section dividers, add heading accent bars, enrich card borders, improve hover states
5. `AboutPage.tsx`: enhance philosophy border block, add section gradient backgrounds, enrich card borders
6. `ServicesPage.tsx`: enrich card styles with green top-border and rest-state green border, section background updates
7. `TestimonialsPage.tsx`: update section background to sage wash, enrich card borders
8. `ResourcesPage.tsx`: update blog card backgrounds/borders, add section dividers, enrich download card borders
9. `BlogPostPage.tsx`: enrich highlight blocks, quote blocks with deeper sage accents, add gradient section header background
10. `ContactPage.tsx`: enrich contact info card borders and icon backgrounds
11. `Header.tsx`: refine active nav link color to use `forest` or `primary-dark`; add green bottom accent line on scroll
12. `Footer.tsx`: update footer to deep forest green background (`--forest` or richer sage-dark) instead of near-black foreground; social icon hover improvements
