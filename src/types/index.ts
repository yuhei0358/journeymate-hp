export interface BilingualString {
  ja: string;
  en: string;
}

export type Lang = "ja" | "en";

export interface TourCard {
  category: BilingualString;
  title: BilingualString;
  duration: BilingualString;
  price: BilingualString;
  gradient: string;
  unsplash?: string;
  tagline?: BilingualString;
}

export interface AppFeature {
  icon: string;
  title: BilingualString;
  desc: BilingualString;
}

export interface RoadmapStep {
  phase: string;
  area: BilingualString;
  detail: BilingualString;
  status: "current" | "next" | "planned";
}

export interface SnsFlowStep {
  icon: string;
  title: BilingualString;
  desc: BilingualString;
}

export interface FeaturedExperience {
  category: BilingualString;
  title: BilingualString;
  tagline: BilingualString;
  duration: BilingualString;
  price: BilingualString;
  gradient: string;
  unsplash?: string;
}

export interface TrustPartner {
  name: BilingualString;
  type: BilingualString;
}
