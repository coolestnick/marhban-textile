import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles as SparklesIcon } from "lucide-react";
import { hero } from "@/data/site";
import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

const HeroScene = lazy(() => import("@/components/three/HeroScene"));

const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[60vh] w-[120vw] -translate-x-1/2 rounded-[100%] bg-gradient-to-b from-royal-500/20 via-transparent to-transparent blur-3xl dark:from-royal-700/30" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      {/* 3D background */}
      {!reduced && (
        <div className="absolute inset-0 -z-10 opacity-90">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-600/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-purple-700 backdrop-blur-sm dark:border-purple-400/40 dark:bg-purple-500/15 dark:text-purple-300"
          >
            <SparklesIcon className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[0.98] tracking-tight">
            {hero.titleLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={lineVariants}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  {line.split(" ").map((word, j) =>
                    word === hero.highlight ? (
                      <span key={j} style={{ color: "#fad42a" }}>
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={j}>{word} </span>
                    )
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" className="group">
              {hero.primaryCta.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        {/* Right column — floating logo medallion (visible when 3D is off too) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto aspect-square w-full max-w-xl">
            <div className="absolute inset-0 animate-float rounded-[2.75rem] bg-gradient-to-br from-gold-400/20 to-royal-600/20 blur-2xl" />
            {/* Square frame — drop any square image in /public and point src to it.
                object-cover makes it fill the box equally on all sides. */}
            <div className="glass absolute inset-0 overflow-hidden rounded-[2.75rem] p-3">
              <img
                src="/logo.png"
                alt="Marhaba Textile"
                className="h-full w-full rounded-[2.25rem] object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
