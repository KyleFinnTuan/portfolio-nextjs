"use client";

import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation'

const navItems = [
  // { label: "ABOUT", href: "/about", color: "bg-pink-300" },
  { label: "PROJECTS", href: "/projects", color: "bg-green-300" },
  { label: "SKILLS", href: "/skills", color: "bg-yellow-300" },
  // { label: "CONTACT", href: "/contact", color: "bg-blue-300" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()


  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-black border-b-4 border-black shadow-[6px_6px_0px_#000]">
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-10">
        <Button onClick={() => router.push("/")} className="items-center w-9 h-9 border-2 border-black bg-white p-0.5">
          <Image
            src="/boxuline-dark.svg"
            alt="Logo"
            width={36}
            height={36}
          />
        </Button>
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-2 border-black bg-green-200 shadow-[3px_3px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-transform duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={clsx(
              "block w-6 h-0.5 bg-black mb-1 transition-all duration-300",
              menuOpen && "rotate-45 translate-y-1.5"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 bg-black mb-1 transition-all duration-300",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={clsx(
              "block w-6 h-0.5 bg-black transition-all duration-300",
              menuOpen && "-rotate-45 -translate-y-1.5"
            )}
          />
        </button>

        {/* Desktop Nav */}
        <nav role="navigation" className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Button
                  onClick={() => router.push(item.href)}
                  className={clsx( 
                    "font-bold",
                    item.color
                  )}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav role="navigation" className="md:hidden animate-scaleDown">
          <ul className="flex flex-col gap-4 p-4 bg-white border-t-4 border-black shadow-[6px_6px_0px_#000]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={clsx(
                    "block px-3 py-2 border-2 border-black font-bold uppercase text-sm shadow-[3px_3px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-transform",
                    item.color
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
