"use client";

import { FormEvent, useState } from "react";
import { Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCard from "@/components/ui/ContactCard";
import { siteConfig } from "@/lib/config";

type FormState = {
  name: string;
  organisation: string;
  phone: string;
  email: string;
  location: string;
  requirement: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  organisation: "",
  phone: "",
  email: "",
  location: "",
  requirement: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.requirement.trim())
      next.requirement = "Please describe the medicine or product you need.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage("Your enquiry has been submitted. We will get back to you shortly.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again, or contact us directly.");
    }
  }

  return (
    <section id="contact" className="bg-bg-alt">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
        <SectionHeading
          title="Send an enquiry"
          description="Tell us about your requirement and we will confirm availability."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-xl border border-border bg-white p-6 shadow-card sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                htmlFor="name"
                error={errors.name}
                required
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className={inputClass(Boolean(errors.name))}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </Field>

              <Field label="Clinic / Hospital / Organisation" htmlFor="organisation">
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  value={form.organisation}
                  onChange={(e) => updateField("organisation", e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <Field label="Phone Number" htmlFor="phone" error={errors.phone} required>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className={inputClass(Boolean(errors.phone))}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
              </Field>

              <Field label="Email" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className={inputClass(Boolean(errors.email))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </Field>

              <Field label="Location" htmlFor="location">
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <Field
                label="Medicine / Product Requirement"
                htmlFor="requirement"
                error={errors.requirement}
                required
              >
                <input
                  id="requirement"
                  name="requirement"
                  type="text"
                  value={form.requirement}
                  onChange={(e) => updateField("requirement", e.target.value)}
                  className={inputClass(Boolean(errors.requirement))}
                  aria-invalid={Boolean(errors.requirement)}
                  aria-describedby={errors.requirement ? "requirement-error" : undefined}
                />
              </Field>

              <Field label="Message" htmlFor="message" className="sm:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className={inputClass(false)}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full rounded-[10px] bg-primary px-6 py-3.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-secondary focus-ring disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
            </button>

            {status === "success" && (
              <p role="status" className="mt-4 text-sm font-medium text-primary">
                {statusMessage}
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="mt-4 text-sm font-medium text-red-700">
                {statusMessage}
              </p>
            )}
          </form>

          <div className="space-y-4 lg:col-span-2">
            <ContactCard
              icon={Phone}
              label="Call Us"
              value={siteConfig.contact.phone}
              href={`tel:${siteConfig.contact.phone}`}
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={siteConfig.contact.email}
              href={`mailto:${siteConfig.contact.email}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-[10px] border bg-white px-3.5 py-2.5 text-sm text-text-main placeholder:text-text-sub/60 focus-ring ${
    hasError ? "border-red-400" : "border-border"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-text-main">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1 text-xs text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
