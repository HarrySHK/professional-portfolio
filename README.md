# Muhammad Haris Nadeem — Portfolio

Animated personal portfolio built with Next.js (App Router), React and TypeScript. No UI or animation libraries — all motion is CSS transitions, keyframes and `requestAnimationFrame`.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  layout.tsx          Fonts, metadata, no-flash theme script
  page.tsx            Entry — renders <Portfolio />
  globals.css         Design tokens (light + dark), base styles, buttons, keyframes
components/
  Portfolio.tsx       Client shell: loader state, open case study, scroll progress, reveals
  Loader.tsx          000 → 100 counter intro
  Nav.tsx             Sticky header, Karachi clock, theme toggle
  ThemeToggle.tsx     Light / dark switch (persists to localStorage)
  Hero.tsx            Name reveal, rotating role words, facts row
  Marquee.tsx         Scrolling tech strip
  Work.tsx            Filterable project index
  HoverPreview.tsx    Cursor-following project card
  CaseStudy.tsx       Full-screen project overlay
  Explainer.tsx       Scene-by-scene motion explainer player
  Experience.tsx      Expandable roles
  Stack.tsx           Skills grid
  Education.tsx       Degrees
  Contact.tsx         Red contact close + footer
  SectionHeader.tsx   Shared section heading
  Icons.tsx           Lucide-style inline icons
hooks/
  useKarachiTime.ts   Live PKT clock
  useReveal.ts        Scroll-in reveal via IntersectionObserver
data/
  portfolio.ts        All content: profile, projects, jobs, stack, education
```

## Editing content

Everything shown on the page lives in `data/portfolio.ts`. Add a project by appending to `projects` — each needs 3–5 `scenes`, which drive its motion explainer and hover preview.

## Configuration

`data/portfolio.ts` → `settings`:

- `showLoader` — intro counter on/off
- `sceneSeconds` — duration of each explainer scene
- `hoverPreview` — cursor-following preview on the project list
