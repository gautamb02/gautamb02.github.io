# Gautam Bhagat · React Portfolio

Modern, modular React site built with Vite + TypeScript. Content lives in small data modules so the UI stays declarative and easy to extend.

## Tech stack

- React 19 + TypeScript
- Vite for lightning-fast dev/build
- Vanilla CSS with CSS variables for theming

## Getting started

```bash
npm install
npm run dev
```

Visit the printed URL (defaults to http://localhost:4173).

### Production build

```bash
npm run build
npm run preview   # optional local preview of /dist
```

## Project structure

```
src/
  components/     # Layout, Section, shared UI primitives
  sections/       # Page slices (Hero, Experience, Projects...)
  data/           # Profile data for Gautam Bhagat
  styles/         # Global styles + tokens
```

Update `src/data/profile.ts` to change copy, experience, links, and stats. Add new sections by composing the primitives inside `src/sections/`.
