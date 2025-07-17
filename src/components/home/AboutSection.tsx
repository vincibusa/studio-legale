"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.8,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const AboutSection = () => {
  return (
    <section 
      className="py-24" 
      id="studio"
      style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)' }}
    >
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="flex-1" variants={textVariants}>
            <h3 className="font-serif text-3xl mb-4">
              Studio Legale Jessica Fici
            </h3>
            <div className="accent-line"></div>
            <p className="mt-6 text-lg">
            L'Avv. Jessica Fici esercita la propria attività professionale svolgendo attività di consulenza, assistenza e rappresentanza legale in favore di persone fisiche, società, enti o associazioni in ambito giudiziale e stragiudiziale, oltre che nei procedimenti di mediazione, (essendo essa stessa un mediatore professionista, nonché negli ultimi anni ha sviluppato una specializzazione nel diritto della cittadinanza iure sanguinis.
            </p>
          </motion.div>
          
          <motion.div className="flex-1" variants={imageVariants}>
            <Image
              src="/jessica.jpeg"
              alt="Dettaglio architettonico di un arco"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
