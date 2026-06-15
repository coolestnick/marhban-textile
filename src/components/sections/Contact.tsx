import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { brand, cta } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const contactItems = [
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: Phone, label: "Phone", value: brand.phone, href: `tel:${brand.phone}` },
  { icon: MapPin, label: "Showroom", value: brand.address, href: "#" },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const sendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*New enquiry — ${brand.fullName}*`,
      form.name && `Name: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.subject && `Subject: ${form.subject}`,
      form.message && `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

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
                    className="group flex items-center gap-4 rounded-2xl border border-gold-400/15 bg-white/5 p-4 transition-colors hover:border-gold-400/40"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/15 text-gold-400">
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

          {/* Right: form — sends straight to WhatsApp */}
          <Reveal delay={0.15}>
            <motion.form
              onSubmit={sendToWhatsApp}
              className="glass rounded-3xl p-6 md:p-8"
            >
              <div className="grid gap-5">
                <Field
                  label="Full name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                />
                <Field
                  label="Email"
                  type="email"
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={update("email")}
                />
                <Field
                  label="Subject"
                  placeholder="Fabric enquiry"
                  value={form.subject}
                  onChange={update("subject")}
                />
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us what you're looking for…"
                    className="w-full resize-none rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/20"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send on WhatsApp
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-gold-400/60 focus:ring-2 focus:ring-gold-400/20"
      />
    </div>
  );
}
