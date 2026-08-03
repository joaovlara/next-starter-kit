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
import { details } from "framer-motion/client";

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

export const highlights = [
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
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Code,
  },
  {
    id: "2",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Layout,
  },
  {
    id: "3",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Database,
  },
  {
    id: "5",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: ShieldCheck,
  },
  {
    id: "6",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Cloud,
  },
  {
    id: "7",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    details: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    ],
    icon: Cpu,
  },
];

export const cta = {
  eyebrow: "CTA",
  h2: "Lorem Ipsum is simply dummy text",
  text: "Lorem Ipsum is simply dummy text r adipisicing elit. Eligendi perspiciatis perferendis cupiditate fa",
  linkCta: "linkdocta",
  buttonLabel: "Fale Conosco",
};

export const testimonials = {
  eyebrow: "Depoimentos",
  title: "O que dizem sobre nós",
  items: [
    {
      id: 1,
      nome: "Carlos Eduardo",
      funcao: "Proprietário",
      depoimento:
        "A experiência de morar neste condomínio superou todas as nossas expectativas. O acabamento e a segurança são de primeiríssima qualidade.",
      imagem: "/images/avatars/user1.jpg",
    },
    {
      id: 2,
      nome: "Mariana Siqueira",
      funcao: "Moradora",
      depoimento:
        "A tranquilidade do local aliada à estrutura completa de lazer fez toda a diferença para o bem-estar da minha família.",
      imagem: "/images/avatars/user2.jpg",
    },
    {
      id: 3,
      nome: "Roberto & Ana",
      funcao: "Investidores",
      depoimento:
        "Excelente valorização e gestão extremamente profissional. Todo o suporte oferecido pela equipe passa total confiança.",
      imagem: "/images/avatars/user3.jpg",
    },
  ],
};

//Sobre Page

export const aboutHeader = {
  h1: "Sobre Nós",
  text: "Conheça a história, a visão e os valores que movem a nossa empresa.",
  section1Title: "Título da Primeira Seção",
  section1Text:
    "Descrição do texto para a primeira seção. Explique a história ou propósito da empresa de maneira engajadora.",
  image1path: "/images/image 9.png",
  image1Alt: "Descrição da imagem 1",
  section2Title: "Título da Segunda Seção",
  section2Text:
    "Descrição do texto para a segunda seção. Destaque os diferenciais ou a visão de futuro da empresa.",
  image2path: "/images/image 9.png",
  image2Alt: "Descrição da imagem 2",
};

//Servicos Page

export const servicesHeader = {
  h1: "Nossos Serviços",
  text: "Explore as soluções e recursos que entregamos com foco em qualidade e resultado.",
  eyebrow: "O que oferecemos",
  title: "Nossos Serviços Exclusivos",
};

//Contato Page

export const contactHeader = {
  title: "Entre em Contato",
  text: "Estamos prontos para atende-lo. Escolha o canal de sua preferência ou agende uma reunião.",
  contactTitle: "Contato",
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
