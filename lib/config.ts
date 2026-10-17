// Central configuration for all business-specific values.
// Never hardcode contact details or business facts inside components —
// read them from here, and set the real values via environment variables.

export const siteConfig = {
  companyName:
    process.env.NEXT_PUBLIC_COMPANY_NAME || "Your Pharmaceutical Distribution Co.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  tagline: "Pharmaceutical Medicine Distribution",

  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    email: process.env.NEXT_PUBLIC_EMAIL || "",
  },

  whatsappDefaultMessage:
    "Hello, I would like to enquire about pharmaceutical medicine supply.",

  serviceAreas: {
    current: ["Gopalganj", "Chhapra"],
    expansion: "Expanding gradually across Bihar",
  },

  nav: [
    { label: "Home", href: "/#home" },
    { label: "About Us", href: "/#about" },
    { label: "Products", href: "/#products" },
    { label: "Distribution Network", href: "/#distribution" },
    { label: "For Doctors", href: "/#for-doctors" },
    { label: "Contact", href: "/#contact" },
  ],

  formEndpoint: process.env.ENQUIRY_FORM_ENDPOINT || "",
};

export type SiteConfig = typeof siteConfig;
