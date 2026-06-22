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
  tagline:
    "The fabric behind every occasion in Oman. In-store, on WhatsApp, or delivered to your door.",
  email: "marhabainternational8@gmail.com",
  // "Get in touch" contact number
  phone: "+968 9296 7581",
  // WhatsApp number in international format, digits only (no +, spaces or dashes).
  // +968 9733 3104 → "96897333104"
  whatsapp: "96897333104",
  address: "Sultanate of Oman",
  socials: {
    instagram: "https://instagram.com/marhaba_textiles_",
    instagramHandle: "@marhaba_textiles_",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Collections", href: "#collections" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Premium Fabric House · Est. Oman",
  // Each line animates in on its own row
  titleLines: ["Fabric Worth", "Coming Back For,", "Season After Season."],
  highlight: "Back",
  description:
    "School uniforms, wedding silks, everyday wear — hundreds of varieties, always in stock. Walk in, WhatsApp us, or get it delivered anywhere in Oman.",
  primaryCta: { label: "Explore Collections", href: "#collections" },
  secondaryCta: { label: "Our Story", href: "#about" },
};

export const marquee = [
  "Abaya Material",
  "Armani Silk",
  "Crepe & Chiffon",
  "Velvet — Makhmal",
  "Stonework Exclusives",
  "Uniforms Material",
  "Seasonal Collections",
  "Nationwide Delivery",
  "Printed Fabrics",
  "Voil & Cotton",
  "Wedding & Party Collection",
];

export type Stat = {
  value?: number;
  suffix?: string;
  text?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 38, suffix: "+", label: "Years in Business" },
  { value: 5, suffix: "", label: "Branches" },
  { text: "Oman", label: "Delivering All Over" },
];

export const about = {
  eyebrow: "Our Story",
  title: "We know fabric. That's all we do.",
  body: [
    "Marhaba Textile is built around one thing: having what you need, when you need it. We carry one of the widest fabric selections in Oman, from everyday wear to exclusive ceremonial and occasion pieces.",
    "Our team knows the collection inside out. And unlike anywhere else, our stonework and embellishment pieces are designed and applied in-house — which means you're getting something genuinely exclusive, not mass-produced.",
  ],
  points: [
    "Premium Suits and Abaya Material",
    "Custom orders for schools & institutions",
    "Exclusive stonework designs, only at Marhaba",
    "Oman-wide delivery on all orders",
  ],
};

export type Collection = {
  title: string;
  description: string;
  tag: string;
  image: string;
  accent: "gold" | "royal";
};

// NOTE: images below are placeholders — replace each `image` with the
// photos you provide (drop them in /public and use "/your-photo.jpg").
export const collections: Collection[] = [
  {
    title: "Voil & Cotton",
    description:
      "Light, breathable voile and everyday cotton for all-day comfort.",
    tag: "Everyday",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    accent: "gold",
  },
  {
    title: "Silk",
    description:
      "Luminous silks with a soft, flowing drape for occasions that matter.",
    tag: "Occasion",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop",
    accent: "royal",
  },
  {
    title: "Abaya Material Fancy",
    description:
      "Premium fancy abaya fabrics with a rich finish and elegant flow.",
    tag: "Abaya",
    image:
      "https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop",
    accent: "gold",
  },
  {
    title: "Velvet",
    description:
      "Plush velvet — makhmal — with depth and warmth for winter and weddings.",
    tag: "Premium",
    image:
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1200&auto=format&fit=crop",
    accent: "royal",
  },
  {
    title: "Shiffon & Braisim",
    description:
      "Flowing chiffon and braisim for graceful, layered looks.",
    tag: "Flowy",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1200&auto=format&fit=crop",
    accent: "gold",
  },
  {
    title: "Hijab & Scarfs",
    description:
      "A wide range of hijabs and scarves in every shade and finish.",
    tag: "Accessories",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1200&auto=format&fit=crop",
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
  title: "Let's find your fabric.",
  body: "Message us on WhatsApp, give us a call, or visit a branch — our team will help you find exactly what you need and deliver it anywhere in Oman.",
  primary: { label: "Chat on WhatsApp", href: "#contact" },
  secondary: { label: "Call Us", href: "#contact" },
};
