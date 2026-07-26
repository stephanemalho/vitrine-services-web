"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation } from "@/lib/content";
import {
  bookingHref,
  isExternalBookingUrl,
  siteConfig,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  solid?: boolean;
};

export function SiteHeader({ solid = false }: SiteHeaderProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSolid = solid || hasScrolled;

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300",
        isSolid
          ? "border-border bg-background/95 text-foreground backdrop-blur-md"
          : "border-white/15 bg-transparent text-white",
      )}
    >
      <div className="container-shell flex h-18 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold tracking-[-0.02em]"
        >
          <span
            className={cn(
              "grid size-8 place-items-center border font-mono text-xs transition-colors",
              isSolid ? "border-foreground" : "border-white/60",
            )}
            aria-hidden="true"
          >
            S
          </span>
          {siteConfig.name}
          <span className="sr-only"> — accueil</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-sm text-current/75 transition-colors hover:text-current"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={bookingHref}
            target={isExternalBookingUrl ? "_blank" : undefined}
            rel={isExternalBookingUrl ? "noopener noreferrer" : undefined}
            className={cn(
              buttonVariants(),
              "h-10 rounded-none px-4 font-semibold",
              isSolid
                ? "bg-foreground text-background hover:bg-foreground/85"
                : "bg-accent text-accent-foreground hover:bg-accent/85",
            )}
          >
            Prendre rendez-vous
          </a>
        </div>

        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger
            render={
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="size-11 rounded-none lg:hidden"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              />
            }
          >
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent
            className="w-full border-foreground/15 bg-background sm:max-w-md"
            aria-describedby="navigation-description"
          >
            <SheetHeader className="border-b p-6">
              <SheetTitle className="text-left text-xl">
                {siteConfig.name}
              </SheetTitle>
              <SheetDescription
                id="navigation-description"
                className="text-left"
              >
                Création web, SEO et accompagnement.
              </SheetDescription>
            </SheetHeader>
            <nav
              className="flex flex-1 flex-col px-6 py-10"
              aria-label="Navigation mobile"
            >
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between border-b py-5 text-2xl tracking-tight"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-muted-foreground">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="p-6">
              <a
                href={bookingHref}
                target={isExternalBookingUrl ? "_blank" : undefined}
                rel={isExternalBookingUrl ? "noopener noreferrer" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 w-full rounded-none bg-foreground px-5 text-sm font-semibold text-background",
                )}
              >
                Prendre rendez-vous
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
