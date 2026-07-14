import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "お問い合わせ | Contact",
  description:
    "自治体・企業・メディア・個人旅行のお問い合わせを承っています。Partnership and general inquiries for JourneyMate.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
