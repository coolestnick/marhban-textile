import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, nav } from "@/data/site";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon, waLink } from "@/components/ui/whatsapp-icon";
import { cn } from "@/lib/utils";

const contactHref = waLink(
  brand.whatsapp,
  `Hi ${brand.fullName}, I'd like to ask about your fabrics.`
);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        className={cn(
          "mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-full border border-white/10 px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 sm:py-2.5",
          scrolled
            ? "bg-royal-950/85 shadow-lg shadow-black/25"
            : "bg-royal-900/45"
        )}
      >
        {/* Logo */}
        <a href="#home" className="flex min-w-0 shrink items-center gap-2.5">
          <img
            src={brand.logo}
            alt={`${brand.fullName} logo`}
            className="h-9 w-9 shrink-0 rounded-full ring-1 ring-gold-400/30 sm:h-11 sm:w-11"
          />
          <span className="truncate font-display text-base font-semibold tracking-tight text-gold-50 sm:text-lg">
            {brand.name}
            <span className="text-gold-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-gold-50/80 transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-px scale-x-0 bg-gold-400 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2">
          <a href={contactHref} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="hidden sm:inline-flex">
              <WhatsAppIcon className="h-4 w-4" />
              Contact Us
            </Button>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/20 text-gold-50 sm:h-10 sm:w-10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-royal-950/95 p-4 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-medium text-gold-50/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={contactHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button className="w-full">
                    <WhatsAppIcon className="h-4 w-4" />
                    Contact Us
                  </Button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
