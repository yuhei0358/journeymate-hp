"use client";

import { FileText, Utensils, MessageCircle, Car } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";

const iconMap = { FileText, Utensils, MessageCircle, Car } as const;

export default function KyushgoTeaser() {
  const { t } = useLang();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-sky-gradient">
      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <FadeIn direction="left">
              <Badge variant="dark" className="mb-4 bg-white/20 border-white/30">
                {t(copy.home.kyushgoTeaser.eyebrow)}
              </Badge>
              <h2 className="text-h2 text-white mt-2 mb-6 whitespace-pre-line drop-shadow-sm">
                {t(copy.home.kyushgoTeaser.headline)}
              </h2>
              <p className="text-white/80 text-base leading-relaxed mb-8">
                {t(copy.home.kyushgoTeaser.desc)}
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {copy.home.kyushgoTeaser.features.map((f, i) => {
                  const Icon = iconMap[f.icon as keyof typeof iconMap];
                  return (
                    <div key={i} className="rounded-xl bg-white/15 border border-white/25 p-4">
                      <Icon size={18} className="text-white mb-2" />
                      <p className="text-white text-sm font-semibold">{t(f.title)}</p>
                      <p className="text-white/60 text-xs mt-0.5">{t(f.desc)}</p>
                    </div>
                  );
                })}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Button as="link" href="/contact" variant="primary" size="md">
                  {t(copy.home.kyushgoTeaser.cta)}
                </Button>
                <Button as="link" href="/kyushgo" variant="ghost" size="md" className="border-white/40 text-white hover:bg-white/20">
                  {t(copy.home.kyushgoTeaser.notify)}
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Service highlights (replaces phone mockup) */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10">
              <h3 className="font-serif text-white text-xl font-bold mb-6">
                {t({ ja: "料金プラン", en: "Pricing Plans" })}
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { plan: "Plan A", name: { ja: "旅程作成", en: "Itinerary Only" }, price: "¥8,000〜" },
                  { plan: "Plan B", name: { ja: "旅程+予約代行", en: "Plan + Bookings" }, price: "¥15,000〜" },
                  { plan: "Plan C", name: { ja: "フルサポート", en: "Full Support" }, price: "¥25,000〜" },
                  { plan: "Plan D", name: { ja: "プレミアム", en: "Premium" }, price: "¥50,000〜" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-white/10 last:border-b-0">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-white/40 w-14">{item.plan}</span>
                      <span className="text-white text-sm font-medium">{t(item.name)}</span>
                    </div>
                    <span className="text-white font-bold text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/50 text-xs mt-4">
                {t({ ja: "※ 旅行日数・内容により変動します", en: "* Prices vary by trip duration and content" })}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
