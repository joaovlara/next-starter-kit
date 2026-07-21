import { ElementType } from "react";
import {
  Code,
  Layout,
  Smartphone,
  Database,
  ShieldCheck,
  Cloud,
  Cpu,
} from "lucide-react";

export const rotas = [
  { name: "HOME", href: "/" },
  { name: "SOBRE", href: "/sobre" },
  { name: "SERVIÇOS", href: "/servicos" },
  { name: "CONTATO", href: "/contato" },
];

// Informações Gerais do site, Links, Redes Sociais

export const infos = {
  nome: "",
  endereço: "",
  telefone: "",
  email: "",
  wppLink: "",
  instagram: "",
  facebook: "",
};

//Conteudos de texto das seções

export const diferenciais = [
  {
    title: "Atendimento Personalizado",
    description: "Equipe dedicada para entender e atender suas necessidades.",
    icon: "👩‍💼",
  },
  {
    title: "Qualidade Garantida",
    description: "Produtos e serviços com alto padrão de excelência.",
    icon: "⭐",
  },
  {
    title: "Entrega Rápida",
    description: "Compromisso com prazos e agilidade na entrega.",
    icon: "🚚",
  },
];

// Serviços oferecidos
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ElementType;
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

// Footer

export const footer = {
  contato: [
    { telefone: "11 11111111" },
    { email: "email.com.br" },
    { endereco: "endereço aqui formatado" },
    { instagram: "linkdoinstagram" },
  ],
};
