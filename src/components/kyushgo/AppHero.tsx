"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/ui/FadeIn";
import PhoneMockup from "@/components/ui/PhoneMockup";

export default function AppHero() {
  const { t } = useLang();
  const { hero } = copy.kyushgo;

  return (
    <section
      className="relative pt-40 pb-16 md:pt-52 md:pb-20 overflow-hidden bg-sky-gradient"
      aria-label="Kyushu GO hero"
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <FadeIn direction="left" immediate>
            <Badge variant="dark" className="mb-6">{t(hero.badge)}</Badge>
            <SectionLabel light className="mb-4 text-white/70">{t(hero.eyebrow)}</SectionLabel>
            <h1 className="text-display font-serif text-white mb-6 whitespace-pre-line">
              {t(hero.headline)}
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-10 max-w-md">
              {t(hero.subheadline)}
            </p>

            {/* App Store / Play Store placeholders */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 px-5 py-3 rounded-xl opacity-60 cursor-not-allowed select-none">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[9px] text-white/60 leading-none">Download on the</p>
                  <p className="text-[13px] font-semibold text-white leading-tight">App Store</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 bg-white/10 border border-white/20 px-5 py-3 rounded-xl opacity-60 cursor-not-allowed select-none">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" aria-hidden="true">
                  <path d="M3.18 23.82L14.7 12.3 3.18.18C2.47.58 2 1.29 2 2.12v19.76c0 .83.47 1.54 1.18 1.94zM20.12 10.54l-2.83-1.63L14.02 12l3.27 3.09 2.83-1.63c.81-.46.81-1.64 0-2.1V10.54zM4.5 1.51l10.43 9.87-1.5 1.42-8.93-8.45V1.51zm10.43 12.62L4.5 22.5v-2.84l8.93-8.45 1.5 1.42z" />
                </svg>
                <div>
                  <p className="text-[9px] text-white/60 leading-none">Get it on</p>
                  <p className="text-[13px] font-semibold text-white leading-tight">Google Play</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/30 mt-3">{t(hero.download)}</p>
          </FadeIn>

          {/* Right: Phone mockup */}
          <FadeIn direction="right" immediate className="flex justify-center lg:justify-end">
            <PhoneMockup className="drop-shadow-2xl" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
