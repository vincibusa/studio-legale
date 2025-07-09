"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import * as React from "react";
import { navLinks } from "./links";
import { services } from "@/lib/services";

export const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header 
      className="py-5 sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'var(--dark-bg)' : 'transparent',
        borderBottom: isScrolled ? '1px solid #444' : 'none',
      }}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-serif text-2xl font-bold text-white">
          Studio Legale Jessica Fici
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            link.href.includes("attivita") ? (
              <HoverCard key={link.href} openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-white text-base hover:text-[var(--accent-color)] focus:outline-none transition-colors duration-300"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="bg-[var(--dark-bg)] border-gray-700 w-60 p-2">
                  <div className="flex flex-col space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/aree-di-attivita/${service.slug}`}
                        className="block p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-[var(--accent-color)] transition-colors duration-200"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-base hover:text-[var(--accent-color)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                aria-label="Apri menu"
                className="text-white hover:bg-gray-800"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[var(--dark-bg)] border-gray-700 p-0">
              <SheetHeader className="p-6">
                <SheetTitle className="text-2xl font-bold font-serif text-white text-left">
                  Studio Legale Jessica Fici
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigazione principale del sito
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col p-4">
                {navLinks.map((link) => (
                  link.href.includes("attivita") ? (
                    <Accordion type="single" collapsible key={link.href} className="w-full">
                      <AccordionItem value="aree-di-attivita" className="border-b-0">
                        <AccordionTrigger className="flex items-center space-x-4 py-3 px-4 rounded-md text-base text-gray-300 hover:no-underline hover:bg-gray-800 hover:text-[var(--accent-color)] transition-colors duration-200">
                           <div className="flex items-center space-x-4">
                            {link.icon}
                            <span className="font-medium">{link.label}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-8">
                          <nav className="flex flex-col space-y-1 py-2">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/aree-di-attivita/${service.slug}`}
                                className="block py-2 px-4 rounded-md text-sm text-gray-400 hover:bg-gray-800 hover:text-[var(--accent-color)] transition-colors duration-200"
                                onClick={handleLinkClick}
                              >
                                {service.title}
                              </Link>
                            ))}
                          </nav>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center space-x-4 py-3 px-4 rounded-md text-base text-gray-300 hover:bg-gray-800 hover:text-[var(--accent-color)] transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
