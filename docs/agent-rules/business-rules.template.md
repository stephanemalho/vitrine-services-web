# Business And Content Rules

## Domain Vocabulary

| Term | Meaning |
|---|---|
| booking URL | Public Google Form URL used by every appointment call to action |
| project card | Portfolio entry with image, summary, tags, and an external URL |
| offer | One of the Essentiel, Évolutif, or Clé en main pricing packages |

## Invariants

- All booking calls to action use the single URL defined by `NEXT_PUBLIC_BOOKING_URL`.
- The home navigation anchors remain `services`, `projets`, `tarifs`, and `contact`.
- The Évolutif offer is the only visually featured pricing offer.
- Demo project names and `example.com` links must not be represented as real client work.
- Legal identity placeholders must be completed and reviewed before production.

## Copy And UX

- Primary locale: French (France).
- Use plain professional language and explain technical value in client terms.
- Do not claim performance, rankings, client outcomes, or certifications without evidence.
- Interactive controls must have visible focus states, keyboard access, and descriptive labels.
- Respect `prefers-reduced-motion`.

## Approval

- Human approval is required before publishing real client names, logos, testimonials, analytics, legal identity, prices that differ from the approved offer, or production form URLs.
- Agents may refine implementation copy without changing prices, scope, or legal meaning.
