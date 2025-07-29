"use client";

import { motion } from "framer-motion";


const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const CollaborationSection = () => {
  const collaborations = [
    {
      title: "Avv. Simone Giardina",
      description: "Specializzato in diritto tributario e amministrativo. Collaborazione strategica per servizi fiscali e amministrativi completi.",
      color: "bg-blue-600"
    },
    {
      title: "Avv. Dario Romano",
      description: "Specializzato in diritto penale. Collaborazione per la difesa penale e consulenza in procedimenti giudiziari.",
      color: "bg-green-600"
    },

  ];

  return (
    <section 
      className="py-24" 
      style={{ backgroundColor: 'var(--dark-bg)', color: 'var(--text-light)' }}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Le Nostre Collaborazioni
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Lavoriamo con partner di eccellenza per offrire servizi legali completi e soluzioni personalizzate
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          {collaborations.map((collab, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-8 text-center hover:bg-gray-700 transition-all duration-300 hover:scale-105"
              variants={cardVariants}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {collab.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {collab.description}
              </p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}; 