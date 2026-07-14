"use client";

import { Users, Globe, Settings, Shield } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const trustIcons = [Globe, Users, Settings, Shield];

export default function TrustSection() {
  const { t } = useLang();
  const { trust } = copy.tours;

  return (
    <section
      className="py-20 md:py-28 bg-white border-t border-border"
      aria-labelledby="trust-heading"
    >
      <div className="container-site">
        <FadeIn className="mb-10">
          <SectionLabel className="mb-4">{t(trust.eyebrow)}</SectionLabel>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.items.map(({ title, desc }, i) => {
            const Icon = trustIcons[i];
            return (
              <ScrollRevealItem key={i}>
                <div className="flex gap-4 p-5 rounded-xl bg-ivory">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-crimson-light flex items-center justify-center">
                    <Icon size={18} className="text-crimson" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-serif text-sumi mb-1">{t(title)}</p>
                    <p className="text-xs text-muted leading-relaxed">{t(desc)}</p>
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
