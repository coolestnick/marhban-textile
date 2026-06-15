import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/data/site";
import { Reveal, StaggerGroup, staggerItem } from "@/components/ui/reveal";
import { motion } from "framer-motion";

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="container py-20">
      <StaggerGroup className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={staggerItem}
            className="glass rounded-3xl p-7 text-center"
          >
            <div className="font-display text-4xl font-bold text-gradient-gold md:text-5xl">
              <Counter end={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </StaggerGroup>
      <Reveal className="sr-only">Marhaba Textile by the numbers</Reveal>
    </section>
  );
}
