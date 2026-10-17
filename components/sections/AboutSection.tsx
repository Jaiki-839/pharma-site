import { ClipboardCheck, Network, Users } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AboutSection() {
  return (
    <section id="about" className="bg-bg-alt">
      <div className="mx-auto grid max-w-content gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-heading text-2xl font-bold text-text-main sm:text-3xl">
            About {siteConfig.companyName}
          </h2>
          <p className="mt-4 text-text-sub leading-relaxed">
            {siteConfig.companyName} supplies pharmaceutical medicines and
            healthcare products to doctors, clinics, hospitals and other
            healthcare establishments. Products are sourced from established
            pharmaceutical companies and supplied through our distribution
            network.
          </p>
          <p className="mt-4 text-text-sub leading-relaxed">
            We currently serve {siteConfig.serviceAreas.current.join(" and ")},
            and are working to {siteConfig.serviceAreas.expansion.toLowerCase()}.
            Every enquiry is reviewed individually so healthcare professionals
            get a clear, direct answer on availability and supply.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8">
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-alt text-primary">
                <ClipboardCheck size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-text-main">
                  What we supply
                </p>
                <p className="mt-1 text-sm text-text-sub">
                  Pharmaceutical medicines and healthcare products, sourced
                  from established pharmaceutical companies.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-alt text-primary">
                <Users size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-text-main">
                  Who we serve
                </p>
                <p className="mt-1 text-sm text-text-sub">
                  Doctors, clinics, hospitals and healthcare establishments.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-alt text-primary">
                <Network size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-text-main">
                  How we work
                </p>
                <p className="mt-1 text-sm text-text-sub">
                  Requirements are reviewed, availability is checked, and
                  supply is coordinated through our distribution network.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
