import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "grid gap-7 border-t pt-6 lg:grid-cols-[1fr_2fr]",
        inverted ? "border-white/20" : "border-foreground/20",
        className,
      )}
    >
      <p
        className={cn(
          "font-mono text-xs font-medium tracking-[0.18em] uppercase",
          inverted ? "text-white/60" : "text-muted-foreground",
        )}
      >
        {eyebrow}
      </p>
      <div className="space-y-5">
        <h2 className="max-w-4xl text-4xl leading-[1.02] font-medium tracking-[-0.045em] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "max-w-2xl text-base leading-7 sm:text-lg",
              inverted ? "text-white/65" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
