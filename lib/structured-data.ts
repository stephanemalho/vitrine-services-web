import {
  getPricingOfferPath,
  pricingOffers,
  type PricingOffer,
} from "./content";
import { siteConfig } from "./site-config";

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.siteUrl).toString();
}

function organizationReference() {
  return { "@id": `${siteConfig.siteUrl}/#organization` };
}

function websiteReference() {
  return { "@id": `${siteConfig.siteUrl}/#website` };
}

function getOfferData(offer: PricingOffer) {
  const url = absoluteUrl(getPricingOfferPath(offer));
  const priceData =
    offer.priceAmount === null
      ? {}
      : {
          price: String(offer.priceAmount),
          priceCurrency: offer.priceCurrency,
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(offer.priceAmount),
            priceCurrency: offer.priceCurrency,
            valueAddedTaxIncluded: false,
          },
        };

  return {
    "@type": "Offer",
    url,
    name: `Offre ${offer.name}`,
    description:
      offer.priceAmount === null
        ? `${offer.description} Tarif établi sur devis selon le périmètre.`
        : `${offer.description} Tarif affiché hors taxes et confirmé après cadrage du périmètre.`,
    seller: organizationReference(),
    ...priceData,
    itemOffered: {
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Création de site web — offre ${offer.name}`,
      description: offer.seoDescription,
      url,
      serviceType: "Création de site web professionnel",
      provider: organizationReference(),
      areaServed: {
        "@type": "Country",
        name: "France",
      },
    },
  };
}

function getOrganizationData({ withCatalog = false } = {}) {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/images/studio-s.png"),
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: "France",
    },
    knowsAbout: [
      "Création de site vitrine",
      "Développement web",
      "Référencement naturel",
      "Accessibilité web",
      "Maintenance de site web",
    ],
    ...(withCatalog
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Offres de création de site web",
            itemListElement: pricingOffers.map(getOfferData),
          },
        }
      : {}),
  };
}

export function getHomeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationData({ withCatalog: true }),
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "fr-FR",
        publisher: organizationReference(),
      },
    ],
  };
}

export function getOfferStructuredData(offer: PricingOffer) {
  const path = getPricingOfferPath(offer);
  const url = absoluteUrl(path);
  const offerData = getOfferData(offer);

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationData(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: offer.seoTitle,
        description: offer.seoDescription,
        inLanguage: "fr-FR",
        isPartOf: websiteReference(),
        about: { "@id": `${url}#service` },
      },
      {
        ...offerData.itemOffered,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Indépendants, TPE et PME",
        },
        offers: {
          ...offerData,
          itemOffered: { "@id": `${url}#service` },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: siteConfig.siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `Offre ${offer.name}`,
            item: url,
          },
        ],
      },
    ],
  };
}
