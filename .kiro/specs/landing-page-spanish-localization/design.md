# Technical Design: Landing Page Spanish Localization
## Overview
Localize the static Next.js landing page in place. Human-readable literals remain colocated with components; no locale switcher, message loader, locale routing, translation runtime, or i18n infrastructure is introduced. Copy uses warm, broadly understandable Latin American Spanish, preserves `Protected_Terms` and permitted technical tokens, and leaves structure, animations, anchors, destinations, and outcomes unchanged.
## Architecture
| Decision | Choice and rationale |
|---|---|
| Localization | Replace static literals in place; a runtime catalog would introduce unsupported multilingual scope. |
| Language | Set `lang="es-419"`, a valid Latin American Spanish BCP 47 tag. |
| Validation | Replace locale-dependent browser messages with authored Spanish errors while preserving invalid/valid outcomes. |
| Regression contract | Store approved copy and baseline behavior only in test fixtures; production remains infrastructure-free. |
## Components and Interfaces
| Files | Concrete work |
|---|---|
| `src/app/layout.tsx` | Translate title, description, keywords, author label, and Open Graph text; enforce limits; set `lang="es-419"`. |
| `Preloader.tsx`, `Hero.tsx` | Translate loading tagline, navigation, subheadline, demo CTA, and review existing Spanish CTAs/hint; preserve `BabyHealth` and hrefs. |
| `EmotionalStory.tsx`, `ProductReveal.tsx` | Translate the timed narrative, time label, section copy, tab titles/descriptions, `Online`, and image `alt`; preserve step order, transforms, tab keys, images, and outcomes. |
| `Workflow.tsx`, `WhyBabyHealth.tsx` | Translate badges, headings, five steps, mission/safety copy, lists, quotation, and disclaimer; preserve numbering and protected names. |
| `Metrics.tsx`, `AWSArchitecture.tsx` | Translate metric copy, architecture descriptions/badges, and telemetry labels/status; retain counters, suffixes, platform names, latency, and uptime values. |
| `SecurityAndVision.tsx`, `FinalCTA.tsx` | Translate privacy/vision copy; review CTA Spanish; localize form states, accessibility text, footer, copyright, and legal labels; preserve email echo and links. |
| `page.tsx`, `SmoothScroll.tsx` | No text changes; verify composition and scrolling remain unchanged. |
## Data Models
No runtime localization model is added. Test fixtures classify surfaces as `visible`, `accessible`, `metadata`, `technical`, `form-state`, or `legal`, with expected Spanish text and protected/permitted tokens.
## Error Handling
`FinalCTA` retains `email` and `isSubmitted` and adds only a validation error value. Empty or malformed submissions render approved Spanish feedback connected through `aria-invalid` and `aria-describedby`; error and success changes use an appropriate live region. Valid submission still displays the exact entered email. No absent in-progress, failure, or empty state is invented.
## Data Flow
`layout metadata/lang → page composition → component literals → DOM/accessibility tree`; form input flows through local validation to Spanish feedback or the unchanged success outcome.
## Correctness Properties
### Property 1: Localized rendered corpus
For all human-readable strings in any existing page state, the value matches its approved Spanish mapping, contains no prohibited second-person plural usage, and retains non-Spanish text only where permitted.
**Validates: Requirements 1.1, 1.2, 1.3, 2.1, 2.2, 2.3**
### Property 2: Canonical token preservation
For all `Protected_Term` and permitted-token occurrences in the baseline, localization preserves the required spelling, capitalization, punctuation, and value exactly.
**Validates: Requirements 1.4, 2.4**
### Property 3: Form-state localization and input retention
For any submitted email, every existing control, validation response, and completion message exposes approved Spanish text, while every accepted email is reproduced unchanged.
**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**
### Property 4: Accessible meaning equivalence
For all visual content and existing controls with accessible text, localized names, descriptions, and states communicate equivalent Spanish meaning and preserve protected terms.
**Validates: Requirements 4.1, 4.2**
### Property 5: Spanish document shell
For all metadata fields, values are non-empty approved Spanish within field-specific Unicode limits, and the document language is a valid BCP 47 tag with primary subtag `es`.
**Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5**
### Property 6: Behavioral and structural equivalence
For all baseline sections and controls, localization preserves order, heading levels, associations, triggers, enabled states, destinations, scrolling, visibility, and outcomes except approved text changes.
**Validates: Requirements 6.1, 6.2, 6.3**
## Testing Strategy
Use browser tests for the preloader, default render, product tabs, invalid and valid email paths, accessibility names/live regions, footer/legal text, anchors, section order, and heading levels. Exact-string fixtures verify finite approved mappings; baseline fixtures verify behavior. Property-test pure token-retention, email-echo, and Unicode-length validators with at least 100 runs, tagged `Feature: landing-page-spanish-localization, Property N: ...`. Run ESLint and the production build, then manually review responsive copy expansion and screen-reader output. Fail regressions for inventoried English, altered protected terms, metadata overflow, non-`es` language, changed hrefs/tab outcomes, or reordered structure.
## File Changes and Rollout
Modify `layout.tsx` and the ten text-bearing components above; keep `page.tsx` and `SmoothScroll.tsx` unchanged. Add only test/config files needed by existing-compatible browser/property tooling, pinning any new dev dependency during implementation. No migration, flag, locale routing, or phased rollout is required.