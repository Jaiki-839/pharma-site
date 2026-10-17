import { LucideIcon } from "lucide-react";

type ContactCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: ContactCardProps) {
  const isConfigured = Boolean(value);

  return (
    <a
      href={isConfigured ? href : undefined}
      aria-disabled={!isConfigured}
      className={`flex items-center gap-4 rounded-lg border border-border bg-white p-4 shadow-soft transition-colors focus-ring ${
        isConfigured ? "hover:border-primary" : "opacity-60 cursor-not-allowed"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg-alt text-primary">
        <Icon size={18} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs text-text-sub">{label}</span>
        <span className="block font-heading text-sm font-semibold text-text-main">
          {isConfigured ? value : "Not yet configured"}
        </span>
      </span>
    </a>
  );
}
