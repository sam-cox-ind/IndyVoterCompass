import AddressLookupForm from "@/components/AddressLookupForm";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="site-header">
        <div className="site-container flex items-center justify-between py-4">
          <div className="text-lg font-bold tracking-tight">Indy Voter Compass</div>

          <nav className="hidden gap-6 text-sm text-neutral-700 md:flex">
            <a href="/election-data" className="transition hover:text-black">
              Election Data
            </a>
            <a href="/trends" className="transition hover:text-black">
              Voting Trends
            </a>
            <a href="/about" className="transition hover:text-black">
              About
            </a>
          </nav>
        </div>
      </section>

      <section className="hero-section">
        <div className="site-container hero-content grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Indiana voter education</p>

            <h1 className="max-w-xl text-balance text-4xl font-bold leading-tight md:text-5xl">
              Find exactly what’s on your ballot
            </h1>

            <p className="mt-5 max-w-xl text-lg text-neutral-600">
              Enter your address to see the offices and candidates relevant to
              where you live, then explore election data and voting trends.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="pill-badge">No account required</span>
              <span className="pill-badge">Indiana-focused</span>
              <span className="pill-badge">Simple and clear</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="glass-card w-full rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold tracking-tight">
                Start with your address
              </h2>
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

      <section className="soft-section">
        <div className="site-container py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="secondary-card">
              <h3 className="font-semibold">Clear, local information</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Built to help Indiana voters quickly understand what they are
                voting on.
              </p>
            </div>

            <div className="secondary-card">
              <h3 className="font-semibold">Simple research starting point</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Begin with your ballot, then branch into offices, candidates,
                and election context.
              </p>
            </div>

            <div className="secondary-card">
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
        <div className="site-container py-16">
          <div className="mb-8">
            <h2 className="section-title">Explore more</h2>
            <p className="section-subtitle">
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

      <footer className="subtle-divider">
        <div className="site-container flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between">
          <p className="footer-muted">© 2026 Indy Voter Compass</p>

          <div className="flex gap-4 footer-muted">
            <a href="/about" className="transition hover:text-black">
              About
            </a>
            <a href="/privacy" className="transition hover:text-black">
              Privacy
            </a>
            <a href="/sources" className="transition hover:text-black">
              Sources
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}