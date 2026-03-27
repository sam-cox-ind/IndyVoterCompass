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
    <a href={href} className="feature-link-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="mt-4 text-sm font-semibold text-neutral-800">Explore →</p>
    </a>
  );
}