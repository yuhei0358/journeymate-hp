"use client";

import Link from "next/link";
import { Bell, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

export default function DownloadCTA() {
  const { t } = useLang();
  const { download } = copy.kyushgo;

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden bg-sky-gradient"
      aria-labelledby="download-heading"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-15"
        style={{
          background: "radial-gradient(ellipse, #C4A265 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10 text-center">
        <FadeIn>
          <SectionLabel light className="mb-6 text-white/70">{t(download.eyebrow)}</SectionLabel>
          <h2 id="download-heading" className="text-h2 font-serif text-white mb-4">
            {t(download.headline)}
          </h2>
          <p className="text-base text-white/70 max-w-md mx-auto mb-10 leading-relaxed">
            {t(download.subtext)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Notify me button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gold text-white font-semibold text-sm hover:bg-gold/90 transition-colors shadow-lg shadow-gold/20"
            >
              <Bell size={16} />
              {t(download.notify)}
            </Link>

            {/* Partner CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/5 hover:text-white transition-all"
            >
              {t(download.partner)}
              <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
