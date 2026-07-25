# Studio S. — site vitrine

Site vitrine statique pour une activité de création de sites web et de
référencement SEO. Le projet utilise Next.js App Router, TypeScript, Tailwind
CSS, shadcn/ui avec Base UI et Framer Motion.

## Démarrage

Prérequis : Node.js `24.18.0` et npm `11`.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Le site est ensuite disponible sur
[http://localhost:3000](http://localhost:3000).

## Configuration

Les valeurs publiques sont centralisées dans `.env.local` :

| Variable | Usage |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique de production |
| `NEXT_PUBLIC_BOOKING_URL` | URL Google Form de tous les CTA |
| `NEXT_PUBLIC_CONTACT_EMAIL` | adresse affichée sur le site |
| `NEXT_PUBLIC_LEGAL_NAME` | nom ou raison sociale |
| `NEXT_PUBLIC_LEGAL_ADDRESS` | adresse de l’éditeur |
| `NEXT_PUBLIC_LEGAL_SIRET` | SIRET de l’éditeur |

Les projets de démonstration, les coordonnées et le QR code doivent être
remplacés avant publication.

## Validation

```bash
npm run lint
npm run test
npm run typecheck
npm run audit:production
npm run build
```

`npm run validate` enchaîne les quatre contrôles.

## Déploiement

La cible prévue est Vercel. Renseigner les variables publiques dans le projet
Vercel, vérifier la preview, puis laisser le mainteneur promouvoir la version
validée en production.
