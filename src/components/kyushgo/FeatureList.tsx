"use client";

import { MapPin, Ticket, Utensils, Globe2, Compass, Bell } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin, Ticket, Utensils, Globe2, Compass, Bell,
};

export default function FeatureList() {
  const { t } = useLang();
  const { features } = copy.kyushgo;

  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="features-heading">
      <div className="container-site">
        <FadeIn className="mb-14 md:mb-20">
          <SectionLabel className="mb-4">{t(features.eyebrow)}</SectionLabel>
          <h2 id="features-heading" className="text-h2 font-serif text-sumi max-w-xl">
            {t(features.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.items.map(({ icon, title, desc }, i) => {
            const Icon = iconMap[icon] || MapPin;
            return (
              <ScrollRevealItem key={i}>
                <div className="flex gap-5 p-6 border border-border rounded-2xl hover:border-indigo/30 hover:shadow-md hover:shadow-indigo/5 transition-all duration-300 group h-full">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-light flex items-center justify-center group-hover:bg-indigo transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-indigo group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold font-serif text-sumi mb-2">
                      {t(title)}
                    </h3>
                    <p className="text-sm text-body leading-relaxed">{t(desc)}</p>
                  </div>
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
