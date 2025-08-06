import { AboutSection } from "@/components/home/AboutSection";
import { MissionSection } from "@/components/home/MissionSection";
import { CollaborationSection } from "@/components/home/QuoteSection";
import { ServiceSection } from "@/components/home/ServiceSection";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Studio Legale Jessica Fici",
    "description": "Studio legale specializzato in diritto di famiglia, immigrazione, recupero crediti e diritto tributario a Bagheria e Trapani. Consulenza legale personalizzata per privati e aziende.",
    "url": "https://www.studiolegalejessicafici.it",
    "telephone": "+39 329 336 6330",
    "email": "avv.jessicafici@gmail.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Via Giovanni Pilati 2",
        "addressLocality": "Trapani",
        "addressRegion": "TP",
        "postalCode": "91100",
        "addressCountry": "IT"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Via Massimo D'Azeglio 50",
        "addressLocality": "Bagheria",
        "addressRegion": "PA",
        "postalCode": "90011",
        "addressCountry": "IT"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Bagheria"
      },
      {
        "@type": "City",
        "name": "Trapani"
      },
      {
        "@type": "State",
        "name": "Sicilia"
      }
    ],
    "serviceType": [
      "Diritto di Famiglia",
      "Recupero Crediti",
      "Immigrazione e Cittadinanza",
      "Diritto Tributario",
      "Diritto Penale",
      "Diritto del Lavoro"
    ],
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-13:00"
    ],
    "priceRange": "€€",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servizi Legali",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Consulenza Diritto di Famiglia",
          "description": "Assistenza per separazioni, divorzi, affidamento figli"
        },
        {
          "@type": "Offer",
          "name": "Recupero Crediti",
          "description": "Procedure esecutive e recupero crediti per privati e aziende"
        },
        {
          "@type": "Offer",
          "name": "Immigrazione e Cittadinanza",
          "description": "Assistenza per visti, permessi di soggiorno e cittadinanza"
        }
      ]
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ServiceSection />
      <CollaborationSection />
    </div>
  );
}