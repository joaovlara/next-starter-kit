"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { ElementType } from "react";
import { infos } from "../../_data/data";

export interface ServiceItem {
  id?: string;
  title: string;
  description: string;
  details?: string;
  icon: ElementType;
}

interface ServiceModalProps {
  service?: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  // Trava o scroll do body e escuta a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Fundo escuro desfocado */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm"
          />

          {/* Card do Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-soft-dark border border-primary b-shadow-secondary rounded p-6 md:p-8 z-10 overflow-hidden my-auto"
          >
            {/* Botão Fechar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary-2/40 text-olive-300 hover:text-secondary hover:bg-primary-2 transition-colors"
              aria-label="Fechar modal"
            >
              <X size={20} />
            </button>

            {/* Cabeçalho */}
            <div className="flex items-center gap-4 mb-6 pr-8">
              <div className="p-4 rounded-full bg-primary text-secondary shrink-0">
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold uppercase text-olive-200">
                  {service.title}
                </h3>
              </div>
            </div>

            {/* Descrição Completa */}
            <div className="mb-6 space-y-3">
              <p className="text-olive-300 text-base leading-relaxed">
                {service.description}
              </p>
              <p className="text-olive-400 text-sm">{service.details}</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
