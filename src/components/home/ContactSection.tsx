"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const detailsVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  const contactDetails = [
    {
      icon: <MapPin className="h-8 w-8 text-amber-800" />,
      title: "Indirizzo",
      text: "Via Roma, 123 - 00100 Roma (RM)",
    },
    {
      icon: <Phone className="h-8 w-8 text-amber-800" />,
      title: "Telefono",
      text: "+39 012 345 6789",
    },
    {
      icon: <Mail className="h-8 w-8 text-amber-800" />,
      title: "Email",
      text: "info@studiolegalerossi.it",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-800" />,
      title: "Orari di apertura",
      text: "Lunedì - Venerdì: 9:00 - 18:00",
    },
  ];

  return (
    <motion.section
      className="py-20 bg-stone-100"
      id="contatti"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold font-serif text-stone-800 mb-2"
            variants={formVariants}
          >
            Contattaci
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-amber-800 mx-auto"
            variants={detailsVariants}
          ></motion.div>
          <motion.p
            className="text-stone-600 mt-4 max-w-2xl mx-auto"
            variants={formVariants}
          >
            Siamo a tua disposizione per una prima consulenza. Compila il
            modulo sottostante o utilizza i nostri recapiti per fissare un
            appuntamento.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          <motion.div
            className="md:w-1/2 bg-white p-8 rounded-xl shadow-lg w-full"
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="font-semibold">Nome e Cognome</Label>
                <Input type="text" id="name" name="name" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email" className="font-semibold">Email</Label>
                <Input type="email" id="email" name="email" required className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message" className="font-semibold">Messaggio</Label>
                <Textarea id="message" name="message" required rows={5} className="mt-2" />
              </div>
              <Button type="submit" size="lg" className="w-full bg-amber-800 hover:bg-amber-900">
                Invia Richiesta
              </Button>
            </form>
          </motion.div>
          <motion.div className="md:w-1/2" variants={detailsVariants}>
            <div className="space-y-10 mt-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-amber-100 p-4 rounded-full">{detail.icon}</div>
                  <div className="ml-5">
                    <h4 className="text-xl font-bold font-serif text-stone-900">{detail.title}</h4>
                    <p className="text-stone-700 text-lg mt-1">{detail.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
