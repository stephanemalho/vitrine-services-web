import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site ${siteConfig.name}.`,
  alternates: {
    canonical: "/mentions-legales",
  },
};

function LegalValue({ children }: { children: React.ReactNode }) {
  const isPlaceholder = children === "À compléter";

  return (
    <span className={isPlaceholder ? "bg-accent px-1 font-medium" : undefined}>
      {children}
    </span>
  );
}

export default function LegalNoticePage() {
  return (
    <>
      <SiteHeader solid />
      <main className="pt-18">
        <article className="container-shell py-20 sm:py-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Retour à l’accueil
          </Link>

          <header className="mt-12 max-w-4xl border-t border-foreground/20 pt-7">
            <p className="font-mono text-xs tracking-[0.17em] text-muted-foreground uppercase">
              Informations légales
            </p>
            <h1 className="mt-7 text-5xl leading-[0.95] font-medium tracking-[-0.055em] sm:text-7xl">
              Mentions légales
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground">
              Cette page fournit une base structurée. Les champs surlignés
              doivent être complétés et relus avant toute publication.
            </p>
          </header>

          <div className="mt-16 grid gap-px bg-foreground/15 lg:grid-cols-2">
            <section className="bg-background p-7 sm:p-9">
              <h2 className="text-2xl font-medium tracking-tight">
                Éditeur du site
              </h2>
              <dl className="mt-7 space-y-4 text-sm leading-6">
                <div>
                  <dt className="text-muted-foreground">
                    Nom ou raison sociale
                  </dt>
                  <dd>
                    <LegalValue>{siteConfig.legal.name}</LegalValue>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Adresse</dt>
                  <dd>
                    <LegalValue>{siteConfig.legal.address}</LegalValue>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">SIRET</dt>
                  <dd>
                    <LegalValue>{siteConfig.legal.siret}</LegalValue>
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Contact</dt>
                  <dd>
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${siteConfig.contactEmail}`}
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className="bg-background p-7 sm:p-9">
              <h2 className="text-2xl font-medium tracking-tight">
                Hébergement
              </h2>
              <p className="mt-7 text-sm leading-6 text-muted-foreground">
                Le site est destiné à être hébergé par Vercel Inc., 440 N
                Barranca Avenue #4133, Covina, CA 91723, États-Unis. Cette
                information devra être confirmée lors du déploiement final.
              </p>
            </section>

            <section className="bg-background p-7 sm:p-9">
              <h2 className="text-2xl font-medium tracking-tight">
                Propriété intellectuelle
              </h2>
              <p className="mt-7 text-sm leading-6 text-muted-foreground">
                Les textes, éléments graphiques, photographies et composants du
                site sont protégés par le droit de la propriété intellectuelle.
                Toute reproduction ou adaptation nécessite l’autorisation
                préalable de leur titulaire.
              </p>
            </section>

            <section className="bg-background p-7 sm:p-9">
              <h2 className="text-2xl font-medium tracking-tight">
                Données personnelles
              </h2>
              <p className="mt-7 text-sm leading-6 text-muted-foreground">
                Le site n’intègre aucun formulaire ni outil de mesure d’audience
                par défaut. Une prise de rendez-vous peut rediriger vers Google
                Forms, soumis à sa propre politique de confidentialité. Toute
                future collecte devra être documentée avant activation.
              </p>
            </section>
          </div>

          <p className="mt-10 text-xs text-muted-foreground">
            Dernière mise à jour : 25 juillet 2026.
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
