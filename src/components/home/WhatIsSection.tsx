"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export default function WhatIsSection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-ivory bg-washi">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel>{t(copy.home.whatIs.eyebrow)}</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-h2 text-sumi-light mt-4 mb-6 whitespace-pre-line font-bold">
              {t(copy.home.whatIs.headline)}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-sumi text-base sm:text-lg leading-relaxed">
              {t(copy.home.whatIs.desc)}
            </p>
          </FadeIn>

          {/* Decorative brush stroke divider */}
          <FadeIn delay={0.3}>
            <div className="mt-10 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
