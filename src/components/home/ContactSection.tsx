"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-20 text-center light-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center">
          <h2 className="font-serif text-4xl mb-4">Contatto</h2>
          <div className="accent-line mx-auto w-1/2"></div>
          </div>
          <p className="max-w-2xl mx-auto my-6 text-lg">
            Siamo a vostra disposizione per qualsiasi chiarimento o per fissare un appuntamento.
          </p>
          <Button asChild size="lg" className="bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 text-white">
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}; 