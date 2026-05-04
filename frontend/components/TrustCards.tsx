const trustCards = [
  {
    title: "Address-based results",
    description:
      "See voting information connected to where you live, not a generic statewide list.",
  },
  {
    title: "Built for clarity",
    description:
      "Focus on the races, offices, and election information that matter most to voters.",
  },
  {
    title: "Indiana-focused",
    description:
      "Designed specifically around Indiana voters, local offices, and state election data.",
  },
];

const badgeClasses = ["ivc-badge-blue", "ivc-badge-yellow", "ivc-badge-dark"];

export default function TrustCards() {
  return (
    <section className="ivc-section-white border-y border-neutral-200">
      <div className="ivc-container grid gap-4 py-10 md:grid-cols-3">
        {trustCards.map((card, index) => (
          <div key={card.title} className="ivc-card-soft p-6">
            <span className={badgeClasses[index]}>{index + 1}</span>

            <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-950">
              {card.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-neutral-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}