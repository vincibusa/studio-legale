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

const imageVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const textVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="studio">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-16 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFRmiabEWejH4BIdttrhrFmN8l3OfTHQDtG8Fvb8sEszTr6y3o4IPOCX4i5YzDIpRwiU6mo8BBibHDOmp7IS3r2xwFDg0FJbYlLUjpcWDXvc1HYl-TvHikWstChwcXaS9j3TJWp6nnjS1b3zqn8cjvt2EXidnc1GhdupwqUBUxcQ_SoYb6zvddHaQbmROgub9GteD_0EhvmO5mDFwDgoz8BMA2Pa7iL6v8T1Rk3IKmmQCuSnSmDwr32fOd2fiNW6FZF4q6fyu54mog"
              alt="Interno di uno studio legale con librerie e poltrone in pelle"
              width={800}
              height={500}
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={textVariants}>
            <h2 className="text-4xl font-bold font-serif text-stone-800 mb-4">
              Chi Siamo
            </h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Lo Studio Legale Rossi è una realtà consolidata, fondata
              sull'esperienza e sull'aggiornamento costante. La nostra
              missione è fornire ai clienti un'assistenza legale completa,
              trasparente e personalizzata.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Crediamo in un rapporto di fiducia reciproca con i nostri
              assistiti, ascoltando attentamente le loro esigenze per elaborare
              le strategie legali più efficaci. La passione per il diritto e
              la determinazione nel tutelare gli interessi dei nostri clienti
              sono i pilastri del nostro lavoro quotidiano.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row-reverse items-center gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div className="md:w-1/2" variants={textVariants}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzUBduFDJro-A3LvSfeZB7j9051j4iJJ115T_WNlE7raHK-YFdjj5_0bExSOFnVWn4IA5vSe-z2KQGfEeqm7I8sFlkZ5CbrRR6hcAa_Tv_dj84aH5efbBmCjsckBPA3l5LO7HPZjbrMNo9k8uKPRw4B96JYYyXmzSYBlTmkVnZaGTZ0es3p9O3NkxTBe7PtXsZltIszweNpuoO4n6L9OAZOlnruPZqlXwLaASaKmGoxnNENCrL8x5kHbiF2TnXefK-Aezbn5wei_py"
              alt="Ritratto di un avvocato sorridente in un ufficio moderno"
              width={800}
              height={500}
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
          <motion.div className="md:w-1/2" variants={imageVariants}>
            <h2 className="text-4xl font-bold font-serif text-stone-800 mb-4">
              Il Nostro Approccio
            </h2>
            <div className="w-20 h-1 bg-amber-800 mb-6"></div>
            <p className="text-stone-600 leading-relaxed">
              Il nostro metodo di lavoro si basa sull'analisi approfondita
              di ogni caso, sulla chiarezza comunicativa e sulla ricerca della
              soluzione più vantaggiosa, privilegiando, ove possibile, la
              risoluzione stragiudiziale delle controversie per ridurre tempi e
              costi per i nostri clienti.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
