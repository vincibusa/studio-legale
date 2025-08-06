import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ContactSection } from '@/components/home/ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { DynamicIcon } from '@/components/ui/dynamic-icon';
import Link from 'next/link';
import type { Metadata } from 'next';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const headerHeight = 84;

  // Parse content to extract structured data
  const parseContent = (content: string) => {
    const sections = content.split('<h2>').filter(section => section.trim());
    return sections.map(section => {
      const lines = section.split('\n').filter(line => line.trim());
      const title = lines[0]?.replace('</h2>', '').trim() || '';
      const body = lines.slice(1).join('\n');
      return { title, body };
    });
  };

  const contentSections = parseContent(service.content);

  // Schema markup for service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `${service.title} - Studio Legale Jessica Fici`,
    "description": service.shortDescription,
    "image": `https://www.studiolegalejessicafici.it${service.heroImage}`,
    "url": `https://www.studiolegalejessicafici.it/aree-di-attivita/${service.slug}`,
    "provider": {
      "@type": "LegalService",
      "name": "Studio Legale Jessica Fici",
      "telephone": "+39 329 336 6330",
      "email": "avv.jessicafici@gmail.com",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Via Massimo D'Azeglio 50",
          "addressLocality": "Bagheria",
          "addressRegion": "PA",
          "postalCode": "90011",
          "addressCountry": "IT"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Via Giovanni Pilati 2",
          "addressLocality": "Trapani",
          "addressRegion": "TP",
          "postalCode": "91100",
          "addressCountry": "IT"
        }
      ]
    },
    "serviceType": service.title,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title,
      "itemListElement": service.features.map((feature) => ({
        "@type": "Offer",
        "name": feature.title,
        "description": feature.description
      }))
    }
  };

  return (
    <div className="-mt-[84px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <Link 
              href="/#attivita" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alle aree di attività
            </Link>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
              <br />
              <span className="text-2xl md:text-3xl text-[var(--accent-color)] font-normal">
                Avvocato Specializzato a Bagheria e Trapani
              </span>
            </h1>
            
            <div className="accent-line mb-6"></div>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              {service.shortDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-8 py-3"
              >
                <Link href="/contatti">
                  <Phone className="w-4 h-4 mr-2" />
                  Richiedi Consulenza
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                asChild
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
              >
                <Link href={`tel:${service.phoneNumber}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {service.phoneNumber}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards - Dynamic */}
      <section className="py-16 dark-bg">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="service-feature-card text-center p-6 border border-white/10 rounded-lg">
                <DynamicIcon 
                  name={feature.icon}
                  className="w-8 h-8 text-[var(--accent-color)] mx-auto mb-4" 
                />
                <h3 className="font-serif text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Banner */}
      <section className="specialization-banner py-12">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl text-white mb-2">
                Specializzazione: {service.specialization}
              </h3>
              <p className="text-white/90">
                Tempo di risposta medio: <strong>{service.responseTime}</strong>
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[var(--accent-color)]"
              >
                <Link href="/contatti">
                  Prenota Consulenza
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 light-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {contentSections.map((section, index) => (
              <div key={index} className="mb-16 last:mb-0">
                {section.title && (
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-dark)] mb-4">
                      {section.title.replace(/[🇮🇹🔷📋🏛️🔧]/g, '').trim()}
                    </h2>
                    <div className="accent-line"></div>
                  </div>
                )}
                
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[var(--text-dark)] prose-p:text-[var(--text-dark)] prose-li:text-[var(--text-dark)] prose-strong:text-[var(--accent-color)]"
                  dangerouslySetInnerHTML={{ __html: section.body }} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section - Dynamic */}
      <section className="cta-section py-16">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              {service.ctaTitle}
            </h2>
            <p className="text-xl text-white/80 mb-8">
              {service.ctaDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white px-8 py-4"
              >
                <Link href="/contatti">
                  <Phone className="w-5 h-5 mr-2" />
                  {service.ctaPrimaryText}
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4"
              >
                <Link href={`tel:${service.phoneNumber}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {service.ctaSecondaryText}
                </Link>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/70">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Tel: {service.phoneNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email: avv.jessicafici@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Servizio non trovato",
      description: "Il servizio richiesto non è disponibile.",
    };
  }

  const baseUrl = "https://www.studiolegalejessicafici.it";
  
  // Meta titles and descriptions optimized for each service
  const metaDataMap: Record<string, { title: string; description: string; keywords: string[] }> = {
    "diritto-di-famiglia": {
      title: "Avvocato Diritto di Famiglia Bagheria | Separazione, Divorzio, Affidamento Figli - Studio Legale Jessica Fici",
      description: "Avvocato specializzato in diritto di famiglia a Bagheria (PA) e Trapani. Assistenza per separazioni, divorzi, affidamento figli e mantenimento. Consulenza riservata e professionale. Prenota ora.",
      keywords: ["avvocato diritto di famiglia bagheria", "studio legale bagheria", "separazione consensuale palermo", "divorzio bagheria", "affidamento figli trapani", "avvocato divorzista palermo"]
    },
    "recupero-crediti": {
      title: "Recupero Crediti Aziendali e Privati Bagheria | Avvocato Specializzato - Studio Jessica Fici",
      description: "Recupero crediti rapido ed efficace per privati e aziende a Bagheria e Trapani. Azioni stragiudiziali e giudiziali. Nessun anticipo, pagamento solo a recupero effettuato.",
      keywords: ["recupero crediti bagheria", "recupero crediti trapani", "recupero crediti aziendali palermo", "avvocato recupero crediti bagheria", "procedure esecutive trapani"]
    },
    "immigrazione-e-cittadinanza": {
      title: "Avvocato Immigrazione Bagheria | Cittadinanza, Permesso di Soggiorno, Ricongiungimento - Studio Fici",
      description: "Avvocato specializzato in diritto di immigrazione a Bagheria (PA) e Trapani. Assistenza per cittadinanza italiana, permessi di soggiorno, ricongiungimento familiare. Consulenza gratuita.",
      keywords: ["avvocato immigrazione bagheria", "cittadinanza italiana palermo", "permesso di soggiorno trapani", "ricongiungimento familiare bagheria", "asilo politico palermo"]
    },
    "diritto-tributario": {
      title: "Avvocato Tributarista Bagheria | Controversie Fiscali, Cartelle Esattoriali - Studio Legale",
      description: "Avvocato tributarista a Bagheria e Trapani per controversie fiscali e cartelle esattoriali. Assistenza in accertamenti, avvisi di accertamento, riscossione. Ricorso tributario.",
      keywords: ["avvocato tributarista bagheria", "controversie fiscali palermo", "cartella esattoriale trapani", "ricorso tributario bagheria", "accertamento fiscale palermo"]
    },
    "diritto-penale": {
      title: "Avvocato Penalista Bagheria | Difesa Penale, Reati Informatici - Studio Jessica Fici",
      description: "Avvocato penalista a Bagheria e Trapani per difesa in procedimenti penali. Assistenza per reati informatici, truffe, difesa d'ufficio. Consulenza immediata e riservata.",
      keywords: ["avvocato penalista bagheria", "difesa penale trapani", "reati informatici palermo", "truffa bagheria", "difesa d'ufficio palermo"]
    },
    "diritto-del-lavoro": {
      title: "Avvocato Diritto del Lavoro Bagheria | Licenziamento, Vertenze - Studio Legale",
      description: "Avvocato specializzato in diritto del lavoro a Bagheria e Trapani. Assistenza per licenziamenti, vertenze sindacali, diritto dei lavoratori. Consulenza gratuita.",
      keywords: ["avvocato diritto del lavoro bagheria", "licenziamento illegittimo trapani", "vertenza lavoro palermo", "diritti lavoratori bagheria", "consulenza lavoro trapani"]
    },
    "mediazione-e-negoziazione-assistita": {
      title: "Mediazione Civile Bagheria | Negoziazione Assistita - Studio Legale Jessica Fici",
      description: "Mediazione civile e negoziazione assistita a Bagheria e Trapani per risolvere controversie in modo rapido ed economico. Avvocato mediatore qualificato. Consulenza gratuita.",
      keywords: ["mediazione civile bagheria", "negoziazione assistita trapani", "mediatore qualificato palermo", "risoluzione controversie bagheria", "ADR trapani"]
    },
    "volontaria-giurisdizione": {
      title: "Volontaria Giurisdizione Bagheria | Amministratore di Sostegno - Studio Fici",
      description: "Assistenza in volontaria giurisdizione a Bagheria e Trapani: amministratore di sostegno, interdizione, tutela minori. Consulenza legale per protezione persone vulnerabili.",
      keywords: ["volontaria giurisdizione bagheria", "amministratore di sostegno trapani", "interdizione palermo", "tutela minori bagheria", "protezione persone vulnerabili trapani"]
    }
  };

  const meta = metaDataMap[slug] || {
    title: `${service.title} - Studio Legale Jessica Fici Bagheria e Trapani`,
    description: service.shortDescription,
    keywords: [service.title.toLowerCase(), "studio legale bagheria", "studio legale trapani", "avvocato specializzato"]
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Avv. Jessica Fici" }],
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: "it_IT",
      url: `${baseUrl}/aree-di-attivita/${slug}`,
      images: [{
        url: service.heroImage,
        width: 1200,
        height: 630,
        alt: service.title
      }]
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [service.heroImage]
    },
    alternates: {
      canonical: `${baseUrl}/aree-di-attivita/${slug}`
    }
  };
}

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
} 