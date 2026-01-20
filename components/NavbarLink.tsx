"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  label: string;
  classes?: string;
  onClick?: () => void;
};

export default function NavbarLink({
  href,
  label,
  classes = "",
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex flex-col items-center
        px-2 py-1
        text-sm uppercase tracking-wide
        transition-all duration-300
        ${isActive
          ? "text-[var(--navbartextactive)] font-extrabold underline"
          : "text-[var(--main-color)] "}
        hover:text-[#953012] hover:scale-110
        ${classes}
      `}
    >
      {label}
    </Link>
  );
}
