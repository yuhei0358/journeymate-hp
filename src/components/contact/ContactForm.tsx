"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/copy";
import { contactInfo, getTour } from "@/lib/tours";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/ui/FadeIn";

// Zod schema (compatible with v3 and v4 basic API)
const schema = z.object({
  name:    z.string().min(1),
  email:   z.string().email(),
  type:    z.string().min(1),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { t } = useLang();
  const { form, info } = copy.contact;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Prefill from /contact?tour=<slug>
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("tour");
    const tour = slug ? getTour(slug) : undefined;
    if (tour) {
      setValue("type", "tour");
      setValue(
        "message",
        `I'd like to book "${tour.title.en}".\nPreferred date:\nNumber of guests:\nWhere I'm staying / ship name:\n`
      );
    }
  }, [setValue]);

  // No backend yet: hand the message to the visitor's email app, addressed to JourneyMate.
  const onSubmit = async (data: FormData) => {
    const subject = `[JourneyMate] ${data.type} inquiry from ${data.name}`;
    const body = `${data.message}\n\n— ${data.name} (${data.email})`;
    window.location.assign(`mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white border border-sumi/15 rounded-xl px-4 py-3.5 text-sm text-sumi placeholder:text-muted/60 focus:outline-none focus:border-crimson focus:ring-2 focus:ring-crimson/30 transition-colors";

  const labelClass = "block text-sm font-medium text-sumi mb-2";

  return (
    <section className="py-24 md:py-32 bg-white" aria-labelledby="contact-form-heading">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">

          {/* Left: Info */}
          <FadeIn direction="left" className="lg:col-span-2">
            <SectionLabel className="mb-5">{t(info.eyebrow)}</SectionLabel>

            <div className="mb-8">
              <p className="text-h3 font-serif text-sumi mb-2">{t(info.company)}</p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-crimson-light flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-crimson" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-sumi">{t(info.location)}</p>
                  <p className="text-xs text-muted">Kyushu, Japan</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg bg-crimson-light flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-crimson" />
                </div>
                <div>
                  <a
                    href={`mailto:${info.email}`}
                    className="text-sm font-semibold text-sumi hover:text-crimson transition-colors"
                  >
                    {info.email}
                  </a>
                  <p className="text-xs text-muted">{t(info.partnership)}</p>
                </div>
              </div>
            </div>

            {/* Partnership note */}
            <div className="mt-10 p-5 bg-ivory rounded-xl border border-border">
              <p className="text-xs font-semibold text-sumi mb-2 uppercase tracking-wider">
                {t({ ja: "パートナーシップ募集中", en: "Open for Partnerships" })}
              </p>
              <p className="text-xs text-body leading-relaxed">
                {t({ ja: "自治体・企業・メディア・観光事業者の皆様とのパートナーシップをお待ちしています。", en: "We welcome partnerships with municipalities, businesses, media, and tourism operators." })}
              </p>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <h2 id="contact-form-heading" className="sr-only">
              {t({ ja: "お問い合わせフォーム", en: "Contact Form" })}
            </h2>

            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 gap-5">
                <div className="w-16 h-16 rounded-full bg-crimson-light flex items-center justify-center">
                  <CheckCircle size={32} className="text-crimson" />
                </div>
                <p className="text-lg font-semibold text-sumi">{t(form.success)}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
                aria-label={t({ ja: "お問い合わせフォーム", en: "Contact form" })}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {t(form.name)} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder={t(form.namePlaceholder)}
                    className={inputClass}
                    aria-invalid={!!errors.name}
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {t({ ja: "お名前を入力してください", en: "Name is required" })}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t(form.email)} <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={form.emailPlaceholder}
                    className={inputClass}
                    aria-invalid={!!errors.email}
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {t({ ja: "有効なメールアドレスを入力してください", en: "Valid email is required" })}
                    </p>
                  )}
                </div>

                {/* Type */}
                <div>
                  <label htmlFor="type" className={labelClass}>
                    {t(form.type)} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="type"
                    className={inputClass}
                    aria-invalid={!!errors.type}
                    {...register("type", { required: true })}
                  >
                    <option value="">
                      {t({ ja: "選択してください", en: "Please select" })}
                    </option>
                    {form.types.map(({ label, value }) => (
                      <option key={value} value={value}>
                        {t(label)}
                      </option>
                    ))}
                  </select>
                  {errors.type && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {t({ ja: "種別を選択してください", en: "Please select inquiry type" })}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={labelClass}>
                    {t(form.message)} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t(form.messagePlaceholder)}
                    className={inputClass}
                    aria-invalid={!!errors.message}
                    {...register("message", { required: true, minLength: 10 })}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 mt-1" role="alert">
                      {t({ ja: "メッセージを入力してください（10文字以上）", en: "Message must be at least 10 characters" })}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-crimson text-white font-semibold text-sm hover:bg-crimson-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-crimson/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t({ ja: "送信中...", en: "Sending..." })}
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      {t(form.submit)}
                    </>
                  )}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
