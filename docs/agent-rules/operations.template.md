# Operations Rules

## Environments

| Environment | Purpose | Owner |
|---|---|---|
| local | implementation and browser validation | active developer |
| preview | pull-request review on Vercel | human maintainer |
| production | public website | human maintainer |

## Deployment

- Platform: Vercel.
- Install command: `npm ci`.
- Build command: `npm run build`.
- Deployments and production environment variables remain human-controlled.
- Roll back by promoting the last known-good Vercel deployment.

## Configuration

- `NEXT_PUBLIC_SITE_URL` sets canonical URLs outside Vercel production discovery.
- `NEXT_PUBLIC_BOOKING_URL` sets every booking CTA.
- Legal identity and contact fields are public values documented in `.env.example`.

## Observability

No analytics or error-reporting service is enabled by default. Adding one requires explicit approval, consent analysis, legal copy updates, and documentation of data handling.

## Local Ports

| Service | Default | Agent override |
|---|---:|---:|
| Next.js app | `3000` | coordinator-assigned `3xxx` |
