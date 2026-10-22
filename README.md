# Portfolio

Personal portfolio built with Vue 3, TypeScript, Vite, and Tailwind CSS. It presents professional experience, skills, and project case studies.

## Features

- Home page with experience, projects, skills, and contact sections.
- Individual project pages with image and video galleries.
- Scroll reveal effects, reading progress, cursor glow, and card tilt interactions.
- Responsive layouts and Vue Router navigation.

## Run locally

```sh
npm install
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

The build command runs the TypeScript check before building with Vite.

## Project structure

- `src/components/` — Page sections and shared presentation components.
- `src/data/projects.ts` — Project descriptions, technologies, and media references.
- `src/views/` — Home and project detail pages.
- `src/composables/` — Scroll and reveal behavior.
- `src/directives/` — Card tilt interaction.
- `src/router/` — Routes and navigation behavior.

## Customize

Update project entries in `src/data/projects.ts`, experience and skills in their section components, and contact links in `src/components/ContactSection.vue`.
