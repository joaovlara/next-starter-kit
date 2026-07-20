"use client";

import React, { useState } from "react";
import { rotas } from "@/data/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full">
      <section className="mx-auto flex w-full max-w-[90%] items-center justify-between px-4 py-6 md:px-0">
        <div className="shrink-0">
          <Image src="/images/image 9.png" alt="Logo" width={50} height={50} />
        </div>

        <div className="hidden flex-1 items-center justify-center gap-6 font-semibold text-white md:flex">
          {rotas.map((rota, index) => (
            <a key={index} href={rota.href}>
              {rota.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end md:flex">
          <button className="btn-nav">btn</button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </section>

      {isOpen && (
        <div className="border-t border-white/20 bg-gray-500/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 font-semibold text-white">
            {rotas.map((rota, index) => (
              <a key={index} href={rota.href} onClick={() => setIsOpen(false)}>
                {rota.name}
              </a>
            ))}
          </div>
          <button className="btn-nav mt-4 w-full">btn</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
