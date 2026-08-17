"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLink {
  href: string;
  label: string;
}

export function MobileNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <ul className="hidden items-center gap-8 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(
                "font-mono text-sm uppercase tracking-wide transition-colors motion-reduce:transition-none",
                pathname === link.href
                  ? "border-b border-brass text-bone"
                  : "text-steel hover:text-bone",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
      >
        <span
          className={clsx(
            "h-px w-6 bg-bone transition-transform motion-reduce:transition-none",
            open && "translate-y-[3.5px] rotate-45",
          )}
        />
        <span
          className={clsx(
            "h-px w-6 bg-bone transition-transform motion-reduce:transition-none",
            open && "-translate-y-[3.5px] -rotate-45",
          )}
        />
      </button>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Menú principal"
          className="absolute inset-x-0 top-full border-t border-graphite bg-gunmetal md:hidden"
        >
          <ul className="flex flex-col divide-y divide-graphite">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block px-6 py-4 font-mono text-sm uppercase tracking-wide",
                    pathname === link.href ? "text-brass" : "text-bone",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
