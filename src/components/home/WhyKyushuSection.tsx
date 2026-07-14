"use client";

import { Flame, Mountain, UtensilsCrossed, Landmark } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const iconMap = {
  Flame,
  Mountain,
  UtensilsCrossed,
  Landmark,
} as const;

export default function WhyKyushuSection() {
  const { t } = useLang();

  return (
    <section className="relative py-20 md:py-28 bg-sky-gradient overflow-hidden">
      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — headline */}
          <div className="lg:sticky lg:top-32">
            <FadeIn direction="left">
              <SectionLabel light className="text-white/70">{t(copy.home.whyKyushu.eyebrow)}</SectionLabel>
              <h2 className="text-h2 text-white mt-4 mb-4 whitespace-pre-line drop-shadow-sm">
                {t(copy.home.whyKyushu.headline)}
              </h2>
              <p className="text-white/70 text-base leading-relaxed">
                {t(copy.home.whyKyushu.desc)}
              </p>
            </FadeIn>
          </div>

          {/* Right — 4 reasons */}
          <ScrollRevealContainer className="flex flex-col gap-0">
            {copy.home.whyKyushu.reasons.map((reason, i) => {
              const Icon = iconMap[reason.icon as keyof typeof iconMap];
              return (
                <ScrollRevealItem key={i}>
                  <div className="flex gap-5 py-6 border-b border-white/20 last:border-b-0">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-white font-bold text-lg mb-1.5 drop-shadow-sm">
                        {t(reason.title)}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {t(reason.desc)}
                      </p>
                    </div>
                  </div>
                </ScrollRevealItem>
              );
            })}
          </ScrollRevealContainer>
        </div>
      </div>
    </section>
  );
}
