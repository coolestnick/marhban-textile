/**
 * ──────────────────────────────────────────────────────────────
 *  MARHABA TEXTILE — SITE CONTENT
 * ──────────────────────────────────────────────────────────────
 *  This is the single source of truth for all copy, links, images
 *  and product data on the site. Edit values here at delivery time
 *  — you should rarely need to open the component files.
 *
 *  Replace the placeholder image URLs with your own product photos
 *  (drop them in /public and reference as "/your-image.jpg").
 * ──────────────────────────────────────────────────────────────
 */

export const brand = {
  name: "Marhaba",
  fullName: "Marhaba Textile",
  logo: "/logo.png",
  tagline: "Woven Heritage, Worn with Pride",
  email: "hello@marhabatextile.com",
  phone: "+968 0000 0000",
  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // e.g. Oman number 968 9XXX XXXX → "9689XXXXXXX"
  whatsapp: "96890000000",
  address: "Muscat, Sultanate of Oman",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    whatsapp: "#",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Premium Fabric House · Est. Oman",
  // Each line animates in on its own row
  titleLines: ["Threads of", "Tradition,", "Tailored for Tomorrow."],
  highlight: "Tomorrow",
  description:
    "From everyday comfort to ceremonial elegance, Marhaba Textile curates fabrics chosen for their feel, durability, and timeless character — the house families return to, season after season.",
  primaryCta: { label: "Explore Collections", href: "#collections" },
  secondaryCta: { label: "Our Story", href: "#about" },
};

export const marquee = [
  "Egyptian Cotton",
  "Pure Linen",
  "Hand-Loomed Silk",
  "School Uniforms",
  "Seasonal Wear",
  "Bespoke Tailoring",
  "Sustainable Weaves",
  "Heritage Prints",
];

export const stats = [
  { value: 35, suffix: "+", label: "Years of Craft" },
  { value: 120, suffix: "+", label: "Fabric Varieties" },
  { value: 50, suffix: "K", label: "Happy Families" },
  { value: 18, suffix: "", label: "Retail Partners" },
];

export const about = {
  eyebrow: "Our Story",
  title: "A name woven into everyday life.",
  body: [
    "For over three decades, Marhaba Textile has been a trusted destination for high-quality fabrics across the region. We began as a small family loom and grew into a house known for comfort, durability, and timeless appeal.",
    "Whether you are a parent preparing for the school year, a designer sourcing specialty cloth, or a family dressing for a celebration — Marhaba is where quality begins.",
  ],
  points: [
    "Ethically sourced natural fibers",
    "In-house quality control on every bolt",
    "Custom orders for schools & institutions",
    "Trusted by tailors and designers alike",
  ],
};

export type Collection = {
  title: string;
  description: string;
  tag: string;
  image: string;
  accent: "gold" | "royal";
};

export const collections: Collection[] = [
  {
    title: "Heritage Cottons",
    description:
      "Breathable, long-staple cottons for everyday wear that only soften with time.",
    tag: "Everyday",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    accent: "gold",
  },
  {
    title: "Ceremonial Silks",
    description:
      "Hand-loomed silks with a luminous drape, made for occasions that matter.",
    tag: "Occasion",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    accent: "royal",
  },
  {
    title: "Pure Linen",
    description:
      "Crisp, cooling linens engineered for the warmest seasons and clean tailoring.",
    tag: "Summer",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop",
    accent: "gold",
  },
  {
    title: "Uniform Essentials",
    description:
      "Durable, color-fast fabrics built to survive every school year in style.",
    tag: "Institutional",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f720de?q=80&w=1200&auto=format&fit=crop",
    accent: "royal",
  },
];

export const craft = {
  eyebrow: "The Craft",
  title: "Quality you can feel before you read the label.",
  steps: [
    {
      n: "01",
      title: "Sourcing",
      body: "We hand-pick fibers from trusted growers, favoring long-staple and naturally durable yarns.",
    },
    {
      n: "02",
      title: "Weaving",
      body: "Traditional looms meet modern precision to produce a consistent, beautiful weave.",
    },
    {
      n: "03",
      title: "Finishing",
      body: "Color-fast dyeing and careful finishing give every bolt its signature hand-feel.",
    },
    {
      n: "04",
      title: "Inspection",
      body: "Every meter is checked by hand before it earns the Marhaba name.",
    },
  ],
};

export const gallery = [
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop",
];

export const testimonials = [
  {
    quote:
      "The only fabric house I trust for our school's uniforms. The cloth lasts the whole year and still looks new.",
    name: "Aisha Al-Balushi",
    role: "School Procurement Lead",
  },
  {
    quote:
      "As a designer I source specialty cloth from Marhaba constantly. The hand-feel is unmatched in the region.",
    name: "Rashid Karim",
    role: "Fashion Designer",
  },
  {
    quote:
      "Generations of my family have bought from Marhaba. It's a name we simply return to.",
    name: "Fatima Noor",
    role: "Loyal Customer",
  },
];

export const cta = {
  title: "Let's weave something timeless together.",
  body: "Visit our showroom or request a fabric consultation for your family, school, or label.",
  primary: { label: "Contact Us", href: "#contact" },
  secondary: { label: "Book a Consultation", href: "#contact" },
};
