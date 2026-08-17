import type { Metadata } from "next";
import { archivo, ibmPlexMono, instrumentSans } from "@/lib/fonts";
import { AgeGate } from "@/components/AgeGate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vapeando RD",
  description: "Vapeando RD",
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-DO"
      className={`${archivo.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-bone font-body">
        <AgeGate />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
