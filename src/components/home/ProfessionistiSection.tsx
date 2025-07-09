"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

const professionals = [
  {
    imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60",
    name: "Mario Rossi",
    role: "Founding Partner",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60",
    name: "Luca Bianchi",
    role: "Partner",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?w=500&auto=format&fit=crop&q=60",
    name: "Giulia Verdi",
    role: "Associate",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60",
    name: "Marco Neri",
    role: "Associate",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1627161683080-63795217edd9?w=500&auto=format&fit=crop&q=60",
    name: "Sofia Gialli",
    role: "Junior Associate",
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=500&auto=format&fit=crop&q=60",
    name: "Andrea Bruno",
    role: "Of Counsel",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const ProfessionistiSection = () => {
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
      id="professionisti"
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
            Professionisti
          </h3>
          <div className="accent-line"></div>
        </motion.div>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar"
        >
          <div className="flex gap-10">
            {professionals.map((professional, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[300px] relative cursor-pointer group/card"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={professional.imageUrl}
                    alt={professional.name}
                    fill
                    className="object-cover transition-all duration-400"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h4 className="font-serif text-xl font-normal mb-1">
                      {professional.name}
                    </h4>
                    <p className="text-sm opacity-80 mb-2">{professional.role}</p>
                    <div 
                      className="h-0.5 bg-[var(--accent-color)] transition-all duration-400 group-hover/card:w-20"
                      style={{ width: '40px' }}
                    ></div>
                  </div>
                </div>
              </div>
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