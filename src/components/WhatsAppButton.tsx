import type { ReactNode } from "react";
import clsx from "clsx";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  phone: string;
  message: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

export function WhatsAppButton({
  phone,
  message,
  variant = "primary",
  className,
  children,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(phone, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded px-5 py-3 font-mono text-sm font-medium uppercase tracking-wide transition-colors motion-reduce:transition-none",
        variant === "primary" &&
          "bg-bone text-obsidian hover:bg-brass focus-visible:bg-brass",
        variant === "secondary" &&
          "border border-graphite text-bone hover:border-brass focus-visible:border-brass",
        className,
      )}
    >
      {children}
    </a>
  );
}
