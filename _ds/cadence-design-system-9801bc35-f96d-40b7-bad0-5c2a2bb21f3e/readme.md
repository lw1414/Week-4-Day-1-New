# Cadence — AI Health Companion · Design System v1.0

Cadence turns the body's quiet, continuous signals — sleep, heart rhythm,
breathing, recovery — into early, plain-language insight. One idea carries
everywhere: **while you sleep, your body is talking, and Cadence listens.**

> **The night-to-dawn principle.** Surfaces move from deep indigo **night**
> (the companion keeping watch) toward warm **dawn** paper (the morning insight
> it hands back). Dark = vigilance and calm; light = clarity and care.

> **Signature element.** A living biosignal line — a single breathing waveform —
> runs through the product as a visible pulse. It is the brand's heartbeat; use
> it sparingly so it stays meaningful.

---

## Sources

This system was built from the brand kit supplied in `uploads/`:

- `uploads/Cadence-Design-System.md` — authoritative spec (tokens, components, UI kit).
- `uploads/cadence-tokens.json` — machine-readable tokens.
- `uploads/cadence-app-icon.svg`, `uploads/cadence-logo-lockup.svg` — brand marks.

No external Figma or codebase was provided; the spec file is the source of truth.
Token names and values here mirror it exactly.

---

## Index / manifest

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import` manifest only. Consumers link this. |
| `tokens/colors.css` | Palette + semantic aliases + `.cadence-night` scope. |
| `tokens/typography.css` | Font families + display/body/data scales. |
| `tokens/spacing.css` | Spacing scale, radii, elevation shadows. |
| `tokens/fonts.css` | Webfont loading (Google Fonts — see Caveat). |
| `tokens/base.css` | Reset + `.cad-*` type utility classes. |
| `assets/` | Logo lockups (full / reversed), app icon, mark, waveform. |
| `guidelines/cards/` | Foundation specimen cards (Design System tab). |
| `components/core/` | `Button`, `Card`, `Avatar`. |
| `components/forms/` | `Input`. |
| `components/feedback/` | `Banner`, `StatusPill`, `LiveIndicator`. |
| `components/data/` | `Tag`, `MetricStat`, `Waveform`. |
| `components/navigation/` | `TopBar`. |
| `ui_kits/cadence-app/` | Interactive recreation of the Cadence mobile app. |
| `SKILL.md` | Agent-skill manifest for Claude Code reuse. |

**Components are consumed via the compiled bundle:** `window.CadenceDesignSystem_9801bc`.

---

## Content fundamentals

How Cadence writes.

- **Voice:** honest, calm, non-diagnostic. Cadence *spots patterns and early
  signals; it does not diagnose.* Copy helps people walk into a doctor's visit
  knowing more.
- **Person:** speaks to **"you"** / **"your body"**, refers to the product as
  **"Cadence"** in the third person. Warm but never chummy.
- **Casing:** **sentence case** everywhere — headlines, buttons, labels. The
  only uppercase is the Mono **eyebrow/label** style (instrument-readout feel).
- **Tone of metrics:** always **relative to the person's own baseline**
  ("-3 vs baseline", "more deep sleep than your two-week average"), never an
  absolute verdict or a probability of disease.
- **Every nudge offers a next step the person controls.** "A good day to push a
  little." "Ease off and rest." "Bring this to your clinician."
- **No alarmism.** Anomalies are coral, framed as "a small shift to watch," not
  red sirens. Plain verbs, short sentences.
- **No emoji.** Status and meaning come from the icon line-set and the calm
  color pairs, never emoji.

Example copy:
> "You slept steadily and your heart settled early. A good day to push a little."
> "Resting heart rate ran 4 bpm above your baseline last night."
> "Cadence spots patterns — it doesn't diagnose. Share this trend at your next visit."

---

## Visual foundations

**Color & vibe.** Two accents do the brand work: **Dawn** (warmth, primary
actions) and **Signal** (life, vitals, trust); **Lilac** is a quiet third for
night surfaces. Neutrals run a single **night-to-dawn ramp** — deep indigo
`Night/900` through warm `Paper/50`. Text on light is `Night/900`→`Ink/500`;
night surfaces are `Night/900`→`Night/700`. Status colors are **soft pairs**
(deep text on a tint) — calm over sirens. Imagery, when used, is warm and
low-contrast; the waveform is the only "graphic."

**Type.** Three families. **Fraunces** (optical serif, opsz 144, weight 600) for
display — *moments, not paragraphs*, tight negative tracking. **Hanken Grotesk**
for all running text and UI. **IBM Plex Mono** for every number, metric and
eyebrow label — the "instrument readout." Mono uppercase + 1.5 tracking is the
*only* uppercase in the system.

**Spacing & layout.** 4px base unit; use only the named steps. Section rhythm
80–96px desktop / 48–64px mobile. Generous padding inside cards (24px).

**Corners.** Soft and consistent: chips 6px, inputs 10px, buttons/banners 12px,
cards 16px, sheets/hero 24px, pills 999px. Nothing sharp.

**Cards.** The workhorse surface. Light: `White` on `Paper`, 1px `Ink/200`
hairline, radius 16px, and a **soft two-layer shadow**
(`0 2px 8px / 0 12px 32px` at ~5–6% night-indigo) — diffuse, never hard. Night:
`Night/800` with a `Night/700` hairline and **no shadow** (depth comes from the
surface step, not elevation).

**Borders & dividers.** Hairlines only — 1px `Ink/200`/`Ink/300` on light,
`Night/700` on night. Left **4px accent bar** is reserved for Banners.

**Shadows.** Light surfaces only, soft and layered (see tokens
`--shadow-card`, `--shadow-card-hover`, `--shadow-sheet`). Night surfaces never
cast shadow.

**Animation.** Calm and brief. Easing `cubic-bezier(.4,0,.2,1)`. The waveform
*draws on* over ~2.4s; the readiness ring sweeps its arc on load; the live dot
has a slow 2s pulse. No bounces, no infinite decorative motion on content.

**Hover / press.** Hover darkens primary to `Dawn/600`, tints ghost to
`Dawn/100`, lifts interactive cards 2px with a deeper shadow. Press scales to
~97% (a gentle "give"). **Focus** is a 2px `Signal/500` ring with 2px offset.

**Transparency & blur.** Used sparingly — a faint tint behind the live dot, the
night hero gradient. No heavy glassmorphism.

**Backgrounds.** Flat color, not busy. The Today/night hero uses a single soft
radial from `Night/800` into `Night/900`. No repeating patterns or textures.

---

## Iconography

A single **line family** so vitals, navigation and status feel drawn by one
hand. Grid 24×24, **1.5px stroke, round caps/joins**, 2px corner radius on bends.

- **Implementation:** the brand spec defines the set but ships no icon files, so
  this system uses **[Lucide](https://lucide.dev)** (loaded from CDN) — its 24px
  grid, 1.5px round-cap geometry matches the spec almost exactly.
  **⚠️ Substitution — see Caveats.** Replace with the official Cadence icon set
  when available.
- **Core mappings:** Sleep → `moon`, Heart → `heart`, Breath → `wind`,
  Readiness → `sunrise`, Trend → `trending-up`, Bell → `bell`, Shield →
  `shield`, Share → `share-2`, Calendar → `calendar`, Clock → `clock`.
- **Sizing:** render at 16 / 20 / 24 / 32. Don't scale a 24px icon past 32 —
  step to the next built size.
- **Two-tone option:** ink stroke (`Night/700`) with a 15%-opacity accent fill
  for active/selected states.
- **No emoji, no unicode glyphs as icons.** The waveform and app mark are the
  only bespoke vector art.

---

## Brand assets (`assets/`)

| File | Use |
|---|---|
| `cadence-logo-lockup.svg` | Horizontal full-color logo (mark Signal→Dawn, wordmark Night/900) for light backgrounds. |
| `cadence-logo-reversed.svg` | Reversed wordmark (`Paper`) for night backgrounds. |
| `cadence-mark.svg` | Mark-only — app surfaces, favicons (never below 20px). |
| `cadence-app-icon.svg` | 1024px squircle app icon — one dawn-lit pulse on a night field. |
| `cadence-waveform.svg` | The signature biosignal line, for hero moments. |

Clear space = cap-height of the "C". Minimum lockup width 96px. Don't recolor the
wordmark to an accent, stretch, outline, or place the full-color mark on busy
imagery.

---

## Caveats

- **Fonts are loaded from Google Fonts**, not self-hosted binaries (none were
  supplied). All three families are official Google Fonts, so rendering is
  faithful, but production may want licensed/self-hosted files — swap the
  `@import` in `tokens/fonts.css` for local `@font-face` rules then.
- **Icons are Lucide (CDN)** standing in for the bespoke Cadence line set —
  geometry matches but individual glyphs may differ.
