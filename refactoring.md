# Project Specification: Premium Split-Screen Portfolio

## Role
Act as a Senior Frontend Engineer and UI/UX Designer specializing in typographic layouts.

## Tech Stack (Optimized for Design)
- **Core:** React (Vite)
- **Styling:** Tailwind CSS
- **Utils:** `clsx` and `tailwind-merge` (for conditional class logic)
- **Animation:** Framer Motion (layout transitions and hover states)
- **Icons:** Lucide React (Superior stroke consistency over React Icons)
- **Typography:** `@fontsource/inter` (Body) and `@fontsource/playfair-display` (Headings - for the "Editorial" feel)

## Core Concept: "The Silent Observer"
A dual-pane layout. The user's identity is anchored on the left; their work flows on the right. The design relies on typography, spacing, and subtle micro-interactions rather than heavy graphics.

## Visual Language
- **Background:** `bg-slate-900` with a subtle fixed `radial-gradient` spotlight tracking the mouse (optional) or static top-right glow.
- **Typography:**
  - Headings (Name/Titles): `font-serif` (Playfair Display). Elegant, authoritative.
  - Body/Tags: `font-sans` (Inter). Clean, readable, technical.
- **Colors:**
  - Base: Slate-900 (Dark)
  - Text Primary: Slate-200
  - Text Secondary: Slate-400
  - Accent: Teal-300 (Used sparingly for hover states).

## Component Architecture

### 1. Layout Strategy
- **Mobile First:** Stacked layout.
- **Desktop (lg+):** Split screen.
  - Left Pane: `w-1/2` or `w-2/5`. Sticky. Height: `100vh`.
  - Right Pane: `w-1/2` or `w-3/5`. Scrollable.

### 2. The Anchor (Left Pane)
- **Content:**
  - **Name:** Massive Serif font (`text-5xl` to `text-7xl`).
  - **Role:** Sans-serif, tracking-wide.
  - **Blurb:** A short, punchy "hook" sentence.
  - **Nav:** Vertical list.
    - **Active State:** As the right side scrolls, the current section link (About, Projects, Exp) must visually light up and move (e.g., a horizontal line extends).
  - **Socials:** Lucide icons at the bottom.

### 3. The Stream (Right Pane)
- **Spacing:** Massive vertical padding (`py-24`). The design breathes.
- **Cards (Experience/Projects):**
  - **No Visible Borders:** Use hover states to define boundaries.
  - **Group Hover:** When hovering a card, use the `group-hover` pattern to turn the text Teal-300 and slightly translate the arrow icon top-right.
  - **Tech Stack:** Displayed as simple text with bullet separators (`React • Tailwind • Framer`) rather than pill badges, keeping the "Editorial" text-heavy look.

## Interaction Details
1. **Mouse Tracking:** If possible, implement a subtle "flashlight" effect in the CSS that reveals the background gradient based on cursor position.
2. **Scroll Spy:** Implement a custom hook to detect which section in the Right Pane is currently in view to update the Left Pane navigation active state.

## Deliverable
Generate the following:
1. `App.jsx` (Layout structure)
2. `Sidebar.jsx` (Left pane with active state logic)
3. `ProjectCard.jsx` (Reusable component with group-hover effects)