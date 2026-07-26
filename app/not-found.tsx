import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n’existe pas ou a été déplacée.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader solid />
      <main id="contenu-principal" className="pt-18">
        <section className="container-shell flex min-h-[70svh] flex-col justify-center py-20">
          <p className="font-mono text-xs tracking-[0.17em] text-muted-foreground uppercase">
            Erreur 404
          </p>
          <h1 className="mt-7 max-w-4xl text-[clamp(3.4rem,8vw,7rem)] leading-[0.9] font-medium tracking-[-0.06em] text-balance">
            Cette page reste à construire.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            L’adresse est peut-être incorrecte ou le contenu a été déplacé.
            Revenez à l’accueil pour retrouver les services, réalisations et
            offres de Studio S.
          </p>
          <Link
            href="/"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-9 h-12 w-fit rounded-none bg-foreground px-5 text-background",
            )}
          >
            <ArrowLeft aria-hidden="true" />
            Retour à l’accueil
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
