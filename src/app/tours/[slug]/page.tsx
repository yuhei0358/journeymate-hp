import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTour, tours } from "@/lib/tours";
import TourDetail from "@/components/tours/TourDetail";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: `${tour.title.en} | ${tour.title.ja}`,
    description: tour.tagline.en,
    openGraph: {
      title: tour.title.en,
      description: tour.tagline.en,
      images: tour.image ? [tour.image] : undefined,
    },
  };
}

export default async function TourPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  return <TourDetail tour={tour} />;
}
