import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/content";

const imagePosition = {
  center: "object-center",
  left: "object-left",
  right: "object-right",
} as const;

export function ProjectsSection() {
  return (
    <section
      id="projets"
      className="scroll-mt-20 bg-foreground py-24 text-background sm:py-32"
    >
      <div className="container-shell">
        <Reveal>
          <SectionHeading
            eyebrow="02 · Projets"
            title="Des expériences numériques sobres, mémorables et orientées résultat."
            description="Une sélection de réalisations pensées pour conjuguer identité, visibilité et efficacité, amenée à s’enrichir au fil des collaborations."
            inverted
          />
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/20 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`Voir ${project.title} (nouvel onglet)`}
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-4/3 overflow-hidden bg-black">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className={`object-cover opacity-95 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-100 ${imagePosition[project.imagePosition]}`}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-black/62 transition-colors duration-500 group-hover:bg-black/[0.14]"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 border border-white/10" />
                    <p className="absolute top-4 left-4 bg-foreground px-3 py-2 font-mono text-[0.65rem] tracking-[0.13em] text-white/60 uppercase transition-colors duration-300 group-hover:text-white">
                      {project.type}
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col border-x border-b border-white/20 p-6">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="text-2xl font-medium tracking-[-0.035em]">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        className="mt-1 size-5 shrink-0 text-white/50 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-6 text-white/55 transition-colors duration-300 group-hover:text-white">
                      {project.description}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-none border-white/20 bg-transparent font-normal text-white/65 transition-colors duration-300 group-hover:border-white/40 group-hover:text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
