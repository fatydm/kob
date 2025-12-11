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
  return (
    <nav className="fixed w-full flex justify-around items-center p-2 bg-white shadow z-80">
      {items.map((item, index) => (
        <NavbarLink key={index} {...item} />
      ))}
    </nav>
  );
}
