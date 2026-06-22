import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { collections, type Collection } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { useTilt } from "@/hooks/use-tilt";
import { cn } from "@/lib/utils";

function CollectionCard({ item, index }: { item: Collection; index: number }) {
  const tilt = useTilt(9);

  return (
    <Reveal delay={index * 0.08} className="perspective">
      <motion.article
        ref={tilt.ref}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        style={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card [transform-style:preserve-3d]"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-royal-950/20 to-transparent" />
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
              item.accent === "gold"
                ? "bg-gold-400 text-royal-900"
                : "bg-royal-600 text-gold-100"
            )}
          >
            {item.tag}
          </span>
        </div>

        <div
          className="absolute inset-x-0 bottom-0 p-6"
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 max-w-xs text-sm text-white/70">
                {item.description}
              </p>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-400 text-royal-900 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 py-24">
      <div className="container">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Badge>Our Collections</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight">
                Fabric for every chapter of life.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-muted-foreground">
              A curated house of weaves — from durable everyday cottons to
              ceremonial silks, each chosen for feel and longevity.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item, i) => (
            <CollectionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
