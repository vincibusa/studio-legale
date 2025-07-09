"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
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

export const QuoteSection = () => {
  return (
    <section 
      className="py-24" 
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
            <div className="flex items-start">
              <div className="w-1 h-36 bg-[var(--accent-color)] mr-8 mt-2 flex-shrink-0"></div>
              <blockquote
                className="font-serif text-4xl md:text-5xl font-normal text-white"
              >
                "Non aspiriamo ad essere i più grandi.
                <br />
                Solo i migliori"
              </blockquote>
            </div>
          </motion.div>
          
          <motion.div className="flex-1" variants={imageVariants}>
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop"
              alt="Scalinata in bianco e nero di un palazzo storico"
              width={600}
              height={750}
              className="w-full h-auto grayscale"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 