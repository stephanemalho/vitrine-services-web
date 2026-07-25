# Architecture Rules

## Rendering

- Use the Next.js App Router.
- Keep pages and sections as Server Components by default.
- Add `"use client"` only at the lowest interactive boundary.
- Keep the marketing pages statically renderable; do not add request-time data without a product requirement.
- Use `next/image` for content imagery and `next/font` for local optimized font delivery.

## File Routing

| Concern | Location |
|---|---|
| Routes and route metadata | `app/` |
| Site-level components | `components/` |
| Page sections | `components/sections/` |
| shadcn/ui Base UI primitives | `components/ui/` |
| Static content and configuration | `lib/` |
| Public media | `public/images/` |
| Focused unit tests | colocated as `*.test.ts` |

## Dependency Boundaries

- Section components may depend on `lib/`, site components, and `components/ui/`.
- `components/ui/` must remain generated from the shadcn Base UI registry and must not import site-specific content.
- Public copy belongs in `lib/content.ts`; environment-derived identity and URLs belong in `lib/site-config.ts`.
- Prefer CSS and existing primitives over a new production dependency.

## Refactor Rules

- Preserve section IDs because navigation and external deep links depend on them.
- Preserve the static rendering strategy unless the task explicitly adds dynamic data.
- Do not replace Base UI with Radix UI.
- Update metadata, sitemap, tests, and documentation when routes or public content contracts change.
