"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, Info, MapPin, MessageCircle, Mail, Users, X, CalendarClock } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contactInfo, tourPolicies, whatsappLink, type Tour } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";
import ReviewsSection from "@/components/tours/ReviewsSection";

export default function TourDetail({ tour }: { tour: Tour }) {
  const { t } = useLang();
  const title = t(tour.title);
  const wa = whatsappLink(`Hi Yuhei! I'm interested in "${tour.title.en}". Date: ___ / Guests: ___`);
  const mail = `mailto:${contactInfo.email}?subject=${encodeURIComponent(`Booking request: ${tour.title.en}`)}&body=${encodeURIComponent(
    `Hi Yuhei,\n\nI'd like to book "${tour.title.en}".\n\nPreferred date:\nNumber of guests:\nWhere I'm staying / ship name:\nAnything we should know (food, mobility):\n\nThanks!`
  )}`;

  const facts = [
    { icon: Clock, label: { en: "Duration", ja: "所要時間" }, value: tour.duration },
    { icon: CalendarClock, label: { en: "Time", ja: "時間" }, value: tour.time },
    { icon: MapPin, label: { en: "Meeting point", ja: "集合場所" }, value: tour.meetingPoint },
    { icon: Users, label: { en: "Group", ja: "人数" }, value: tour.groupSize },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 bg-sumi text-white overflow-hidden">
        <div className="absolute inset-0">
          {tour.image ? (
            <Image src={tour.image} alt={tour.imageAlt ? t(tour.imageAlt) : title} fill priority className="object-cover opacity-45" sizes="100vw" />
          ) : (
            <div className="absolute inset-0" style={{ background: tour.gradient }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/60 to-transparent" />
        </div>
        <div className="container-site relative z-10 pb-14 md:pb-20">
          <FadeIn immediate>
            <Link href="/tours" className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white mb-6">
              <ArrowLeft size={14} /> {t({ en: "All tours", ja: "ツアー一覧" })}
            </Link>
            <SectionLabel light className="mb-4">{t(tour.category)}</SectionLabel>
            <h1 className="text-display font-serif mb-5 max-w-3xl">{title}</h1>
            <p className="text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">{t(tour.tagline)}</p>
          </FadeIn>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container-site grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <div className="lg:col-span-2 space-y-12">
            <dl className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label.en} className="rounded-xl bg-white border border-border p-4">
                  <dt className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-muted mb-1.5">
                    <Icon size={12} /> {t(label)}
                  </dt>
                  <dd className="text-sm font-semibold text-sumi">{t(value)}</dd>
                </div>
              ))}
            </dl>

            <div>
              <h2 className="text-h3 font-serif text-sumi mb-6">{t({ en: "What you'll do", ja: "ツアーの流れ" })}</h2>
              <ol className="relative border-l border-border ml-3 space-y-7">
                {tour.steps.map((step, i) => (
                  <li key={step.title.en} className="pl-8 relative">
                    <span className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-crimson text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <p className="font-semibold text-sumi mb-1">{t(step.title)}</p>
                    <p className="text-sm text-body leading-relaxed">{t(step.desc)}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-border p-6">
                <h3 className="font-semibold text-sumi mb-4">{t({ en: "Included", ja: "料金に含むもの" })}</h3>
                <ul className="space-y-2.5">
                  {tour.included.map((item) => (
                    <li key={item.en} className="flex gap-2.5 text-sm text-body">
                      <Check size={16} className="text-green shrink-0 mt-0.5" /> {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-border p-6">
                <h3 className="font-semibold text-sumi mb-4">{t({ en: "Not included", ja: "料金に含まないもの" })}</h3>
                <ul className="space-y-2.5">
                  {tour.notIncluded.map((item) => (
                    <li key={item.en} className="flex gap-2.5 text-sm text-body">
                      <X size={16} className="text-muted shrink-0 mt-0.5" /> {t(item)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-h3 font-serif text-sumi mb-4">{t({ en: "Good to know", ja: "ご注意" })}</h2>
              <ul className="space-y-3">
                {[...tour.goodToKnow, tourPolicies.cancellation].map((item) => (
                  <li key={item.en} className="flex gap-2.5 text-sm text-body leading-relaxed">
                    <Info size={16} className="text-indigo shrink-0 mt-0.5" /> {t(item)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking card */}
          <aside id="book" className="scroll-mt-28 lg:sticky lg:top-28 self-start rounded-2xl bg-white border border-border p-6 shadow-sm" aria-label="Book this tour">
            <p className="text-sm text-muted mb-1">{t({ en: "From", ja: "料金" })}</p>
            <p className="mb-1">
              <span className="text-4xl font-bold text-sumi">${tour.priceUsd}</span>{" "}
              <span className="text-sm text-muted">USD</span>
            </p>
            <p className="text-xs text-muted mb-1">{t(tour.priceNote)}</p>
            <p className="text-xs text-muted mb-6">{t(tourPolicies.minimum)}</p>

            <div className="space-y-3">
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-[#1F8F4E] px-5 py-3.5 rounded-full hover:opacity-90 transition-opacity">
                  <MessageCircle size={16} /> {t({ en: "Ask on WhatsApp", ja: "WhatsAppで相談" })}
                </a>
              )}
              <a href={mail} className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-crimson px-5 py-3.5 rounded-full hover:bg-crimson-hover transition-colors">
                <Mail size={16} /> {t({ en: "Request a date by email", ja: "メールで日程をリクエスト" })}
              </a>
              <Link href={`/contact?tour=${tour.slug}`} className="w-full inline-flex items-center justify-center text-sm font-semibold text-sumi border border-border px-5 py-3 rounded-full hover:border-crimson/40 transition-colors">
                {t({ en: "Use the contact form", ja: "お問い合わせフォーム" })}
              </Link>
            </div>

            <p className="text-[11px] text-muted mt-5 leading-relaxed">
              {t({
                en: "Yuhei replies within 24 hours with availability and a secure payment link.",
                ja: "24時間以内に空き状況と決済リンクをお送りします。",
              })}
            </p>
          </aside>
        </div>
      </section>

      <ReviewsSection />

      {/* Mobile booking bar */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-border px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-sm text-muted">
          <span className="text-xl font-bold text-sumi">${tour.priceUsd}</span> {t({ en: "/ person", ja: "/ 1人" })}
        </p>
        <a href="#book" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-crimson px-6 py-3 rounded-full">
          {t({ en: "Check availability", ja: "空き状況を確認" })}
        </a>
      </div>
      <div className="lg:hidden h-20" aria-hidden="true" />
    </>
  );
}
