
"use client";

import Image from "next/image";
import { useState } from "react";
import NavbarLink from "./NavbarLink";

type NavbarItem = {
  href: string;
  label: string;
  classes?: string;
};

type NavbarProps = {
  items: NavbarItem[];
};

export default function Navbar({ items }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[var(--navbarground)] shadow-md z-40">
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Image
          src="/assets/kob.png"
          alt="logo"
          width={70}
          height={70}
          priority
          className="cursor-pointer"
        />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          aria-label="Menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-[var(--navbar)] border-t border-gray-200">
          {items.map((item, index) => (
            <NavbarLink
              key={index}
              {...item}
              classes="text-lg font-medium hover:text-[var(--secondback)] transition-colors"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      </div>

      {/* Overlay optionnel */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}