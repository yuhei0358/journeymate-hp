"use client";

import Link from "next/link";
import { Instagram, Twitter } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-sky-gradient text-white overflow-hidden" role="contentinfo">
      <div className="relative container-site py-16 md:py-20">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 pb-12 border-b border-white/20">
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex flex-col gap-0.5 mb-4 group">
              <span className="text-[1.3rem] font-bold text-white group-hover:text-white/80 transition-colors font-serif">
                JourneyMate
              </span>
              <span className="text-[10px] tracking-[0.14em] text-white/60 font-medium">
                株式会社ジャーニーメイト
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              {t(copy.footer.tagline)}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="text-eyebrow text-white/70 mb-4">Navigation</p>
              <ul className="flex flex-col gap-2.5" role="list">
                {copy.footer.nav.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {t(label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-eyebrow text-white/70 mb-4">Contact</p>
              <ul className="flex flex-col gap-2.5" role="list">
                <li>
                  <a
                    href="mailto:hello@journeymate.jp"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    hello@journeymate.jp
                  </a>
                </li>
                <li>
                  <span className="text-sm text-white/50">Fukuoka, Japan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8">
          <p className="text-xs text-white/50">
            &copy; {year} 株式会社ジャーニーメイト / JourneyMate Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              {copy.footer.legal.map(({ label, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-xs text-white/50 hover:text-white/80 transition-colors"
                >
                  {t(label)}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/journeymate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com/journeymate"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
