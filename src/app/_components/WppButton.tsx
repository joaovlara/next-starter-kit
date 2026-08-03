"use client";

import { FaWhatsapp } from "react-icons/fa";
import { infos } from "../_data/data";

export default function WhatsAppButton() {
  return (
    <a
      href={infos.wppApp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 text-olive-300 right-6 p-6 rounded-full transition flex items-center justify-center z-50 bg-primary hover:scale-105 hover:bg-primary-2"
    >
      <FaWhatsapp size={48} />
    </a>
  );
}
