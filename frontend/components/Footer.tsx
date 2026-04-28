export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-neutral-950">
            Indy Voter Compass
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Simple voter education for Indiana citizens.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <a href="/about" className="transition hover:text-neutral-950">
            About
          </a>
          <a href="/voter-info" className="transition hover:text-neutral-950">
            Voter Info
          </a>
          <a href="/election-data" className="transition hover:text-neutral-950">
            Election Data
          </a>
          <a href="/contact" className="transition hover:text-neutral-950">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}