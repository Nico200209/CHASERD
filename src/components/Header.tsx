import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { branchesLabel } from "@/data/branches";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
  { href: "/productos", label: "Productos" },
  { href: "/sucursales", label: branchesLabel },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="relative z-40 border-b border-graphite bg-obsidian">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Vapeando RD"
            width={52}
            height={52}
            priority
          />
        </Link>

        <MobileNav links={NAV_LINKS} />
      </div>
    </header>
  );
}
