import Link from "next/link";
import { navLinks } from "./links";

export const Footer = () => {
  return (
    <footer 
      className="py-16"
      style={{ 
        backgroundColor: 'var(--dark-bg)', 
        color: 'var(--text-light)',
        borderTop: '1px solid #444'
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold text-white mb-4 block">
              Studio Legale Jessica Fici
            </Link>
            <p className="text-gray-400 text-sm">
              L'eccellenza legale per l'eccellenza aziendale.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Navigazione</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Contatti</h4>
            <address className="not-italic text-gray-400 space-y-2 text-sm">
              <p>Via Roma, 123<br />00100 Roma, Italia</p>
              <p>info@vincentipartners.it</p>
              <p>+39 012 345 6789</p>
            </address>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="font-bold text-lg text-white mb-4">Seguici</h4>
             <Link 
              href="https://www.linkedin.com/company/vincenti-partners" 
              className="text-white border border-white px-4 py-2 text-sm font-bold transition-all duration-300 hover:bg-white hover:text-[var(--dark-bg)] inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Studio Legale Jessica Fici - P.Iva 05443340822</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
