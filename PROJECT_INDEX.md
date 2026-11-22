# Pedro Prime Fitness — Project Index

Marketing site for Pedro's personal training business (beginner-focused
weightlifting coaching, in person and online). Plain HTML/CSS, no build step,
intended for GitHub Pages at `pedroprimefitness.com`. Layout and visual style
are modelled on cityprofitness.com; all content is original placeholder.

## Structure

```
/
├── index.html        Home: split hero, four service cards, About Me, CTA
├── services.html     One detail row per service (anchors #fitness, #conditioning, #hypertrophy, #nutrition)
├── pricing.html      Three package cards (placeholder prices)
├── contact.html      How-it-works steps + mailto contact
├── css/style.css     Single stylesheet; colours are CSS variables in :root ("Lake" navy palette)
├── js/site.js        Mobile nav toggle
├── images/           Web-sized photos (~2000px long side, ~150-190KB JPEG)
└── videos/           Silent looping clips (H.264 MP4, 720px, ~350KB) + poster JPEG of first frame
```

## Conventions

- Header and footer are duplicated in each page (no templating); edit all four pages together.
- Image placeholders are `<div class="ph" data-label="...">`; replace each with `<img class="photo" ... width height loading="lazy">`.
- Image filenames describe the shot in kebab-case (`barbell-curl.jpg`). Originals stay outside the repo.
- Videos are `<video autoplay muted loop playsinline poster=...>`; `js/site.js` stops them for reduced-motion users.
- Photos and videos from different shoots share one grade (slightly darker, cooler, desaturated, light vignette) so they read as one set.
- Placeholder text is marked `[Placeholder]`, `[...]`, `$XX`, or `Client Name`.
- Contact email: `pedroprimefitness@gmail.com` (mailto links in `contact.html`).

## Deployment

- GitHub Pages serves `main` (repo root) at https://pedroprimefitness.com; `CNAME` is managed by GitHub.
- DNS at GoDaddy: four A records to GitHub Pages, `www` CNAME to `emmilco.github.io`. HTTPS enforced.
