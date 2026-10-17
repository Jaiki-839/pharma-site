import { Truck, Building2, HeartPulse, MapPin, LucideIcon } from "lucide-react";
import { trustPoints } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Truck,
  Building2,
  HeartPulse,
  MapPin,
};

export default function TrustSection() {
  return (
    <section aria-label="Why healthcare professionals work with us" className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-content gap-6 px-4 py-10 sm:px-6 sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((point) => {
          const Icon = icons[point.icon];
          return (
            <div key={point.title} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-alt text-primary">
                <Icon size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-text-main">
                  {point.title}
                </p>
                <p className="mt-0.5 text-sm text-text-sub">{point.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
