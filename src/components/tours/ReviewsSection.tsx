"use client";

import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { reviews } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export default function ReviewsSection({ className = "bg-white" }: { className?: string }) {
  const { t } = useLang();

  return (
    <section className={`py-20 md:py-28 ${className}`} aria-labelledby="reviews-heading">
      <div className="container-site">
        <FadeIn className="mb-10">
          <SectionLabel className="mb-4">{t({ en: "GUEST REVIEWS", ja: "お客様の声" })}</SectionLabel>
          <h2 id="reviews-heading" className="text-h2 font-serif text-sumi mb-3">
            {t({ en: "Five stars from every guest so far.", ja: "これまでのゲスト全員から★5。" })}
          </h2>
          <p className="text-sm text-muted">
            {t({
              en: "Verified reviews of Yuhei's Fukuoka yatai experience on Airbnb, April 2025. Quoted as written.",
              ja: "Airbnb体験「福岡名物『屋台』に行こう」の実際のレビュー（2025年4月）。原文のまま掲載。",
            })}
          </p>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <ScrollRevealItem key={r.name} className="h-full">
              <figure className="h-full flex flex-col rounded-2xl border border-border bg-ivory p-6">
                <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-sm text-sumi leading-relaxed mb-5 flex-1">“{r.text}”</blockquote>
                <figcaption className="text-xs text-muted">
                  <span className="font-semibold text-sumi">{r.name}</span> · {r.from} · Airbnb
                </figcaption>
              </figure>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
