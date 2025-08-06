import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Studio Legale Jessica Fici | Avvocato Specializzato in Diritto di Famiglia, Immigrazione e Recupero Crediti",
  description: "Studio legale specializzato in diritto di famiglia, immigrazione, recupero crediti e diritto tributario a Bagheria e Trapani. Consulenza legale personalizzata per privati e aziende. Prenota una consulenza gratuita: +39 329 336 6330",
  keywords: ["studio legale bagheria", "avvocato specializzato palermo", "studio legale trapani", "diritto di famiglia bagheria", "avvocato palermo", "consulenza legale trapani", "immigrazione bagheria", "recupero crediti palermo"],
  authors: [{ name: "Avv. Jessica Fici" }],
  openGraph: {
    title: "Studio Legale Jessica Fici - Consulenza Legale Specialistica Bagheria e Trapani",
    description: "Studio legale specializzato in diritto di famiglia, immigrazione, recupero crediti. Consulenza gratuita a Bagheria e Trapani.",
    type: "website",
    locale: "it_IT",
    url: "https://www.studiolegalejessicafici.it",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Legale Jessica Fici - Avvocato Bagheria e Trapani",
    description: "Consulenza legale specializzata in diritto di famiglia, immigrazione, recupero crediti a Bagheria e Trapani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}