"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const businesses = [
  {
    ...copy.home.businesses.tour,
    href: "/tours",
    borderColor: "border-crimson/20",
    hoverShadow: "hover:shadow-crimson/10",
    numberColor: "text-crimson/30",
    linkColor: "text-crimson",
  },
  {
    ...copy.home.businesses.app,
    href: "/kyushgo",
    borderColor: "border-indigo/20",
    hoverShadow: "hover:shadow-indigo/10",
    numberColor: "text-indigo/30",
    linkColor: "text-indigo",
  },
  {
    ...copy.home.businesses.guesthouse,
    href: "/contact",
    borderColor: "border-gold/30 border-dashed",
    hoverShadow: "hover:shadow-gold/10",
    numberColor: "text-gold/30",
    linkColor: "text-gold",
    comingSoon: true,
  },
];

export default function PillarsSection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-ivory-dark">
      <div className="container-site">
        <FadeIn>
          <SectionLabel>{t(copy.home.businesses.eyebrow)}</SectionLabel>
          <h2 className="text-h2 text-sumi mt-4 mb-12 md:mb-16 whitespace-pre-line">
            {t(copy.home.businesses.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid gap-6 md:grid-cols-3">
          {businesses.map((biz) => (
            <ScrollRevealItem key={biz.number}>
              <Link
                href={biz.href}
                className={cn(
                  "group block rounded-2xl border bg-white p-6 sm:p-8 transition-all duration-300 hover:shadow-xl h-full",
                  biz.borderColor,
                  biz.hoverShadow
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={cn("font-serif text-3xl font-bold", biz.numberColor)}>
                    {biz.number}
                  </span>
                  {"comingSoon" in biz && biz.comingSoon && (
                    <Badge variant="gold">
                      {t((biz as unknown as { badge: { ja: string; en: string } }).badge)}
                    </Badge>
                  )}
                </div>

                <h3 className="text-h3 text-sumi mb-3">{t(biz.title)}</h3>

                <p className="text-body text-sm leading-relaxed mb-6">{t(biz.desc)}</p>

                <span className={cn(
                  "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
                  biz.linkColor
                )}>
                  {t(biz.link)}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
