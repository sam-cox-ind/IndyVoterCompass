import AddressLookupForm from "@/components/AddressLookupForm";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <section className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-lg font-bold tracking-tight">Indy Voter Compass</div>

          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="/election-data" className="hover:text-black">
              Election Data
            </a>
            <a href="/trends" className="hover:text-black">
              Voting Trends
            </a>
            <a href="/about" className="hover:text-black">
              About
            </a>
          </nav>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Indiana voter education
            </p>

            <h1 className="max-w-xl text-4xl font-bold leading-tight md:text-5xl">
              Find exactly what’s on your ballot
            </h1>

            <p className="mt-5 max-w-xl text-lg text-neutral-600">
              Enter your address to see the offices and candidates relevant to
              where you live, then explore election data and voting trends.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-600">
              <span className="rounded-full border border-neutral-300 px-3 py-1">
                No account required
              </span>
              <span className="rounded-full border border-neutral-300 px-3 py-1">
                Indiana-focused
              </span>
              <span className="rounded-full border border-neutral-300 px-3 py-1">
                Official-source minded
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Start with your address</h2>
              <p className="mt-2 text-sm text-neutral-600">
                Your address is used to find the races and offices tied to your
                location.
              </p>

              <div className="mt-6">
                <AddressLookupForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold">Clear, local information</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Built to help Indiana voters quickly understand what they are
                voting on.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold">Simple research starting point</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Begin with your ballot, then branch into offices, candidates,
                and election context.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5">
              <h3 className="font-semibold">Privacy-minded design</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Keep the process minimal and focused on the information users
                actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Explore more</h2>
            <p className="mt-2 text-neutral-600">
              The ballot lookup is the main entry point, but users should also
              be able to branch into education and data tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <FeatureCard
              title="Election Data"
              description="See past results, turnout, and local election context."
              href="/election-data"
            />
            <FeatureCard
              title="Voting Trends"
              description="Explore turnout and voting patterns over time."
              href="/trends"
            />
            <FeatureCard
              title="Offices Explained"
              description="Learn what each office does and why it matters."
              href="/offices"
            />
            <FeatureCard
              title="How Voting Works"
              description="Understand the process from registration to casting a ballot."
              href="/how-voting-works"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Indy Voter Compass</p>

          <div className="flex gap-4">
            <a href="/about" className="hover:text-black">
              About
            </a>
            <a href="/privacy" className="hover:text-black">
              Privacy
            </a>
            <a href="/sources" className="hover:text-black">
              Sources
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}