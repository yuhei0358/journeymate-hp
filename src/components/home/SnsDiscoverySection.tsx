"use client";

import { MessageCircle, FileText, Map, Ticket, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const iconMap = { MessageCircle, FileText, Map, Ticket } as const;

const stepColors = [
  { bg: "bg-crimson/10", icon: "text-crimson", ring: "ring-crimson/20" },
  { bg: "bg-indigo/10", icon: "text-indigo", ring: "ring-indigo/20" },
  { bg: "bg-gold/10", icon: "text-gold", ring: "ring-gold/20" },
  { bg: "bg-green/10", icon: "text-green", ring: "ring-green/20" },
];

export default function SnsDiscoverySection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-ivory bg-washi">
      <div className="container-site">
        <div className="text-center mb-12 md:mb-16">
          <FadeIn>
            <SectionLabel>{t(copy.home.snsDiscovery.eyebrow)}</SectionLabel>
            <h2 className="text-h2 text-sumi-light mt-4 mb-4 whitespace-pre-line font-bold">
              {t(copy.home.snsDiscovery.headline)}
            </h2>
            <p className="text-sumi text-base max-w-xl mx-auto whitespace-pre-line">
              {t(copy.home.snsDiscovery.desc)}
            </p>
          </FadeIn>
        </div>

        {/* Flow steps */}
        <ScrollRevealContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {copy.home.snsDiscovery.steps.map((step, i) => {
            const Icon = iconMap[step.icon as keyof typeof iconMap];
            const color = stepColors[i];
            return (
              <ScrollRevealItem key={i}>
                <div className="relative bg-white rounded-2xl p-6 border border-border h-full">
                  {/* Step number */}
                  <span className="text-[10px] font-semibold text-muted tracking-widest uppercase mb-4 block">
                    Step {i + 1}
                  </span>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center mb-4 ring-1 ${color.ring}`}>
                    <Icon size={22} className={color.icon} />
                  </div>

                  {/* Text */}
                  <h3 className="font-serif font-bold text-sumi text-lg mb-2">
                    {t(step.title)}
                  </h3>
                  <p className="text-body text-sm leading-relaxed">
                    {t(step.desc)}
                  </p>

                  {/* Arrow connector (visible on desktop between cards) */}
                  {i < 3 && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-ivory border border-border items-center justify-center">
                      <ArrowRight size={10} className="text-muted" />
                    </div>
                  )}
                </div>
              </ScrollRevealItem>
            );
          })}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
