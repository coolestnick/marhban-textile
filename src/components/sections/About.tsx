import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about, brand } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="container scroll-mt-24 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="perspective order-2 lg:order-1">
          <motion.div
            whileHover={{ rotateY: -6, rotateX: 4 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="relative [transform-style:preserve-3d]"
          >
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img
                src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1200&auto=format&fit=crop"
                alt="Folded premium fabrics"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* floating badge */}
            <div className="glass absolute -bottom-6 -left-6 flex items-center gap-4 rounded-2xl p-5 shadow-xl">
              <img
                src={brand.logo}
                alt=""
                className="h-12 w-12 rounded-full ring-1 ring-gold-400/40"
              />
              <div>
                <p className="font-display text-lg font-semibold leading-none">
                  30+ Years
                </p>
                <p className="text-xs text-muted-foreground">Serving Oman</p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Badge>{about.eyebrow}</Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
              {about.title}
            </h2>
          </Reveal>

          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-5 leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.25}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {about.points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-700 dark:text-gold-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-foreground/90">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
