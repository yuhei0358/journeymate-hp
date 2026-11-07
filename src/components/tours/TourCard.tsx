"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { Tour } from "@/lib/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  const { t } = useLang();

  return (
    <article className="group h-full">
      <Link
        href={`/tours/${tour.slug}`}
        className="flex h-full flex-col rounded-2xl bg-white border border-border overflow-hidden hover:shadow-xl hover:border-crimson/20 transition-all duration-300"
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
          {tour.image ? (
            <Image
              src={tour.image}
              alt={tour.imageAlt ? t(tour.imageAlt) : t(tour.title)}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <ImagePlaceholder
              gradient={tour.gradient}
              aspectRatio="4/3"
              className="rounded-none h-full group-hover:scale-[1.04] transition-transform duration-500"
            >
              <span className="absolute inset-0 flex items-center justify-center px-6 text-center font-serif text-xl text-white/85">
                {t(tour.title)}
              </span>
            </ImagePlaceholder>
          )}
          {tour.forCruise && (
            <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-indigo px-2.5 py-1 rounded-full">
              {t({ en: "Cruise guests", ja: "クルーズ客向け" })}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-crimson bg-crimson-light px-2.5 py-0.5 rounded-full">
              {t(tour.category)}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-muted">
              <Clock size={11} />
              {t(tour.duration)}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-sumi mb-2 group-hover:text-crimson transition-colors">
            {t(tour.title)}
          </h3>
          <p className="text-sm text-body leading-relaxed mb-4">{t(tour.tagline)}</p>

          <div className="mt-auto flex items-end justify-between pt-3 border-t border-border">
            <p className="text-sm text-muted">
              <span className="text-xl font-bold text-sumi">${tour.priceUsd}</span>{" "}
              {t({ en: "/ person", ja: "/ 1人" })}
            </p>
            <span className="flex items-center gap-1 text-[11px] text-muted">
              <Users size={11} />
              {t(tour.groupSize)}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
