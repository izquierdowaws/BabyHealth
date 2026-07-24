# Requirements Document

## Introduction

This feature establishes a coherent, vibrant heading system for the BabyHealth landing page. The system replaces isolated linear black heading treatments with a shared visual grammar that communicates hierarchy, expresses the BabyHealth identity, remains legible in light and dark themes, adapts to supported viewport sizes, respects motion preferences, and preserves localized content and semantic structure.

## Glossary

- **Landing_Page**: The public BabyHealth page composed of the Hero and all content sections.
- **Heading_System**: The visual system responsible for styling every in-scope heading on the Landing_Page.
- **Heading**: Visible title text represented by an HTML heading element from `h1` through `h6`.
- **Hero_Heading**: The primary `h1` that introduces the Landing_Page.
- **Section_Heading**: An `h2` that introduces a major Landing_Page section.
- **Supporting_Heading**: An `h3` through `h6` that labels subordinate content such as cards, steps, or nodes.
- **Visual_Role**: One of the Hero, Section, or Supporting presentation levels assigned from the semantic heading level.
- **BabyHealth_Accent_Palette**: The existing BabyHealth family of trust teal, aurora teal, mint, warmth coral, and peach colors.
- **Vibrant_Accent**: A gradient, highlighted text segment, underline, glow, or decorative mark using the BabyHealth_Accent_Palette.
- **Accent_Grammar**: The shared rules that determine accent color family, direction, shape, placement, and intensity for each Visual_Role.
- **Light_Theme**: The Landing_Page color scheme with a predominantly light background.
- **Dark_Theme**: The Landing_Page color scheme with a predominantly dark background.
- **Contrast_Ratio**: The relative-luminance ratio between visible heading text and the background directly behind the text.
- **Large_Heading_Text**: Heading text that is at least 24 CSS pixels at normal weight or at least 18.66 CSS pixels at bold weight.
- **Supported_Viewport**: A browser viewport with a width from 320 through 1440 CSS pixels.
- **Locale**: The active English or Spanish language selection.
- **Translation_Resource**: The locale-specific source string returned for a Heading.
- **Animated_Heading_Effect**: Non-essential movement or visual transition applied to a Heading or Vibrant_Accent.
- **Reduced_Motion_Preference**: The operating-system or browser `prefers-reduced-motion: reduce` setting.
- **Accessible_Name**: The text exposed for a Heading through the accessibility tree.

## Requirements

### Requirement 1: Establish a Clear Heading Hierarchy

**User Story:** As a visitor, I want headings to communicate their relative importance, so that I can scan and understand the Landing_Page structure.

#### Acceptance Criteria

1. THE Heading_System SHALL assign each Heading to exactly one Visual_Role according to the Heading semantic level.
2. THE Heading_System SHALL render the Hero Visual_Role with a computed font size greater than the Section Visual_Role at every Supported_Viewport.
3. THE Heading_System SHALL render the Section Visual_Role with a computed font size greater than the Supporting Visual_Role at every Supported_Viewport.
4. WHEN two Headings have the same Visual_Role, THE Heading_System SHALL apply the same font family, font-weight rule, Accent_Grammar, and spacing rule.
5. WHEN the Locale or theme changes, THE Heading_System SHALL preserve the relative ordering of Hero, Section, and Supporting visual emphasis.
6. WHEN multiple Headings have the same semantic level, THE Heading_System SHALL assign the same Visual_Role to those Headings.

### Requirement 2: Express a Coherent BabyHealth Visual Identity

**User Story:** As a visitor, I want headings to feel recognizably BabyHealth, so that the Landing_Page has a distinctive and trustworthy identity.

#### Acceptance Criteria

1. THE Heading_System SHALL apply at least one Vibrant_Accent to every Hero_Heading and Section_Heading.
2. THE Heading_System SHALL source every heading accent color from the BabyHealth_Accent_Palette.
3. THE Heading_System SHALL define one Accent_Grammar for each Visual_Role across the Landing_Page.
4. WHEN a Vibrant_Accent appears in both the Hero and a content section, THE Heading_System SHALL preserve the shared color family and visual motif while varying intensity according to the Visual_Role.
5. IF a Vibrant_Accent rendering technique is unavailable, THEN THE Heading_System SHALL render the affected Heading with a solid BabyHealth_Accent_Palette color that meets the applicable Contrast_Ratio.

### Requirement 3: Maintain Legibility in Both Themes

**User Story:** As a visitor, I want every heading to remain readable in either theme, so that visual expression does not reduce access to information.

#### Acceptance Criteria

