const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;

export const siteConfig = {
  name: "Studio S.",
  shortName: "S.",
  description:
    "Création de sites vitrines sur mesure, rapides et optimisés pour le référencement naturel.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelProductionUrl ??
    "http://localhost:3000",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#contact",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "infos@studio-seo.fr",
  legal: {
    name: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "À compléter",
    address: process.env.NEXT_PUBLIC_LEGAL_ADDRESS ?? "À compléter",
    siret: process.env.NEXT_PUBLIC_LEGAL_SIRET ?? "À compléter",
  },
} as const;

export const isExternalBookingUrl = siteConfig.bookingUrl.startsWith("http");
