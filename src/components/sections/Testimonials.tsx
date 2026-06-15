import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";

export function Testimonials() {
  return (
    <section className="container py-24">
      <div className="mb-14 max-w-2xl">
        <Reveal>
          <Badge>Loved by Families &amp; Designers</Badge>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight">
            The name people come back to.
          </h2>
        </Reveal>
      </div>

      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <motion.figure
            key={t.name}
            variants={staggerItem}
            className="glass flex flex-col gap-5 rounded-3xl p-7"
          >
            <Quote className="h-8 w-8 text-gold-400" />
            <blockquote className="text-lg leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-2">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-royal-600 font-display font-bold text-royal-900">
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold leading-tight">
                  {t.name}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {t.role}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </StaggerGroup>
    </section>
  );
}