1. WHILE the Light_Theme is active, THE Heading_System SHALL maintain a Contrast_Ratio of at least 3:1 for Large_Heading_Text.
2. WHILE the Dark_Theme is active, THE Heading_System SHALL maintain a Contrast_Ratio of at least 3:1 for Large_Heading_Text.
3. WHILE the Light_Theme is active, THE Heading_System SHALL maintain a Contrast_Ratio of at least 4.5:1 for Heading text that is not Large_Heading_Text.
4. WHILE the Dark_Theme is active, THE Heading_System SHALL maintain a Contrast_Ratio of at least 4.5:1 for Heading text that is not Large_Heading_Text.
5. WHERE a gradient renders visible Heading text, THE Heading_System SHALL meet the applicable Contrast_Ratio at every gradient color stop.
6. IF a theme background causes a Heading to fall below the applicable Contrast_Ratio, THEN THE Heading_System SHALL apply a theme-specific accent treatment that meets the applicable Contrast_Ratio.
7. IF a theme-specific accent treatment cannot be applied, THEN THE Heading_System SHALL render the complete Heading content with a solid theme foreground color that meets the applicable Contrast_Ratio.

### Requirement 4: Adapt Headings to Responsive Layouts

**User Story:** As a visitor using any supported device, I want headings to fit and retain their hierarchy, so that I can read the Landing_Page without layout obstruction.

#### Acceptance Criteria

1. WHILE the Landing_Page is displayed in a Supported_Viewport, THE Heading_System SHALL render each Heading without horizontal page overflow.
2. WHEN a Heading exceeds the available line width, THE Heading_System SHALL wrap the Heading at word boundaries without clipping visible characters.
3. WHEN a Heading wraps to multiple lines, THE Heading_System SHALL prevent the Heading and Vibrant_Accent from overlapping adjacent content.
4. WHEN the Supported_Viewport width changes, THE Heading_System SHALL preserve the Hero, Section, and Supporting Visual_Role order.
5. WHILE the Supported_Viewport width is from 320 through 767 CSS pixels, THE Heading_System SHALL keep each Vibrant_Accent within the visible bounds of the associated Heading container.

### Requirement 5: Respect Motion Preferences

**User Story:** As a visitor who is sensitive to motion, I want heading effects to respect my motion preference, so that I can use the Landing_Page comfortably.

#### Acceptance Criteria

1. WHERE an Animated_Heading_Effect is enabled, THE Heading_System SHALL preserve full Heading readability before, during, and after the effect.
2. WHILE the Reduced_Motion_Preference is active, THE Heading_System SHALL render Headings and Vibrant_Accents without non-essential spatial motion, fades, or opacity transitions.
3. WHEN the Reduced_Motion_Preference changes during an active session, THE Heading_System SHALL update Animated_Heading_Effects to match the new preference.
4. WHILE the Reduced_Motion_Preference is active, THE Heading_System SHALL preserve the final static visual treatment and complete Heading content for every Animated_Heading_Effect.

### Requirement 6: Preserve Localized Heading Content

**User Story:** As an English- or Spanish-speaking visitor, I want styled headings to preserve the selected translation, so that visual presentation does not alter meaning.

#### Acceptance Criteria

1. WHEN the Landing_Page loads with the English Locale, THE Heading_System SHALL render the complete English Translation_Resource for each Heading.
2. WHEN the Landing_Page loads with the Spanish Locale, THE Heading_System SHALL render the complete Spanish Translation_Resource for each Heading.
3. WHEN the Locale changes during an active session, THE Heading_System SHALL preserve the previously rendered Translation_Resource until the Landing_Page reloads.
4. WHEN visual emphasis is applied within a Heading, THE Heading_System SHALL expose the complete plain-text Translation_Resource as the Heading Accessible_Name.
5. IF a Translation_Resource wraps differently between English and Spanish, THEN THE Heading_System SHALL retain all translated words without truncation.

### Requirement 7: Preserve Semantic and Cross-Section Consistency

**User Story:** As a visitor using visual or assistive navigation, I want consistent and semantic headings, so that the Hero and content sections communicate one coherent document structure.

#### Acceptance Criteria

1. THE Heading_System SHALL preserve the existing HTML heading element and document order for every Heading.
2. THE Landing_Page SHALL contain one Hero_Heading as the primary `h1`.
3. WHEN a Vibrant_Accent does not contribute Heading text, THE Heading_System SHALL exclude the Vibrant_Accent from the accessibility tree.
4. WHEN a Heading is exposed through the accessibility tree, THE Heading_System SHALL provide an Accessible_Name equal to the selected Translation_Resource.
5. WHEN the Hero and content sections are displayed together, THE Heading_System SHALL apply the same Visual_Role definitions and Accent_Grammar throughout the Landing_Page.
