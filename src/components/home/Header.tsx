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
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import * as React from "react";
import { navLinks } from "./links";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const Header = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold font-serif text-stone-800">
          Studio Legale Rossi
        </Link>
        <motion.nav
          className="hidden md:flex space-x-8"
          initial="hidden"
          animate="visible"
          variants={navContainerVariants}
        >
          {navLinks.map((link) => (
            <motion.div key={link.href} variants={navItemVariants}>
              <Link
                href={link.href}
                className="text-stone-600 hover:text-amber-800 transition-colors duration-300"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Apri menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
              <SheetHeader className="p-6">
                <SheetTitle className="text-2xl font-bold font-serif text-stone-800 text-left">
                  Studio Legale Rossi
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigazione principale del sito
                </SheetDescription>
              </SheetHeader>
              <Separator />
              <motion.nav
                initial="hidden"
                animate={isSheetOpen ? "visible" : "hidden"}
                variants={navContainerVariants}
                className="flex flex-col space-y-1 p-4"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-4 py-3 px-4 rounded-md text-base text-stone-700 hover:bg-stone-100 hover:text-amber-800 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {link.icon}
                      <span className="font-medium">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
