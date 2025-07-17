"use client";

import Image from "next/image";

import { motion } from "framer-motion";


const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const MissionSection = () => {
  return (
    <section 
      className="py-24" 
      style={{ backgroundColor: 'var(--light-bg)', color: 'var(--text-dark)' }}
    >
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="flex-1" variants={imageVariants}>
            <Image
              src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop"
              alt="Interno di un ufficio moderno e minimalista"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div className="flex-1" variants={textVariants}>
            <h2 className="font-serif text-4xl leading-snug mb-6">
              Servizi legali d'eccellenza, costruiti su misura per le esigenze specifiche di ogni cliente.
            </h2>
            <p className="text-lg mb-6">
              Studio Legale Jessica Fici ha quale mission la prestazione di servizi di assistenza e consulenza
              legale di elevato standard qualitativo. L'approccio sartoriale che
              caratterizza lo studio consente di offrire soluzioni su misura,
              pensate per le specifiche esigenze del cliente.
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 