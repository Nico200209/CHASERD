import { branches } from "@/data/branches";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function ContactoPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12">
      <section className="flex flex-col items-start gap-6 rounded border border-graphite bg-gunmetal p-8 sm:p-12">
        <SectionHeading
          title="Escríbenos por WhatsApp"
          subtitle="El canal más rápido para pedidos y preguntas"
        />
        <WhatsAppButton
          phone={site.whatsappPhone}
          message="Hola, tengo una pregunta."
          className="px-8 py-4 text-base"
        >
          Pedir por WhatsApp
        </WhatsAppButton>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-bone">
          Otros canales
        </h2>

        <a
          href={`https://instagram.com/${site.instagram.replace(/^@/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-steel hover:text-bone"
        >
          {site.instagram}
        </a>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {branches.map((branch) => (
            <div key={branch.id} className="flex flex-col gap-2">
              <h3 className="font-display text-base font-bold uppercase tracking-tight text-bone">
                {branch.name}
              </h3>
              <p className="font-body text-sm text-steel">{branch.address}</p>
              <p className="whitespace-pre-line font-mono text-sm text-bone">
                {branch.hours}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
