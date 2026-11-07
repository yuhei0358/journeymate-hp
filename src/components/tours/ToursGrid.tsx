"use client";

import { useLang } from "@/lib/i18n";
import { tours, tourPolicies } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import TourCard from "@/components/tours/TourCard";

export default function ToursGrid() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-ivory" aria-labelledby="tours-grid-heading">
      <div className="container-site">
        <FadeIn className="mb-12">
          <SectionLabel className="mb-4">
            {t({ ja: "ツアー一覧", en: "PRIVATE TOURS" })}
          </SectionLabel>
          <h2 id="tours-grid-heading" className="text-h2 font-serif text-sumi mb-3">
            {t({ ja: "九州の5つのプライベートツアー。", en: "Five private ways to see Kyushu." })}
          </h2>
          <p className="text-sm text-muted max-w-2xl">
            {t(tourPolicies.minimum)} {t(tourPolicies.cancellation)}
          </p>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tours.map((tour) => (
            <ScrollRevealItem key={tour.slug} className="h-full">
              <TourCard tour={tour} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
