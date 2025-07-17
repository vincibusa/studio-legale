"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delay: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const HeroSection = () => {
  // Assuming header height is approx. 84px (py-5 is 2.5rem, 40px)
  // You might need to adjust this value based on your actual header height
  const headerHeight = 84; 

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center -mt-[84px] overflow-hidden"
      style={{
        color: 'var(--text-light)',
        paddingTop: `${headerHeight}px`, // Add padding to offset content
      }}
    >
      <Image
        src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
        alt="Architettura moderna"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container relative z-10 flex flex-col items-center"
      >
        <motion.p 
          className="text-lg md:text-xl text-gray-200 mb-4"
          variants={itemVariants}
        >
          La vostra tutela legale è
        </motion.p>
        <motion.h1
          className="font-serif text-6xl md:text-8xl font-normal text-white"
          variants={itemVariants}
        >
          La nostra priorità
        </motion.h1>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="#studio" className="flex flex-col items-center text-white text-sm tracking-widest group">
          SCOPRI CHI SIAMO
          <ChevronDown className="mt-1 animate-bounce group-hover:animate-none" />
        </Link>
      </motion.div>
    </section>
  );
};
