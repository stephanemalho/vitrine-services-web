import Link from "next/link";
import { ArrowUp } from "lucide-react";

import { navigation } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-shell py-10 sm:py-14">
        <div className="grid gap-10 border-t border-white/20 pt-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-[-0.03em]"
              aria-label={`${siteConfig.name} — accueil`}
            >
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Des sites utiles, rapides et durables pour transformer votre
              présence en ligne en véritable levier de croissance.
            </p>
          </div>
          <nav className="grid content-start gap-3" aria-label="Pied de page">
            <p className="mb-2 font-mono text-[0.68rem] tracking-[0.16em] text-white/45 uppercase">
              Navigation
            </p>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className="w-fit text-sm text-white/70 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="grid content-start gap-3">
            <p className="mb-2 font-mono text-[0.68rem] tracking-[0.16em] text-white/45 uppercase">
              Informations
            </p>
            <Link
              href="/mentions-legales"
              className="w-fit text-sm text-white/70 hover:text-white"
            >
              Mentions légales
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="w-fit text-sm text-white/70 hover:text-white"
            >
              {siteConfig.contactEmail}
            </a>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-5 border-t border-white/20 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.</p>
          <a
            href="#top"
            className="flex w-fit items-center gap-2 text-white/70 hover:text-white"
          >
            Retour en haut
            <ArrowUp className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
