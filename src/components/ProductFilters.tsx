"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import type { Category } from "@/types";

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "desechables", label: "Desechables" },
  { value: "pods", label: "Pods & Kits" },
  { value: "liquidos", label: "Líquidos" },
  { value: "pouches", label: "Nicotine Pouches" },
  { value: "accesorios", label: "Accesorios" },
];

export function ProductFilters({ brands }: { brands: string[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const activeCat = searchParams.get("cat");
  const activeBrands = new Set(
    (searchParams.get("marca") ?? "").split(",").filter(Boolean),
  );
  const q = searchParams.get("q") ?? "";

  function push(mutate: (params: URLSearchParams) => void) {
    const params = new URLSearchParams(searchParams.toString());
    mutate(params);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, {
      scroll: false,
    });
  }

  function toggleCategory(value: string) {
    push((params) => {
      if (activeCat === value) params.delete("cat");
      else params.set("cat", value);
    });
  }

  function toggleBrand(value: string) {
    push((params) => {
      const next = new Set(activeBrands);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      if (next.size > 0) params.set("marca", [...next].join(","));
      else params.delete("marca");
    });
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="product-search" className="font-mono text-xs uppercase tracking-wider text-steel">
          Buscar
        </label>
        <input
          id="product-search"
          type="search"
          defaultValue={q}
          placeholder="Nombre, marca o sabor"
          onChange={(e) =>
            push((params) => {
              const value = e.target.value.trim();
              if (value) params.set("q", value);
              else params.delete("q");
            })
          }
          className="rounded border border-graphite bg-obsidian px-4 py-2 font-body text-bone placeholder:text-steel focus-visible:border-brass"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-steel">
          Categoría
        </span>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => toggleCategory(cat.value)}
              aria-pressed={activeCat === cat.value}
              className={clsx(
                "rounded border px-3 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors motion-reduce:transition-none",
                activeCat === cat.value
                  ? "border-brass text-brass"
                  : "border-graphite text-bone hover:border-steel",
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-steel">
          Marca
        </span>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 font-body text-sm text-bone"
            >
              <input
                type="checkbox"
                checked={activeBrands.has(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-4 w-4 accent-brass"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
