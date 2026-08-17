import Link from "next/link";
import { site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-graphite bg-obsidian">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-display text-lg font-extrabold uppercase tracking-tight text-bone">
            Vapeando RD
          </span>
          <Link
            href={`https://instagram.com/${site.instagram.replace(/^@/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-steel hover:text-bone"
          >
            {site.instagram}
          </Link>
          <p className="font-mono text-xs text-steel">
            © {new Date().getFullYear()} Vapeando RD
          </p>
        </div>

        <WhatsAppButton phone={site.whatsappPhone} message="Hola, tengo una pregunta.">
          Pedir por WhatsApp
        </WhatsAppButton>
      </div>
    </footer>
  );
}
