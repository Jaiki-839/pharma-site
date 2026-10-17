import {
  Truck,
  MessageCircle,
  HeartPulse,
  MessageSquareText,
  MapPin,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Truck,
  MessageCircle,
  HeartPulse,
  MessageSquareText,
  MapPin,
  TrendingUp,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading title="Why healthcare professionals choose us" />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => {
            const Icon = icons[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-white p-6 shadow-soft transition-colors hover:border-primary"
              >
                <Icon size={20} className="text-primary" aria-hidden="true" />
                <p className="mt-4 font-heading text-sm font-semibold text-text-main">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-sub">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
