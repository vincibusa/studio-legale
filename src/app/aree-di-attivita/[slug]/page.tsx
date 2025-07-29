import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ContactSection } from '@/components/home/ContactSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { DynamicIcon } from '@/components/ui/dynamic-icon';
import Link from 'next/link';

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

  return (
    <div className="-mt-[84px]">
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
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              {service.title}
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

// Generate static paths for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
} 