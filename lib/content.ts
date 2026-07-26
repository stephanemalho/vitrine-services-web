export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projets" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Contact", href: "#contact" },
] as const;

export type ServiceIcon = "code" | "search" | "shield" | "refresh";

export const services = [
  {
    number: "01",
    icon: "code" as ServiceIcon,
    title: "Développement & déploiement",
    description:
      "Un site web moderne et performant, de la première maquette jusqu’à sa mise en ligne.",
  },
  {
    number: "02",
    icon: "search" as ServiceIcon,
    title: "SEO & référencement",
    description:
      "Une structure et des contenus pensés pour gagner en visibilité. Optimisez vos métadonnées et analysez vos performances pour attirer un trafic ciblé.",
  },
  {
    number: "03",
    icon: "shield" as ServiceIcon,
    title: "Analyse & sécurité",
    description:
      "Un suivi proactif de vos performances et de votre trafic. Sécurisez votre infrastructure grâce à des audits réguliers, au chiffrement rigoureux de vos données sensibles et à une protection continue contre les nouvelles vulnérabilités web.",
  },
  {
    number: "04",
    icon: "refresh" as ServiceIcon,
    title: "Maintenance & évolution",
    description:
      "Des mises à jour techniques régulières pour garantir une plateforme fiable et ultra-rapide au quotidien. Accompagnez votre croissance en développant de nouvelles fonctionnalités sur mesure, en optimisant votre architecture globale, et en intégrant les derniers standards technologiques et outils d'assistance pour pérenniser durablement votre activité.",
  },
] as const;

export const projects = [
  {
    title: "École d'Ikebana Ohara",
    type: "Site vitrine",
    description:
      "Une vitrine élégante alliée à une stratégie SEO performante pour maximiser la visibilité en ligne et booster les inscriptions aux ateliers.",
    tags: ["Essentiel", "Art floral", "SEO locale", "Conversion"],
    href: "https://ohara-chapitre-yvelines-paris.fr/",
    image: "/projects/illustration-ikebana-ohara-paris.webp",
    imagePosition: "center",
  },
  {
    title: "Kawaii Shiba - Mameshiba",
    type: "Site web complet",
    description:
      "Plateforme dédiée à l'élevage de Mameshiba. Intervention critique pour réhabiliter un domaine banni par Google, assainir la sécurité et déployer une stratégie d'acquisition à l'échelle européenne.",
    tags: ["Évolutif", "Élevage", "SEO France & Europe", "Réhabilitation de domaine banni"],
    image: "/projects/illustration-kawaii-shiba-mameshiba.webp",
    href: "https://www.kawaii-shiba.com/presentation-elevage",
    imagePosition: "center",
  },
 {
    title: "Aexis Group",
    type: "Site Corporate",
    description:
      "Plateforme internationale et multilingue pour l'expert en pilotage de la performance. Déploiement d'une stratégie d'acquisition de très haut niveau garantissant une position de leader incontesté sur les solutions IBM Planning Analytics.",
    tags: ["Clé en main","Multilingue", "Corporate B2B", "SEO Top Ranking", "IBM Planning Analytics"],
    image: "/projects/illustration-aexis-group.webp",
    href: "https://aexis.fr/services/software-sales",
    imagePosition: "center",
  },
] as const;

export const pricingOffers = [
  {
    name: "Essentiel",
    price: "800 €",
    suffix: "HT",
    description: "Pour lancer une présence en ligne solide et professionnelle.",
    features: [
      "Site one-page jusqu’à 6 sections",
      "Pages légales incluses",
      "Design responsive sur mesure",
      "Mise en ligne et hébergement inclus",
    ],
    cta: "Choisir l’Essentiel",
    featured: false,
  },
  {
    name: "Évolutif",
    price: "Sur devis",
    suffix: "",
    description: "Pour une vitrine qui grandit avec votre activité.",
    features: [
      "Toute la base de l’offre Essentiel",
      "Pages additionnelles à partir de 300 € HT",
      "Suivi SEO et recommandations",
      "Maintenance mensuelle en option",
    ],
    cta: "Demander un devis",
    featured: true,
  },
  {
    name: "Clé en main",
    price: "3 200 €",
    suffix: "HT",
    description: "Pour déléguer la stratégie, le contenu et la réalisation.",
    features: [
      "Toute la base de l’offre Évolutif",
      "4 pages complètes + pages légales",
      "Design et rédaction professionnelle",
      "3 propositions de maquette",
      "Veille concurrentielle ciblée",
      "Maintien et suivi SEO inclus",
      "Maintenance offerte pendant 6 mois",
    ],
    cta: "Opter pour le Clé en main",
    featured: false,
  },
] as const;
