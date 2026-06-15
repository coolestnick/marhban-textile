import { marquee } from "@/data/site";
import { Star } from "lucide-react";

export function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <section
      aria-hidden
      className="relative border-y border-border bg-royal-900 py-5 dark:bg-royal-950"
    >
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-display text-lg font-medium uppercase tracking-wide text-gold-200/90">
              {item}
            </span>
            <Star className="h-4 w-4 shrink-0 fill-gold-400 text-gold-400" />
          </div>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-royal-900 to-transparent dark:from-royal-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-royal-900 to-transparent dark:from-royal-950" />
    </section>
  );
}
