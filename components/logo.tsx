import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  /** "dark" = white text (for dark backgrounds), "light" = dark text (for light backgrounds) */
  variant?: "dark" | "light";
  /** Show "Tech" suffix */
  showTech?: boolean;
};

export function Logo({ className, variant = "dark", showTech = false }: Props) {
  const textColor = variant === "dark" ? "text-ink" : "text-[#0b1224]";
  const techColor = variant === "dark" ? "text-ink/70" : "text-[#0b1224]/70";

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-baseline font-display tracking-tight",
        className,
      )}
    >
      <span className={cn("text-lg font-bold", textColor)}>Web</span>
      <span className="text-lg font-bold text-accent">V</span>
      <span className={cn("text-lg font-bold", textColor)}>oyant</span>
      {showTech && (
        <span className={cn("ml-1.5 text-lg font-medium", techColor)}>
          Tech
        </span>
      )}
    </Link>
  );
}

/** Full logo with "Tech" suffix, used in footer and about page */
export function LogoFull({
  className,
  variant = "dark",
}: Omit<Props, "showTech">) {
  return <Logo className={className} variant={variant} showTech />;
}
