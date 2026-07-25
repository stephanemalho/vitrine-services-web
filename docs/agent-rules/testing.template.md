# Testing Rules

## Commands

```bash
# Unit
npm run test

# Types
npm run typecheck

# Lint
npm run lint

# Production rendering
npm run build
```

## Policy

- Do not delete or weaken tests to make a task pass.
- Add focused unit coverage when static content gains a new invariant.
- Validate interactive or responsive changes in a real browser at mobile and desktop sizes.
- A production build is required before reporting an implementation complete.
- Browser-only checks supplement deterministic commands; they do not replace them.

## Network

- Unit tests must not call external services.
- Builds must succeed without a configured Google Form or production domain.
- Do not exercise a live booking form during automated validation.

## Reporting

Report exact commands as passed, failed, skipped, or unavailable. Do not present an unavailable hosted check as passed.
