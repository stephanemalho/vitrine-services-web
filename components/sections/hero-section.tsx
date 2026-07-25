import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { BookingButton } from "@/components/booking-button";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-svh overflow-hidden bg-foreground text-background"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-[7vw] hidden w-px bg-white/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[7vw] hidden w-px bg-white/10 lg:block"
        aria-hidden="true"
      />
      <div className="container-shell flex min-h-svh flex-col pt-32 pb-8 sm:pt-40 lg:pt-44">
        <div className="grid flex-1 items-end gap-12 lg:grid-cols-[1.22fr_0.78fr]">
          <div className="pb-6 lg:pb-12">
            <p className="mb-7 flex items-center gap-3 font-mono text-xs tracking-[0.17em] text-white/55 uppercase">
              <span className="size-2 bg-accent" aria-hidden="true" />
              Studio web indépendant · France
            </p>
            <h1 className="max-w-5xl text-[clamp(3.4rem,7.8vw,7.4rem)] leading-[0.89] font-medium tracking-[-0.065em] text-balance">
              Une présence en ligne qui{" "}
              <span className="text-accent">fait avancer</span> votre activité.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              De la conception à la mise en production, je crée des sites
              vitrines sur mesure, rapides et optimisés pour transformer vos
              visiteurs en clients.
            </p>
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <BookingButton label="Discutons de votre projet" />
              <a
                href="#projets"
                className="group inline-flex items-center gap-3 text-sm text-white/65 hover:text-white"
              >
                Voir les réalisations
                <ArrowDown
                  className="size-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="pb-6 lg:pb-12">
            <div className="relative aspect-[4/3] overflow-hidden border border-white/20 bg-black">
              <Image
                src="/images/portfolio-studio.webp"
                alt="Studio sombre avec un ordinateur présentant une interface web et des indicateurs de performance"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/80 p-4 text-xs text-white/70"
                aria-hidden="true"
              >
                <span className="font-mono tracking-[0.12em] uppercase">
                  Design · Code · SEO
                </span>
                <span>2026</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-x border-b border-white/20">
              {[
                ["95+", "Lighthouse"],
                ["100 %", "Responsive"],
                ["SSG", "Par défaut"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-r border-white/20 px-3 py-4 last:border-r-0 sm:px-4"
                >
                  <p className="text-lg font-semibold">{value}</p>
                  <p className="mt-1 text-[0.68rem] text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-5 font-mono text-[0.68rem] tracking-[0.14em] text-white/45 uppercase">
          <span>Stratégie digitale</span>
          <span>Développement Next.js</span>
          <span className="hidden sm:inline">Référencement naturel</span>
        </div>
      </div>
    </section>
  );
}
