import { Stethoscope } from "lucide-react";
import Button from "@/components/ui/Button";

export default function DoctorCTA() {
  return (
    <section id="for-doctors" className="bg-primary">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
              <Stethoscope size={20} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-heading text-2xl font-bold text-white sm:text-3xl">
              Looking for a reliable pharmaceutical supply partner?
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">
              Doctors, clinics and hospitals can reach out to us for medicine
              availability, pharmaceutical supply requirements, product
              enquiries and distribution enquiries.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href="/#contact" variant="secondary" size="lg">
              Send a Doctor Enquiry
            </Button>
            <Button href="/#contact" variant="outline" size="lg">
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
