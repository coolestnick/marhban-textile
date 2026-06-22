import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { brand, cta } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppIcon, waLink } from "@/components/ui/whatsapp-icon";

const whatsappHref = waLink(
  brand.whatsapp,
  `Hi ${brand.fullName}, I'd like to ask about your fabrics.`
);

const contactItems = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+968 9733 3104",
    href: whatsappHref,
    external: true,
  },
  {
    icon: Phone,
    label: "Call us",
    value: brand.phone,
    href: `tel:${brand.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: brand.email,
    href: `mailto:${brand.email}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: brand.socials.instagramHandle,
    href: brand.socials.instagram,
    external: true,
  },
  {
    icon: MapPin,
    label: "Where to find us",
    value: brand.address,
    href: "#",
  },
];

export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-royal-900 to-royal-950 p-8 md:p-14">
        {/* decorative glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2">
          {/* Left: pitch + details */}
          <div className="text-gold-50">
            <Reveal>
              <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-tight tracking-tight">
                {cta.title}
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-4 max-w-md text-gold-100/70">{cta.body}</p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {contactItems.map((item, i) => (
                <Reveal key={item.label} delay={0.1 + i * 0.05}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-gold-400/15 bg-white/5 p-4 transition-colors hover:border-gold-400/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-400/15 text-gold-400">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-gold-100/50">
                        {item.label}
                      </span>
                      <span className="block font-medium">{item.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: WhatsApp-first call to action (replaces the old form) */}
          <Reveal delay={0.15}>
            <motion.div className="glass flex h-full flex-col justify-center gap-6 rounded-3xl p-8 text-center md:p-10">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                <WhatsAppIcon className="h-10 w-10" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">
                  The fastest way to reach us
                </h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                  Send us a message on WhatsApp and our team will reply with
                  availability, pricing, and delivery — usually within minutes.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] from-[#25D366] to-[#1ebe57] text-white hover:shadow-[#25D366]/40">
                    <WhatsAppIcon className="h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4" />
                    Call {brand.phone}
                  </Button>
                </a>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
