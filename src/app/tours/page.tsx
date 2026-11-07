import type { Metadata } from "next";
import ToursHero from "@/components/tours/ToursHero";
import ToursGrid from "@/components/tours/ToursGrid";
import BookingBand from "@/components/tours/BookingBand";
import TrustSection from "@/components/tours/TrustSection";
import ReviewsSection from "@/components/tours/ReviewsSection";

export const metadata: Metadata = {
  title: "ツアー & 体験 | Tours & Experiences",
  description:
    "Private tours in Fukuoka and Kyushu with local guide Yuhei: yatai food nights, Dazaifu & Yanagawa, Nagasaki, Yufuin & Beppu, and cruise shore days.",
};

export default function ToursPage() {
  return (
    <>
      <ToursHero />
      <ToursGrid />
      <ReviewsSection />
      <BookingBand />
      <TrustSection />
    </>
  );
}
