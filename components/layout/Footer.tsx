import Link from "next/link";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-heading text-lg font-bold text-primary">
            {siteConfig.companyName}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-text-sub">
            Pharmaceutical medicine distribution for doctors, clinics and
            healthcare establishments.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-text-main">
            Quick Links
          </p>
          <ul className="mt-3 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-sub transition-colors hover:text-primary focus-ring rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-text-main">
            Service Areas
          </p>
          <ul className="mt-3 space-y-2 text-sm text-text-sub">
            {siteConfig.serviceAreas.current.map((area) => (
              <li key={area}>{area}</li>
            ))}
            <li className="text-accent">Bihar — Expanding</li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-semibold text-text-main">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-text-sub">
            <li className="flex items-center gap-2">
              <Phone size={15} className="text-primary" aria-hidden="true" />
              {siteConfig.contact.phone ? (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-primary focus-ring rounded"
                >
                  {siteConfig.contact.phone}
                </a>
              ) : (
                <span>Not yet configured</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle size={15} className="text-primary" aria-hidden="true" />
              {siteConfig.contact.whatsapp ? (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary focus-ring rounded"
                >
                  WhatsApp Us
                </a>
              ) : (
                <span>Not yet configured</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-primary" aria-hidden="true" />
              {siteConfig.contact.email ? (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary focus-ring rounded"
                >
                  {siteConfig.contact.email}
                </a>
              ) : (
                <span>Not yet configured</span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5 text-center text-xs text-text-sub sm:px-6">
        © {year} {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
