"use client";

import { FaWhatsapp } from "react-icons/fa";
import { infos } from "@/data/data";

export default function WhatsAppButton() {
  return (
    <a
      href={infos.wppLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}
