# Data Model Rules

The site has no database, API, schema, migration, or persistent user data.

## Static Data

- Editorial collections live in `lib/content.ts`.
- Public environment-derived configuration lives in `lib/site-config.ts`.
- Keep collection shapes explicit and covered by focused invariants where practical.

## Future Persistence

Adding a database, CMS, form handler, or analytics store is an architecture and privacy change. It requires explicit approval plus updates to security, legal copy, tests, and operations documentation.
