# Adam Benbouazza — Portfolio

Personal portfolio of **Adam Benbouazza**, Full-Stack Developer & AI Engineer. Built to be scanned in under 60 seconds by recruiters and engineering leads, with deeper technical case studies for those who keep reading.

**Live:** [your-site.vercel.app](https://your-site.vercel.app)

![Portfolio preview](./public/preview.png)

## Highlights

- **3 production case studies** with real metrics: anomaly detection at LEONI (XGBoost, SHAP, Isolation Forest), multi-practitioner clinical scheduling, and real-time broadcast at SNRT
- **Interactive architecture diagrams**: hover or tap a node to see the trade-offs behind each design decision
- **Fully static**: every page is pre-rendered (SSG), no runtime server needed
- **Dark/light theme**, accessible color contrast (WCAG AA), responsive down to mobile
- **SEO-ready**: JSON-LD Person schema, OpenGraph cards, sitemap, robots.txt

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Hosting | Vercel |

## Project Structure

```
├── app/              # Routes (home, /projects/[slug])
├── components/       # UI sections and diagrams
├── content/          # All site content, typed (content.ts)
└── public/           # CV PDF, images, favicon
```

All copy lives in `content/content.ts`, so updating text or adding a project never touches components. The structure is ready for FR localization.

## Run Locally

```bash
git clone https://github.com/Adamosfg/PORTFOLIO.git
cd PORTFOLIO
npm install
npm run dev     # http://localhost:3000
```

```bash
npm run build   # static production build
```

## Deploy

Push to GitHub, import the repo in [Vercel](https://vercel.com/new). No extra config needed.

## Contact

- Email: your@email.com
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)
- GitHub: [@Adamosfg](https://github.com/Adamosfg)
