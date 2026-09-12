import { cn } from "@/lib/utils";

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <div
      className="flex flex-none items-center justify-center rounded-full bg-or font-display font-bold text-navy"
      style={{ width: size, height: size, fontSize: size * 0.57 }}
    >
      D
    </div>
  );
}

export function Logo({
  showTagline = true,
  markSize = 30,
  className,
}: {
  showTagline?: boolean;
  markSize?: number;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-none items-center gap-2.5", className)}>
      <LogoMark size={markSize} />
      <div>
        <div className="font-display text-[15px] font-bold leading-none tracking-[0.04em]">
          DJELI&apos;S
        </div>
        {showTagline ? (
          <div className="pt-0.5 font-mono text-[9.5px] tracking-[0.13em] text-white/66">
            IA • DIGITAL • TECHNOLOGIES
          </div>
        ) : null}
      </div>
    </div>
  );
}
