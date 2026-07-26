import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { BookingButton } from "@/components/booking-button";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getPricingOffer,
  getPricingOfferPath,
  pricingOffers,
} from "@/lib/content";
import { getOfferStructuredData } from "@/lib/structured-data";

type OfferPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return pricingOffers.map((offer) => ({ slug: offer.slug }));
}

export async function generateMetadata({
  params,
}: OfferPageProps): Promise<Metadata> {
  const { slug } = await params;
  const offer = getPricingOffer(slug);

  if (!offer) {
    return {};
  }

  const path = getPricingOfferPath(offer);

  return {
    title: offer.seoTitle,
    description: offer.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: offer.seoTitle,
      description: offer.seoDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: offer.seoTitle,
      description: offer.seoDescription,
    },
  };
}

export default async function OfferPage({ params }: OfferPageProps) {
  const { slug } = await params;
  const offer = getPricingOffer(slug);

  if (!offer) {
    notFound();
  }

  const relatedOffers = pricingOffers.filter(
    (relatedOffer) => relatedOffer.slug !== offer.slug,
  );

  return (
    <>
      <JsonLd data={getOfferStructuredData(offer)} />
      <SiteHeader solid />
      <main id="contenu-principal" className="pt-18">
        <article>
          <header className="bg-foreground py-16 text-background sm:py-24">
            <div className="container-shell">
              <nav aria-label="Fil d’Ariane" className="text-sm text-white/65">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex min-h-11 items-center hover:text-white"
                    >
                      Accueil
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">
                    Offre {offer.name}
                  </li>
                </ol>
              </nav>

              <div className="mt-12 grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
                <div>
                  <p className="font-mono text-xs tracking-[0.17em] text-accent uppercase">
                    Création de site web professionnel
                  </p>
                  <h1 className="mt-7 max-w-5xl text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] font-medium tracking-[-0.06em] text-balance">
                    Offre {offer.name}
                  </h1>
                  <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
                    {offer.introduction}
                  </p>
                </div>

                <aside
                  aria-label={`Tarif de l’offre ${offer.name}`}
                  className="border border-white/20 p-6 sm:p-8"
                >
                  <p className="font-mono text-xs tracking-[0.14em] text-white/55 uppercase">
                    Tarif indicatif
                  </p>
                  <p className="mt-4 text-4xl font-medium tracking-[-0.04em]">
                    {offer.price}
                    {offer.suffix ? (
                      <span className="ml-2 font-mono text-xs tracking-normal text-white/60">
                        {offer.suffix}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-white/60">
                    Le tarif final et le périmètre sont confirmés après un
                    échange gratuit.
                  </p>
                  <BookingButton
                    label={offer.cta}
                    href={offer.href}
                    openInNewTab
                    className="mt-7 w-full"
                  />
                </aside>
              </div>
            </div>
          </header>

          <div className="container-shell py-20 sm:py-28">
            <section
              aria-labelledby="offre-pour-qui"
              className="grid gap-10 border-t border-foreground/20 pt-7 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  01 · Votre besoin
                </p>
                <h2
                  id="offre-pour-qui"
                  className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  À qui s’adresse cette offre&nbsp;?
                </h2>
              </div>
              <div className="grid gap-px bg-foreground/15 sm:grid-cols-3">
                {offer.audience.map((item) => (
                  <div key={item} className="bg-background p-6 sm:p-8">
                    <Check
                      className="size-5 text-foreground"
                      aria-hidden="true"
                    />
                    <p className="mt-5 text-base leading-7">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              aria-labelledby="objectifs-offre"
              className="mt-24 grid gap-10 border-t border-foreground/20 pt-7 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  02 · Objectifs
                </p>
                <h2
                  id="objectifs-offre"
                  className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  Ce que le projet doit accomplir
                </h2>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {offer.objectives.map((objective, index) => (
                  <li
                    key={objective}
                    className="border border-foreground/15 p-6 text-base leading-7"
                  >
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    <p className="mt-4">{objective}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="inclus-offre"
              className="mt-24 bg-secondary p-7 sm:p-10 lg:p-14"
            >
              <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                03 · Périmètre
              </p>
              <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
                <h2
                  id="inclus-offre"
                  className="text-4xl leading-tight font-medium tracking-[-0.045em] sm:text-5xl"
                >
                  Ce qui est inclus dans l’offre {offer.name}
                </h2>
                <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-4 py-5 text-base leading-7"
                    >
                      <Check
                        className="mt-1 size-5 shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              aria-labelledby="methode-offre"
              className="mt-24 border-t border-foreground/20 pt-7"
            >
              <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                04 · Méthode
              </p>
              <h2
                id="methode-offre"
                className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.045em] sm:text-5xl"
              >
                Un déroulement lisible, du cadrage à la mise en ligne
              </h2>
              <ol className="mt-12 grid gap-px bg-foreground/15 md:grid-cols-2 lg:grid-cols-4">
                {offer.process.map((step, index) => (
                  <li key={step.title} className="bg-background p-6 sm:p-8">
                    <span className="font-mono text-xs text-muted-foreground">
                      0{index + 1}
                    </span>
                    <h3 className="mt-10 text-xl font-medium">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section
              aria-labelledby="a-prevoir-offre"
              className="mt-24 grid gap-10 border-t border-foreground/20 pt-7 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  05 · Transparence
                </p>
                <h2
                  id="a-prevoir-offre"
                  className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  Ce qu’il faut prévoir
                </h2>
              </div>
              <ul className="space-y-5 text-base leading-7 text-muted-foreground">
                {offer.considerations.map((consideration) => (
                  <li
                    key={consideration}
                    className="border-l-2 border-accent pl-5"
                  >
                    {consideration}
                  </li>
                ))}
              </ul>
            </section>

            <section
              aria-labelledby="questions-offre"
              className="mt-24 grid gap-10 border-t border-foreground/20 pt-7 lg:grid-cols-[1fr_2fr]"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  06 · Questions
                </p>
                <h2
                  id="questions-offre"
                  className="mt-5 text-3xl font-medium tracking-[-0.04em] sm:text-4xl"
                >
                  Questions fréquentes
                </h2>
              </div>
              <div className="divide-y divide-foreground/20 border-y border-foreground/20">
                {offer.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-5 text-lg font-medium marker:content-none">
                      {faq.question}
                      <span
                        className="font-mono text-xl transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-2xl pt-3 pr-10 text-sm leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <section className="bg-accent py-20 text-accent-foreground sm:py-24">
            <div className="container-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-xs tracking-[0.16em] uppercase opacity-80">
                  Votre projet
                </p>
                <h2 className="mt-6 max-w-4xl text-4xl leading-tight font-medium tracking-[-0.05em] sm:text-6xl">
                  Vérifions ensemble si l’offre {offer.name} correspond à votre
                  besoin.
                </h2>
              </div>
              <BookingButton
                label={offer.cta}
                href={offer.href}
                openInNewTab
                inverted
              />
            </div>
          </section>

          <section aria-labelledby="autres-offres" className="py-20 sm:py-24">
            <div className="container-shell">
              <div className="flex flex-col gap-5 border-t border-foreground/20 pt-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    Comparer
                  </p>
                  <h2
                    id="autres-offres"
                    className="mt-5 text-3xl font-medium tracking-[-0.04em]"
                  >
                    Les autres offres
                  </h2>
                </div>
                <Link
                  href="/#tarifs"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline underline-offset-4"
                >
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Retour aux tarifs
                </Link>
              </div>
              <div className="mt-10 grid gap-px bg-foreground/15 md:grid-cols-2">
                {relatedOffers.map((relatedOffer) => (
                  <Link
                    key={relatedOffer.slug}
                    href={getPricingOfferPath(relatedOffer)}
                    className="group flex min-h-40 items-end justify-between gap-6 bg-background p-6 transition-colors hover:bg-secondary sm:p-8"
                  >
                    <div>
                      <p className="font-mono text-xs text-muted-foreground uppercase">
                        {relatedOffer.price} {relatedOffer.suffix}
                      </p>
                      <p className="mt-4 text-2xl font-medium">
                        Offre {relatedOffer.name}
                      </p>
                    </div>
                    <ArrowRight
                      className="size-5 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
