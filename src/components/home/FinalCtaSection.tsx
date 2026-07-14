"use client";

import { MapPin, Smartphone, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import Button from "@/components/ui/Button";
import KamonMotif from "@/components/ui/KamonMotif";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

const ctaPaths = [
  {
    key: "tours" as const,
    href: "/tours",
    icon: MapPin,
    variant: "primary" as const,
  },
  {
    key: "app" as const,
    href: "/kyushgo",
    icon: Smartphone,
    variant: "gold" as const,
  },
  {
    key: "contact" as const,
    href: "/contact",
    icon: Mail,
    variant: "outline" as const,
  },
];

export default function FinalCtaSection() {
  const { t } = useLang();

  return (
    <section className="relative py-20 md:py-28 bg-sky-gradient overflow-hidden">
      {/* Decorative kamon */}
      <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16">
        <KamonMotif size={200} color="white" opacity={0.08} />
      </div>

      <div className="container-site relative z-10">
        <FadeIn>
          <h2 className="text-h2 text-white text-center mb-12 md:mb-16 whitespace-pre-line drop-shadow-sm">
            {t(copy.home.finalCta.headline)}
          </h2>
        </FadeIn>

        <ScrollRevealContainer className="grid gap-4 sm:grid-cols-3 max-w-3xl mx-auto">
          {ctaPaths.map(({ key, href, icon: Icon, variant }) => (
            <ScrollRevealItem key={key}>
              <div className="bg-white/20 border border-white/30 rounded-2xl p-6 text-center flex flex-col items-center gap-4 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-serif text-white font-bold text-lg">
                  {t(copy.home.finalCta[key].title)}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t(copy.home.finalCta[key].desc)}
                </p>
                <Button as="link" href={href} variant={variant} size="sm" className="mt-auto">
                  {t(copy.home.finalCta[key].title)}
                </Button>
              </div>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>
      </div>
    </section>
  );
}
