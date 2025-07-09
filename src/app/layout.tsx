import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

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
  title: "Studio Legale Rossi",
  description: "Tutela e consulenza legale con professionalità e dedizione. Assistenza legale specialistica per privati e aziende.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} antialiased font-sans bg-stone-50 text-stone-800`}
      >
        {children}
      </body>
    </html>
  );
}