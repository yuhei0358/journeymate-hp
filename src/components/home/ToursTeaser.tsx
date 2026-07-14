"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export default function ToursTeaser() {
  const { t } = useLang();

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
          {copy.home.featuredExperiences.cards.map((card, i) => (
            <ScrollRevealItem key={i}>
              <div className="group rounded-2xl overflow-hidden bg-white border border-border hover:shadow-xl transition-all duration-300">
                {/* Image area */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                  {(card as { unsplash?: string }).unsplash ? (
                    <Image
                      src={`https://images.unsplash.com/photo-${(card as { unsplash: string }).unsplash}?w=600&h=750&fit=crop&q=80`}
                      alt={t(card.title)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0" style={{ background: card.gradient as string }} />
                  )}
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  {/* Text on image */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <Badge variant="dark" className="self-start mb-3">
                      {t(card.category)}
                    </Badge>
                    <h3 className="font-serif text-white text-xl font-bold mb-1">
                      {t(card.title)}
                    </h3>
                    <p className="text-white/70 text-sm italic">
                      {t(card.tagline)}
                    </p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-muted">
                    <span>{t(card.duration)}</span>
                    <span className="text-crimson font-semibold">{t(card.price)}</span>
                  </div>
                </div>
              </div>
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
