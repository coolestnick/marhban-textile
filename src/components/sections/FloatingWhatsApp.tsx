import { motion } from "framer-motion";
import { brand } from "@/data/site";
import { WhatsAppIcon, waLink } from "@/components/ui/whatsapp-icon";

export function FloatingWhatsApp() {
  const href = waLink(
    brand.whatsapp,
    `Hi ${brand.fullName}, I'd like to ask about your fabrics.`
  );

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-[70] flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-[#25D366]/40 sm:bottom-7 sm:right-7"
    >
      {/* pulse ring */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-40" />
      <WhatsAppIcon className="h-7 w-7" />
      <span className="hidden text-sm font-semibold sm:block">
        Chat with us
      </span>
    </motion.a>
  );
}
