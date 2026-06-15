import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { craft } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";

export function Craft() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax for the decorative line
  const lineScale = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      id="craft"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-royal-950 py-28 text-gold-50"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Badge className="border-gold-400/40 bg-gold-400/10">
              {craft.eyebrow}
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight tracking-tight">
              {craft.title}
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          {/* progress line (desktop) */}
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-8 hidden h-px origin-left bg-gradient-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 lg:block"
          />
          <StaggerGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {craft.steps.map((step) => (
              <motion.div
                key={step.n}
                variants={staggerItem}
                className="relative"
              >
                <div className="relative z-10 mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-gold-400/30 bg-royal-900 font-display text-xl font-bold text-gold-400">
                  {step.n}
                </div>
                <h3 className="font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gold-100/60">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
