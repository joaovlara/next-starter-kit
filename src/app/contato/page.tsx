import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

interface ContactData {
  address: string;
  email: string;
  whatsapp: string;
  instagram: string;
}

const contactMockup: ContactData = {
  address: "Lorem Ipsum, 123 - Bairro Dolor, Cidade - ST",
  email: "contato@loremipsum.com.br",
  whatsapp: "+55 (00) 99999-9999",
  instagram: "@lorem_ipsum_oficial",
};

export default function ContatoPage() {
  return (
    <main className="w-full">
      <section className="">
        <article className="container-1 gap-6 p-6  bg-gray-200">
          {/* Coluna Esquerda: Informacoes de Contato */}
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
              LOREM IPSUM
            </h2>

            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm md:text-base">
              <FaMapMarkerAlt className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{contactMockup.address}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm md:text-base">
              <FaEnvelope className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{contactMockup.email}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm md:text-base">
              <FaWhatsapp className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{contactMockup.whatsapp}</span>
            </div>

            <div className="flex items-center gap-3 text-gray-800 font-medium text-sm md:text-base">
              <FaInstagram className="w-5 h-5 text-gray-700 shrink-0" />
              <span>{contactMockup.instagram}</span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
