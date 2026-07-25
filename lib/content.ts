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
      "Une structure et des contenus pensés pour gagner en visibilité. Nous optimisons vos métadonnées et analysons vos performances pour attirer un trafic ciblé.",
  },
  {
    number: "03",
    icon: "shield" as ServiceIcon,
    title: "Analyse & sécurité",
    description:
      "Un suivi proactif de vos performances et de votre trafic. Nous sécurisons votre infrastructure grâce à des audits réguliers, au chiffrement rigoureux de vos données sensibles et à une protection continue contre les nouvelles vulnérabilités web.",
  },
  {
    number: "04",
    icon: "refresh" as ServiceIcon,
    title: "Maintenance & évolution",
    description:
      "Des mises à jour techniques régulières pour garantir une plateforme fiable et ultra-rapide au quotidien. Nous accompagnons votre croissance en développant de nouvelles fonctionnalités sur mesure, en optimisant votre architecture globale, et en intégrant les derniers standards technologiques et outils d'assistance pour pérenniser durablement votre activité.",
  },
] as const;

export const projects = [
  {
    title: "Maison Sillage",
    type: "Site éditorial",
    description:
      "Une présence de marque immersive, pensée pour raconter un savoir-faire et générer des demandes qualifiées.",
    tags: ["Next.js", "Direction artistique", "SEO"],
    href: "https://example.com",
    imagePosition: "center",
  },
  {
    title: "Cabinet Lumen",
    type: "Acquisition locale",
    description:
      "Une vitrine claire et rassurante qui transforme une expertise complexe en parcours de contact fluide.",
    tags: ["Contenu", "SEO local", "Performance"],
    href: "https://example.com",
    imagePosition: "left",
  },
  {
    title: "Atelier Nord",
    type: "Portfolio",
    description:
      "Un portfolio sobre et rapide qui laisse toute la place aux réalisations et à la prise de rendez-vous.",
    tags: ["UX", "Accessibilité", "Analytics"],
    href: "https://example.com",
    imagePosition: "right",
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
      "4 pages complètes + pages légales",
      "Design et rédaction professionnelle",
      "3 propositions de maquette",
      "Veille concurrentielle ciblée",
    ],
    cta: "Opter pour le Clé en main",
    featured: false,
  },
] as const;
