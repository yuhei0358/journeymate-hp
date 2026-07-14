import Hero from "@/components/home/Hero";
import WhatIsSection from "@/components/home/WhatIsSection";
import PillarsSection from "@/components/home/PillarsSection";
import WhyKyushuSection from "@/components/home/WhyKyushuSection";
import SnsDiscoverySection from "@/components/home/SnsDiscoverySection";
import ToursTeaser from "@/components/home/ToursTeaser";
import KyushgoTeaser from "@/components/home/KyushgoTeaser";
import TrustPartnersSection from "@/components/home/TrustPartnersSection";
import FinalCtaSection from "@/components/home/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIsSection />
      <PillarsSection />
      <WhyKyushuSection />
      <SnsDiscoverySection />
      <ToursTeaser />
      <KyushgoTeaser />
      <TrustPartnersSection />
      <FinalCtaSection />
    </>
  );
}
