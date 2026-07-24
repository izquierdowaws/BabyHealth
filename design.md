version: 3.0

project:
  name: BabyHealth
  codename: Project Aurora
  type: Cinematic Product Experience
  category: AI Neonatal Assistant
  audience:
    - New Parents
    - Hospitals
    - Pediatric Clinics
    - Hackathon Judges
    - Investors

objective:

  primary:
    Generate emotional impact.

  secondary:
    Explain the product clearly.

  tertiary:
    Demonstrate technical excellence.

success_metrics:

  - User says "Wow"
  - User understands value in less than 10 seconds
  - User remembers the mission
  - User understands AWS architecture
  - User trusts the platform

# =========================================================
# CORE PHILOSOPHY
# =========================================================

philosophy:

  main:
    "Emotion first. Technology second."

  principles:

    - Story before features
    - Curiosity before explanation
    - Trust before conversion
    - Human before AI
    - Simplicity before complexity

emotion_targets:

  primary:
    - Trust
    - Calm
    - Hope

  secondary:
    - Curiosity
    - Inspiration
    - Excitement

forbidden_feelings:

  - Fear
  - Clinical coldness
  - Corporate stiffness
  - Generic SaaS appearance

# =========================================================
# BRAND PERSONALITY
# =========================================================

brand:

  personality:

    - Human
    - Warm
    - Reassuring
    - Modern
    - Transparent
    - Intelligent
    - Caring

  tone:

    - Conversational
    - Reassuring
    - Clear
    - Honest

  avoid:

    - Medical jargon
    - Buzzword overload
    - Aggressive selling
    - Fear marketing

# =========================================================
# VISUAL DIRECTION
# =========================================================

visual_style:

  inspiration:

    - Apple Vision Pro
    - Stripe
    - Linear
    - Arc Browser
    - Framer
    - Notion

  keywords:

    - Cinematic
    - Premium
    - Soft
    - Emotional
    - Human
    - Atmospheric
    - Elegant
    - Interactive
    - Next Generation

overall_feel:

  "A premium Apple-style experience with the trust of a healthcare brand and the innovation of modern AI."

# =========================================================
# COLOR SYSTEM
# =========================================================

colors:

  background:

    primary: "#FAF7F4"

  surface:

    primary: "#FFFFFF"

  text:

    heading: "#2A2A28"
    body: "#4A4946"
    muted: "#7B7974"

  trust:

    primary: "#4B9B9B"
    dark: "#2B7A7A"
    light: "#C8E8E8"

  warmth:

    primary: "#DF7B5E"
    light: "#F0B9A8"

  success:

    primary: "#10B981"

  warning:

    primary: "#F59E0B"

  aurora:

    teal: "#73D2D2"
    mint: "#A7F3D0"
    coral: "#F7A38B"
    peach: "#FFD5C2"

gradients:

  hero:

    - "#73D2D2"
    - "#4B9B9B"
    - "#DF7B5E"

  atmosphere:

    - "#73D2D2"
    - "#FFD5C2"

# =========================================================
# TYPOGRAPHY
# =========================================================

typography:

  headings:

    family: Georgia
    weight: 700

  body:

    family: Inter
    weight: 400

  ui:

    family: Inter

  accent:

    family: Space Grotesk

rules:

  headings:
    highly_emotional: true

  paragraphs:
    maximum_width: 700px

  readability:
    maximum

# =========================================================
# EXPERIENCE FLOW
# =========================================================

experience_flow:

  step_01:
    Emotion

  step_02:
    Problem

  step_03:
    Curiosity

  step_04:
    Product Reveal

  step_05:
    Product Understanding

  step_06:
    Trust Building

  step_07:
    Technical Credibility

  step_08:
    Emotional Closing

  step_09:
    Conversion

# =========================================================
# LANDING STRUCTURE
# =========================================================

sections:

  - preloader
  - hero
  - emotional_story
  - product_reveal
  - workflow
  - why_babyhealth
  - ai_transparency
  - metrics
  - aws_architecture
  - security
  - vision
  - final_cta

# =========================================================
# PRELOADER
# =========================================================

preloader:

  duration:
    maximum: 1500ms

  content:

    logo:
      BabyHealth

    text:
      "Caring for those who matter most."

  animation:

    heartbeat:
      true

# =========================================================
# HERO
# =========================================================

hero:

  height: 100vh

  visual:

    background:
      aurora

    particles:
      enabled

    glow:
      enabled

    motion:
      subtle

  content:

    headline:
      "Every cry tells a story."

    subheadline:
      "AI-powered guidance for the earliest days of life."

    cta_primary:
      "See How It Works"

    cta_secondary:
      "Explore BabyHealth"

  requirements:

    - No stock photography
    - No generic doctor imagery
    - No hospital clichés

