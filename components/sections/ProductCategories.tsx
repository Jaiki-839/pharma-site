import {
  Pill,
  FileText,
  ShieldPlus,
  FlaskConical,
  PackageSearch,
  LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { productCategories } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Pill,
  FileText,
  ShieldPlus,
  FlaskConical,
  PackageSearch,
};

export default function ProductCategories() {
  return (
    <section id="products" className="bg-bg">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          title="What we supply"
          description="Our supply capabilities are organized into the following categories. Share your requirement and we will confirm availability."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => {
            const Icon = icons[category.icon];
            return (
              <div
                key={category.name}
                className="flex flex-col rounded-lg border border-border bg-white p-6 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-alt text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <p className="mt-4 font-heading text-base font-semibold text-text-main">
                  {category.name}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-text-sub">
                  {category.description}
                </p>
                <Button
                  href="/#contact"
                  variant="secondary"
                  size="md"
                  className="mt-5 self-start"
                >
                  Enquire About Products
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
