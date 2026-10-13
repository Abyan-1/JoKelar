---
name: Academic Neo-Vibrant
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#434655'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#747686'
  outline-variant: '#c4c5d7'
  surface-tint: '#2151da'
  primary: '#0037b0'
  on-primary: '#ffffff'
  primary-container: '#1d4ed8'
  on-primary-container: '#cad3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#753000'
  on-tertiary: '#ffffff'
  tertiary-container: '#9a4200'
  on-tertiary-container: '#ffcab0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b5'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system is engineered for an agile, high-trust academic support platform targeted directly at digital-native university and secondary students. The brand personality balances uncompromising academic competence with high-energy Gen-Z urgency: sharp, witty, reliable, and modern. 

The aesthetic marries **Neo-Brutalism** with **Modern Tech Polish**. Rather than leaning into overly raw, chaotic web-brutalism, it uses calibrated structural discipline: stark contrasting cards, crisp solid outlines (1.5px to 2px), solid offset micro-shadows, and bright, purposeful color blocks set against high-clarity white negative space. The visual tone dispels academic anxiety and replaces it with momentum, clarity, and decisive action.

## Colors

The palette establishes an immediate dichotomy between academic authority and fast-moving collegiate vitality:

- **Primary (`#1D4ED8`)**: Academic Royal Blue. Used for core brand identity, primary navigation states, verified credential indicators, and high-priority primary actions. Communicates stability, institutional rigor, and deep technical trust.
- **Secondary (`#FACC15`)**: Electric Canary Yellow. Used as the dynamic highlight, energetic badges, attention grabs, deadline alerts, and interactive conversion hooks. Never used for long-form text; strictly reserved for accentuation and high-impact UI elements.
- **Tertiary (`#F97316`)**: Ember Alert. Deployed selectively for critical countdown timers, urgent deadline badges, and flash-turnaround indicators.
- **Neutral (`#111827`)**: Deep Charcoal/Black. Governs all foundational typography, borders, and hard-edge drop shadows. It guarantees maximum contrast against the pure `#FFFFFF` canvas and prevents the washed-out gray appearance typical of generic SaaS palettes.
- **Surface Foundations**:
  - Canvas: `#FFFFFF`
  - Muted Surface / Field Fill: `#F8FAFC`
  - Border Tone: `#111827` (structural), `#E2E8F0` (subtle inner dividers)

## Typography

The typographic hierarchy combines the friendly geometric energy of **Plus Jakarta Sans** with the technical precision of **JetBrains Mono**. 

- **Plus Jakarta Sans** delivers high legibility across all structural copy, while its extra-bold headline weights convey authority and digital-native personality. Headings must always utilize tight tracking (`-0.02em` to `-0.03em`) to maintain editorial punch.
- **JetBrains Mono** is utilized strictly for technical metadata, pricing tiers, deadline counters, order status chips, and task progress metrics. This infuses the product with a deliberate, system-level execution style that signals efficiency and precision.

## Layout & Spacing

The design system adopts a 12-column responsive fluid grid with maximum container widths capped at `1280px` to maintain optimal scanning efficiency.

- **Desktop (1024px+)**: 12 columns, `1.5rem` (24px) gutters, and `3rem` (48px) canvas margins. Complex workflows (order matching, task assignment) split cleanly into 8-column primary work areas and 4-column contextual inspectors.
- **Tablet (768px – 1023px)**: 8 columns, `1.25rem` (20px) gutters, with dynamic multi-column layouts stacking systematically into 4-column sub-units.
- **Mobile (< 768px)**: 4 columns, `1rem` (16px) gutters, and `1.25rem` (20px) outer edge margins. Interactive components span 4 full columns to maximize tap accuracy.

Spacing tokens are applied strictly as relational distance: `space-xs` and `space-sm` bind micro-labels to interactive anchors, while `space-lg` and `space-xl` group logical card components into distinct visual steps.

