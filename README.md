# Pharmaceutical Distribution Website

A production-ready Next.js (App Router + TypeScript) website for a
pharmaceutical medicine distribution business. Built for doctors, clinics,
and hospitals to discover the business, understand its supply capabilities
and service areas, and send an enquiry — no e-commerce, no prices, no
checkout.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in real values
npm run dev
```

Open http://localhost:3000.

## Configuration

Every business-specific value lives in **`lib/config.ts`**, sourced from
environment variables in `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in SEO metadata and the sitemap |
| `NEXT_PUBLIC_COMPANY_NAME` | Displayed in the navbar, footer, and page titles |
| `NEXT_PUBLIC_PHONE_NUMBER` | Shown for "Call Us"; leave blank until real |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Used to build the `wa.me` link. Digits only, with country code, no `+` or spaces (e.g. `919876543210`). **The floating WhatsApp button does not render at all until this is set** — no fake number is hardcoded. |
| `NEXT_PUBLIC_EMAIL` | Shown for "Email Us" |
| `ENQUIRY_FORM_ENDPOINT` | Server-side only. Where `/api/enquiry` forwards submitted enquiries (email provider, CRM webhook, etc.). Until this is set, the form validates correctly but **tells the visitor honestly** that the enquiry could not be delivered yet, instead of faking success. |

Service areas (current: Gopalganj, Chhapra; future: gradual Bihar
expansion) are also defined in `lib/config.ts`. Update `siteConfig.serviceAreas`
as real coverage changes — the Distribution Network section and footer both
read from this single source.

Product categories, trust points, the supply process steps, and the "Why
Choose Us" cards are all data-driven from **`lib/content.ts`** — add, remove,
or edit entries there without touching component markup.

## Wiring up the enquiry form

`app/api/enquiry/route.ts` is a clean integration point. It validates the
required fields (name, phone, requirement) server-side, then forwards the
payload to `ENQUIRY_FORM_ENDPOINT` if configured. Point that at:

- An email-sending API (Resend, Postmark, SendGrid, etc.), or
- A CRM/webhook (e.g. a Zapier or Make webhook), or
- Your own backend service

Never put provider API keys in `NEXT_PUBLIC_*` variables — keep secrets
server-side only, referenced directly inside the route handler or via a
non-public environment variable.

## Structure

```
app/
  layout.tsx        Root layout, fonts, global SEO metadata
  page.tsx           Homepage — assembles all sections in order
  sitemap.ts / robots.ts
  api/enquiry/route.ts   Server-side enquiry form handler

components/
  layout/            Navbar, Footer
  sections/          Hero, TrustSection, AboutSection, ProductCategories,
                      SupplyProcess, DistributionNetwork, WhyChooseUs,
                      DoctorCTA, ContactSection
  ui/                Button, SectionHeading, ContactCard, FloatingWhatsApp

lib/
  config.ts          Central business configuration
  content.ts          Data-driven section content
```

## Notes

- No prices, cart, checkout, or "Buy Now" anywhere — categories only link to
  enquiry CTAs, per the business's non-e-commerce model.
- No invented statistics, certifications, or claims. Add real ones to
  `lib/content.ts` when available.
- Respects `prefers-reduced-motion`; the layout holds up with all animation
  disabled.
- Tailwind theme (`tailwind.config.ts`) encodes the full brand palette as
  named colors (`primary`, `secondary`, `bg`, `bg-alt`, `surface`, `border`,
  `text-main`, `text-sub`, `accent`) so colors are referenced semantically
  throughout, not as raw hex values.
