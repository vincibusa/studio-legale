import { 
  Clock, 
  FileText, 
  Users, 
  Heart, 
  Shield, 
  Calculator, 
  TrendingDown, 
  Scale, 
  Search, 
  Gavel, 
  TrendingUp, 
  Building, 
  ShieldCheck, 
  Home, 
  UserCheck, 
  MapPin, 
  Handshake,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
  LucideIcon
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Clock,
  FileText,
  Users,
  Heart,
  Shield,
  Calculator,
  TrendingDown,
  Scale,
  Search,
  Gavel,
  TrendingUp,
  Building,
  ShieldCheck,
  Home,
  UserCheck,
  MapPin,
  Handshake,
  Phone,
  Mail,
  CheckCircle,
  ArrowLeft,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ 
  name, 
  className = "", 
  size = 24 
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return <FileText className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}; 