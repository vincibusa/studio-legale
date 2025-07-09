"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { services } from "@/lib/services";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const ServiceSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section 
      className="py-20" 
      id="attivita"
      style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)' }}
    >
      <div className="container">
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <h3 className="font-serif text-3xl font-normal text-white mb-4">
            Aree di attività
          </h3>
          <div className="accent-line"></div>
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar"
        >
          <div className="flex gap-10">
            {services.map((service, index) => (
              <Link key={index} href={`/aree-di-attivita/${service.slug}`}>
                <div 
                  className="flex-shrink-0 w-[300px] relative cursor-pointer group/card"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-400"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h4 className="font-serif text-xl font-normal mb-2">
                        {service.title}
                      </h4>
                      <div 
                        className="h-0.5 bg-[var(--accent-color)] transition-all duration-400 group-hover/card:w-20"
                        style={{ width: '40px' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Progress 
          value={scrollProgress} 
          className="mt-8 h-1 service-progress"
        />
      </div>
    </section>
  );
}; 