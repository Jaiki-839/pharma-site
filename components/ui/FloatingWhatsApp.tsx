"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  if (!siteConfig.contact.whatsapp) {
    // No number configured — do not render a button that leads nowhere.
    return null;
  }

  const encodedMessage = encodeURIComponent(siteConfig.whatsappDefaultMessage);
  const href = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodedMessage}`;

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="fixed left-4 bottom-24 z-50 sm:left-6 sm:bottom-auto sm:top-[62%] sm:-translate-y-1/2"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-3.5 py-3.5 text-white shadow-card transition-transform duration-200 hover:scale-105 focus-ring"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span
          className={`overflow-hidden whitespace-nowrap text-sm font-heading font-semibold transition-all duration-200 ${
            hovered ? "max-w-[140px] ml-0.5" : "max-w-0"
          }`}
        >
          Chat on WhatsApp
        </span>
      </a>
    </motion.div>
  );
}
