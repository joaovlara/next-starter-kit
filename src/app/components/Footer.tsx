import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

// Simulando a estrutura que deve vir do seu arquivo @/data/data
const infos = {
  links: [
    { name: 'LINK', href: '#' },
    { name: 'LINK', href: '#' },
    { name: 'LINK', href: '#' },
    { name: 'LINK', href: '#' },
  ],
  contatos: [
    { text: 'endereço' },
    { text: 'contato' },
    { text: 'contato' },
    { text: 'contato' },
  ],
  redesSociais: [
    { icon: <FaFacebookF size={18} />, href: '#' },
    { icon: <FaInstagram size={18} />, href: '#' },
    { icon: <FaLinkedinIn size={18} />, href: '#' },
    { icon: <FaTwitter size={18} />, href: '#' },
  ]
}

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e1e1e] text-white py-10 px-4 md:px-10 flex flex-col items-center font-sans">
      
      {/* 1. Menu de Links Superiores */}
      <nav className="flex gap-8 mb-8 text-xs font-bold tracking-wider">
        {infos.links.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-gray-400 transition-colors">
            {link.name}
          </Link>
        ))}
      </nav>

      {/* 2. Bloco Central Escuro com Cantos Arredondados */}
      <div className="w-full max-w-5xl bg-[#333333] rounded-b-[40px] p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 items-center relative gap-8">
        
        {/* Logo (Esquerda) */}
        <div className="flex justify-center md:justify-start">
          <div className="w-32 h-32 bg-[#eeeeee] rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
            <span className="text-sm">Logo / Img</span>
          </div>
        </div>

        {/* Informações de Contato (Centro) */}
        <div className="flex flex-col items-center text-center gap-3 text-sm font-semibold tracking-wide">
          {infos.contatos.map((contato, index) => (
            <p key={index} className="hover:text-gray-300 cursor-default">
              {contato.text}
            </p>
          ))}
        </div>

        {/* Redes Sociais com React Icons (Direita / Topo no Desktop) */}
        <div className="flex justify-center md:justify-end md:items-start md:absolute md:top-8 md:right-12 gap-3">
          {infos.redesSociais.map((rede, index) => (
            <a
              key={index}
              href={rede.href}
              className="w-10 h-10 rounded-full bg-[#cccccc] text-[#333333] flex items-center justify-center hover:bg-white hover:scale-105 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              {rede.icon}
            </a>
          ))}
        </div>

      </div>

      {/* 3. Copyright (Rodapé inferior) */}
      <div className="mt-10 text-xs font-semibold tracking-wide text-gray-300">
        Copyright © {new Date().getFullYear()}
      </div>

    </footer>
  )
}

export default Footer