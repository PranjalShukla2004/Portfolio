Build me a premium, animation-heavy personal portfolio website with a cinematic intro and a clean modern landing page.

TECH STACK
- Next.js (latest stable, App Router)
- React
- TypeScript
- Tailwind CSS
- Motion for React for UI/page animations
- React Three Fiber + drei for the ML hidden-layer animation
- shadcn/ui for reusable UI components
- No backend required for v1
- Make the site responsive and production-ready

CORE CREATIVE DIRECTION
This site should feel like:
- intelligent
- cinematic
- futuristic
- AI/ML inspired
- slightly cyberpunk
- professional enough for recruiters

Important:
Do NOT make it feel like actual malware or criminal hacking.
The aesthetic should be “AI inference / profile reconstruction / system boot sequence”, not “illegal hacker site”.

OVERALL SITE STRUCTURE
The site should have this flow:

1. Intro animation
2. Landing page hero
3. Projects
4. Skills
5. Experience
6. Contact

The website should behave like a single polished experience, ideally with smooth scrolling and transitions between sections.

GLOBAL DESIGN SYSTEM
Create a consistent visual language:
- dark theme by default
- black / deep navy background
- neon accents (green, cyan, blue, subtle purple)
- soft glows, glassmorphism in small places, not everywhere
- clean typography
- high contrast but not overly noisy
- rounded modern cards
- subtle grid / scanline / particle details in the background
- premium spacing and hierarchy

ACCESSIBILITY / UX RULES
- Include a visible “Skip intro” button
- Respect prefers-reduced-motion
- The intro should not trap the user
- Total intro duration should be around 4–6 seconds max
- The site must remain smooth on normal laptops
- Mobile version should simplify the intro if needed

HIGH-LEVEL BUILD PLAN

PHASE 1 — PROJECT SETUP
- Scaffold a Next.js app with TypeScript and Tailwind
- Configure app router structure
- Install Motion, React Three Fiber, drei, and shadcn/ui
- Create a global design system:
  - colors
  - typography
  - spacing
  - reusable container class
- Add a root layout with metadata and dark background
- Add smooth scrolling and section anchors

PHASE 2 — INTRO ANIMATION
Create a full-screen intro overlay that runs once on first page load.

The intro should follow this exact sequence:

STEP A — CHAT/PROMPT SCREEN
- Show a minimal terminal/chat-like interface
- Animate text being typed:
  “Initializing profile reconstruction…”
  “Loading public signals…”
  “Building Pranjal Shukla embedding…”
  “Running inference…”
- Avoid the exact phrase “Hack and retrieve all the info”
- Use a blinking cursor
- Add subtle flicker and scanline effects

STEP B — ML HIDDEN-LAYER VISUAL
- Transition from the prompt screen into a neural-network animation
- Show nodes and weighted connections across layers
- Animate signals moving through the network
- Animate weights changing color/intensity to imply learning/adjustment
- Keep it elegant, not too scientifically literal
- This should feel like “representation learning” or “hidden state formation”
- Add subtle camera movement/parallax
- Use React Three Fiber for this scene

STEP C — TERMINAL COMMAND SEQUENCE
- Transition into a terminal-like screen
- Animate commands being typed, such as:
  > load_profile --subject "Pranjal Shukla"
  > parse_experience
  > extract_projects
  > map_skills
  > render_interface
- Add believable command output lines
- Give a polished cyber aesthetic
- No fake dangerous commands, no edgy nonsense
- Keep this sequence fast and crisp

STEP D — LANDING PAGE REVEAL
- Terminal fades/slides away
- Main landing page emerges underneath
- Use a premium transition:
  - blur out
  - particles dissolve
  - lines collapse into hero section
- The landing page should feel like the “resolved final output” of the intro

INTRO STATE LOGIC
- The intro should run once per session by default
- If the user refreshes, it can either:
  - replay, or
  - be skipped based on sessionStorage
- Implement a simple flag in sessionStorage so this is easy to control
- Include a “Replay intro” control somewhere later on the page

PHASE 3 — LANDING PAGE HERO
After intro completion, show a strong landing hero section.

Hero requirements:
- Full-screen or near full-screen section
- Name: Pranjal Shukla
- Short role/title line, e.g.:
  “Software Engineer | ML Enthusiast | Builder”
