import type { Metadata } from "next";
import ToursHero from "@/components/tours/ToursHero";
import ToursGrid from "@/components/tours/ToursGrid";
import BookingBand from "@/components/tours/BookingBand";
import TrustSection from "@/components/tours/TrustSection";

export const metadata: Metadata = {
  title: "ツアー & 体験 | Tours & Experiences",
  description:
    "九州の文化・自然・食を少人数でじっくりと体験。Airbnb ExperiencesとViatorで予約可能。Small-group guided tours in Kyushu.",
};

export default function ToursPage() {
  return (
    <>
      <ToursHero />
      <ToursGrid />
      <BookingBand />
      <TrustSection />
    </>
  );
}
