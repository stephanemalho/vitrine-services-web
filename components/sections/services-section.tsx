import {
  CodeXml,
  RefreshCw,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { services, type ServiceIcon } from "@/lib/content";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: CodeXml,
  search: Search,
  shield: ShieldCheck,
  refresh: RefreshCw,
};

const chartSegments = [
  { start: 68, end: 57 },
  { start: 57, end: 47 },
  { start: 47, end: 35 },
  { start: 35, end: 22 },
] as const;

function GrowthChart({ index }: { index: number }) {
  const segment = chartSegments[index];

  return (
    <div
      className="pointer-events-none absolute inset-0 hidden overflow-hidden text-foreground xl:block"
      aria-hidden="true"
    >
      <svg
        className="size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M 25 0 V 100 M 50 0 V 100 M 75 0 V 100 M 0 25 H 100 M 0 50 H 100 M 0 75 H 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
          className="opacity-[0.06]"
        />
        <path
          d={`M 0 ${segment.start} C 30 ${segment.start}, 68 ${segment.end}, 100 ${segment.end}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className="opacity-25 transition-opacity duration-300 group-hover/card:opacity-50"
        />
        <circle
          cx="50"
          cy={(segment.start + segment.end) / 2}
          r="1.15"
          fill="var(--accent)"
          stroke="currentColor"
          strokeWidth="0.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M 50 ${(segment.start + segment.end) / 2 - 4} V ${(segment.start + segment.end) / 2 + 4} M 46 ${(segment.start + segment.end) / 2} H 54`}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.55"
          vectorEffect="non-scaling-stroke"
          className="opacity-20"
        />
      </svg>

      <span
        className="absolute left-6 font-mono text-[0.58rem] tracking-[0.14em] text-muted-foreground/55 uppercase"
        style={{ top: `${segment.end - 5}%` }}
      >
        Progression · 0{index + 1}
      </span>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="01 · Services"
            title="Des expertises réunies pour faire de votre site un outil de croissance."
            description="Un accompagnement de bout en bout, avec un interlocuteur unique et des choix techniques expliqués simplement."
          />
        </Reveal>

        <div className="mt-16 grid border-t border-l border-foreground/15 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal key={service.number} delay={index * 0.06}>
                <Card className="relative min-h-full rounded-none border-r border-b border-foreground/15 bg-transparent py-0 ring-0 transition-colors hover:bg-muted/55">
                  <GrowthChart index={index} />
                  <CardHeader className="relative z-10 flex flex-row items-start justify-between rounded-none px-6 pt-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </CardHeader>
                  <CardContent className="relative z-10 flex flex-1 flex-col justify-end px-6 pt-24 pb-7 sm:pt-28">
                    <h3 className="text-xl leading-tight font-medium tracking-[-0.025em]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
