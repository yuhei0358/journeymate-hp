"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

export default function RoadmapSection() {
  const { t } = useLang();
  const { roadmap } = copy.kyushgo;

  return (
    <section
      className="py-24 md:py-32 bg-ivory"
      aria-labelledby="roadmap-heading"
    >
      <div className="container-site">
        <FadeIn className="mb-14 md:mb-20">
          <SectionLabel className="mb-4">{t(roadmap.eyebrow)}</SectionLabel>
          <h2 id="roadmap-heading" className="text-h2 font-serif text-sumi">
            {t(roadmap.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {roadmap.steps.map(({ phase, area, detail, status }, i) => (
            <ScrollRevealItem key={i}>
              <div
                className={cn(
                  "relative flex flex-col p-6 rounded-2xl border transition-all duration-300",
                  status === "current"
                    ? "bg-gold text-white border-gold shadow-lg shadow-gold/20"
                    : status === "next"
                    ? "bg-white border-gold/30 hover:border-gold/50"
                    : "bg-white border-border opacity-60"
                )}
              >
                {/* Status indicator */}
                {status === "current" && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">Now</span>
                  </div>
                )}

                <p
                  className={cn(
                    "text-eyebrow mb-3",
                    status === "current" ? "text-white/60" : "text-muted"
                  )}
                >
                  {phase}
                </p>
                <h3
                  className={cn(
                    "text-xl font-bold font-serif mb-2",
                    status === "current" ? "text-white" : "text-sumi"
                  )}
                >
                  {t(area)}
                </h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed",
                    status === "current" ? "text-white/70" : "text-body"
                  )}
                >
                  {t(detail)}
                </p>

                {/* Step number */}
                <div
                  className={cn(
                    "mt-auto pt-5 text-5xl font-black opacity-10 text-right",
                    status === "current" ? "text-white" : "text-sumi"
                  )}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
