"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export default function MissionGrid() {
  const { t } = useLang();
  const { mission, values, revitalization, scale } = copy.vision;

  return (
    <>
      {/* ── Mission ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="mission-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="left">
              <SectionLabel className="mb-4">{t(mission.eyebrow)}</SectionLabel>
              <h2 id="mission-heading" className="text-h2 font-serif text-sumi">
                {t(mission.statement)}
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-base md:text-lg text-body leading-relaxed">
                {t(mission.desc)}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-ivory" aria-labelledby="values-heading">
        <div className="container-site">
          <FadeIn className="mb-14">
            <SectionLabel className="mb-4">{t(values.eyebrow)}</SectionLabel>
            <h2 id="values-heading" className="text-h2 font-serif text-sumi">
              {t(values.headline)}
            </h2>
          </FadeIn>

          <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.items.map(({ title, desc }, i) => (
              <ScrollRevealItem key={i}>
                <div className="p-8 bg-white rounded-2xl border border-border hover:border-crimson/30 hover:shadow-md hover:shadow-crimson/5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-eyebrow text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="text-h3 font-serif text-sumi mb-3">{t(title)}</h3>
                  <p className="text-sm text-body leading-relaxed">{t(desc)}</p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>

      {/* ── Revitalization ──────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="revitalization-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn direction="left" className="lg:sticky lg:top-32">
              <SectionLabel className="mb-4">{t(revitalization.eyebrow)}</SectionLabel>
              <h2 id="revitalization-heading" className="text-h2 font-serif text-sumi">
                {t(revitalization.headline)}
              </h2>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-base text-body leading-[1.9]">{t(revitalization.desc)}</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Scale Strategy ──────────────────────────────── */}
      <section
        className="py-24 md:py-32 relative overflow-hidden bg-sky-gradient"
        aria-labelledby="scale-heading"
      >

        <div className="container-site relative z-10">
          <FadeIn className="mb-14">
            <SectionLabel light className="mb-4 text-white/70">{t(scale.eyebrow)}</SectionLabel>
            <h2 id="scale-heading" className="text-h2 font-serif text-white whitespace-pre-line">
              {t(scale.headline)}
            </h2>
          </FadeIn>

          <ScrollRevealContainer className="flex flex-col gap-0">
            {scale.steps.map((step, i) => (
              <ScrollRevealItem key={i}>
                <div className="flex gap-6 py-6 border-b border-white/10 last:border-0">
                  <span className="text-eyebrow text-white/50 shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg md:text-xl font-medium text-white/90">
                    {typeof step === "string" ? step : t(step)}
                  </p>
                </div>
              </ScrollRevealItem>
            ))}
          </ScrollRevealContainer>
        </div>
      </section>
    </>
  );
}