## Elevation & Depth

Rather than relying on diffused, ethereal blur-based shadows, depth is manifested through **tactile neo-brutalist micro-offsets** and high-contrast bounding contours:

- **Surface Tier 0 (Canvas)**: Solid `#FFFFFF` background.
- **Surface Tier 1 (Cards & Modules)**: Solid `#FFFFFF` surface enclosed by a sharp `1.5px` border in `#111827`. Depth is produced using an unblurred, hard-offset box shadow: `3px 3px 0px #111827`.
- **Surface Tier 2 (Interactive Elements & Overlays)**: Buttons, active modals, and hovered cards shift to a `5px 5px 0px #111827` offset.
- **Active State (Physical Depress)**: On click/tap, interactive items translate `2px` along both X and Y axes, while the hard shadow reduces to `1px 1px 0px #111827`, simulating a physical mechanical switch.
- **Subtle Containers**: Internal groupings within cards avoid nested dark shadows; they rely on `1px solid #E2E8F0` borders and `#F8FAFC` flat surface tints.

## Shapes

The design system utilizes a calibrated roundedness level of `2` (`0.5rem` / `8px` baseline). 

This geometry strikes a balanced balance between strict rectilinear brutalism and contemporary mobile app ergonomics. Cards, modular containers, and input fields use `rounded` (8px). Badges, status pills, and compact action triggers use `rounded-xl` (24px) or full circular pills to create contrast against structural square grids. Inner components maintain proportional corner radii to prevent nested-corner clashes.

## Components

### Buttons
- **Primary**: Background `#1D4ED8`, text `#FFFFFF`, 1.5px solid `#111827` border, hard shadow `3px 3px 0px #111827`. Hover state transitions background to `#1E40AF` with shadow expanded to `4px 4px 0px #111827`. Active state translates `+2px, +2px` with shadow reduced to `1px 1px 0px #111827`.
- **Secondary / Action Accent**: Background `#FACC15`, text `#111827`, font weight 700, 1.5px solid `#111827` border, hard shadow `3px 3px 0px #111827`. Used for high-urgency CTAs ("Submit Order", "Hire Expert").
- **Ghost / Neutral**: Background transparent, 1.5px solid `#111827`, text `#111827`. Hover fills with `#F8FAFC`.

### Badges & Status Chips
- Built with `rounded-xl` geometry, `label-badge` typography, and a 1px solid `#111827` stroke.
- **Urgent / Express**: `#FACC15` background with `#111827` text.
- **Verified / In Progress**: `#1D4ED8` background with `#FFFFFF` text.
- **Completed**: `#DCFCE7` background with `#166534` text and `1px solid #166534`.

### Cards
- Surface `#FFFFFF`, 1.5px solid `#111827` border, `8px` corner radius, `3px 3px 0px #111827` hard shadow.
- Header bars within cards can feature an optional split background: upper title section colored `#F8FAFC` with a `1.5px` bottom border separating it from the card body.

### Input Fields & Selectors
- Background `#FFFFFF`, 1.5px solid `#111827`, `8px` corner radius. Font weight 500 in `#111827`. Placeholder colored in `#94A3B8`.
- Focus state: Outline remains `#111827`, augmented by a `2px 2px 0px #1D4ED8` hard offset ring. Error states swap the offset to `#EF4444`.

### Checkboxes & Radio Buttons
- 1.5px solid `#111827` border on `#FFFFFF` base.
- Selected state fills with `#1D4ED8` and displays a crisp white checkmark or inner dot. Radios are circular; checkboxes use `4px` corner radii.

### Domain-Specific Components
- **Bounty / Task Card**: Displays subject tag, page count, academic level, and guaranteed deadline in `JetBrains Mono`. Features a prominent price token styled with a `#FACC15` background badge.
- **Deadline Countdown Widget**: Monospaced segmented timer blocks with `#111827` background and `#FACC15` text, indicating exact remaining turnaround time.