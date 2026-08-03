"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { infos } from "../_data/data";
import { useLoading } from "../_context/LoadingContext"; 

export default function WhatsAppButton() {
  const { isPreloaderFinished } = useLoading();

  return (
    <motion.a
      href={infos.wppApp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isPreloaderFinished
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0 }
      }
      transition={{
        duration: 0.5,
        delay: 0.9,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 md:p-6 p-3 text-olive-300 rounded-full flex items-center justify-center z-50 bg-primary hover:bg-primary-2 shadow-lg transition-colors duration-300"
    >
      <FaWhatsapp size={45} />
    </motion.a>
  );
}