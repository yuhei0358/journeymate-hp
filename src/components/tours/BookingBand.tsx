"use client";

import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, FileText } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import { contactInfo, whatsappLink } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import { ScrollRevealContainer, ScrollRevealItem } from "@/components/ui/ScrollReveal";

export default function BookingBand() {
  const { t } = useLang();
  const { booking } = copy.tours;
  const wa = whatsappLink("Hi Yuhei! I'd like to ask about a private tour in Kyushu.");

  const options = [
    wa && {
      icon: MessageCircle,
      title: { en: "WhatsApp", ja: "WhatsApp" },
      desc: { en: "Fastest reply. Tell us your dates and group size.", ja: "一番早く返信できます。日程と人数を教えてください。" },
      href: wa,
      external: true,
    },
    {
      icon: Mail,
      title: { en: "Email", ja: "メール" },
      desc: { en: contactInfo.email, ja: contactInfo.email },
      href: `mailto:${contactInfo.email}?subject=${encodeURIComponent("Private tour inquiry")}`,
      external: false,
    },
    {
      icon: FileText,
      title: { en: "Contact form", ja: "お問い合わせフォーム" },
      desc: { en: "Pick a tour and send a request.", ja: "ツアーを選んでリクエストを送信。" },
      href: "/contact",
      external: false,
    },
  ].filter(Boolean) as {
    icon: typeof Mail;
    title: { en: string; ja: string };
    desc: { en: string; ja: string };
    href: string;
    external: boolean;
  }[];

  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="booking-heading">
      <div className="container-site">
        <FadeIn className="mb-10">
          <SectionLabel className="mb-4">{t(booking.eyebrow)}</SectionLabel>
          <h2 id="booking-heading" className="text-h2 font-serif text-sumi mb-3">
            {t({ en: "Book directly with Yuhei.", ja: "ご予約はYuheiに直接。" })}
          </h2>
          <p className="text-sm text-muted max-w-2xl">
            {t({
              en: "Send your date and group size. You get availability and a secure payment link within 24 hours.",
              ja: "日程と人数をお送りください。24時間以内に空き状況と決済リンクをお送りします。",
            })}
          </p>
        </FadeIn>

        <ScrollRevealContainer className={`grid grid-cols-1 gap-5 mb-10 ${options.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {options.map(({ icon: Icon, title, desc, href, external }) => (
            <ScrollRevealItem key={title.en}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 bg-ivory rounded-2xl border border-border hover:border-crimson/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-crimson-light text-crimson shrink-0">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-sumi">{t(title)}</p>
                  <p className="text-xs text-muted truncate">{t(desc)}</p>
                </div>
              </a>
            </ScrollRevealItem>
          ))}
        </ScrollRevealContainer>

        <FadeIn>
          <div className="border border-dashed border-border rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-base font-semibold text-sumi mb-1">
                {t({ ja: "オーダーメイドの九州旅", en: "A custom Kyushu journey" })}
              </p>
              <p className="text-sm text-body">
                {t({
                  ja: "2〜4日の旅、阿蘇、職人や酒蔵の訪問など、ご希望に合わせてお作りします。",
                  en: "Two to four days, Aso, artisans and sake breweries — we design it around you.",
                })}
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
