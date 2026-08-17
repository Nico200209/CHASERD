import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import clsx from "clsx";
import { branches, branchesLabel } from "@/data/branches";
import { site } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const CATEGORY_LABEL = "Desechables · Pods · Líquidos · Pouches";

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const previewBranches = branches.slice(0, 2);

  return (
    <div className="flex flex-1 flex-col">
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-obsidian">
        <Image
          src="/hero/product-wall.jpg"
          alt="Productos Vapeando RD: desechables, pods y nicotine pouches"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pb-16">
          <p
            className="animate-fade-rise border-t border-brass pt-3 font-mono text-xs uppercase tracking-widest text-steel"
            style={{ animationDelay: "0ms" }}
          >
            {CATEGORY_LABEL}
          </p>
          <h1
            className="animate-fade-rise font-display text-[clamp(2.5rem,4vw+1.5rem,4.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-bone"
            style={{ animationDelay: "100ms" }}
          >
            Todo lo que
            <br />
            vapeas, en
            <br />
            un solo lugar
          </h1>
          <div
            className="animate-fade-rise flex flex-wrap gap-4"
            style={{ animationDelay: "220ms" }}
          >
            <Link
              href="/productos"
              className="inline-flex items-center justify-center rounded bg-bone px-6 py-3 font-mono text-sm font-medium uppercase tracking-wide text-obsidian transition-colors motion-reduce:transition-none hover:bg-brass focus-visible:bg-brass"
            >
              Ver Catálogo
            </Link>
            <WhatsAppButton
              phone={site.whatsappPhone}
              message="Hola, quiero información sobre sus productos."
              variant="secondary"
            >
              Pedir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <SectionHeading title="Destacados" />
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {featured.map((product) => (
            <div
              key={product.id}
              className="min-w-[280px] snap-start sm:min-w-0"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16">
        <SectionHeading title={branchesLabel} />
        <div
          className={clsx(
            "grid grid-cols-1 gap-6",
            previewBranches.length > 1 && "sm:grid-cols-2",
          )}
        >
          {previewBranches.map((branch) => (
            <div
              key={branch.id}
              className={clsx(
                "flex flex-col gap-2 rounded border border-graphite bg-gunmetal p-6",
                previewBranches.length === 1 && "max-w-md",
              )}
            >
              <h3 className="font-display text-lg font-bold uppercase tracking-tight text-bone">
                {branch.name}
              </h3>
              <p className="font-mono text-sm text-steel">{branch.hours}</p>
            </div>
          ))}
        </div>
        {branches.length > previewBranches.length && (
          <Link
            href="/sucursales"
            className="font-mono text-sm uppercase tracking-wide text-brass hover:underline"
          >
            Ver todas las sucursales →
          </Link>
        )}
      </section>

      <section className="border-t border-brass/40 bg-gunmetal">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-extrabold uppercase tracking-tight text-bone">
            ¿Listo para pedir?
          </h2>
          <WhatsAppButton
            phone={site.whatsappPhone}
            message="Hola, quiero hacer un pedido."
          >
            Pedir por WhatsApp
          </WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
