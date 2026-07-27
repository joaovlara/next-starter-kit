import type { ElementType } from "react";
import {
  FaApple,
  FaEnvelope,
  FaGooglePlay,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Cloud,
  Code,
  Cpu,
  Database,
  Layout,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export type ContentIcon = ElementType;

export interface RouteItem {
  name: string;
  href: string;
}

export interface SiteCompany {
  name: string;
  address: string;
}

export interface SiteContact {
  phone: string;
  email: string;
}

export interface SiteSocial {
  instagram: string;
  whatsapp: string;
}

export interface SiteStores {
  googlePlay: string;
  appStore: string;
}

export interface SiteData {
  company: SiteCompany;
  contact: SiteContact;
  social: SiteSocial;
  stores: SiteStores;
}

export interface FooterContact {
  name: string;
  value: string;
  href: string;
  icon?: ContentIcon;
}

export interface SiteLink {
  name: string;
  href: string;
  icon: ContentIcon;
}

export interface HighlightItem {
  title: string;
  description: string;
  icon: ContentIcon;
}

export const rotas: RouteItem[] = [
  { name: "HOME", href: "/" },
  { name: "SOBRE", href: "/sobre" },
  { name: "SERVIÇOS", href: "/servicos" },
  { name: "CONTATO", href: "/contato" },
];

// Informações globais do site

export const infos: SiteData = {
  company: {
    name: "Lorem",
    address: "lorem ipsulum",
  },
  contact: {
    phone: "11 11111111",
    email: "email.email.com",
  },
  social: {
    instagram: "linkdoinstagram",
    whatsapp: "linkdowpp",
  },
  stores: {
    googlePlay: "LoremIpsuissimplydummy",
    appStore: "LoremIpsumissimplydummy",
  },
};

export const footerContacts: FooterContact[] = [
  {
    name: "Nome",
    value: infos.company.name,
    href: "#",
  },
  {
    name: "Endereço",
    value: infos.company.address,
    href: "#",
    icon: FaMapMarkerAlt,
  },
  {
    name: "Telefone",
    value: infos.contact.phone,
    href: `tel:${infos.contact.phone}`,
    icon: FaPhone,
  },
  {
    name: "E-mail",
    value: infos.contact.email,
    href: `mailto:${infos.contact.email}`,
    icon: FaEnvelope,
  },
  {
    name: "Instagram",
    value: infos.social.instagram,
    href: infos.social.instagram,
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    value: infos.social.whatsapp,
    href: infos.social.whatsapp,
    icon: FaWhatsapp,
  },
];

export const siteLinks: SiteLink[] = [
  {
    name: "Instagram",
    href: infos.social.instagram,
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: infos.social.whatsapp,
    icon: FaWhatsapp,
  },
  {
    name: "E-mail",
    href: `mailto:${infos.contact.email}`,
    icon: FaEnvelope,
  },
  {
    name: "Google Play",
    href: infos.stores.googlePlay,
    icon: FaGooglePlay,
  },
  {
    name: "App Store",
    href: infos.stores.appStore,
    icon: FaApple,
  },
];

//Conteudos de texto das seções

export const diferenciais: HighlightItem[] = [
  {
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para entender e atender suas necessidades.",
    icon: FaInstagram,
  },
  {
    title: "Qualidade Garantida",
    description: "Produtos e serviços com alto padrão de excelência.",
    icon: FaInstagram,
  },
  {
    title: "Entrega Rápida",
    description: "Compromisso com prazos e agilidade na entrega.",
    icon: FaInstagram,
  },
];

// Serviços oferecidos
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ContentIcon;
}

export const servicos: ServiceItem[] = [
  {
    id: "1",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Code,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Layout,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Database,
  },
  {
    id: "5",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: ShieldCheck,
  },
  {
    id: "6",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Cloud,
  },
  {
    id: "7",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    icon: Cpu,
  },
];