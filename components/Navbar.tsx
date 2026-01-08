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
    <nav className="fixed w-full z-80 bg-[var(--navbar)] shadow">
      <div className="flex items-center justify-between px-4 py-2">
        <Image
          src="/assets/kob__logo.png"
          alt="logo"
          width={90}
          height={90}
          priority
        />

        {/* Desktop links */}
        <div className="hidden md:flex gap-6">
          {items.map((item, index) => (
            <NavbarLink key={index} {...item} />
          ))}
        </div>

        {/* Burger (mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl font-bold"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[var(--navbar)] shadow-md">
          {items.map((item, index) => (
            <NavbarLink
              key={index}
              {...item}
              classes="text-lg"
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  );
}
