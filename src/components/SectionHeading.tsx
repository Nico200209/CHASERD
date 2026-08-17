import clsx from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-bone sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="font-mono text-sm uppercase tracking-wide text-steel">
          {subtitle}
        </p>
      )}
    </div>
  );
}
