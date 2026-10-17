"use client";

import { motion } from "framer-motion";
import { Package, Boxes, Truck } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/config";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(#DCE8E4 1px, transparent 1px), linear-gradient(90deg, #DCE8E4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:py-28">
        {/* Left content */}
        <motion.div
          initial={false}
          animate={fadeUp.animate}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-heading text-3xl font-bold leading-tight text-text-main sm:text-4xl lg:text-[2.75rem]">
            Reliable pharmaceutical supply for healthcare professionals
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-sub sm:text-lg">
            {siteConfig.companyName} distributes pharmaceutical medicines and
            healthcare products to doctors, clinics and hospitals, currently
            serving {siteConfig.serviceAreas.current.join(" and ")}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#contact" size="lg">
              Send an Enquiry
            </Button>

            <Button href="/#contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={false}
          animate={fadeUp.animate}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-xl border border-border bg-bg-alt p-6 shadow-card sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {/* Main card */}
              <div className="col-span-2 rounded-lg border border-border bg-white p-5">
                <Boxes
                  className="text-primary"
                  size={26}
                  aria-hidden="true"
                />

                <p className="mt-3 font-heading text-sm font-semibold text-text-main">
                  Pharmaceutical Distribution
                </p>

                <p className="mt-1 text-xs text-text-sub">
                  Supplied through an established distribution network
                </p>
              </div>

              {/* Product categories */}
              <div className="rounded-lg border border-border bg-white p-5">
                <Package
                  className="text-primary"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-2 font-heading text-sm font-semibold text-text-main">
                  Product Categories
                </p>
              </div>

              {/* Coordinated supply */}
              <div className="rounded-lg border border-border bg-white p-5">
                <Truck
                  className="text-primary"
                  size={22}
                  aria-hidden="true"
                />

                <p className="mt-2 font-heading text-sm font-semibold text-text-main">
                  Coordinated Supply
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}