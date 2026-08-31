import {
  FaApple,
  FaEnvelope,
  FaGooglePlay,
  FaInstagram,
  FaMapPin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  BarChart3,
  BellRing,
  CircleDollarSign,
  Cpu,
  Headphones,
  ReceiptText,
  Scale,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { BsBuildingCheck } from "react-icons/bs";

export const infos = {
  name: "IZ Garantia Condominial",
  adress:
    "Av. Lins de Vasconcelos, 3464 - Sl 51 - Vila Mariana, São Paulo - SP, 04112-002",
  phone: "11 94627-1110",
  mail: "iz@izgarantia.com.br",
  instagram: "https://www.instagram.com/izgarantiacondominial/",
  wppApp: "https://wa.me/5511946271110",
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
    url: `mailto:${infos.mail}`,
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
    url: "https://www.izgarantia.com.br",
  },
  {
    icon: FaMapPin,
    name: "Endereço",
    value: infos.adress,
    url: "https://maps.app.goo.gl/xrmgp92QC3QWFMod8",
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
    value: "WhatsApp",
    url: infos.wppApp,
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    value: "@izgarantiacondominial",
    url: infos.instagram,
  },
];

export const routes = [
  { name: "HOME", href: "/" },
  { name: "SOBRE", href: "/sobre" },
  { name: "SERVIÇOS", href: "/servicos" },
  { name: "CONTATO", href: "/contato" },
];

// Home Page

export const hero = {
  h1: "Seu condomínio com * Inadimplência Zero *",
  text: "Tecnologia, equilíbrio financeiro e gestão simplificada",
  link: infos.wppApp,
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
      "Independência financeira que proporciona maior solidez operacional e segurança para o condomínio.",
    icon: CircleDollarSign,
  },
  {
    title: "Atendimento especializado",
    description:
      "Suporte direto e eficiente para síndicos e condôminos, com foco em resolver demandas com agilidade.",
    icon: Headphones,
  },
];

export const about = {
  h2: "*Mais do que garantia:*  uma operação digital para manter o condomínio saudável.",
  text: "A IZ Garantia Condominial simplifica a gestão financeira do seu condomínio com repasse garantido, cobrança estruturada e uma operação 100% orientada por dados.",
};

export const services = [
  {
    id: "cobranca-amigavel",
    title: "Cobrança Amigável",
    description:
      "Equipe para cobrança dos inadimplentes, inclusive os retroativos.",
    details:
      "Processo estruturado para recuperação de pagamentos com comunicação clara e foco em resultados.",

    icon: BellRing,
  },
  {
    id: "repasse-garantido",
    title: "Repasse garantido",
    description:
      "Recebimento do valor integral das taxas condominiais todos os meses.",
    details:
      "Fluxo de repasse organizado para manter a previsibilidade financeira do condomínio.",

    icon: Wallet,
  },
  {
    id: "relatorios-completos",
    title: "Relatórios completos",
    description:
      "Acesso facilitado a relatórios detalhados sobre inadimplência.",
    details:
      "Informações precisas com acompanhamento em tempo real para tomadas de decisão mais assertivas.",
    icon: BarChart3,
  },
  {
    id: "emissao-de-boletos",
    title: "Emissão de boletos",
    description: "Boletos mensais enviados aos condôminos todos os meses, diretamente via WhatsApp e E-mail.",
    details:
      "Processo simplificado para emissão, envio e organização dos boletos do condomínio.",
    icon: ReceiptText,
  },
  {
    id: "fluxo-de-caixa-saudavel",
    title: "Fluxo de caixa saudável",
    description:
      "Controle financeiro seguro, garantindo que as contas estejam sempre em dia.",
    details:
      "Acompanhamento contínuo do recebimento para preservar a saúde financeira da administração.",

    icon: CircleDollarSign,
  },
  {
    id: "concilacao-e-controle-financeiro",
    title: "Conciliação e controle financeiro",
    description:
      "Organização do fluxo de recebimentos, com visibilidade para apoiar a gestão.",
    details:
      "Conciliação eficiente dos dados financeiros com maior clareza e controle operacional.",

    icon: Scale,
  },
  {
    id: "acompanhamento-digital",
    title: "Acompanhamento digital",
    description: "Acesso aos informativos em um ambiente rápido e digital.",
    details:
      "Consulte boletos e relatórios em uma plataforma online, com agilidade, praticidade e transparência para síndicos e administradoras.",

    icon: Cpu,
  },
];

