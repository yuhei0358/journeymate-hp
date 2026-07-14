"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import TourCard from "@/components/tours/TourCard";

export default function ToursGrid() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="tours-grid-heading">
      <div className="container-site">
        <FadeIn className="mb-12">
          <SectionLabel className="mb-4">
            {t({ ja: "ツアー一覧", en: "ALL TOURS" })}
          </SectionLabel>
          <h2 id="tours-grid-heading" className="text-h2 font-serif text-sumi">
            {t({ ja: "九州の多彩な体験から選ぶ。", en: "Choose your Kyushu experience." })}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {copy.tours.cards.map((card, i) => (
            <ScrollRevealItem key={i}>
              <TourCard
                category={card.category}
                title={card.title}
                duration={card.duration}
                price={card.price}
                gradient={card.gradient}
                unsplash={(card as { unsplash?: string }).unsplash}
                href="#"
              />
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
