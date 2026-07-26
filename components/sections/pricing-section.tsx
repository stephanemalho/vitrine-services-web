import Link from "next/link";
import { Check } from "lucide-react";

import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getPricingOfferPath, pricingOffers } from "@/lib/content";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="tarifs" className="scroll-mt-20 bg-secondary py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="03 · Tarifs"
            title="Des offres lisibles, sans surprise et adaptées à votre ambition."
            description="Chaque projet commence par un échange gratuit pour cadrer vos objectifs, votre calendrier et définir le niveau d’accompagnement qui convient le mieux en fonction de votre secteur d’activité et de votre stratégie digitale."
          />
        </Reveal>

        <div className="mt-16 grid items-stretch gap-px bg-foreground/15 lg:grid-cols-3">
          {pricingOffers.map((offer, index) => (
            <Reveal key={offer.name} delay={index * 0.08}>
              <article className="group/offer relative h-full">
                <Card
                  className={cn(
                    "h-full rounded-none py-0 ring-0 transition-transform duration-300 group-hover/offer:-translate-y-1",
                    offer.featured
                      ? "bg-accent text-accent-foreground"
                      : "bg-background",
                  )}
                >
                  <CardHeader className="rounded-none border-b border-current/15 px-6 py-6">
                    <div className="flex min-h-7 items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold">
                        <Link
                          href={getPricingOfferPath(offer)}
                          className="after:absolute after:inset-0 focus-visible:outline-offset-4"
                          aria-label={`Découvrir l’offre ${offer.name}`}
                        >
                          {offer.name}
                        </Link>
                      </h3>
                      {offer.featured ? (
                        <Badge className="rounded-none bg-foreground text-background">
                          Le plus choisi
                        </Badge>
                      ) : null}
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col px-6 py-8">
                    <div className="flex items-end gap-2">
                      <p className="text-4xl font-medium tracking-tighter">
                        {offer.price}
                      </p>
                      {offer.suffix ? (
                        <p className="pb-1 font-mono text-xs opacity-60">
                          {offer.suffix}
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-4 min-h-12 text-sm leading-6 opacity-70">
                      {offer.description}
                    </p>
                    <ul className="mt-9 flex-1 space-y-4">
                      {offer.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm leading-6"
                        >
                          <Check
                            className="mt-1 size-4 shrink-0"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-9 text-sm font-semibold underline decoration-current/40 underline-offset-4">
                      Voir le détail de l’offre
                    </p>
                    <BookingButton
                      label={offer.cta}
                      href={offer.href}
                      inverted={offer.featured}
                      openInNewTab
                      className={cn(
                        "relative z-10 mt-5 w-full",
                        !offer.featured &&
                          "border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background",
                      )}
                    />
                  </CardContent>
                </Card>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-muted-foreground">
          Les tarifs affichés sont indicatifs et seront confirmés après
          définition précise du périmètre. Les abonnements et prestations
          additionnelles font l’objet d’un devis séparé.
        </p>
      </div>
    </section>
  );
}
