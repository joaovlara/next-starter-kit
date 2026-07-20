import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// Simulando a estrutura que deve vir do seu arquivo @/data/data
const infos = {
  links: [
    { name: "LINK", href: "#" },
    { name: "LINK", href: "#" },
    { name: "LINK", href: "#" },
    { name: "LINK", href: "#" },
  ],
  contatos: [
    { text: "contato" },
    { text: "contato" },
    { text: "contato" },
    { text: "contato" },
  ],
  redesSociais: [
    { icon: <FaFacebookF size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaLinkedinIn size={18} />, href: "#" },
    { icon: <FaTwitter size={18} />, href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-500">
      <section className="container-1 space-y-9">
        <article className="flex justify-center gap-6">
          {infos.redesSociais.map((rede, index) => (
            <a
              key={index}
              href={rede.href}
              className="rounded-full bg-gray-100 p-4"
            >
              {rede.icon}
            </a>
          ))}
        </article>

        <article className="grid grid-cols-3 bg-gray-400 h-[30vh] rounded-b-[80px] p-9 text-white">
          <div className="flex items-center justify-center">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={200}
              height={200}
              className="rounded-full aspect-square"
            />
          </div>
          <ul className="flex flex-col text-start items-center justify-center">
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            {infos.contatos.map((contato, index) => (
              <li key={index}>{contato.text}</li>
            ))}
          </ul>
          <ul className="flex flex-col text-start items-center justify-center">
            <h3 className="text-xl font-bold mb-4">Navegar</h3>
            {infos.links.map((link, index) => (
              <li key={index}>{link.name}</li>
            ))}
          </ul>
        </article>

        <article className="text-center text-white">
          <p>© Todos os direitos reservados.</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
