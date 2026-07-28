"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../_data/data";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full shadow-xs shadow-primary">
      <section className="mx-auto flex w-full max-w-[90%] items-center justify-between py-6 md:px-0">
        {/* Logo Clicável */}
        <div className="shrink-0">
          <Link href="/">
            <Image
              src="/images/image 9.png"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <div className="hidden flex-1 items-center justify-center gap-6 font-semibold md:flex">
          {routes.map((rota, index) => {
            const isActive = pathname === rota.href;
            return (
              <Link
                key={index}
                href={rota.href}
                className={`transition-colors duration-200 hover:text-secondary-2 ${
                  isActive ? "text-secondary-2" : ""
                }`}
              >
                {rota.name}
              </Link>
            );
          })}
        </div>

        {/* CTA DESKTOP */}
        <div className="hidden items-center justify-end md:flex">
          <Link href="/fale-conosco" className="btn-nav">
            Fale Conosco
          </Link>
        </div>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </section>

      {/* MENU MOBILE */}
      {isOpen && (
        <div className="b-shadow-secondary p-6 md:hidden">
          <div className="flex flex-col gap-4 font-semibold">
            {routes.map((rota, index) => {
              const isActive = pathname === rota.href;
              return (
                <Link
                  key={index}
                  href={rota.href}
                  onClick={() => setIsOpen(false)}
                  className={`border-b border-secondary p-1 transition-colors duration-200 hover:text-secondary ${
                    isActive ? "bg-secondary-2 hover:text-dark" : ""
                  }`}
                >
                  {rota.name}
                </Link>
              );
            })}
          </div>
          <Link
            href="/fale-conosco"
            className="btn-nav mt-4 block w-full text-center"
            onClick={() => setIsOpen(false)}
          >
            Fale Conosco
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
