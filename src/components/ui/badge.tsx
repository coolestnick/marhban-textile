import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-gold-600/40 bg-gold-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold-700 dark:border-gold-400/30 dark:text-gold-400",
        className
      )}
    >
      {children}
    </span>
  );
}
