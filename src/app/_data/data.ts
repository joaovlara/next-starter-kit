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
  Apple,
  Cloud,
  Code,
  Cpu,
  Database,
  Layout,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const infos = [
  {
    name: "Nome do Site",
    value: "$nome do contratante do site",
  },
  {
    name: "Endereço",
    icon: FaMapMarkerAlt,
    value: "$endereço do site, 1111, Brasil",
  },
  {
    name: "Telefone",
    icon: FaPhone,
    value: "$99 9999-9999",
  },
];

export const social = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    url: "https://www.WhatsApp.com",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: "$email@email.com",
  },
];

export const routes = [
  { name: "HOME", href: "/" },
  { name: "SOBRE", href: "/sobre" },
  { name: "SERVIÇOS", href: "/servicos" },
  { name: "CONTATO", href: "/contato" },
];

//*************Home***************//

export const hero = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  link: "link do whatsApp",
};

export const getApp = [
  {
    icon: FaApple,
    name: "Apple Store",
    url: "https://www.WhatsApp.com",
  },
  {
    icon: FaGooglePlay,
    name: "Play Store",
    url: "https://www.instagram.com",
  },
];

export const diferenciais = [
  {
    title: "Lorem ipsum dolor",
    description: "Lorem Ipsum is simply dummy text to use and see",
    icon: FaInstagram,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem Ipsum is simply dummy text to use and see",
    icon: FaInstagram,
  },
  {
    title: "Lorem ipsum dolor",
    description: "Lorem Ipsum is simply dummy text to use and see",
    icon: FaInstagram,
  },
];

export const about = {
  h2: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text r adipisicing elit. Eligendi perspiciatis perferendis cupiditate fa",
};

export const services = [
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

export const cta = {
  h2: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text r adipisicing elit. Eligendi perspiciatis perferendis cupiditate fa",
  linkCta: "linkdocta",
};

//********************************//

//Sobre

export const aboutHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  section1: "Lorem Ipsum is simply dummy text",
  image1path: "Lorem Ipsum is simply dummy text",
  section2: "Lorem Ipsum is simply dummy text",
  image2path: "Lorem Ipsum is simply dummy text",
};

//Servicos

export const servicesHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
};

//Contato

export const contactHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  infosContact: {},
};

//Footer

export const footer = {
  social: {
    social,
    getApp,
  },
  contato: {
    infos,
    social,
  },
};
