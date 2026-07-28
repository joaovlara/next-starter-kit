"use client";

import { FaWhatsapp } from "react-icons/fa";
import { social } from "../_data/data";

export default function WhatsAppButton() {
  const whatsappLink = social.find((item) => item.name === "WhatsApp")?.url;

  return (
    <a
      href={whatsappLink ?? "https://wa.me/"}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center z-50"
    >
      <FaWhatsapp size={40} />
    </a>
  );
}
