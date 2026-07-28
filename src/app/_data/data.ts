import type { ElementType } from "react";
import {
  FaApple,
  FaEnvelope,
  FaGooglePlay,
  FaInstagram,
  FaMapMarkerAlt,
  FaMapPin,
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
import { BsBuildingCheck } from "react-icons/bs";

export const infos = {
  name: "nome da empresa",
  adress: "Endereço daEmpresa, 000, Brasil",
  phone: "99 99999-9999",
  mail: "email@email.com",
  instagram: "https://www.instagram.com",
  wppApp: "https://www.WhatsApp.com",
  appleStore: "https://www.appstore.com",
  playStore: "https://www.playstore.com",
};

export const social = [
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    url: infos.wppApp,
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    url: infos.instagram,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    url: infos.mail,
  },
  {
    name: "Apple",
    icon: FaApple,
    url: infos.appleStore,
  },
  {
    name: "PlayStore",
    icon: FaGooglePlay,
    url: infos.playStore,
  },
];

export const contato = [
  {
    icon: BsBuildingCheck,
    name: "Nome",
    value: infos.name,
  },
  {
    icon: FaMapPin,
    name: "Endereço",
    value: infos.adress,
  },
  {
    icon: FaPhone,
    name: "Telefone",
    value: infos.phone,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    value: infos.mail,
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    value: infos.wppApp,
  },
  {
    icon: FaInstagram,
    name: "@instagram",
    value: infos.instagram,
  },
];

export const routes = [
  { name: "HOME", href: "/" },
  { name: "SOBRE", href: "/sobre" },
  { name: "SERVIÇOS", href: "/servicos" },
  { name: "CONTATO", href: "/contato" },
];

//Home Page

export const hero = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  link: "link do whatsApp",
};

export const getApp = [
  {
    icon: FaApple,
    name: "Apple Store",
    url: infos.appleStore,
  },
  {
    icon: FaGooglePlay,
    name: "Play Store",
    url: infos.playStore,
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

//Sobre Page

export const aboutHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  section1: "Lorem Ipsum is simply dummy text",
  image1path: "Lorem Ipsum is simply dummy text",
  section2: "Lorem Ipsum is simply dummy text",
  image2path: "Lorem Ipsum is simply dummy text",
};

//Servicos Page

export const servicesHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
};

//Contato Page

export const contactHeader = {
  h1: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text",
  infosContact: {},
};

//Footer Page

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
