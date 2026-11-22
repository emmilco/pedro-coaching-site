# Pedro Prime Fitness — Project Index

Marketing site for Pedro's personal training business (beginner-focused
weightlifting coaching, in person and online). Plain HTML/CSS, no build step,
intended for GitHub Pages at `pedroprimefitness.com`. Layout and visual style
are modelled on cityprofitness.com; all content is original placeholder.

## Structure

```
/
├── index.html        Home: hero, four service cards, testimonials, CTA
├── services.html     One detail row per service (anchors #fitness, #conditioning, #hypertrophy, #nutrition)
├── pricing.html      Three package cards (placeholder prices)
├── contact.html      How-it-works steps + mailto contact
├── palettes.html     Exploration page comparing blue-grey accent palettes (noindex; remove before launch)
├── css/style.css     Single stylesheet; colours are CSS variables in :root, palettes via [data-palette]
├── js/palette.js     Exploration-only: applies saved palette and renders the corner switcher
└── js/site.js        Mobile nav toggle
```

## Conventions

- Header and footer are duplicated in each page (no templating); edit all four pages together.
- Image placeholders are `<div class="ph" data-label="...">`; replace each with an `<img>`.
- Placeholder text is marked `[Placeholder]`, `[...]`, `$XX`, or `Client Name`.
- Contact email placeholder: `hello@example.com` (in `contact.html`, two places).

## Before launch

- Pick a palette: copy its values into `:root` in `style.css`, delete the `[data-palette]` rules,
  `js/palette.js`, the `<script src="js/palette.js">` tags, `.palette-switcher` CSS, and `palettes.html`.
- Replace all placeholders (photos, testimonials, prices, email, location, hours).
- Add `CNAME` (`pedroprimefitness.com`) and enable GitHub Pages.
