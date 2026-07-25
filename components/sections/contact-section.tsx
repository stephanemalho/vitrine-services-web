import { ArrowUpRight } from "lucide-react";

import { BookingButton } from "@/components/booking-button";
import { Reveal } from "@/components/reveal";
import { isExternalBookingUrl, siteConfig } from "@/lib/site-config";

function QrPlaceholder() {
  return (
    <svg
      viewBox="0 0 29 29"
      role="img"
      aria-labelledby="qr-title qr-description"
      className="size-full"
    >
      <title id="qr-title">Emplacement du QR code Google Form</title>
      <desc id="qr-description">
        Aperçu décoratif à remplacer par le QR code définitif avant publication.
      </desc>
      <rect width="29" height="29" fill="white" />
      <g fill="currentColor">
        <path d="M2 2h8v8H2zM4 4v4h4V4z" fillRule="evenodd" />
        <path d="M19 2h8v8h-8zM21 4v4h4V4z" fillRule="evenodd" />
        <path d="M2 19h8v8H2zM4 21v4h4v-4z" fillRule="evenodd" />
        <path d="M12 2h2v2h-2zM15 2h2v5h-2zM12 6h2v4h-2zM12 12h3v2h-3zM17 11h2v3h-2zM21 12h6v2h-6zM2 12h3v2H2zM7 12h3v5H7zM2 16h3v2H2zM12 16h2v3h-2zM16 16h5v2h-5zM23 16h4v4h-2v-2h-2zM12 21h2v6h-2zM16 20h3v3h-3zM21 20h2v3h-2zM16 25h5v2h-5zM23 24h4v3h-2v-1h-2z" />
      </g>
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-accent text-accent-foreground">
      <div className="container-shell py-24 sm:py-32">
        <Reveal className="grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.17em] uppercase opacity-60">
              04 · Contact
            </p>
            <h2 className="mt-7 max-w-5xl text-[clamp(3.2rem,7vw,7rem)] leading-[0.9] font-medium tracking-[-0.065em] text-balance">
              Prêt à lancer votre projet&nbsp;?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 opacity-70">
              Parlons de vos objectifs et recevez un devis gratuit,
              compréhensible et adapté à votre activité.
            </p>
            <div className="mt-9">
              <BookingButton inverted />
            </div>
          </div>

          <a
            href={siteConfig.bookingUrl}
            target={isExternalBookingUrl ? "_blank" : undefined}
            rel={isExternalBookingUrl ? "noopener noreferrer" : undefined}
            className="group w-fit border border-foreground/20 bg-background p-3 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            <div className="size-36 sm:size-44">
              <QrPlaceholder />
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-foreground/15 pt-3 text-xs">
              <span>QR code à finaliser</span>
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
