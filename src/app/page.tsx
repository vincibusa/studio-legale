import { AboutSection } from "@/components/home/AboutSection";
import { MissionSection } from "@/components/home/MissionSection";

import { CollaborationSection } from "@/components/home/QuoteSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServiceSection />

      <CollaborationSection />
    </>
  );
}