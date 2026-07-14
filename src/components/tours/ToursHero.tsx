"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export default function ToursHero() {
  const { t } = useLang();
  const { hero } = copy.tours;

  return (
    <section
      className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden bg-sky-gradient"
      aria-label="Tours page hero"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <FadeIn immediate>
          <SectionLabel light className="mb-5 text-white/70">{t(hero.eyebrow)}</SectionLabel>
          <h1 className="text-display font-serif text-white mb-6 max-w-3xl whitespace-pre-line">
            {t(hero.headline)}
          </h1>
          <p className="text-base md:text-lg text-white/60 max-w-xl leading-relaxed">
            {t(hero.subheadline)}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
