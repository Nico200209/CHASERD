import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { SectionHeading } from "@/components/SectionHeading";
import type { Category } from "@/types";

const CATEGORY_VALUES: Category[] = [
  "desechables",
  "pods",
  "liquidos",
  "pouches",
  "accesorios",
];

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ProductosPage({
  searchParams,
}: PageProps<"/productos">) {
  const params = await searchParams;
  const cat = firstParam(params.cat);
  const marca = firstParam(params.marca);
  const q = firstParam(params.q)?.trim().toLowerCase();

  const activeBrands = marca ? marca.split(",").filter(Boolean) : [];
  const brands = [...new Set(products.map((p) => p.brand))].sort();

  const filtered = products.filter((product) => {
    if (cat && CATEGORY_VALUES.includes(cat as Category) && product.category !== cat) {
      return false;
    }
    if (activeBrands.length > 0 && !activeBrands.includes(product.brand)) {
      return false;
    }
    if (q) {
      const haystack = [product.name, product.brand, ...product.flavors]
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <SectionHeading
        title="Productos"
        subtitle={`${filtered.length} de ${products.length} productos`}
      />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        <ProductFilters brands={brands} />

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="font-body text-steel">
            No hay productos con esos filtros. Prueba quitando uno.
          </p>
        )}
      </div>
    </div>
  );
}
