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

export default function TrustCards() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-3">
        {trustCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-neutral-200 bg-stone-50 p-6"
          >
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
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