import { branches, branchesLabel } from "@/data/branches";
import { BranchCard } from "@/components/BranchCard";
import { SectionHeading } from "@/components/SectionHeading";

export default function SucursalesPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12">
      <SectionHeading title={branchesLabel} />

      <div className="flex flex-col gap-10">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            <BranchCard branch={branch} />
            <iframe
              title={`Ubicación de ${branch.name} en Google Maps`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(branch.address)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[280px] w-full rounded border border-graphite"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
