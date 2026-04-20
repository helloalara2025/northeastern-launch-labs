# Site Audit - Current State

## Design System (from Portfolio page / index.css)
- **Background**: #0d0d0d (primary), #0f1629 (secondary/cards)
- **Accent Colors**: #dc2626 (red), #f5c518 (yellow)
- **Fonts**: DM Sans (headings/body), DM Mono (labels/metadata)
- **Textures**: dot grids, red arc SVG strokes, sharp corners (0rem radius)
- **Typography Pattern**: uppercase section labels (mono, tracking-wider), massive bold headings, muted body text
- **Card Pattern**: bg-secondary, border rgba(255,255,255,0.05), hover border brightens
- **Badge Pattern**: pill with dot + mono text

## Current Pages (14 files)
1. Home.tsx - "Coming soon" hero only, matches design system
2. About.tsx - Has mission, values, CTA. Mostly matches but footer has light-mode remnants (text-black, text-charcoal)
3. Portfolio.tsx - Fully matches design system (database-backed)
4. LaunchTeams.tsx - Unknown state
5. InnovationTeams.tsx - Unknown state
6. Leadership.tsx - Unknown state
7. Events.tsx - Unknown state
8. Forms.tsx - Unknown state
9. ContactPage.tsx - Unknown state
10. ApplyLaunchTeam.tsx - Unknown state
11. ApplyInnovationTeam.tsx - Unknown state
12. ApplyLeadership.tsx - Unknown state
13. NotFound.tsx - Unknown state
14. ComponentShowcase.tsx - Template demo page

## Components
- Navigation.tsx - Simplified (logo + announcement banner only, no nav links)
- Footer.tsx - Light-mode styled (bg-white, gray borders) - NEEDS REDESIGN
- FloatingContact.tsx - Unknown state

## Issues Found
- Footer.tsx is light-mode (white bg, gray text) - doesn't match dark builder aesthetic
- About.tsx footer section has light-mode text colors (text-black, text-charcoal)
- Navigation has no links (was simplified for "coming soon" mode)
- Many pages likely have old/mismatched styling
