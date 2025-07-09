"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
    >
      <Image
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Interno di uno studio legale con una scrivania e una libreria."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        className="container mx-auto px-6 h-full flex flex-col justify-center items-start relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight"
          variants={itemVariants}
        >
          Tutela e consulenza legale
          <br />
          con professionalità e dedizione.
        </motion.h1>
        <motion.p
          className="text-xl text-stone-200 mt-6 max-w-3xl"
          variants={itemVariants}
        >
          Offriamo assistenza legale specialistica per privati e aziende,
          garantendo soluzioni efficaci e personalizzate.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Button asChild size="lg" className="mt-10 bg-amber-800 hover:bg-amber-900 text-white">
            <Link href="#contatti">Richiedi una consulenza</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
