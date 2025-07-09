import React from "react";
import { Home, Briefcase, Building, Mail } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const navLinks: NavLink[] = [
  {
    href: "#home",
    label: "Home",
    icon: <Home className="h-5 w-5" />,
  },

  {
    href: "#studio",
    label: "Lo Studio",
    icon: <Building className="h-5 w-5" />,
  },
  {
    href: "#servizi",
    label: "Servizi",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    href: "#contatti",
    label: "Contatti",
    icon: <Mail className="h-5 w-5" />,
  },
]; 