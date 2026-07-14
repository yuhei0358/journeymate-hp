"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import type { BilingualString } from "@/lib/copy";

interface TourCardProps {
  category: BilingualString;
  title: BilingualString;
  duration: BilingualString;
  price: BilingualString;
  gradient: string;
  unsplash?: string;
  href?: string;
}

export default function TourCard({
  category,
  title,
  duration,
  price,
  gradient,
  unsplash,
  href = "#",
}: TourCardProps) {
  const { t } = useLang();

  return (
    <article className="group">
      <Link href={href} className="block">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl mb-4" style={{ aspectRatio: "4/3" }}>
          {unsplash ? (
            <Image
              src={`https://images.unsplash.com/photo-${unsplash}?w=600&h=450&fit=crop&q=80`}
              alt={t(title)}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <ImagePlaceholder
              gradient={gradient}
              aspectRatio="4/3"
              className="group-hover:scale-[1.04] transition-transform duration-500"
            />
          )}
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-crimson bg-crimson-light px-2.5 py-0.5 rounded-full">
            {t(category)}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-muted">
            <Clock size={11} />
            {t(duration)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-sumi mb-1 group-hover:text-crimson transition-colors">
          {t(title)}
        </h3>

        {/* Price */}
        <p className="text-sm text-muted">{t(price)}</p>
      </Link>
    </article>
  );
}
