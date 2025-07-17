"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/services";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin } from "lucide-react";

const Map = dynamic(() => import('@/components/home/Map'), { 
  ssr: false,
  loading: () => <div className="bg-gray-800 w-full h-full flex items-center justify-center"><p className="text-white">Caricamento mappa...</p></div>
});

export default function ContactPage() {
  const headerHeight = 84;

  return (
    <div className="-mt-[84px]">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-white"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        <Image
          src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop"
          alt="Contatti"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-6xl font-bold">Contatti</h1>
          <p className="mt-2 text-lg">
            Siamo qui per assistervi.
          </p>
        </motion.div>
      </section>

      {/* Form and Details Section */}
      <section className="py-24 dark-bg">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl text-white">Scrivici o vieni a trovarci</h2>
              <p className="text-gray-300 text-lg">
                Compila il modulo per qualsiasi richiesta o domanda. Il nostro team ti risponderà al più presto. Se preferisci un incontro di persona, trovi i nostri recapiti e l'indirizzo qui sotto.
              </p>
              <div className="space-y-4 text-gray-200">
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-[var(--accent-color)]" />
                  <div>
                    <div>Via Giovanni Pilati 2 - Trapani</div>
                    <div>Via Massimo D'Azeglio 50, Bagheria</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-[var(--accent-color)]" />
                  <a href="mailto:info@jessicafici.it" className="hover:text-[var(--accent-color)] transition-colors">info@jessicafici.it</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-[var(--accent-color)]" />
                  <a href="tel:+390123456789" className="hover:text-[var(--accent-color)] transition-colors">+39 012 345 6789</a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl text-white mb-8">Richiedi una consulenza</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative z-0">
                    <Input id="nome" placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 text-white p-0 focus:outline-none focus:ring-0 transition" />
                    <Label htmlFor="nome" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[var(--accent-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome</Label>
                  </div>
                  <div className="relative z-0">
                    <Input id="cognome" placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 text-white p-0 focus:outline-none focus:ring-0 transition" />
                    <Label htmlFor="cognome" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[var(--accent-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cognome</Label>
                  </div>
                </div>
                <div className="relative z-0">
                  <Input id="email" type="email" placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 text-white p-0 focus:outline-none focus:ring-0 transition" />
                  <Label htmlFor="email" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[var(--accent-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</Label>
                </div>
                <div className="relative z-0">
                  <Input id="telefono" type="tel" placeholder=" " className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 text-white p-0 focus:outline-none focus:ring-0 transition" />
                  <Label htmlFor="telefono" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[var(--accent-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero di telefono</Label>
                </div>
                <div>
                  <Label htmlFor="servizio" className="text-gray-400 text-sm">Servizio interessato</Label>
                  <Select>
                    <SelectTrigger id="servizio" className="w-full bg-transparent border-0 border-b-2 border-gray-600 rounded-none text-white focus:outline-none focus:ring-0 transition mt-1 p-0 h-auto">
                      <SelectValue placeholder="Seleziona un servizio" className="placeholder:text-gray-400" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700 text-white">
                      {services.map((service) => (
                        <SelectItem key={service.slug} value={service.slug} className="focus:bg-gray-800">
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="relative z-0">
                  <Textarea id="note" placeholder=" " rows={3} className="peer block w-full bg-transparent border-0 border-b-2 border-gray-600 text-white p-0 focus:outline-none focus:ring-0 transition" />
                  <Label htmlFor="note" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-[var(--accent-color)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Come possiamo aiutarti?</Label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[var(--accent-color)] hover:bg-[var(--accent-color)]/90 !mt-12">
                  Invia messaggio
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-[500px] w-full">
        <Map />
      </section>
    </div>
  );
} 