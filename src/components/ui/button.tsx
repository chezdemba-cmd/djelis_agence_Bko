import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "whatsapp"
  | "utility"
  | "primary-on-craie"
  | "secondary-on-craie";

const variantClasses: Record<Variant, string> = {
  primary: "bg-or text-nuit hover:bg-or-hover",
  secondary:
    "border border-white/32 text-[#F2F1EC] hover:border-or hover:text-or",
  whatsapp: "bg-whatsapp text-[#06331A] hover:bg-whatsapp-hover",
  utility:
    "border border-white/30 text-[#F2F1EC]/85 font-mono hover:border-or hover:text-or",
  "primary-on-craie": "bg-navy text-craie hover:bg-or-texte",
  "secondary-on-craie":
    "border border-navy/28 text-navy hover:border-or-texte hover:text-or-texte",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-[2px] px-6 font-display text-sm font-semibold tracking-[0.03em] transition-colors duration-150";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  onClick,
  type = "button",
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = cn(base, variantClasses[variant], className);

  if (href) {
    if (href.startsWith("http") || href.startsWith("#")) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = cn(
    "inline-flex min-h-12 items-center border-b border-white/62 px-1 font-display text-sm font-semibold tracking-[0.03em] text-[#F2F1EC] transition-colors duration-150 hover:border-or hover:text-or",
    className,
  );
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
