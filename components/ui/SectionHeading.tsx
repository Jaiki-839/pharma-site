type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-main leading-snug">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-text-sub leading-relaxed">{description}</p>
      )}
    </div>
  );
}