# =========================================================
# EMOTIONAL STORY
# =========================================================

emotional_story:

  objective:
    Create empathy before introducing the product.

  scroll_sequence:

    - "02:13 AM"
    - "Your baby is crying."
    - "You are not sure why."
    - "Should you worry?"
    - "Should you wait?"
    - "What if guidance was always available?"

  design:

    background:
      dark

    typography:
      oversized

# =========================================================
# PRODUCT REVEAL
# =========================================================

product_reveal:

  objective:
    Introduce the experience dramatically.

  content:

    - Take a photo.
    - Record a sound.
    - Receive guidance in seconds.

  visual:

    smartphone_mockup:
      premium

  animation:

    - scale
    - blur_reveal
    - parallax

# =========================================================
# WORKFLOW
# =========================================================

workflow:

  title:
    "Powered by AI. Designed for parents."

  steps:

    - Capture
    - Upload
    - Analyze
    - Understand
    - Take Action

  style:

    stripe_like:
      true

# =========================================================
# WHY BABYHEALTH
# =========================================================

why_babyhealth:

  title:
    "Why We Built BabyHealth"

  content:

    "The first days of a baby's life are filled with questions. Access to guidance should not depend on time, location or uncertainty."

# =========================================================
# AI TRANSPARENCY
# =========================================================

ai_transparency:

  title:
    "Technology that supports. Never replaces."

  positive:

    - Guidance
    - Context
    - Information

  negative:

    - Diagnoses
    - Prescriptions
    - Medical Decisions

# =========================================================
# METRICS
# =========================================================

metrics:

  style:
    oversized

  examples:

    - value: "24/7"
      title: Availability

    - value: "1"
      title: Photo Needed

    - value: "Seconds"
      title: To Receive Guidance

# =========================================================
# AWS SHOWCASE
# =========================================================

aws_architecture:

  title:
    "Built on World-Class Infrastructure"

  flow:

    - Flutter
    - API Gateway
    - Lambda
    - Amazon Bedrock
    - DynamoDB

  visual:

    live_data_flow:
      true

    animated_connections:
      true

  purpose:

    - Impress judges
    - Demonstrate scalability
    - Build credibility

# =========================================================
# SECURITY
# =========================================================

security:

  visual:

    animated_shield:
      true

  statements:

    - Images remain private.
    - Secure cloud infrastructure.
    - Transparent processing.
    - Safety-first approach.

# =========================================================
# VISION
# =========================================================

vision:

  title:

    "A Future Where Parents Feel Supported."

  content:

    "We believe every parent deserves access to reliable guidance during the moments that matter most."

# =========================================================
# FINAL CTA
# =========================================================

final_cta:

  height: 90vh

  headline:

    "The first step in caring is understanding."

  subheadline:

    "Discover how BabyHealth supports parents with AI-powered guidance."

  primary_button:

    "Request a Demo"

# =========================================================
# MOTION SYSTEM
# =========================================================

motion:

  philosophy:

    "Animate to communicate."

  tools:

    - Framer Motion
    - Lenis
    - GSAP

  transitions:

    default:
      duration: 0.5

  reveal:

    fade_up:
      true

  parallax:

    enabled:
      true

    intensity:
      subtle

  hover:

    scale:
      1.03

  counters:

    animated:
      true

# =========================================================
# WOW FACTORS
# =========================================================

mandatory_effects:

  - Aurora Background
  - Floating Particles
  - Scroll Storytelling
  - Interactive Phone Mockup
  - Animated AWS Architecture
  - Glassmorphism
  - Dynamic Counters
  - Premium Hover Effects
  - Smooth Scrolling
  - Parallax Movement

# =========================================================
# PERFORMANCE
# =========================================================

performance:

  lighthouse:

    performance: 90

    accessibility: 90

    best_practices: 90

    seo: 90

  mobile_first:
    true

# =========================================================
# AGENT EXECUTION RULES
# =========================================================

agent_rules:

  - Prioritize emotional impact
  - Do not create generic SaaS layouts
  - Every section must feel alive
  - Every scroll should reveal something new
  - Use motion with intention
  - Maintain premium aesthetics
  - Maintain accessibility
  - Optimize for desktop and mobile
  - Build memorable moments

final_validation:

  question_01:
    "Does it make the user feel something?"

  question_02:
    "Does it clearly explain the value?"

  question_03:
    "Does it communicate trust?"

  question_04:
    "Would a hackathon judge remember it?"

  question_05:
    "Would a parent trust it?"

success_condition:

  "Visitors remember the feeling before they remember the technology."
  