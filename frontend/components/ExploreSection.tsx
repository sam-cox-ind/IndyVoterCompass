const exploreItems = [
  {
    title: "Election Data",
    description:
      "Explore past election results and understand how different areas have voted over time.",
    href: "/election-data",
  },
  {
    title: "Voting Trends",
    description:
      "View larger patterns in turnout, participation, and election outcomes across Indiana.",
    href: "/trends",
  },
  {
    title: "Government Offices",
    description:
      "Learn what different elected positions do and why they matter on your ballot.",
    href: "/offices",
  },
  {
    title: "Voter Information",
    description:
      "Find basic information about registration, deadlines, and the voting process.",
    href: "/voter-info",
  },
];

export default function ExploreSection() {
  return (
    <section className="bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
            Explore more
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
            Learn more about elections in Indiana.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600">
            Indy Voter Compass is built to make election information easier to
            understand, whether you are checking your ballot or researching how
            local government works.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {exploreItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-600">
                    {item.description}
                  </p>
                </div>

                <span className="mt-1 rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-500 transition group-hover:border-neutral-950 group-hover:text-neutral-950">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}