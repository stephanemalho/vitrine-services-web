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
    image: "/projects/ikuko-portrait-ikebana-card.webp",
    imageAlt: "Ikuko devant une composition d’ikebana de l’école Ohara",
    imagePosition: "center",
  },
  {
    title: "Kawaii Shiba - Mameshiba",
    type: "Site web complet",
    description:
      "Plateforme dédiée à l'élevage de Mameshiba. Intervention critique pour réhabiliter un domaine banni par Google, assainir la sécurité et déployer une stratégie d'acquisition à l'échelle européenne.",
    tags: ["Évolutif", "Élevage", "SEO France & Europe", "Réhabilitation de domaine banni"],
    image: "/projects/shiba-inu-mameshiba-kawaii-shiba-card.webp",
    imageAlt:
      "Chiot Mameshiba roux de l’élevage Kawaii Shiba allongé dans l’herbe",
    href: "https://www.kawaii-shiba.com/presentation-elevage",
    imagePosition: "center",
  },
 {
    title: "Aexis Group",
    type: "Site Corporate",
    description:
      "Plateforme internationale et multilingue pour l'expert en pilotage de la performance. Déploiement d'une stratégie d'acquisition de très haut niveau garantissant une position de leader incontesté sur les solutions IBM Planning Analytics.",
    tags: ["Clé en main","Multilingue", "Corporate B2B", "SEO Top Ranking", "IBM Planning Analytics"],
    image: "/projects/aexis-ibm-gold-partner-card.webp",
    imageAlt: "Logo IBM Gold Partner, partenaire technologique d’Aexis Group",
    href: "https://aexis.fr/services/software-sales",
    imagePosition: "center",
  },
] as const;