- Brief one-paragraph intro
- Primary CTA: View Projects
- Secondary CTA: Contact Me / Resume
- Add subtle animated background elements:
  - data particles
  - glowing network lines
  - soft gradient blobs
- Use staggered reveal animations
- Include a polished navbar with:
  - Projects
  - Skills
  - Experience
  - Contact

PHASE 4 — PROJECTS SECTION
Build a premium projects section with cards or a featured-project layout.

Requirements:
- Each project card should include:
  - title
  - short description
  - tech stack
  - key outcome / impact
  - GitHub link
  - live demo link if available
- Support featured projects at the top
- Add hover interactions:
  - glow
  - lift
  - subtle border animation
- Allow filtering by category if possible:
  - Web
  - ML/AI
  - Systems
- Add scroll-triggered reveal animations

PHASE 5 — SKILLS SECTION
Create a skills section that feels modern and interactive.

Requirements:
- Group skills into categories:
  - Languages
  - Frameworks
  - ML/AI
  - Tools
- Present them using:
  - animated pills, or
  - radial/grid cards, or
  - network-style visualization
- Add hover states and micro-interactions
- The styling should match the AI/cyber aesthetic without being cluttered

PHASE 6 — EXPERIENCE SECTION
Create a timeline or structured experience section.

Requirements:
- Show education, internships, research, leadership, or major roles
- Use a vertical timeline or stacked premium cards
- Each entry should include:
  - role/title
  - organization
  - dates
  - 2–4 bullet highlights
- Use subtle scroll animations
- Make the section clean and easy to scan

PHASE 7 — CONTACT SECTION
Build a sleek contact section.

Requirements:
- Short call-to-action heading
- Email link
- LinkedIn
- GitHub
- Optional contact form UI (frontend only for now unless easy to wire)
- Add a polished footer
- Keep this section elegant and uncluttered

COMPONENT STRUCTURE
Use a clean component structure like this:

app/
  layout.tsx
  page.tsx
  globals.css

components/
  intro/
    IntroSequence.tsx
    PromptScene.tsx
    NeuralNetworkScene.tsx
    TerminalScene.tsx
    IntroOverlay.tsx
  layout/
    Navbar.tsx
    SectionContainer.tsx
    Footer.tsx
  sections/
    HeroSection.tsx
    ProjectsSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
    ContactSection.tsx
  ui/
    GlowCard.tsx
    AnimatedButton.tsx
    SectionHeading.tsx
    GridBackground.tsx

lib/
  constants.ts
  motion.ts
  utils.ts

ANIMATION GUIDELINES
- Use Motion for:
  - section reveals
  - staggered text
  - opacity/translate transitions
  - navbar effects
  - hover interactions
- Use React Three Fiber only for the hidden-layer neural animation
- Avoid overusing 3D elsewhere
- Keep transitions smooth and premium, not flashy for the sake of it

PERFORMANCE RULES
- Lazy-load the 3D intro scene if possible
- Keep particle counts reasonable
- Avoid huge textures
- Prefer CSS glow and gradients over heavy assets
- Ensure Lighthouse performance remains decent
- Optimize for smoothness more than visual excess

MOBILE BEHAVIOR
- On mobile, simplify the intro:
  - fewer particles
  - reduced complexity in the neural network scene
  - shorter typed sequences
- Ensure all sections remain readable and touch-friendly
- Navbar should collapse cleanly

CONTENT PLACEHOLDERS
Use placeholder content for now where real content is missing, but structure it clearly so I can replace it later.

Include placeholder entries for:
- 3 to 6 projects
- 3 to 5 experience entries
- grouped skills
- contact links

DELIVERABLES
I want:
1. a clean project structure
2. reusable components
3. polished animations
4. professional dark futuristic design
5. code that is easy to edit later

IMPLEMENTATION ORDER
Please build in this order:
1. app shell + global theme
2. intro overlay and sequence
3. landing hero
4. projects
5. skills
6. experience
7. contact
8. polish, responsiveness, and accessibility

WHAT I WANT FROM YOU
- Generate the full codebase for the first version
- Make reasonable design decisions without asking constant questions
- Use good defaults
- Keep code modular and readable
- Add comments only where useful
- Do not use random unnecessary libraries