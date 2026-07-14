import type { Metadata } from "next";
import AppHero from "@/components/kyushgo/AppHero";
import FeatureList from "@/components/kyushgo/FeatureList";
import RoadmapSection from "@/components/kyushgo/RoadmapSection";
import DownloadCTA from "@/components/kyushgo/DownloadCTA";

export const metadata: Metadata = {
  title: "九州GO | Kyushu GO App",
  description:
    "インバウンド旅行者のための九州ガイドアプリ。英語ファーストで設計。The complete inbound travel app for Kyushu.",
};

export default function KyushgoPage() {
  return (
    <>
      <AppHero />
      <FeatureList />
      <RoadmapSection />
      <DownloadCTA />
    </>
  );
}
