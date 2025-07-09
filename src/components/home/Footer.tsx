import Link from "next/link";
import { navLinks } from "./links";
import { Facebook, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold font-serif text-white">Studio Legale Rossi</h3>
            <p className="text-sm text-stone-400 mt-2">
              Professionalità e dedizione al vostro servizio.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-stone-400 hover:text-white"><Facebook size={20} /></Link>
              <Link href="#" className="text-stone-400 hover:text-white"><Twitter size={20} /></Link>
              <Link href="#" className="text-stone-400 hover:text-white"><Linkedin size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-serif text-white">Link Rapidi</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-serif text-white">Contatti</h4>
            <ul className="mt-4 space-y-2 text-stone-400">
              <li>Via Roma, 123 - 00100 Roma</li>
              <li>info@studiolegalerossi.it</li>
              <li>+39 012 345 6789</li>
            </ul>
          </div>
           <div>
            <h4 className="text-lg font-semibold font-serif text-white">Orari</h4>
            <ul className="mt-4 space-y-2 text-stone-400">
              <li>Lunedì - Venerdì</li>
              <li>9:00 - 18:00</li>
              <li>Sabato e Domenica: Chiuso</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-stone-700 pt-6 text-center text-sm text-stone-500">
           <p>
              © {new Date().getFullYear()} Studio Legale Rossi. Tutti i diritti riservati. P.IVA 12345678901
            </p>
        </div>
      </div>
    </footer>
  );
};
