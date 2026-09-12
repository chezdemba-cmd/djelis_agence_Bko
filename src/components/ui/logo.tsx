import Image from "next/image";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <Image
      src="/images/logo-icon.png"
      alt=""
      width={size}
      height={size}
      className="flex-none rounded-full"
      style={{ width: size, height: size }}
    />
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
