"use client";

import { ElementType } from "react";
import { ArrowUpRight } from "lucide-react";
import { details } from "framer-motion/client";

export interface ServiceCardProps {
  title: string;
  description: string;
  details: string;
  icon: ElementType;
  onClick: () => void;
}

export function ServiceCardPage({
  title,
  description,
  details,
  icon: Icon,
  onClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-soft-dark border border-primary/40 hover:border-secondary b-shadow-primary-2 hover:b-shadow-secondary p-6 rounded transition-all duration-300 flex flex-col justify-between h-full hover:bg-linear-to-b from-primary-2/50 to-transparent"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-full bg-primary-2/50 text-secondary group-hover:bg-primary transition-colors">
            <Icon className="w-7 h-7" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-secondary/50 group-hover:text-secondary transition-all" />
        </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold uppercase text-olive-200 mb-2">{title}</h3>
        <p className="text-olive-300 text-sm leading-relaxed">{description}</p>
        <p className="text-olive-400 text-xs leading-relaxed">{details}</p>
      </div>

      </div>

      <div className="pt-4 mt-6 border-t border-primary/20 flex items-center justify-between text-xs font-semibold text-secondary uppercase tracking-wider">
        <span>Saiba Mais</span>
        <span>→</span>
      </div>
    </div>
  );
}
