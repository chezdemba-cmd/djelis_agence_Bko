import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  tone = "gold",
  className,
}: {
  children: React.ReactNode;
  tone?: "gold" | "amber";
  className?: string;
}) {
  return (
    <div className={cn("mb-5 flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "h-px w-6.5 flex-none",
          tone === "gold" ? "bg-or" : "bg-or-texte",
        )}
      />
      <span
        className={cn(
          "font-mono text-[10.5px] tracking-[0.13em]",
          tone === "gold" ? "text-or" : "text-or-texte",
        )}
      >
        {children}
      </span>
    </div>
  );
}
