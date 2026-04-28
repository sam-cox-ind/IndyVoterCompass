export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="text-lg font-bold tracking-tight text-neutral-950">
          Indy Voter Compass
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          <a href="/election-data" className="transition hover:text-neutral-950">
            Election Data
          </a>
          <a href="/trends" className="transition hover:text-neutral-950">
            Voting Trends
          </a>
          <a href="/offices" className="transition hover:text-neutral-950">
            Offices
          </a>
          <a href="/about" className="transition hover:text-neutral-950">
            About
          </a>
        </nav>

        <a
          href="#address-lookup"
          className="hidden rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 md:inline-flex"
        >
          Find My Ballot
        </a>
      </div>
    </header>
  );
}