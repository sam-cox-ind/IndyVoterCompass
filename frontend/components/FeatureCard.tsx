type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function FeatureCard({
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <a
      href={href}
      className="block rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{description}</p>
      <p className="mt-4 text-sm font-medium">Explore →</p>
    </a>
  );
}