export const pricingOffers = [
  {
    slug: "creation-site-vitrine-essentiel",
    name: "Essentiel",
    price: "800 €",
    priceAmount: 800,
    priceCurrency: "EUR",
    suffix: "HT",
    description: "Pour lancer une présence en ligne solide et professionnelle.",
    seoTitle: "Création de site vitrine Essentiel dès 800 € HT",
    seoDescription:
      "Une offre de création de site vitrine one-page sur mesure pour indépendants et TPE, avec design responsive, pages légales, hébergement et mise en ligne.",
    introduction:
      "L’offre Essentiel transforme votre activité, vos services et vos coordonnées en une vitrine claire, rapide à parcourir et adaptée aux usages mobiles. Elle convient aux professionnels qui ont besoin d’un premier site crédible sans multiplier les pages.",
    audience: [
      "Indépendants et consultants qui lancent leur activité",
      "Artisans, commerces et professions de service qui veulent être trouvés en ligne",
      "TPE qui ont besoin d’une présentation concise de leur savoir-faire",
    ],
    objectives: [
      "Présenter clairement votre activité et votre proposition de valeur",
      "Rassurer vos prospects avec une présence professionnelle sur mobile et ordinateur",
      "Créer une base technique propre pour votre visibilité dans les moteurs de recherche",
      "Orienter les visiteurs vers une prise de contact simple",
    ],
    features: [
      "Site one-page jusqu’à 6 sections",
      "Pages légales incluses",
      "Design responsive sur mesure",
      "Mise en ligne et hébergement inclus",
    ],
    process: [
      {
        title: "Cadrage",
        description:
          "Nous clarifions votre cible, vos priorités et l’action attendue de vos visiteurs.",
      },
      {
        title: "Structure et design",
        description:
          "Les six sections maximum sont organisées autour d’un parcours lisible, puis adaptées à votre identité.",
      },
      {
        title: "Intégration",
        description:
          "Vos contenus sont intégrés dans un site responsive, sémantique et statiquement rendu.",
      },
      {
        title: "Mise en ligne",
        description:
          "Après votre validation, le site et ses pages légales sont publiés sur l’hébergement prévu.",
      },
    ],
    considerations: [
      "Cette formule privilégie un message court et une navigation sur une seule page.",
      "Les contenus, visuels et informations légales nécessaires doivent être disponibles avant l’intégration.",
      "Un besoin de pages métier séparées, de rédaction complète ou de suivi SEO régulier relève plutôt des offres Évolutif ou Clé en main.",
    ],
    faqs: [
      {
        question: "L’hébergement et la mise en ligne sont-ils inclus ?",
        answer:
          "Oui. L’offre Essentiel comprend la mise en ligne et l’hébergement du site. Les éventuels besoins additionnels sont précisés avant validation du devis.",
      },
      {
        question: "Le site peut-il évoluer plus tard ?",
        answer:
          "Oui. La base peut être enrichie, mais un projet comportant rapidement plusieurs pages ou fonctionnalités sera mieux cadré dès le départ avec l’offre Évolutif.",
      },
      {
        question: "Le référencement Google est-il garanti ?",
        answer:
          "Non. Le site fournit une base technique et sémantique favorable au référencement, mais aucune position ne peut être garantie. Les résultats dépendent notamment de la concurrence, du contenu et de la notoriété du domaine.",
      },
    ],
    cta: "Choisir l’Essentiel",
    href: "https://forms.gle/WHpTANajJkeHoEBn8",
    featured: false,
  },
  {
    slug: "creation-site-web-evolutif",
    name: "Évolutif",
    price: "Sur devis",
    priceAmount: null,
    priceCurrency: "EUR",
    suffix: "",
    description: "Pour une vitrine qui grandit avec votre activité.",
    seoTitle: "Création de site web évolutif pour professionnels",
    seoDescription:
      "Une offre de site vitrine évolutif pour TPE et PME : socle Essentiel, pages métier additionnelles, recommandations SEO et maintenance en option.",
    introduction:
      "L’offre Évolutif s’adresse aux entreprises qui veulent construire une visibilité durable autour de plusieurs services, expertises ou zones d’intervention. Le périmètre est défini sur devis afin d’aligner l’arborescence, les contenus et les évolutions techniques sur vos priorités commerciales.",
    audience: [
      "TPE et PME qui présentent plusieurs services ou expertises",
      "Professionnels qui veulent travailler des pages ciblées pour le référencement",
      "Structures dont le site doit accueillir de nouveaux contenus ou fonctionnalités",
    ],
    objectives: [
      "Donner à chaque offre importante un espace clair et indexable",
      "Construire une arborescence adaptée aux recherches de vos prospects",
      "Préparer les futures évolutions sans reconstruire le site",
      "Suivre les priorités SEO et techniques après la mise en ligne",
    ],
    features: [
      "Toute la base de l’offre Essentiel",
      "Pages additionnelles à partir de 300 € HT",
      "Suivi SEO et recommandations",
      "Maintenance mensuelle en option",
    ],
    process: [
      {
        title: "Diagnostic",
        description:
          "Nous analysons vos offres, vos publics et les recherches auxquelles le site doit répondre.",
      },
      {
        title: "Arborescence",
        description:
          "Les pages prioritaires et leurs liens sont organisés pour servir à la fois la compréhension et la découverte organique.",
      },
      {
        title: "Production",
        description:
          "Le socle Essentiel est complété par les pages et composants validés dans le devis.",
      },
      {
        title: "Suivi",
        description:
          "Des recommandations SEO sont formulées et une maintenance mensuelle peut être ajoutée selon vos besoins.",
      },
    ],
    considerations: [
      "Le tarif dépend du nombre de pages, des contenus à produire et des fonctionnalités attendues.",
      "Chaque page additionnelle commence à 300 € HT ; son prix final est confirmé dans le devis.",
      "Le suivi SEO fournit des observations et recommandations, sans garantie de positionnement.",
    ],
    faqs: [
      {
        question: "Pourquoi cette offre est-elle uniquement sur devis ?",
        answer:
          "Le nombre de pages, leur profondeur, les contenus et les fonctionnalités varient fortement d’une entreprise à l’autre. Le devis évite de vous faire payer un périmètre inutile ou de sous-estimer votre besoin.",
      },
      {
        question: "Combien coûte une page additionnelle ?",
        answer:
          "Une page additionnelle démarre à 300 € HT. Le prix est ajusté si elle demande un contenu, une mise en page ou une fonctionnalité spécifique.",
      },
      {
        question: "La maintenance est-elle obligatoire ?",
        answer:
          "Non. Elle est proposée en option selon le rythme d’évolution du site et le niveau de suivi souhaité.",
      },
    ],
    cta: "Demander un devis",
    href: "https://forms.gle/hUgSHMTEWC4CRMeR8",
    featured: true,
  },
  {
    slug: "creation-site-web-cle-en-main",
    name: "Clé en main",
    price: "3 200 €",
    priceAmount: 3200,
    priceCurrency: "EUR",
    suffix: "HT",
    description: "Pour déléguer la stratégie, le contenu et la réalisation.",
    seoTitle: "Création de site web clé en main à 3 200 € HT",
    seoDescription:
      "Une offre complète de création de site professionnel : 4 pages, design et rédaction, 3 maquettes, veille concurrentielle, suivi SEO et 6 mois de maintenance.",
    introduction:
      "L’offre Clé en main réunit le cadrage, le design, la rédaction et la production pour les professionnels qui veulent déléguer l’ensemble du projet. Elle donne davantage d’espace à vos offres, à vos preuves et à votre discours commercial, avec un accompagnement SEO et six mois de maintenance inclus.",
    audience: [
      "Dirigeants qui souhaitent déléguer la stratégie et la production du site",
      "Entreprises qui ont besoin d’un discours professionnel sur plusieurs pages",
      "Activités qui veulent comparer leur positionnement avant de construire leur présence en ligne",
    ],
    objectives: [
      "Transformer votre expertise en un parcours commercial cohérent",
      "Présenter vos services sur quatre pages complètes et indexables",
      "Aligner le design, les textes et les priorités de référencement",
      "Accompagner les ajustements du site pendant les six mois suivant sa livraison",
    ],
    features: [
      "Toute la base de l’offre Évolutif",
      "4 pages complètes + pages légales",
      "Design et rédaction professionnelle",
      "3 propositions de maquette",
      "Veille concurrentielle ciblée",
      "Maintien et suivi SEO inclus",
      "Maintenance offerte pendant 6 mois",
    ],
    process: [
      {
        title: "Stratégie",
        description:
          "Nous cadrons votre positionnement, vos publics et les objectifs de chacune des quatre pages.",
      },
      {
        title: "Veille et rédaction",
        description:
          "Une veille concurrentielle ciblée nourrit la structure et la rédaction professionnelle des contenus.",
      },
      {
        title: "Direction visuelle",
        description:
          "Trois propositions de maquette permettent de choisir une direction avant la production complète.",
      },
      {
        title: "Production et accompagnement",
        description:
          "Le site est développé, mis en ligne, puis maintenu pendant six mois avec un suivi SEO.",
      },
    ],
    considerations: [
      "Le périmètre comprend quatre pages complètes, en plus des pages légales.",
      "Les demandes multilingues, applicatives, e-commerce ou dépassant le périmètre annoncé nécessitent un devis complémentaire.",
      "Le suivi SEO accompagne l’amélioration continue mais ne constitue pas une garantie de classement.",
    ],
    faqs: [
      {
        question: "Que signifie “rédaction professionnelle” ?",
        answer:
          "Les contenus des quatre pages sont structurés et rédigés pour expliquer clairement votre offre, rassurer vos prospects et faciliter la lecture en ligne. Les informations métier restent validées avec vous.",
      },
      {
        question: "Comment fonctionnent les trois propositions de maquette ?",
        answer:
          "Elles servent à comparer des directions visuelles avant de retenir celle qui guidera la réalisation du site. Les modalités précises de validation sont cadrées au démarrage.",
      },
      {
        question: "Que couvre la maintenance offerte pendant six mois ?",
        answer:
          "Le contenu exact de la maintenance est confirmé dans le devis et le cadre de collaboration. Toute demande qui modifie substantiellement le périmètre initial fait l’objet d’un chiffrage séparé.",
      },
    ],
    cta: "Opter pour le Clé en main",
    href: "https://forms.gle/5UNnbaRyky5ptK2X6",
    featured: false,
  },
] as const;

export type PricingOffer = (typeof pricingOffers)[number];

export function getPricingOffer(slug: string) {
  return pricingOffers.find((offer) => offer.slug === slug);
}

export function getPricingOfferPath(offer: PricingOffer) {
  return `/offres/${offer.slug}` as const;
}
