import type { Branch } from "@/types";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="flex flex-col gap-4 rounded border border-graphite bg-gunmetal p-6">
      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-bone">
        {branch.name}
      </h3>

      <p className="font-body text-sm text-steel">{branch.address}</p>

      <p className="whitespace-pre-line font-mono text-sm text-bone">
        {branch.hours}
      </p>

      <div className="mt-2 flex flex-wrap gap-3">
        <WhatsAppButton
          phone={branch.whatsapp}
          message={`Hola, tengo una pregunta sobre la sucursal ${branch.name}.`}
        >
          Pedir por WhatsApp
        </WhatsAppButton>
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded border border-graphite px-5 py-3 font-mono text-sm font-medium uppercase tracking-wide text-bone transition-colors motion-reduce:transition-none hover:border-brass focus-visible:border-brass"
        >
          Cómo llegar
        </a>
      </div>
    </article>
  );
}
