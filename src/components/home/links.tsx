import React from "react";
import { Building, Briefcase, Mail } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const navLinks: NavLink[] = [
  {
    href: "/#studio",
    label: "Lo studio",
    icon: <Building className="h-5 w-5" />,
  },
  {
    href: "/#attivita",
    label: "Aree di attività",
    icon: <Briefcase className="h-5 w-5" />,
  },


  {
    href: "/contatti",
    label: "Contatti",
    icon: <Mail className="h-5 w-5" />,
  },

]; 