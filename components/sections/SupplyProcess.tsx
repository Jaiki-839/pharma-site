"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { supplyProcess } from "@/lib/content";

export default function SupplyProcess() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          title="How supply works"
          description="A straightforward process from requirement to supply arrangement."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supplyProcess.map((step, index) => (
            <motion.div
              key={step.number}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-lg border border-border bg-bg p-6"
            >
              <span className="font-mono text-sm font-medium text-secondary">
                {step.number}
              </span>
              <p className="mt-3 font-heading text-base font-semibold text-text-main">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-sub">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
