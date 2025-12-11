"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  label: string;
  classes?: string;
};

export default function NavbarLink({ href, label, classes = "" }: NavLinkProps) {
  const pathname = usePathname(); // pour connaître la page active
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex flex-col items-center text-sm uppercase tracking-wide 
        transition-all duration-300 
        ${isActive ? "text-[#8b5e3c] font-extrabold underline" : "text-black"} 
        hover:text-[#8b5e3c] hover:scale-110 
        ${classes}
      `}
    >
      {label}
    </Link>
  );
}
