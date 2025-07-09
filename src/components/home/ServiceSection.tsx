"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/use-media-query";
import Image from "next/image";

const services = [
  {
    imageUrl: "https://images.pexels.com/photos/8112143/pexels-photo-8112143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Diritto Civile",
    description: "Assistenza in materia di obbligazioni, contratti e successioni.",
  },
  {
    imageUrl: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Diritto Immobiliare",
    description: "Consulenza per compravendite, locazioni e contenziosi.",
  },
  {
    imageUrl: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Diritto Societario",
    description: "Supporto per la costituzione, gestione e fusione di società.",
  },
  {
    imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Diritto del Lavoro",
    description: "Tutela di lavoratori e datori di lavoro nel rapporto di lavoro.",
  },
  {
    imageUrl: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Recupero Crediti",
    description: "Procedure per il recupero efficace dei crediti insoluti.",
  },
];

const desktopItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const mobileItemVariants = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
});

export const ServiceSection = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section className="py-20 bg-stone-50" id="servizi">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-4xl font-bold font-serif text-stone-800 mb-2">
            I Nostri Servizi
          </h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
          <p className="text-stone-600 mt-4 max-w-3xl mx-auto">
            Offriamo una vasta gamma di servizi legali per rispondere con competenza e professionalità alle esigenze di privati e aziende.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={`${index}-${isMobile ? 'mobile' : 'desktop'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={isMobile ? mobileItemVariants(index) : desktopItemVariants}
            >
              <Card className="relative h-96 overflow-hidden rounded-lg group">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end h-full">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-stone-200 mt-2 text-base">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 