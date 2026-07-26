import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { isExternalBookingUrl, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BookingButtonProps = {
  label?: string;
  className?: string;
  inverted?: boolean;
};

export function BookingButton({
  label = "Écrire à Studio S.",
  className,
  inverted = false,
}: BookingButtonProps) {
  return (
    <a
      href={siteConfig.bookingUrl}
      target={isExternalBookingUrl ? "_blank" : undefined}
      rel={isExternalBookingUrl ? "noopener noreferrer" : undefined}
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
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}
