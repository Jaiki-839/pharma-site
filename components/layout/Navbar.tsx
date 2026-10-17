"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-soft border-border" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6"
      >
        <Link
          href="/#home"
          className="font-heading text-lg font-bold text-primary focus-ring rounded"
        >
          {siteConfig.companyName}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-text-main transition-colors hover:text-primary focus-ring rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/#contact" size="md">
            Send an Enquiry
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring rounded p-2 text-text-main md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-medium text-text-main hover:bg-bg-alt focus-ring"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4">
            <Button href="/#contact" size="lg" className="w-full">
              Send an Enquiry
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
