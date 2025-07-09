import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ContactSection } from '@/components/home/ContactSection';

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const headerHeight = 84;

  return (
    <div className="-mt-[84px]">
      <section 
        className="relative h-[60vh] flex items-center"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-white/90">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>


      <section className="py-20 light-bg">
        <div className="container">
          <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: service.content }} />
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