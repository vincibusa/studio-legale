import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <AboutSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}