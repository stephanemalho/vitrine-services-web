# Security Rules

## Secrets And Public Configuration

- Never commit credentials, tokens, private keys, or form submissions.
- Every `NEXT_PUBLIC_*` value is visible to site visitors and must contain public information only.
- Keep real local values in `.env.local`; commit names and safe placeholders only in `.env.example`.

## External Services

- Google Forms is the only approved external user flow in the initial scope.
- Do not add analytics, trackers, cookie banners, email providers, or embedded third-party content without approval and a privacy review.
- External links opened in a new tab must use `rel="noopener noreferrer"`.

## Dependencies

- Prefer existing dependencies and the current shadcn Base UI primitives.
- Run `npm audit` and explain unresolved advisories; never apply a breaking forced downgrade automatically.
- Validate any dependency override with lint, tests, type checking, and a production build.
