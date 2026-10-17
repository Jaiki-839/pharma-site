import { MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/config";

export default function DistributionNetwork() {
  return (
    <section id="distribution" className="bg-bg-alt">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          title="Distribution network"
          description="Our current distribution presence, and where we are headed next."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8">
            <p className="font-heading text-sm font-semibold text-primary">
              Current coverage
            </p>
            <div className="mt-5 space-y-3">
              {siteConfig.serviceAreas.current.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3"
                >
                  <MapPin size={18} className="text-primary" aria-hidden="true" />
                  <span className="font-heading text-sm font-semibold text-text-main">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-border bg-white/60 p-6 sm:p-8">
            <p className="font-heading text-sm font-semibold text-text-sub">
              Future expansion
            </p>
            <div className="mt-5 flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3">
              <ArrowUpRight size={18} className="text-secondary" aria-hidden="true" />
              <span className="font-heading text-sm font-semibold text-text-main">
                {siteConfig.serviceAreas.expansion}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-sub">
              Coverage beyond {siteConfig.serviceAreas.current.join(" and ")} is
              planned gradually and is not yet active.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
