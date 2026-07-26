import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-accent text-accent-foreground">
      <div className="container-shell py-24 sm:py-32">
        <Reveal className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.17em] uppercase opacity-80">
              04 · Contact
            </p>
            <h2 className="mt-7 max-w-5xl text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] font-medium tracking-[-0.065em] text-balance">
              Prêt à lancer votre projet&nbsp;?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">
              Parlons de vos objectifs et réalisons un devis gratuit et sans engagement, clair,
              lisible et adapté à votre demande.
            </p>
            <div className="mt-9">
              <BookingButton
                href={`mailto:${siteConfig.contactEmail}`}
                inverted
              />
            </div>
          </div>

          <a
            href={siteConfig.contactFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir le formulaire de contact Studio S. dans un nouvel onglet"
            className="group w-fit border border-foreground/20 bg-background p-3 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <div className="size-36 sm:size-44">
              <Image
                src="/contact/adobe-express-qr-code.svg"
                alt="QR code vers le formulaire de contact Studio S."
                width={500}
                height={500}
                className="size-full"
                unoptimized
              />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-foreground/15 pt-3 text-xs">
              <span>Formulaire de contact</span>
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
