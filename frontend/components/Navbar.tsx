export default function Navbar() {
  return (
    <header className="ivc-navbar">
      <div className="ivc-container flex items-center justify-between py-4">
        <a href="/" className="ivc-logo text-lg">
          Indy <span className="ivc-logo-accent">Voter Compass</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="/election-data" className="ivc-nav-link">
            Election Data
          </a>
          <a href="/trends" className="ivc-nav-link">
            Voting Trends
          </a>
          <a href="/offices" className="ivc-nav-link">
            Offices
          </a>
          <a href="/about" className="ivc-nav-link">
            About
          </a>
        </nav>

        <a
          href="#address-lookup"
          className="ivc-button-yellow hidden px-4 py-2 text-sm md:inline-flex"
        >
          Find My Ballot
        </a>
      </div>
    </header>
  );
}