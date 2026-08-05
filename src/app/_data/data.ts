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
 BarChart3,
 BellRing,
 CircleDollarSign,
 Cpu,
 FileCheck2,
 Headphones,
 ReceiptText,
 Scale,
 ShieldCheck,
 Wallet,
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
 h1: "Tecnologia e segurança para o seu condomínio",
 text: "O seu condomínio com tecnologia, equilíbrio financeiro e inadimplência zero.",
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
   title: "Segurança financeira garantida",
   description:
     "Repasses mensais assegurados e soluções que protegem a saúde financeira do condomínio.",
   icon: ShieldCheck,
 },
 {
   title: "Capital próprio",
   description:
     "Empresa financeiramente sólida, com estrutura própria que assegura estabilidade e autonomia nas operações.",
   icon: CircleDollarSign,
 },
 {
   title: "Atendimento personalizado",
   description:
     "Suporte direto e especializado para síndicos e condôminos, com foco em resolver demandas com agilidade.",
   icon: Headphones,
 },
];


export const about = {
 h2: "Mais do que garantia: uma operação digital para manter o condomínio saudável.",
 text: "A IZ Garantia Condominial simplifica a gestão financeira do seu condomínio com repasse garantido, cobrança estruturada e uma operação 100% orientada por dados. Você acompanha inadimplência, boletos e relatórios em um ambiente digital, com agilidade e transparência para síndicos e administradoras.",
};


export const services = [
 {
   id: "cobranca-amigavel",
   title: "Cobrança Amigável",
   description:
     "Equipe para cobrança dos inadimplentes, inclusive os retroativos.",
   details: [
     "Processo estruturado para recuperação de pagamentos com comunicação clara e foco em resultados.",
   ],
   icon: BellRing,
 },
 {
   id: "repasse-garantido",
   title: "Repasse garantido",
   description:
     "Receba o valor integral das taxas condominiais mensalmente.",
   details: [
     "Fluxo de repasse organizado para manter a previsibilidade financeira do condomínio.",
   ],
   icon: Wallet,
 },
 {
   id: "relatorios-completos",
   title: "Relatórios completos",
   description:
     "Acesso fácil a relatórios detalhados sobre inadimplência.",
   details: [
     "Informações precisas para tomada de decisão com acompanhamento em tempo real.",
   ],
   icon: BarChart3,
 },
 {
   id: "emissao-de-boletos",
   title: "Emissão de boletos",
   description:
     "Praticidade com boletos mensais enviados aos condôminos.",
   details: [
     "Processo simplificado para emissão, envio e organização dos boletos do condomínio.",
   ],
   icon: ReceiptText,
 },
 {
   id: "fluxo-de-caixa-saudavel",
   title: "Fluxo de caixa saudável",
   description:
     "Controle financeiro seguro, garantindo contas sempre em dia.",
   details: [
     "Acompanhamento contínuo do recebimento para preservar a saúde financeira da administração.",
   ],
   icon: CircleDollarSign,
 },
 {
   id: "concilacao-e-controle-financeiro",
   title: "Conciliação e controle financeiro",
   description:
     "Organização do fluxo de recebimentos, com visibilidade para apoiar a gestão.",
   details: [
     "Conciliação eficiente dos dados financeiros com maior clareza e controle operacional.",
   ],
   icon: Scale,
 },
];


export const cta = {
 eyebrow: "CTA",
 h2: "Fale com um especialista agora e descubra como podemos ajudar seu condomínio",
 text: "Solução convidativa",
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
 h1: "Mais do que garantia: uma operação digital para manter o condomínio saudável",
 text: "texto breve",
 section1Title: "Texto sobre a historia e valores",
 section1Text:
   "A IZ Garantia Condominial nasceu para fortalecer a gestão financeira dos condomínios com responsabilidade, previsibilidade e tecnologia. Nossa operação combina cuidado de perto com a rotina administrativa e a visão de longo prazo para proteger a saúde financeira de cada condomínio.",
 image1path: "/images/image 9.png",
 image1Alt: "Imagem do escritório ou logo",
 section2Title: "Texto sobre o propósito e futuro da empresa",
 section2Text:
   "Nosso propósito é transformar a gestão condominial em um processo mais simples, transparente e sustentável. Com foco em inovação e atendimento especializado, seguimos construindo uma operação que apoia síndicos, administradoras e moradores com confiança e eficiência.",
 image2path: "/images/image 9.png",
 image2Alt: "Imagem relacionada à área de atuação",
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



