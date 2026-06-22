import { motion } from "framer-motion";
import { gallery } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

// Editorial masonry-style layout
const spans = [
  "row-span-2",
  "",
  "",
  "row-span-2",
  "",
  "",
];

export function Gallery() {
  return (
    <section id="gallery" className="container scroll-mt-24 py-24">
      <div className="mb-12 text-center">
        <Reveal>
          <Badge>Gallery</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight">
            A closer look at what we carry.
          </h2>
        </Reveal>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3">
        {gallery.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border",
              spans[i % spans.length]
            )}
          >
            <img
              src={src}
              alt="Marhaba fabric"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-royal-950/0 transition-colors duration-300 group-hover:bg-royal-950/30" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
