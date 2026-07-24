# Implementation Plan: Landing Page Spanish Localization

## Overview

Localize the static Next.js landing page in place under Strict TDD Mode. Complete every RED/characterization task before its GREEN task, preserve runtime architecture and behavior, and finish with automated property, browser, lint, and production-build verification.

## Review Workload Forecast

| Field | Value |
|---|---|
| Estimated changed lines | 500–800 |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | Test contracts → shell/core sections → remaining sections/form/final verification |
| Delivery strategy | ask-on-risk |
| Chain strategy | pending |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: pending
400-line budget risk: High

## Tasks

- [ ] 1. Establish the Strict TDD test foundation
  - [ ] 1.1 Configure pinned Vitest, Testing Library, jsdom, and fast-check dependencies plus non-watch unit/property scripts in `package.json`, lockfile, and `vitest.config.ts`.
    - _Requirements: 1.1–1.4, 2.1–2.4, 3.1–3.5, 4.1–4.2, 5.1–5.5, 6.1–6.3_
  - [ ] 1.2 Configure pinned Playwright browser tooling and non-watch scripts in `package.json`, lockfile, and `playwright.config.ts`.
    - _Requirements: 1.1, 2.1–2.3, 3.1–3.4, 4.1–4.2, 6.1–6.3_
  - [ ] 1.3 Create `tests/fixtures/approved-spanish.ts` with approved mappings, prohibited pronouns, English common words, and metadata limits.
    - _Requirements: 1.2–1.3, 2.1–2.3, 5.1–5.4_
  - [ ] 1.4 Create `tests/fixtures/behavior-baseline.ts` with protected/permitted tokens, section order, headings, controls, hrefs, tab outcomes, and form outcomes.
    - _Requirements: 1.4, 2.4, 3.5, 6.1–6.3_

- [ ] 2. Write tests first and establish RED/characterization state
  - [ ] 2.1 Write `tests/properties/property-1-localized-corpus.test.ts` for **Property 1: Localized rendered corpus**, including approved mappings, prohibited plurals, and zero unpermitted English common words.
    - **Validates: Requirements 1.1–1.3, 2.1–2.3**
  - [ ] 2.2 Write `tests/properties/property-2-token-preservation.test.ts` for **Property 2: Canonical token preservation** across generated protected/permitted-token occurrences.
    - **Validates: Requirements 1.4, 2.4**
  - [ ] 2.3 Write `tests/properties/property-3-form-state.test.ts` for **Property 3: Form-state localization and input retention** across generated valid and invalid emails.
    - **Validates: Requirements 3.1–3.5**
  - [ ] 2.4 Write `tests/properties/property-4-accessible-meaning.test.ts` for **Property 4: Accessible meaning equivalence** across inventoried visual and interactive surfaces.
    - **Validates: Requirements 4.1–4.2**
  - [ ] 2.5 Write `tests/properties/property-5-document-shell.test.ts` for **Property 5: Spanish document shell**, generating Unicode metadata values and validating limits plus `es` language tags.
    - **Validates: Requirements 5.1–5.5**
  - [ ] 2.6 Write `tests/properties/property-6-behavior.test.ts` for **Property 6: Behavioral and structural equivalence** across generated baseline section/control records.
    - **Validates: Requirements 6.1–6.3**
  - [ ] 2.7 Write failing `tests/e2e/document-shell.spec.ts` assertions for Spanish metadata, Unicode limits, Open Graph text, and `<html lang="es-419">`.
    - _Requirements: 5.1–5.5_
  - [ ] 2.8 Write failing `tests/e2e/preloader.spec.ts` assertions for localized loading copy and unchanged animation state.
    - _Requirements: 1.1–1.4, 2.2, 6.3_
  - [ ] 2.9 Write failing `tests/e2e/hero.spec.ts` assertions for visible/assistive navigation, hero copy, CTA text, anchors, and scrolling behavior.
    - _Requirements: 1.1–1.4, 2.1–2.2, 4.2, 6.1, 6.3_
  - [ ] 2.10 Write failing `tests/e2e/emotional-story.spec.ts` assertions for narrative/time copy and unchanged timed sequence, visibility, and headings.
    - _Requirements: 1.1–1.4, 2.2, 6.2–6.3_
  - [ ] 2.11 Write failing `tests/e2e/product-reveal.spec.ts` assertions for section/tab/image-alt copy and unchanged tab keys, images, transforms, and outcomes.
    - _Requirements: 1.1–1.4, 2.2, 4.1–4.2, 6.1–6.3_
  - [ ] 2.12 Write failing `tests/e2e/workflow.spec.ts` assertions for badges, headings, and five ordered Spanish steps while preserving numbering and associations.
    - _Requirements: 1.1–1.4, 2.2, 6.2_
  - [ ] 2.13 Write failing `tests/e2e/why-baby-health.spec.ts` assertions for mission, safety, lists, quotation, disclaimer, and protected names.
    - _Requirements: 1.1–1.4, 2.2, 6.2_
  - [ ] 2.14 Write failing `tests/e2e/metrics.spec.ts` assertions for Spanish metric copy while preserving counter values, suffixes, and animation outcomes.
    - _Requirements: 1.1–1.4, 2.2, 6.3_
  - [ ] 2.15 Write failing `tests/e2e/aws-architecture.spec.ts` assertions for translated architecture/telemetry text and unchanged AWS terms, latency, uptime, and diagram associations.
    - _Requirements: 1.1–1.4, 2.2, 4.1, 6.2–6.3_
  - [ ] 2.16 Write failing `tests/e2e/security-and-vision.spec.ts` assertions for Spanish privacy/vision copy and preserved Protected_Terms, headings, and associations.
    - _Requirements: 1.1–1.4, 2.2, 4.1, 6.2_
  - [ ] 2.17 Write failing `tests/e2e/final-cta.spec.ts` assertions for CTA, form controls, Spanish errors/success/live regions, exact email echo, footer/legal copy, and unchanged links.
    - _Requirements: 1.1–1.4, 2.2–2.4, 3.1–3.5, 4.1–4.2, 6.1–6.3_

