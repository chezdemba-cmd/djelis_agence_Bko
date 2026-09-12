import { cn } from "@/lib/utils";

export function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-4/3",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-[repeating-linear-gradient(135deg,rgba(242,241,236,0.05)_0_8px,transparent_8px_16px)] shadow-[0_0_0_1px_rgba(242,241,236,0.18)]",
        aspect,
        className,
      )}
    >
      <span className="px-4 text-center font-mono text-[10px] tracking-[0.08em] text-white/50">
        {label}
      </span>
    </div>
  );
}