export const downloadApp = {
  title: "Seu condomínio mais * organizado * e * conectado *",
  text: "Com a IZ, você conta com um aplicativo exclusivo para seu condomínio e resolve tudo de forma rápida e fácil: acessa boletos, consulta atas e o regimento interno, participa de enquetes, faz reservas das áreas comuns e muito mais. O condomínio fica responsável pela disponibilidade das informações e você com tudo na palma da sua mão.",
};

export const cta = {
  h2: "* Revolucione a gestão * do seu condomínio e fale com um dos nossos especialistas",
  linkCta: infos.wppApp,
  buttonLabel: "Entre em contato",
};

export const testimonials = {
  eyebrow: "Depoimentos",
  title: "O que dizem sobre nós",
  items: [
    {
      id: 1,
      nome: "Hudson Garcia",
      funcao: "Síndico",
      depoimento:
        "Garantir as receitas 100% é o sonho de todo síndico. Encontramos a solução ideal, onde temos a garantia do recebimento das taxas condominiais, atendimento profissional adequado, com rapidez e eficiência e o mais importante: a confiança de um parceiro de negócios",
      imagem: "/images/avatars/user1.jpg",
    },
    {
      id: 2,
      nome: "Rogério R.",
      funcao: "Síndico",
      depoimento:
        "A vida financeira dos dois condomínios melhoraram, agora temos como planejar as benfeitorias a realizar sem ter receio da falta do dinheiro para cumprir com nossas obrigações e cada vez mais melhorar e valorizar os condomínios e consequentemente a valorização de cada unidade autônoma",
      imagem: "/images/avatars/user2.jpg",
    },
  ],
};

// Sobre Page

export const aboutHeader = {
  h1: "Somos mais do que uma garantidora.",
  text: "Nossa missão é proporcionar previsibilidade financeira, reduzir os impactos da inadimplência e oferecer tranquilidade para síndicos, administradoras e condôminos.",

  section1Title: "Uma história construída com confiança.",
  section1Text:
    "Com mais de 20 anos de experiência, a IZ Garantia Condominial nasceu para fortalecer a gestão financeira dos condomínios com responsabilidade, confiabilidade e tecnologia. Nossa operação visa proteger a longo prazo a saúde financeira de cada condomínio.",
  image1path: "/images/pexels-olly-3760058.jpg",
  image1Alt: "Imagem do escritório ou logo",

  section2Title:
    "O futuro da gestão condominial é mais simples, seguro e previsível.",
  section2Text:
    "Nosso propósito é transformar a gestão condominial em um processo mais simples, transparente e sustentável. Por isso, investimos continuamente em processos, ferramentas e atendimento especializado para apoiar síndicos e administradoras em uma gestão mais estratégica e preparada para o futuro.",
  image2path: "/images/tech-office-roxo.png",
  image2Alt: "Imagem relacionada à área de atuação",

  section3Title: "Parte de uma rede que entende do mercado",
  section3Text:
    "A IZ Garantia Condominial faz parte da Rede Garantidora, uma rede com 44 anos de experiência em soluções financeiras para condomínios. Essa parceria fortalece nossa atuação e amplia nossa capacidade de oferecer soluções eficientes para síndicos e administradoras.",
  image3path: "/images/selo-rede.jpg",
  image3Alt: "Selo da Rede: RedeGarantidora",
};

// Serviços Page

export const servicesHeader = {
  h1: "Nossos Serviços",
  text: "Explore as soluções e recursos que entregamos com foco em qualidade e resultado.",
  eyebrow: "O QUE OFERECEMOS",
  title: "Nossos Serviços",
};

// Contato Page

export const contactHeader = {
  title: "Pronto para dar o próximo passo?",
  text: "Fale com a IZ e descubra como podemos revolucionar a gestão financeira do seu condomínio.",
  contactTitle: "Contato",
};

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
