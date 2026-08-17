import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";

export default function SobreNosotrosPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 py-12">
      <SectionHeading title="Sobre Nosotros" />

      <div className="relative aspect-video overflow-hidden rounded border border-graphite bg-gunmetal">
        <Image
          src="/about/tienda.png"
          alt="Vitrinas de producto en tienda Vapeando RD"
          fill
          className="object-cover"
          sizes="(min-width: 768px) 768px, 100vw"
        />
      </div>

      <div className="flex flex-col gap-5 font-body text-base leading-relaxed text-bone">
        <p>
          Vapeando RD es una tienda especializada en vapeo en Santo Domingo,
          abierta desde 2021 en Plaza Amer. Trabajamos con marcas reconocidas
          — Whiff Remix, Cali, Vapeology, ZYN — para que lo que compras sea
          original, no falsificado.
        </p>
        <p>
          En tienda encuentras desechables, pods y kits recargables,
          líquidos, nicotine pouches y accesorios (resistencias, baterías,
          algodón). Si buscas algo específico, es más fácil confirmar
          disponibilidad por WhatsApp que hacer el viaje a ciegas.
        </p>
        <p>
          A diferencia de un colmado, aquí el producto se guarda y rota
          correctamente, el personal conoce cada línea que vende, y hay
          garantía real si un dispositivo llega defectuoso.
        </p>
      </div>
    </div>
  );
}