- [ ] 3. Checkpoint — Confirm Strict TDD RED state
  - Run the new localization tests and confirm failures are caused by untranslated strings, while baseline behavior characterization remains green; ask the user if questions arise.

- [ ] 4. Implement minimal localization changes to reach GREEN
  - [ ] 4.1 Translate metadata and author/Open Graph fields and set `lang="es-419"` in `src/app/layout.tsx`, respecting Unicode limits.
    - _Requirements: 5.1–5.5_
  - [ ] 4.2 Translate loading text only in `src/components/Preloader.tsx`; preserve animation behavior and `BabyHealth`.
    - _Requirements: 1.1–1.4, 2.2, 6.3_
  - [ ] 4.3 Translate visible and accessible navigation/hero strings in `src/components/Hero.tsx`; preserve hrefs, triggers, enabled states, and scrolling.
    - _Requirements: 1.1–1.4, 2.1–2.2, 4.2, 6.1, 6.3_
  - [ ] 4.4 Translate narrative and time labels in `src/components/EmotionalStory.tsx`; preserve timing, order, transforms, visibility, and headings.
    - _Requirements: 1.1–1.4, 2.2, 6.2–6.3_
  - [ ] 4.5 Translate section, tab, status, and image-alt strings in `src/components/ProductReveal.tsx`; preserve keys, images, transforms, and outcomes.
    - _Requirements: 1.1–1.4, 2.2, 4.1–4.2, 6.1–6.3_
  - [ ] 4.6 Translate badges, headings, and five steps in `src/components/Workflow.tsx`; preserve numbering, order, headings, and associations.
    - _Requirements: 1.1–1.4, 2.2, 6.2_
  - [ ] 4.7 Translate mission, safety, list, quotation, and disclaimer copy in `src/components/WhyBabyHealth.tsx`; preserve names and structure.
    - _Requirements: 1.1–1.4, 2.2, 6.2_
  - [ ] 4.8 Translate metric labels/copy in `src/components/Metrics.tsx`; preserve counters, suffixes, values, and animation outcomes.
    - _Requirements: 1.1–1.4, 2.2, 6.3_
  - [ ] 4.9 Translate architecture descriptions, badges, telemetry labels, statuses, and accessible text in `src/components/AWSArchitecture.tsx`; preserve platform terms and values.
    - _Requirements: 1.1–1.4, 2.2, 4.1, 6.2–6.3_
  - [ ] 4.10 Translate privacy/vision and accessible strings in `src/components/SecurityAndVision.tsx`; preserve Protected_Terms, headings, and associations.
    - _Requirements: 1.1–1.4, 2.2, 4.1, 6.2_
  - [ ] 4.11 Translate CTA, form, status, accessibility, footer, copyright, and legal strings in `src/components/FinalCTA.tsx`; add authored Spanish validation and live-region wiring without changing valid submission, email echo, or links.
    - _Requirements: 1.1–1.4, 2.2–2.4, 3.1–3.5, 4.1–4.2, 6.1–6.3_

- [ ] 5. Checkpoint — Ensure targeted tests pass
  - Ensure all component, document-shell, form, accessibility, and property tests pass; ask the user if questions arise.

- [ ] 6. Refactor and complete automated verification
  - [ ] 6.1 Refactor test-only fixtures/helpers after GREEN to remove duplication while keeping production copy colocated and adding no runtime localization infrastructure.
    - _Requirements: 1.2, 6.1–6.3_
  - [ ] 6.2 Run all unit/property and Playwright suites non-interactively; verify at least 100 runs per property, exact Protected_Terms, zero unpermitted English, accessibility, form states, and preserved behavior.
    - _Requirements: 1.1–1.4, 2.1–2.4, 3.1–3.5, 4.1–4.2, 5.1–5.5, 6.1–6.3_
  - [ ] 6.3 Run `npm run lint` and fix only localization/test-introduced lint failures.
    - _Requirements: 1.1–6.3_
  - [ ] 6.4 Run `npm run build` and fix only localization/test-introduced production-build failures.
    - _Requirements: 1.1–6.3_

- [ ] 7. Final checkpoint — Ensure all tests pass
  - Ensure all tests, lint, and the production build pass; ask the user if questions arise.

## Notes

- Strict TDD Mode is mandatory: complete test infrastructure and all 2.x tests before any 4.x production edit; no test task is optional.
- Property tests must use at least 100 generated cases and identify `Feature: landing-page-spanish-localization, Property N`.
- `src/app/page.tsx` and `src/components/SmoothScroll.tsx` remain unchanged and are covered only by behavior regression checks.
- No locale switcher, runtime catalog, locale routing, or i18n dependency is introduced.

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2"] },
    { "id": 2, "tasks": ["1.3", "1.4"] },
    { "id": 3, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "2.9", "2.10", "2.11", "2.12", "2.13", "2.14", "2.15", "2.16", "2.17"] },
    { "id": 4, "tasks": ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6", "4.7", "4.8", "4.9", "4.10", "4.11"] },
    { "id": 5, "tasks": ["6.1"] },
    { "id": 6, "tasks": ["6.2", "6.3"] },
    { "id": 7, "tasks": ["6.4"] }
  ]
}
```