# Adam Benbouazza — Portfolio & Engineering Showcase

Production-grade personal portfolio engineered for **Adam Benbouazza**, Full-Stack Developer & AI Engineer. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion, optimized for technical recruiters, engineering managers, and tech leads scanning for 10–60 seconds.

## Stack & Architecture

- **Framework**: Next.js 15 (App Router) with 100% Static HTML / SSG generation
- **Language**: TypeScript (strict type checking across all models)
- **Styling**: Tailwind CSS with custom WCAG AA compliant design tokens
- **Data Layer**: Centralized typed content repository in `/content/content.ts` (ready for future FR localization)
- **Visuals**: Zero-bloat high-fidelity SVG/CSS synthetic telemetry and interface diagrams (anonymized data)
- **SEO & Metadata**: JSON-LD Person schema, dynamic OpenGraph card generation, sitemap.xml, robots.txt, and SVG favicon

## Key Sections

1. **Nav**: Sticky, backdrop blur, mark + name, anchor navigation, theme toggle, and direct CV download.
2. **Hero**: Precise one-line positioning, industrial proof line at LEONI, two CTAs, contact links, and European relocation status badge.
3. **Selected Work**: Exactly 3 production projects backed by CV metrics (LEONI Automotive Anomaly Detection, Multi-Practitioner Clinical Scheduling, and SNRT Real-Time Broadcast).
4. **Interactive Case Studies (`/projects/[slug]`)**: Operational problem, hard engineering constraints, interactive architecture diagram (Option B: hover/tap nodes to inspect technical trade-offs), decisions with rationale ("Why X over Y"), quantified production results, and senior retrospective.
5. **Interview-Defensible Stack**: Grouped chips (AI/ML, Backend & Systems, Frontend, Data & DevOps) without arbitrary percentages.
6. **Timeline & Education**: Compact career timeline, Master's in CS & AI (FSAC Casablanca), Bachelor's, and Coursera/AWS/Meta certifications.
7. **About**: Exactly 73 words, human, first-person, calm and confident, with profile avatar.
8. **Contact & Footer**: Direct email CTA, PDF CV download, and live availability status indicator.

## Running Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Run static production build
npm run build
```

## Deployment to Vercel

Push the repository to GitHub and import it into Vercel. The project uses standard Next.js App Router defaults with zero external configuration required.
