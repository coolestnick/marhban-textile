import { Instagram } from "lucide-react";
import { brand, nav } from "@/data/site";
import { WhatsAppIcon, waLink } from "@/components/ui/whatsapp-icon";

const socials = [
  {
    icon: Instagram,
    href: brand.socials.instagram,
    label: brand.socials.instagramHandle,
  },
  { icon: WhatsAppIcon, href: waLink(brand.whatsapp), label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <img
                src={brand.logo}
                alt={brand.fullName}
                className="h-12 w-12 rounded-full ring-1 ring-gold-400/30"
              />
              <span className="font-display text-xl font-semibold">
                {brand.name}
                <span className="text-gold-700 dark:text-gold-400">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {brand.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold-600/60 hover:text-gold-700 dark:hover:border-gold-400/60 dark:hover:text-gold-400"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold">Explore</h4>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-700 dark:hover:text-gold-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>{brand.address}</li>
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-gold-700 dark:hover:text-gold-400">
                  {brand.email}
                </a>
              </li>
              <li>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-gold-700 dark:hover:text-gold-400">
                  {brand.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.fullName}. All rights reserved.
          </p>
          <p>Proudly serving Oman.</p>
        </div>
      </div>
    </footer>
  );
}
