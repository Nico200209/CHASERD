import Image from "next/image";
import type { Product } from "@/types";
import { site } from "@/data/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const SPEC_LABELS: Record<keyof Product["specs"], string> = {
  puffs: "PUFFS",
  nicotineMg: "NIC",
  batteryMah: "BAT",
  volumeMl: "ML",
};

const priceFormatter = new Intl.NumberFormat("es-DO", {
  maximumFractionDigits: 0,
});

function specEntries(specs: Product["specs"]) {
  return (Object.keys(SPEC_LABELS) as (keyof Product["specs"])[])
    .filter((key) => specs[key] !== undefined)
    .map((key) => ({ label: SPEC_LABELS[key], value: specs[key] }));
}

export function ProductCard({ product }: { product: Product }) {
  const specs = specEntries(product.specs);
  const message = `Hola, quiero pedir: ${product.name} (${product.brand}) - RD$${priceFormatter.format(product.price)}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-graphite bg-gunmetal transition-transform motion-reduce:transition-none hover:-translate-y-0.5 hover:border-steel">
      <div className="relative aspect-4/3 bg-gunmetal">
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 px-4 pt-4">
        <p className="font-mono text-xs uppercase tracking-wider text-steel">
          {product.brand}
        </p>
        <h3 className="font-display text-xl font-bold uppercase tracking-tight text-bone">
          {product.name}
        </h3>
      </div>

      {specs.length > 0 && (
        <dl className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-graphite px-4 py-3 font-mono text-[13px]">
          {specs.map((spec, i) => (
            <div key={spec.label} className="flex items-center gap-3">
              {i > 0 && <span className="h-3 w-px bg-graphite" aria-hidden />}
              <span>
                <dt className="inline text-steel">{spec.label}</dt>{" "}
                <dd className="inline text-bone">{spec.value}</dd>
              </span>
            </div>
          ))}
        </dl>
      )}

      <p className="border-t border-graphite px-4 py-3 text-right font-mono text-[15px] font-medium text-brass">
        RD$ {priceFormatter.format(product.price)}
      </p>

      <div className="px-4 pb-4">
        <WhatsAppButton
          phone={site.whatsappPhone}
          message={message}
          className="w-full"
        >
          Pedir por WhatsApp
        </WhatsAppButton>
      </div>
    </article>
  );
}
