import type { Metadata } from "next";
import VisionHero from "@/components/vision/VisionHero";
import MissionGrid from "@/components/vision/MissionGrid";

export const metadata: Metadata = {
  title: "ビジョン | Vision",
  description:
    "旅を通じて、日本と世界をつなぐ。ジャーニーメイトのミッション・ビジョン・バリュー。Connecting Japan and the World Through Travel.",
};

export default function VisionPage() {
  return (
    <>
      <VisionHero />
      <MissionGrid />
    </>
  );
}
