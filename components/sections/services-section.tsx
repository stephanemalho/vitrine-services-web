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
                <Card className="min-h-full rounded-none border-r border-b border-foreground/15 bg-transparent py-0 ring-0 transition-colors hover:bg-muted/55">
                  <CardHeader className="flex flex-row items-start justify-between rounded-none px-6 pt-6">
                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>
                    <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-end px-6 pt-24 pb-7 sm:pt-28">
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
