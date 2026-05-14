import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
type LinkProps = BaseProps & { href: string; external?: boolean } & Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof BaseProps | "href"
  >;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#f97316] hover:bg-[#ea6c0a] text-white shadow-lg shadow-[#f97316]/20",
  secondary:
    "bg-[#1a3a6b] hover:bg-[#122850] text-white shadow-lg shadow-[#1a3a6b]/20",
  ghost:
    "border-2 border-[#1a3a6b]/20 hover:border-[#1a3a6b]/50 text-[#1a3a6b] bg-transparent",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a3a6b]/40 disabled:opacity-60 disabled:cursor-not-allowed";

export function Button({
  variant = "primary",
  size = "md",
  loading,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  href,
  external,
  children,
  className = "",
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      className={`${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  );
}
