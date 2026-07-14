"use client";

import { Handshake } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export default function TrustPartnersSection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-ivory bg-washi">
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <SectionLabel>{t(copy.home.trustPartners.eyebrow)}</SectionLabel>
            <h2 className="text-h2 text-sumi-light mt-4 mb-4 whitespace-pre-line font-bold">
              {t(copy.home.trustPartners.headline)}
            </h2>
            <p className="text-sumi text-base leading-relaxed">
              {t(copy.home.trustPartners.desc)}
            </p>
          </FadeIn>
        </div>

        <ScrollRevealContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {copy.home.trustPartners.items.map((item, i) => (
            <ScrollRevealItem key={i}>
              <div className="bg-white rounded-xl border border-border p-5 text-center h-full flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Handshake size={18} className="text-gold" />
                </div>
                <p className="text-sumi text-sm font-semibold">{t(item.type)}</p>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Button as="link" href="/contact" variant="outline" size="md">
              {t(copy.home.trustPartners.cta)}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
