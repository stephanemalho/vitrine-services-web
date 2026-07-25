# Project Profile

## Identity

- Project name: `vitrine-services-web`
- Repository: `https://github.com/stephanemalho/vitrine-services-web`
- Primary maintainer: `@stephanemalho`
- Product/domain: French freelance web-development and SEO services
- Audience/users: French-speaking small businesses, independent professionals, and project owners
- Critical user workflows: understand the offer, review example projects and pricing, start a booking request, access legal information

## Stack

- Language(s): TypeScript, CSS, French editorial copy
- Framework(s): Next.js 16 App Router, React 19, Tailwind CSS 4, shadcn/ui on Base UI, Framer Motion
- Runtime: Node.js 24.18.0
- Package manager: npm 11
- Database: none
- External services: Google Forms for booking when configured
- Deployment target: Vercel

## Commands

```bash
# Install
npm ci

# Development server
npm run dev

# Lint
npm run lint

# Test
npm run test

# Type check
npm run typecheck

# Build
npm run build
```

## Sensitive Areas

- Files or folders agents must not modify without explicit approval: production environment variables and Vercel project settings
- Data that must never be logged: private client information, form submissions, credentials, or analytics identifiers
- Commands that require human approval: production deployment changes, domain changes, and destructive Git operations
- External services that can incur cost: Vercel paid features and any future analytics, email, or form service

## Definition Of Done

- Code updated: implementation is scoped and keeps content centralized
- Tests: lint, unit tests, type check, and production build pass
- Documentation: README, environment example, and project rules match the code
- Migration/deployment: no database migration; deployment remains human-controlled
- Human review: required before merge and before replacing placeholders with production facts
