import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BookingButtonProps = {
  label?: string;
  className?: string;
  href?: string;
  inverted?: boolean;
  openInNewTab?: boolean;
};

export function BookingButton({
  label = "Écrire à Studio S.",
  className,
  href = siteConfig.bookingUrl,
  inverted = false,
  openInNewTab,
}: BookingButtonProps) {
  const resolvedHref = href.startsWith("#") ? `/${href}` : href;
  const shouldOpenInNewTab = openInNewTab ?? resolvedHref.startsWith("http");

  return (
    <a
      href={resolvedHref}
      target={shouldOpenInNewTab ? "_blank" : undefined}
      rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
      className={cn(
        buttonVariants({ size: "lg" }),
        "h-12 rounded-none px-5 text-sm font-semibold",
        inverted
          ? "bg-foreground text-background hover:bg-foreground/85"
          : "bg-accent text-accent-foreground hover:bg-accent/85",
        className,
      )}
    >
      {label}
      {shouldOpenInNewTab ? (
        <span className="sr-only"> (ouvre un nouvel onglet)</span>
      ) : null}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
