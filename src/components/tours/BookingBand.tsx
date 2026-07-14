"use client";

import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const platforms = [
  {
    name: "Airbnb Experiences",
    logo: "A",
    color: "#FF5A5F",
    bgColor: "#FFF0F0",
    href: "#",
    badge: null,
    labelKey: "airbnb" as const,
  },
  {
    name: "Viator by Tripadvisor",
    logo: "V",
    color: "#1A7A4F",
    bgColor: "#F0FAF5",
    href: "#",
    badge: null,
    labelKey: "viator" as const,
  },
  {
    name: "JourneyMate Direct",
    logo: "J",
    color: "#8B2500",
    bgColor: "#F5E6E0",
    href: "/contact",
    badge: { ja: "最安値保証", en: "Best Price" },
    labelKey: "direct" as const,
  },
];

export default function BookingBand() {
  const { t } = useLang();
  const { booking } = copy.tours;

  return (
    <section className="py-20 md:py-28 bg-ivory" aria-labelledby="booking-heading">
      <div className="container-site">
        <FadeIn className="mb-10">
          <SectionLabel className="mb-4">{t(booking.eyebrow)}</SectionLabel>
          <h2 id="booking-heading" className="text-h2 font-serif text-sumi">
            {t(booking.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {platforms.map(({ name, logo, color, bgColor, href, badge, labelKey }) => (
            <ScrollRevealItem key={name}>
              <a
                href={href}
                target={href === "/contact" ? undefined : "_blank"}
                rel={href !== "/contact" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-border hover:border-crimson/30 hover:shadow-md hover:shadow-crimson/5 transition-all duration-300 group"
              >
                {/* Logo circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                  style={{ background: bgColor, color }}
                >
                  {logo}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-sumi truncate">{t(booking[labelKey])}</p>
                  {badge && (
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                      style={{ background: bgColor, color }}
                    >
                      {t(badge)}
                    </span>
                  )}
                  {!badge && <p className="text-xs text-muted">{name}</p>}
                </div>

                <ExternalLink
                  size={16}
                  className="text-muted group-hover:text-crimson transition-colors shrink-0"
                />
              </a>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        {/* Custom / Private CTA */}
        <FadeIn>
          <div className="border border-dashed border-border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-sumi mb-1">
                {t({ ja: "プライベート・カスタムツアー", en: "Private & Custom Tours" })}
              </p>
              <p className="text-sm text-body">
                {t({ ja: "グループ・ご家族・企業研修など、ご要望に合わせたプランをご提案します。", en: "Tailored plans for groups, families, and corporate events. Let's design your perfect tour." })}
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-white bg-crimson px-6 py-3 rounded-full hover:bg-crimson-hover transition-colors whitespace-nowrap"
            >
              {t(booking.custom)}
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
