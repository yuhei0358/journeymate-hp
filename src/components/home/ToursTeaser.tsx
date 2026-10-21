"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import { tours } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";
import TourCard from "@/components/tours/TourCard";

const featured = ["hakata-yatai-night", "dazaifu-yanagawa", "kyushu-shore-day"];

export default function ToursTeaser() {
  const { t } = useLang();
  const cards = featured.map((slug) => tours.find((tour) => tour.slug === slug)).filter((x) => x !== undefined);

  return (
    <section className="py-20 md:py-28 bg-ivory-dark">
      <div className="container-site">
        <FadeIn>
          <SectionLabel>{t(copy.home.featuredExperiences.eyebrow)}</SectionLabel>
          <h2 className="text-h2 text-sumi mt-4 mb-12 md:mb-16 whitespace-pre-line">
            {t(copy.home.featuredExperiences.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((tour) => (
            <ScrollRevealItem key={tour.slug} className="h-full">
              <TourCard tour={tour} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-crimson font-semibold hover:text-crimson-hover transition-colors"
            >
              {t(copy.home.featuredExperiences.cta)}
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
